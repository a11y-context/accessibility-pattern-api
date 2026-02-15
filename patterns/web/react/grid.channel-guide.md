---
id: grid.channel-guide
stack: web/react
status: beta
tags: [grid, channel-guide, epg, schedule, roving-tabindex, keyboard]
aliases: [epg, electronic-program-guide, tv-guide, live-guide, schedule-grid]
summary: Interactive channel guide grid with one Tab stop and arrow-key navigation across channels and time slots.
---

# Channel Guide Grid

## Use When
- Use when presenting a 2D schedule where rows are channels and columns are time slots (current + future).
- Use when keyboard navigation must be efficient: one Tab into the guide, arrow keys within it, one Tab out.
- Use when activation behavior is column-based (e.g., “Now” tunes, “Future” opens details).

## Do Not Use When
- Do not use for general data tables where standard Tab navigation is expected (use a table/list).
- Do not use for spreadsheet-like editing, multi-cell selection, resizing, sorting, or reordering (use a data grid/spreadsheet pattern).
- Do not use if you cannot implement roving focus and arrow-key navigation reliably.

## Must Haves
- Use `role="grid"` with an accessible name (e.g., `aria-label="Channel guide"`).
- Use `role="row"` for each row, including the header row.
- Use `role="columnheader"` for the time header cells (typically static).
- Use `role="rowheader"` for the channel name/logo column (may be interactive).
- Use `role="gridcell"` for program listing cells (interactive).
- Keyboard model:
  - The grid must be a single Tab stop.
  - Only one cell is tabbable at a time (roving `tabIndex`: active cell `0`, all others `-1`).
  - Arrow keys move focus within the grid (Left/Right/Up/Down).
  - Tab/Shift+Tab exits the grid to the next/previous focusable element outside.
- Persist and restore “last focused cell”:
  - When focus leaves and re-enters the grid, focus lands on the last focused cell.
- Support a “currently playing” channel:
  - Exactly one channel row is marked as selected (separate from focus).
  - Selecting/tuning changes the selected row, but focus stays with the user’s navigation.
- Activation model:
  - Channel column (row header) opens “channel details”.
  - “Now” column activates tune (no-op if already selected).
  - Future columns open “program details” (demo can use a modal).

## Don’ts
- Don’t make every cell a Tab stop.
- Don’t require Tab to move between cells.
- Don’t mix multiple interactive controls inside a cell in this basic pattern.
- Don’t conflate “selected channel” with “focused cell”.

