"use strict";
(globalThis["webpackChunkaccessibility_pattern_api_docs"] = globalThis["webpackChunkaccessibility_pattern_api_docs"] || []).push([[1813],{

/***/ 2259
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_patterns_web_react_components_grid_channel_guide_md_96c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/web-react/site-patterns-web-react-components-grid-channel-guide-md-96c.json
const site_patterns_web_react_components_grid_channel_guide_md_96c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/grid.channel-guide","title":"Channel Guide Grid","description":"Use When","source":"@site/../patterns/web/react/components/grid.channel-guide.md","sourceDirName":"components","slug":"/components/grid.channel-guide","permalink":"/web/react/components/grid.channel-guide","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"grid","permalink":"/web/react/tags/grid"},{"inline":true,"label":"channel-guide","permalink":"/web/react/tags/channel-guide"},{"inline":true,"label":"epg","permalink":"/web/react/tags/epg"},{"inline":true,"label":"schedule","permalink":"/web/react/tags/schedule"},{"inline":true,"label":"roving-tabindex","permalink":"/web/react/tags/roving-tabindex"},{"inline":true,"label":"keyboard","permalink":"/web/react/tags/keyboard"}],"version":"current","lastUpdatedAt":1771782168000,"frontMatter":{"id":"grid.channel-guide","title":"Channel Guide Grid","stack":"web/react","status":"beta","tags":["grid","channel-guide","epg","schedule","roving-tabindex","keyboard"],"aliases":["epg","electronic program guide","tv guide","live guide","schedule grid"],"summary":"Interactive channel guide grid with one Tab stop and arrow-key navigation across channels and time slots."},"sidebar":"webReactSidebar","previous":{"title":"Carousel with Thumbnail Navigation","permalink":"/web/react/components/carousel.thumbnails"},"next":{"title":"Collection Row","permalink":"/web/react/components/collection-row.basic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ../patterns/web/react/components/grid.channel-guide.md


const frontMatter = {
	id: 'grid.channel-guide',
	title: 'Channel Guide Grid',
	stack: 'web/react',
	status: 'beta',
	tags: [
		'grid',
		'channel-guide',
		'epg',
		'schedule',
		'roving-tabindex',
		'keyboard'
	],
	aliases: [
		'epg',
		'electronic program guide',
		'tv guide',
		'live guide',
		'schedule grid'
	],
	summary: 'Interactive channel guide grid with one Tab stop and arrow-key navigation across channels and time slots.'
};
const contentTitle = 'Channel Guide Grid';

const assets = {

};



const toc = [{
  "value": "Use When",
  "id": "use-when",
  "level": 2
}, {
  "value": "Do Not Use When",
  "id": "do-not-use-when",
  "level": 2
}, {
  "value": "Must Haves",
  "id": "must-haves",
  "level": 2
}, {
  "value": "Customizable",
  "id": "customizable",
  "level": 2
}, {
  "value": "Don’ts",
  "id": "donts",
  "level": 2
}, {
  "value": "Golden Pattern",
  "id": "golden-pattern",
  "level": 2
}, {
  "value": "Acceptance Checks",
  "id": "acceptance-checks",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "channel-guide-grid",
        children: "Channel Guide Grid"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-when",
      children: "Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when content is arranged in a 2D matrix of channels (rows) and time slots (columns)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when program items span time horizontally and are positioned according to schedule duration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use when users navigate spatially across a time-based schedule using arrow keys."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "do-not-use-when",
      children: "Do Not Use When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when presenting static tabular data with row/column headers (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grid.data"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when items are displayed as a simple vertical or horizontal list without time-based positioning (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use when supporting spreadsheet-style editing, multi-cell selection, sorting, or resizing (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grid.interactive"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "must-haves",
      children: "Must Haves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"grid\""
        }), " with an accessible name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label=\"Channel guide\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"row\""
        }), " for each row, including the header row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"columnheader\""
        }), " for the time header cells (typically static)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"rowheader\""
        }), " for the channel name/logo column (may be interactive)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "role=\"gridcell\""
        }), " for program listing cells (interactive)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Grid structural roles (", (0,jsx_runtime.jsx)(_components.code, {
          children: "gridcell"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rowheader"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "columnheader"
        }), ") must be applied to container elements.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Interactive controls (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<button>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<a>"
            }), ") must be nested inside those containers."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The grid must expose its dimensions:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-rowcount"
            }), " to the total number of rows in the grid."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-colcount"
            }), " to the total number of columns in the grid (including the channel column)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard model:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The grid must be a single Tab stop."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Only one cell is tabbable at a time (roving ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tabIndex"
            }), ": active cell ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), ", all others ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-1"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Arrow keys move focus within the grid (Left/Right/Up/Down)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab/Shift+Tab exits the grid to the next/previous focusable element outside."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pointer + keyboard continuity:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clicking a cell updates the roving “current cell” so Arrow-key navigation continues from that cell."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Persist and restore “last focused cell”:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When focus leaves and re-enters the grid, focus lands on the last focused cell."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Activation model:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Channel column (row header) opens “channel details”."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“Now” column activates tune (no-op if already selected)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Future columns open “program details” (demo can use a modal)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) on each focusable element, such as grid cells and grid headers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customizable",
      children: "Customizable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support a “currently playing” channel:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exactly one channel row is marked as selected (separate from focus)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Selecting/tuning changes the selected row, but focus stays with the user’s navigation."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "donts",
      children: "Don’ts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t make every cell a Tab stop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t require Tab to move between cells."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t mix multiple interactive controls inside a cell in this basic pattern."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don’t conflate “selected channel” with “focused cell”."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<button role=\"gridcell\">"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<button role=\"columnheader\">"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "golden-pattern",
      children: "Golden Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "\"use client\";\n\nimport * as React from \"react\";\n\nexport function ChannelGuideGrid({\n  ariaLabel = \"Channel guide\",\n  columns = DEFAULT_COLUMNS,\n  channels = DEMO_CHANNELS,\n}) {\n  // Selected row = currently playing channel (visual/semantic state only)\n  const [selectedRow, setSelectedRow] = React.useState(1);\n\n  // Roving focus position (row, col)\n  // col 0 = channel buttons column, col 1 = Now, col 2.. = future\n  const [pos, setPos] = React.useState({ row: selectedRow, col: 1 });\n\n  // Last-focused cell for Tab out / Tab back in restoration.\n  const lastPosRef = React.useRef({ row: selectedRow, col: 1 });\n\n  // Button refs keyed by \"row-col\" so arrow keys can programmatically move focus.\n  const btnRefs = React.useRef({}); // { \"1-2\": HTMLButtonElement }\n\n  const totalCols = columns.length + 1; // +1 for channel column\n  const rowCount = channels.length + 1; // +1 header row\n\n  function keyOf(row, col) {\n    return `${row}-${col}`;\n  }\n\n  function setBtnRef(row, col, el) {\n    if (!el) return;\n    btnRefs.current[keyOf(row, col)] = el;\n  }\n\n  function focusButton(row, col) {\n    const el = btnRefs.current[keyOf(row, col)];\n    if (el && typeof el.focus === \"function\") el.focus();\n  }\n\n  function clamp(n, min, max) {\n    return Math.max(min, Math.min(max, n));\n  }\n\n  function commitPos(next) {\n    lastPosRef.current = next;\n    setPos(next);\n    requestAnimationFrame(() => focusButton(next.row, next.col));\n  }\n\n  function move(deltaRow, deltaCol) {\n    const nextRow = clamp(pos.row + deltaRow, 0, channels.length - 1);\n    const nextCol = clamp(pos.col + deltaCol, 0, columns.length); // 0..columns.length\n    commitPos({ row: nextRow, col: nextCol });\n  }\n\n  // When Tab enters the grid, restore focus to the last-focused cell’s button.\n  function onGridFocusCapture(e) {\n    const from = e.relatedTarget;\n    if (from && e.currentTarget.contains(from)) return;\n\n    const last = lastPosRef.current;\n    setPos(last);\n    requestAnimationFrame(() => focusButton(last.row, last.col));\n  }\n\n  // Keep roving position in sync with real focus.\n  function onButtonFocus(row, col) {\n    const next = { row, col };\n    lastPosRef.current = next;\n    setPos(next);\n  }\n\n  // Mouse: update roving state BEFORE click/focus so arrow navigation works immediately after click.\n  function onButtonPointerDown(row, col) {\n    const next = { row, col };\n    lastPosRef.current = next;\n    setPos(next);\n  }\n\n  function onButtonKeyDown(e) {\n    switch (e.key) {\n      case \"ArrowLeft\":\n        e.preventDefault();\n        move(0, -1);\n        break;\n      case \"ArrowRight\":\n        e.preventDefault();\n        move(0, 1);\n        break;\n      case \"ArrowUp\":\n        e.preventDefault();\n        move(-1, 0);\n        break;\n      case \"ArrowDown\":\n        e.preventDefault();\n        move(1, 0);\n        break;\n      case \"Home\":\n        e.preventDefault();\n        commitPos({ row: pos.row, col: 0 });\n        break;\n      case \"End\":\n        e.preventDefault();\n        commitPos({ row: pos.row, col: columns.length });\n        break;\n      case \"Enter\":\n      case \" \":\n        e.preventDefault();\n        // ACTION NOTE:\n        // - If col === 1 (\"Now\"): tune the live player to this channel and update selectedRow.\n        // - If col === 0 or col > 1: open details (e.g., modal) for channel/program.\n        // For the MCP golden pattern we leave this as a stub.\n        if (pos.col === 1 && pos.row !== selectedRow) setSelectedRow(pos.row);\n        break;\n      default:\n        break;\n    }\n  }\n\n  return (\n    <div\n      role=\"grid\"\n      aria-label={ariaLabel}\n      aria-rowcount={rowCount}\n      aria-colcount={totalCols}\n      onFocusCapture={onGridFocusCapture}\n      style={{\n        border: \"1px solid rgba(0,0,0,0.2)\",\n        borderRadius: 12,\n        overflow: \"hidden\",\n        background: \"#fff\",\n        maxWidth: 1100,\n      }}\n    >\n      {/* Header row (static, not focusable) */}\n      <div role=\"row\" style={rowStyle(true)}>\n        <div role=\"columnheader\" style={headerCellStyle}>\n          Channel\n        </div>\n        {columns.map((c) => (\n          <div key={c.key} role=\"columnheader\" style={headerCellStyle}>\n            {c.label}\n          </div>\n        ))}\n      </div>\n\n      {/* Data rows */}\n      {channels.map((ch, rowIndex) => {\n        const isSelected = rowIndex === selectedRow;\n\n        return (\n          <div\n            key={ch.id}\n            role=\"row\"\n            aria-selected={isSelected ? \"true\" : undefined}\n            style={rowStyle(false, isSelected)}\n          >\n            {/* Rowheader cell */}\n            <div role=\"rowheader\" style={cellContainerStyle(isSelected)}>\n              <button\n                type=\"button\"\n                tabIndex={pos.row === rowIndex && pos.col === 0 ? 0 : -1}\n                ref={(el) => setBtnRef(rowIndex, 0, el)}\n                onPointerDown={() => onButtonPointerDown(rowIndex, 0)}\n                onFocus={() => onButtonFocus(rowIndex, 0)}\n                onKeyDown={onButtonKeyDown}\n                onClick={() => {\n                  // ACTION NOTE: open channel details\n                }}\n                aria-label={`${ch.name}${isSelected ? \", currently playing\" : \"\"}`}\n                style={cellButtonStyle}\n              >\n                <span style={{ fontWeight: 650 }}>{ch.name}</span>\n              </button>\n            </div>\n\n            {/* Program cells */}\n            {ch.programs.map((p, programIndex) => {\n              const colIndex = programIndex + 1; // 1..columns.length\n              const isNow = colIndex === 1;\n\n              // NOTE: If VoiceOver double-announces, prefer aria-labelledby + aria-describedby\n              // OR set inner text aria-hidden and rely on aria-label.\n              const label = isNow\n                ? `Now: ${p.title}. ${p.meta}. ${p.timeText}`\n                : `${columns[colIndex - 1].label}: ${p.title}. ${p.meta}. ${p.timeText}`;\n\n              return (\n                <div\n                  key={`${ch.id}-${p.id}`}\n                  role=\"gridcell\"\n                  style={cellContainerStyle(isSelected, isNow)}\n                >\n                  <button\n                    type=\"button\"\n                    tabIndex={pos.row === rowIndex && pos.col === colIndex ? 0 : -1}\n                    ref={(el) => setBtnRef(rowIndex, colIndex, el)}\n                    onPointerDown={() => onButtonPointerDown(rowIndex, colIndex)}\n                    onFocus={() => onButtonFocus(rowIndex, colIndex)}\n                    onKeyDown={onButtonKeyDown}\n                    onClick={() => {\n                      // ACTION NOTE:\n                      // - If colIndex === 1 (\"Now\"): tune to channel (and update selectedRow)\n                      // - Else: open program details\n                      if (colIndex === 1 && rowIndex !== selectedRow) setSelectedRow(rowIndex);\n                    }}\n                    aria-label={label}\n                    style={cellButtonStyle}\n                  >\n                    <div style={{ fontWeight: 650, lineHeight: 1.2 }}>{p.title}</div>\n                    <div style={{ opacity: 0.8, fontSize: 13 }}>{p.meta}</div>\n                    <div style={{ opacity: 0.8, fontSize: 13 }}>{p.timeText}</div>\n                  </button>\n                </div>\n              );\n            })}\n          </div>\n        );\n      })}\n\n      {/* DOCUMENTATION NOTES (intentionally not implemented in MCP code):\n          - A live player preview region should announce currently playing content changes (aria-live=\"polite\").\n          - Channel tuning should be a no-op when the selectedRow channel is already playing.\n          - “Details” actions (channel column + future programs) should open a modal/dialog (use your dialog.modal pattern).\n          - On modal close: restore focus to the invoking grid button (store opener ref).\n          - Consider additional keys: PageUp/PageDown (jump time columns), Ctrl+Home/End (grid edges), etc.\n          - For SR verbosity: aria-label may be double-announced in some AT/browser combos; prefer aria-labelledby/aria-describedby.\n      */}\n    </div>\n  );\n}\n\n/* Styles */\nfunction rowStyle(isHeader, isSelectedRow) {\n  return {\n    display: \"grid\",\n    gridTemplateColumns: \"220px repeat(5, minmax(0, 1fr))\",\n    background: isHeader ? \"rgba(0,0,0,0.06)\" : \"#fff\",\n    borderTop: isHeader ? \"none\" : \"1px solid rgba(0,0,0,0.1)\",\n    outline: isSelectedRow ? \"2px solid rgba(0,0,0,0.35)\" : \"none\",\n    outlineOffset: isSelectedRow ? -2 : 0,\n  };\n}\n\nconst headerCellStyle = {\n  padding: 10,\n  fontWeight: 700,\n  fontSize: 13,\n  borderRight: \"1px solid rgba(0,0,0,0.1)\",\n};\n\nfunction cellContainerStyle(isSelectedRow, isNow) {\n  return {\n    borderRight: \"1px solid rgba(0,0,0,0.1)\",\n    background: isNow\n      ? \"rgba(0,0,0,0.06)\"\n      : isSelectedRow\n        ? \"rgba(0,0,0,0.03)\"\n        : \"transparent\",\n  };\n}\n\nconst cellButtonStyle = {\n  width: \"100%\",\n  height: \"100%\",\n  boxSizing: \"border-box\",\n  display: \"grid\",\n  gap: 2,\n  padding: 10,\n  textAlign: \"left\",\n  border: \"none\",\n  background: \"transparent\",\n  cursor: \"pointer\",\n  borderRadius: 0,\n  outlineOffset: 2,\n};\n\n/* Demo data */\nconst DEFAULT_COLUMNS = [\n  { key: \"now\", label: \"Now\" },\n  { key: \"t1\", label: \"4:00 PM\" },\n  { key: \"t2\", label: \"4:30 PM\" },\n  { key: \"t3\", label: \"5:00 PM\" },\n  { key: \"t4\", label: \"5:30 PM\" },\n];\n\nconst DEMO_CHANNELS = [\n  {\n    id: \"c1\",\n    name: \"News 24\",\n    programs: [\n      { id: \"p11\", title: \"Live Headlines\", meta: \"TV-PG · News\", timeText: \"22m remaining\" },\n      { id: \"p12\", title: \"World Report\", meta: \"TV-PG · News\", timeText: \"4:00–4:30 PM\" },\n      { id: \"p13\", title: \"City Desk\", meta: \"TV-PG · News\", timeText: \"4:30–5:00 PM\" },\n      { id: \"p14\", title: \"Markets\", meta: \"TV-G · Business\", timeText: \"5:00–5:30 PM\" },\n      { id: \"p15\", title: \"Evening Brief\", meta: \"TV-PG · News\", timeText: \"5:30–6:00 PM\" },\n    ],\n  },\n  {\n    id: \"c2\",\n    name: \"Action Max\",\n    programs: [\n      { id: \"p21\", title: \"Steel Harbor\", meta: \"PG-13 · Action\", timeText: \"48m remaining\" },\n      { id: \"p22\", title: \"Night Pursuit\", meta: \"R · Action\", timeText: \"4:00–4:30 PM\" },\n      { id: \"p23\", title: \"Rapid Response\", meta: \"TV-14 · Series\", timeText: \"4:30–5:00 PM\" },\n      { id: \"p24\", title: \"Streetline\", meta: \"TV-14 · Series\", timeText: \"5:00–5:30 PM\" },\n      { id: \"p25\", title: \"Afterburn\", meta: \"TV-14 · Series\", timeText: \"5:30–6:00 PM\" },\n    ],\n  },\n  {\n    id: \"c3\",\n    name: \"Comedy Loop\",\n    programs: [\n      { id: \"p31\", title: \"Lunch Break Laughs\", meta: \"TV-PG · Comedy\", timeText: \"10m remaining\" },\n      { id: \"p32\", title: \"Stand-Up Hour\", meta: \"TV-MA · Comedy\", timeText: \"4:00–4:30 PM\" },\n      { id: \"p33\", title: \"Sitcom Shuffle\", meta: \"TV-PG · Comedy\", timeText: \"4:30–5:00 PM\" },\n      { id: \"p34\", title: \"Sketch Night\", meta: \"TV-14 · Comedy\", timeText: \"5:00–5:30 PM\" },\n      { id: \"p35\", title: \"Late Laughs\", meta: \"TV-14 · Comedy\", timeText: \"5:30–6:00 PM\" },\n    ],\n  },\n  {\n    id: \"c4\",\n    name: \"Nature HD\",\n    programs: [\n      { id: \"p41\", title: \"Wild Rivers\", meta: \"TV-G · Documentary\", timeText: \"35m remaining\" },\n      { id: \"p42\", title: \"Deep Forest\", meta: \"TV-G · Documentary\", timeText: \"4:00–4:30 PM\" },\n      { id: \"p43\", title: \"Ocean Life\", meta: \"TV-G · Documentary\", timeText: \"4:30–5:00 PM\" },\n      { id: \"p44\", title: \"Sky Trails\", meta: \"TV-G · Documentary\", timeText: \"5:00–5:30 PM\" },\n      { id: \"p45\", title: \"Night Creatures\", meta: \"TV-PG · Documentary\", timeText: \"5:30–6:00 PM\" },\n    ],\n  },\n  {\n    id: \"c5\",\n    name: \"Kids Zone\",\n    programs: [\n      { id: \"p51\", title: \"Puzzle Pals\", meta: \"TV-Y · Kids\", timeText: \"7m remaining\" },\n      { id: \"p52\", title: \"Craft Corner\", meta: \"TV-Y · Kids\", timeText: \"4:00–4:30 PM\" },\n      { id: \"p53\", title: \"Story Time\", meta: \"TV-Y · Kids\", timeText: \"4:30–5:00 PM\" },\n      { id: \"p54\", title: \"Space Sprouts\", meta: \"TV-Y7 · Kids\", timeText: \"5:00–5:30 PM\" },\n      { id: \"p55\", title: \"Animal Amigos\", meta: \"TV-Y · Kids\", timeText: \"5:30–6:00 PM\" },\n    ],\n  },\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-checks",
      children: "Acceptance Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entry/exit:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab enters the grid to the last-focused cell."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tab/Shift+Tab exits the grid to the next/previous focusable element outside."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keyboard navigation:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Arrow keys move focus between cells (Left/Right/Up/Down)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Home moves to the channel column for the current row."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "End moves to the last time column for the current row."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Only the active cell is tabbable (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tabIndex=0"
            }), "); all others are not (", (0,jsx_runtime.jsx)(_components.code, {
              children: "tabIndex=-1"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Semantics:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Grid container uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"grid\""
            }), " and has an accessible name."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Time headers use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"columnheader\""
            }), " and are not focusable."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Channel cells are row headers and are interactive."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Program cells use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "role=\"gridcell\""
            }), " and are interactive."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exactly one channel row is marked as selected (currently playing), distinct from focus."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Selecting/tuning updates the selected row without forcibly moving focus."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pointer + keyboard continuity:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clicking a cell updates the roving “current cell” so arrow-key navigation continues from that cell."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);