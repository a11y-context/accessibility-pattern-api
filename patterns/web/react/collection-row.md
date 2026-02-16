---
id: collection-row.basic
stack: web/react
status: beta
tags: [collection-row, shelf, rail, horizontal-list, ecommerce, navigation]
aliases: [content-row, content-rail, rail, strip, shelf, multi-item-carousel, product-row]
summary: Horizontal product shelf with a heading, list semantics, and Prev/Next paging that moves focus to newly revealed items.
---

# Collection Row

## Use When
- Use when presenting a category of related items in a single horizontal strip. The row itself has a category heading (e.g., “Customers Also Viewed”, “Action Movies”, “Related Products”).
- Use when each item in the row includes a visual element (image, poster, thumbnail, or other media) along with brief text metadata.

## Do Not Use When
- Do not use when only one item should be visible at a time (use `carousel`).
- Do not use when items require multiple interactive controls per card (use a different “card grid” pattern).

## Must Haves
- Use a visible heading, typically an `<h2>`, above the row.
- Use list semantics for the row: `ul` with `li` items.
- Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) on each item and button.
- Each item must comprise a single focus stop: in other words, consist of a single link `<a>` that contains:
  - A visual element (image, poster, thumbnail, or media preview).
  - A visible title that identifies the item.
  - Optional visible metadata (e.g., price, episode number, rating).
- Each item link must have an accessible name composed of:
  - title + metadata (optional) via `aria-labelledby`
- Each item link should expose position context (e.g., “3 of 18”) as supplemental information:
  - Provide an offscreen “X of Y” element.
  - Reference it via `aria-describedby`.
  - The position must reflect the item’s index within the full set, not just the currently visible subset.
- Provide paging controls:
  - Next button on the right edge of the row container (vertically centered)
  - Previous button on the left edge when not on the first page
- Paging focus behavior:
  - Activating Next moves focus to the first newly revealed item (left-most visible link).
    - For example, if items 1 through 6 are visible, and the user activates the Next button, then items 7 through 12 become visible, and focus moves to item 7.
  - Activating Previous moves focus to the last newly revealed item (right-most visible link)
 
## Customizable
- In the golden pattern, we wrap the component in a container with `role="group"` and `aria-labelledby` pointing to the heading ID. This is optional. Engineers may choose instead to use a `<section>` or `role="region"`, or to eschew the container entirely.
- Items must at minimum have some "title" text that gives each item a name, but they are not required to also have metadata, like a price, or rating, etc.

## Don’ts
- When a user's focus is on the last visible item, and they press Tab, focus should move to a 'Next' button, not to the next item in the collection row.
- Don’t split the item into multiple separate interactive elements (one item = one link).
- Do not rely solely on poster art or imagery to communicate the name of each item.

## Golden Pattern
```js
"use client";

import * as React from "react";

export function CollectionRow({
  heading = "Customers Also Viewed",
  items = DEFAULT_ITEMS,
  pageSize = 6,
}) {
  const headingId = React.useId();

  const [startIndex, setStartIndex] = React.useState(0);

  // Refs to manage focus when paging.
  const itemLinkRefs = React.useRef([]);
  const nextButtonRef = React.useRef(null);
  const prevButtonRef = React.useRef(null);

  const total = items.length;

  const endIndex = Math.min(startIndex + pageSize, total);
  const visibleItems = items.slice(startIndex, endIndex);

  const canGoPrev = startIndex > 0;
  const canGoNext = endIndex < total;

  function focusFirstVisibleItem() {
    const first = itemLinkRefs.current[0];
    if (first && typeof first.focus === "function") first.focus();
  }

  function focusLastVisibleItem() {
    const last = itemLinkRefs.current[visibleItems.length - 1];
    if (last && typeof last.focus === "function") last.focus();
  }

  function goNext() {
    const nextStart = Math.min(startIndex + pageSize, Math.max(total - pageSize, 0));
    if (nextStart === startIndex) return;

    setStartIndex(nextStart);

    // Focus after the DOM updates.
    requestAnimationFrame(() => {
      focusFirstVisibleItem();
    });
  }

  function goPrev() {
    const prevStart = Math.max(startIndex - pageSize, 0);
    if (prevStart === startIndex) return;

    setStartIndex(prevStart);

    requestAnimationFrame(() => {
      focusLastVisibleItem();
    });
  }

  return (
    <div
      role="group"
      aria-labelledby={headingId}
      style={{
        position: "relative",
        padding: "12px 48px",
        background: "#fff",
        color: "#111",
        borderRadius: 12,
        maxWidth: 1100,
      }}
    >
      <h2 id={headingId} style={{ marginTop: 0, marginBottom: 12, fontSize: 20 }}>
        {heading}
      </h2>

      {canGoPrev ? (
        <button
          ref={prevButtonRef}
          type="button"
          onClick={goPrev}
          aria-label="Previous items"
          style={edgeButtonStyle("left")}
        >
          ‹
        </button>
      ) : null}

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: `repeat(${pageSize}, minmax(0, 1fr))`,
          gap: 12,
        }}
      >
        {visibleItems.map((item, localIndex) => {
          const globalIndex = startIndex + localIndex;
          const titleId = `cr-title-${headingId}-${globalIndex}`;
          const posId = `cr-pos-${headingId}-${globalIndex}`;
          const metaId = `cr-meta-${headingId}-${globalIndex}`;

          return (
            <li key={item.id}>
              <a
                href={item.href}
                ref={(el) => {
                  itemLinkRefs.current[localIndex] = el;
                }}
                aria-labelledby={`${titleId} ${metaId}`}
                aria-describedby={posId}
                style={{
                  display: "grid",
                  gap: 8,
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: 12,
                  padding: 10,
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "#fff",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: 10,
                    background: "rgba(0,0,0,0.06)",
                    backgroundImage: item.image ? `url(${item.image})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div style={{ display: "grid", gap: 4 }}>
                  <div
                    id={titleId}
                    style={{
                      fontWeight: 650,
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}{" "}
                  </div>
                    <span id={posId} style={srOnlyStyle}>
                      {globalIndex + 1} of {total}
                    </span>

                  <div id={metaId} style={{ color: "rgba(0,0,0,0.75)" }}>
                    {item.meta}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {canGoNext ? (
        <button
          ref={nextButtonRef}
          type="button"
          onClick={goNext}
          aria-label="Next items"
          style={edgeButtonStyle("right")}
        >
          ›
        </button>
      ) : null}
    </div>
  );
}

function edgeButtonStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-35%)",
    [side]: 10,
    width: 40,
    height: 40,
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.2)",
    background: "#fff",
    color: "#111",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    fontSize: 26,
    lineHeight: 1,
  };
}

const srOnlyStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

const DEFAULT_ITEMS = [
  {
    id: "wb-1",
    title: "Superflo Water Bottle",
    meta: "$24.95",
    href: "#",
    image: "https://picsum.photos/seed/bottle-1/400/400",
  },
  {
    id: "wb-2",
    title: "HydraSip Insulated Flask",
    meta: "$29.00",
    href: "#",
    image: "https://picsum.photos/seed/bottle-2/400/400",
  },
  {
    id: "wb-3",
    title: "AquaGnome Travel Mug",
    meta: "$18.50",
    href: "#",
    image: "https://picsum.photos/seed/bottle-3/400/400",
  },
  {
    id: "wb-4",
    title: "Nimbus Steel Tumbler",
    meta: "$22.00",
    href: "#",
    image: "https://picsum.photos/seed/bottle-4/400/400",
  },
  {
    id: "wb-5",
    title: "GlacierFlip Lid Bottle",
    meta: "$27.99",
    href: "#",
    image: "https://picsum.photos/seed/bottle-5/400/400",
  },
  {
    id: "wb-6",
    title: "Sprout & Sip Kids Bottle",
    meta: "$16.95",
    href: "#",
    image: "https://picsum.photos/seed/bottle-6/400/400",
  },
  {
    id: "wb-7",
    title: "Orbit Wide-Mouth Bottle",
    meta: "$25.50",
    href: "#",
    image: "https://picsum.photos/seed/bottle-7/400/400",
  },
  {
    id: "wb-8",
    title: "TrailMate Bottle Sling Set",
    meta: "$34.00",
    href: "#",
    image: "https://picsum.photos/seed/bottle-8/400/400",
  },
  {
    id: "wb-9",
    title: "ColdBrew Bottle Kit",
    meta: "$31.25",
    href: "#",
    image: "https://picsum.photos/seed/bottle-9/400/400",
  },
  {
    id: "wb-10",
    title: "PeakFlow Filter Bottle",
    meta: "$39.95",
    href: "#",
    image: "https://picsum.photos/seed/bottle-10/400/400",
  },
  {
    id: "wb-11",
    title: "Minimalist Glass Bottle",
    meta: "$19.95",
    href: "#",
    image: "https://picsum.photos/seed/bottle-11/400/400",
  },
  {
    id: "wb-12",
    title: "Commuter Grip Bottle",
    meta: "$21.00",
    href: "#",
    image: "https://picsum.photos/seed/bottle-12/400/400",
  },
  {
    id: "wb-13",
    title: "Summit Straw Bottle",
    meta: "$26.40",
    href: "#",
    image: "https://picsum.photos/seed/bottle-13/400/400",
  },
  {
    id: "wb-14",
    title: "Metro Leakproof Flask",
    meta: "$28.10",
    href: "#",
    image: "https://picsum.photos/seed/bottle-14/400/400",
  },
  {
    id: "wb-15",
    title: "RidgeRunner Sport Bottle",
    meta: "$23.75",
    href: "#",
    image: "https://picsum.photos/seed/bottle-15/400/400",
  },
  {
    id: "wb-16",
    title: "EcoPress Glass Tumbler",
    meta: "$20.50",
    href: "#",
    image: "https://picsum.photos/seed/bottle-16/400/400",
  },
  {
    id: "wb-17",
    title: "ArcticLock Thermal Bottle",
    meta: "$33.20",
    href: "#",
    image: "https://picsum.photos/seed/bottle-17/400/400",
  },
  {
    id: "wb-18",
    title: "Voyager Daily Hydration Kit",
    meta: "$36.00",
    href: "#",
    image: "https://picsum.photos/seed/bottle-18/400/400",
  },
];
```

## Acceptance Checks
- Structure:
  - A visible heading is present.
  - The row uses `ul` / `li` semantics.
  - Each item is a single link wrapping its content.
- Accessible naming:
  - Each link exposes a programmatic name that includes the visible title.
  - If metadata is present, it contributes to the accessible name.
  - Each link exposes position context (e.g., “3 of 18”) once via `aria-describedby`.
- Keyboard:
  - Tab order reaches Previous and Next buttons without forcing navigation through hidden items.
  - Activating Next moves focus to the first newly visible item.
  - Activating Previous moves focus to the last newly visible item.
  - Tabbing from the last visible item moves to the Next button (not to hidden items).
- Visual focus:
  - All interactive elements (item links and paging buttons) have a visible focus indicator.