## Golden Pattern
```js
"use client";

import * as React from "react";

export function ChannelGuideGrid({
  ariaLabel = "Channel guide",
  columns = DEFAULT_COLUMNS,
  channels = DEMO_CHANNELS,
}) {
  // Selected row = currently playing channel (visual/semantic state only)
  const [selectedRow, setSelectedRow] = React.useState(1);

  // Roving focus position (row, col)
  // col 0 = channel buttons column, col 1 = Now, col 2.. = future
  const [pos, setPos] = React.useState({ row: selectedRow, col: 1 });

  // Last-focused cell for Tab out / Tab back in restoration.
  const lastPosRef = React.useRef({ row: selectedRow, col: 1 });

  // Button refs keyed by "row-col" so arrow keys can programmatically move focus.
  const btnRefs = React.useRef({}); // { "1-2": HTMLButtonElement }

  const totalCols = columns.length + 1; // +1 for channel column
  const rowCount = channels.length + 1; // +1 header row

  function keyOf(row, col) {
    return `${row}-${col}`;
  }

  function setBtnRef(row, col, el) {
    if (!el) return;
    btnRefs.current[keyOf(row, col)] = el;
  }

  function focusButton(row, col) {
    const el = btnRefs.current[keyOf(row, col)];
    if (el && typeof el.focus === "function") el.focus();
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function commitPos(next) {
    lastPosRef.current = next;
    setPos(next);
    requestAnimationFrame(() => focusButton(next.row, next.col));
  }

  function move(deltaRow, deltaCol) {
    const nextRow = clamp(pos.row + deltaRow, 0, channels.length - 1);
    const nextCol = clamp(pos.col + deltaCol, 0, columns.length); // 0..columns.length
    commitPos({ row: nextRow, col: nextCol });
  }

  // When Tab enters the grid, restore focus to the last-focused cell’s button.
  function onGridFocusCapture(e) {
    const from = e.relatedTarget;
    if (from && e.currentTarget.contains(from)) return;

    const last = lastPosRef.current;
    setPos(last);
    requestAnimationFrame(() => focusButton(last.row, last.col));
  }

  // Keep roving position in sync with real focus.
  function onButtonFocus(row, col) {
    const next = { row, col };
    lastPosRef.current = next;
    setPos(next);
  }

  // Mouse: update roving state BEFORE click/focus so arrow navigation works immediately after click.
  function onButtonPointerDown(row, col) {
    const next = { row, col };
    lastPosRef.current = next;
    setPos(next);
  }

  function onButtonKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        move(0, -1);
        break;
      case "ArrowRight":
        e.preventDefault();
        move(0, 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        move(-1, 0);
        break;
      case "ArrowDown":
        e.preventDefault();
        move(1, 0);
        break;
      case "Home":
        e.preventDefault();
        commitPos({ row: pos.row, col: 0 });
        break;
      case "End":
        e.preventDefault();
        commitPos({ row: pos.row, col: columns.length });
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        // ACTION NOTE:
        // - If col === 1 ("Now"): tune the live player to this channel and update selectedRow.
        // - If col === 0 or col > 1: open details (e.g., modal) for channel/program.
        // For the MCP golden pattern we leave this as a stub.
        if (pos.col === 1 && pos.row !== selectedRow) setSelectedRow(pos.row);
        break;
      default:
        break;
    }
  }

  return (
    <div
      role="grid"
      aria-label={ariaLabel}
      aria-rowcount={rowCount}
      aria-colcount={totalCols}
      onFocusCapture={onGridFocusCapture}
      style={{
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        maxWidth: 1100,
      }}
    >
      {/* Header row (static, not focusable) */}
      <div role="row" style={rowStyle(true)}>
        <div role="columnheader" style={headerCellStyle}>
          Channel
        </div>
        {columns.map((c) => (
          <div key={c.key} role="columnheader" style={headerCellStyle}>
            {c.label}
          </div>
        ))}
      </div>

      {/* Data rows */}
      {channels.map((ch, rowIndex) => {
        const isSelected = rowIndex === selectedRow;

        return (
          <div
            key={ch.id}
            role="row"
            aria-selected={isSelected ? "true" : undefined}
            style={rowStyle(false, isSelected)}
          >
            {/* Rowheader cell */}
            <div role="rowheader" style={cellContainerStyle(isSelected)}>
              <button
                type="button"
                tabIndex={pos.row === rowIndex && pos.col === 0 ? 0 : -1}
                ref={(el) => setBtnRef(rowIndex, 0, el)}
                onPointerDown={() => onButtonPointerDown(rowIndex, 0)}
                onFocus={() => onButtonFocus(rowIndex, 0)}
                onKeyDown={onButtonKeyDown}
                onClick={() => {
                  // ACTION NOTE: open channel details
                }}
                aria-label={`${ch.name}${isSelected ? ", currently playing" : ""}`}
                style={cellButtonStyle}
              >
                <span style={{ fontWeight: 650 }}>{ch.name}</span>
              </button>
            </div>

            {/* Program cells */}
            {ch.programs.map((p, programIndex) => {
              const colIndex = programIndex + 1; // 1..columns.length
              const isNow = colIndex === 1;

              // NOTE: If VoiceOver double-announces, prefer aria-labelledby + aria-describedby
              // OR set inner text aria-hidden and rely on aria-label.
              const label = isNow
                ? `Now: ${p.title}. ${p.meta}. ${p.timeText}`
                : `${columns[colIndex - 1].label}: ${p.title}. ${p.meta}. ${p.timeText}`;

              return (
                <div
                  key={`${ch.id}-${p.id}`}
                  role="gridcell"
                  style={cellContainerStyle(isSelected, isNow)}
                >
                  <button
                    type="button"
                    tabIndex={pos.row === rowIndex && pos.col === colIndex ? 0 : -1}
                    ref={(el) => setBtnRef(rowIndex, colIndex, el)}
                    onPointerDown={() => onButtonPointerDown(rowIndex, colIndex)}
                    onFocus={() => onButtonFocus(rowIndex, colIndex)}
                    onKeyDown={onButtonKeyDown}
                    onClick={() => {
                      // ACTION NOTE:
                      // - If colIndex === 1 ("Now"): tune to channel (and update selectedRow)
                      // - Else: open program details
                      if (colIndex === 1 && rowIndex !== selectedRow) setSelectedRow(rowIndex);
                    }}
                    aria-label={label}
                    style={cellButtonStyle}
                  >
                    <div style={{ fontWeight: 650, lineHeight: 1.2 }}>{p.title}</div>
                    <div style={{ opacity: 0.8, fontSize: 13 }}>{p.meta}</div>
                    <div style={{ opacity: 0.8, fontSize: 13 }}>{p.timeText}</div>
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* DOCUMENTATION NOTES (intentionally not implemented in MCP code):
          - A live player preview region should announce currently playing content changes (aria-live="polite").
          - Channel tuning should be a no-op when the selectedRow channel is already playing.
          - “Details” actions (channel column + future programs) should open a modal/dialog (use your dialog.modal pattern).
          - On modal close: restore focus to the invoking grid button (store opener ref).
          - Consider additional keys: PageUp/PageDown (jump time columns), Ctrl+Home/End (grid edges), etc.
          - For SR verbosity: aria-label may be double-announced in some AT/browser combos; prefer aria-labelledby/aria-describedby.
      */}
    </div>
  );
}

/* Styles */
function rowStyle(isHeader, isSelectedRow) {
  return {
    display: "grid",
    gridTemplateColumns: "220px repeat(5, minmax(0, 1fr))",
    background: isHeader ? "rgba(0,0,0,0.06)" : "#fff",
    borderTop: isHeader ? "none" : "1px solid rgba(0,0,0,0.1)",
    outline: isSelectedRow ? "2px solid rgba(0,0,0,0.35)" : "none",
    outlineOffset: isSelectedRow ? -2 : 0,
  };
}

const headerCellStyle = {
  padding: 10,
  fontWeight: 700,
  fontSize: 13,
  borderRight: "1px solid rgba(0,0,0,0.1)",
};

function cellContainerStyle(isSelectedRow, isNow) {
  return {
    borderRight: "1px solid rgba(0,0,0,0.1)",
    background: isNow
      ? "rgba(0,0,0,0.06)"
      : isSelectedRow
        ? "rgba(0,0,0,0.03)"
        : "transparent",
  };
}

const cellButtonStyle = {
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  display: "grid",
  gap: 2,
  padding: 10,
  textAlign: "left",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  borderRadius: 0,
  outlineOffset: 2,
};

/* Demo data */
const DEFAULT_COLUMNS = [
  { key: "now", label: "Now" },
  { key: "t1", label: "4:00 PM" },
  { key: "t2", label: "4:30 PM" },
  { key: "t3", label: "5:00 PM" },
  { key: "t4", label: "5:30 PM" },
];

const DEMO_CHANNELS = [
  {
    id: "c1",
    name: "News 24",
    programs: [
      { id: "p11", title: "Live Headlines", meta: "TV-PG · News", timeText: "22m remaining" },
      { id: "p12", title: "World Report", meta: "TV-PG · News", timeText: "4:00–4:30 PM" },
      { id: "p13", title: "City Desk", meta: "TV-PG · News", timeText: "4:30–5:00 PM" },
      { id: "p14", title: "Markets", meta: "TV-G · Business", timeText: "5:00–5:30 PM" },
      { id: "p15", title: "Evening Brief", meta: "TV-PG · News", timeText: "5:30–6:00 PM" },
    ],
  },
  {
    id: "c2",
    name: "Action Max",
    programs: [
      { id: "p21", title: "Steel Harbor", meta: "PG-13 · Action", timeText: "48m remaining" },
      { id: "p22", title: "Night Pursuit", meta: "R · Action", timeText: "4:00–4:30 PM" },
      { id: "p23", title: "Rapid Response", meta: "TV-14 · Series", timeText: "4:30–5:00 PM" },
      { id: "p24", title: "Streetline", meta: "TV-14 · Series", timeText: "5:00–5:30 PM" },
      { id: "p25", title: "Afterburn", meta: "TV-14 · Series", timeText: "5:30–6:00 PM" },
    ],
  },
  {
    id: "c3",
    name: "Comedy Loop",
    programs: [
      { id: "p31", title: "Lunch Break Laughs", meta: "TV-PG · Comedy", timeText: "10m remaining" },
      { id: "p32", title: "Stand-Up Hour", meta: "TV-MA · Comedy", timeText: "4:00–4:30 PM" },
      { id: "p33", title: "Sitcom Shuffle", meta: "TV-PG · Comedy", timeText: "4:30–5:00 PM" },
      { id: "p34", title: "Sketch Night", meta: "TV-14 · Comedy", timeText: "5:00–5:30 PM" },
      { id: "p35", title: "Late Laughs", meta: "TV-14 · Comedy", timeText: "5:30–6:00 PM" },
    ],
  },
  {
    id: "c4",
    name: "Nature HD",
    programs: [
      { id: "p41", title: "Wild Rivers", meta: "TV-G · Documentary", timeText: "35m remaining" },
      { id: "p42", title: "Deep Forest", meta: "TV-G · Documentary", timeText: "4:00–4:30 PM" },
      { id: "p43", title: "Ocean Life", meta: "TV-G · Documentary", timeText: "4:30–5:00 PM" },
      { id: "p44", title: "Sky Trails", meta: "TV-G · Documentary", timeText: "5:00–5:30 PM" },
      { id: "p45", title: "Night Creatures", meta: "TV-PG · Documentary", timeText: "5:30–6:00 PM" },
    ],
  },
  {
    id: "c5",
    name: "Kids Zone",
    programs: [
      { id: "p51", title: "Puzzle Pals", meta: "TV-Y · Kids", timeText: "7m remaining" },
      { id: "p52", title: "Craft Corner", meta: "TV-Y · Kids", timeText: "4:00–4:30 PM" },
      { id: "p53", title: "Story Time", meta: "TV-Y · Kids", timeText: "4:30–5:00 PM" },
      { id: "p54", title: "Space Sprouts", meta: "TV-Y7 · Kids", timeText: "5:00–5:30 PM" },
      { id: "p55", title: "Animal Amigos", meta: "TV-Y · Kids", timeText: "5:30–6:00 PM" },
    ],
  },
];
```

## Acceptance Checks
- Tab lands on exactly one cell in the grid (the last-focused cell).
- Arrow keys move between cells without requiring Tab.
- Tab exits the grid to the next focusable element outside.
- The channel column is a row header and is interactive.
- The time row is column headers and is non-interactive.
- Exactly one row is marked as selected (currently playing channel).
- Activating a “Now” cell tunes the channel; activating it on the selected row is a no-op.
- Activating a future cell opens details; activating a channel cell opens channel details.
