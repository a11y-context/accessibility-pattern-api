---
id: component-gallery
title: Components
slug: /component-gallery
---

# Components

Browse all accessibility patterns available for Web / React.

<!-- gallery:start — generated from patterns.json; do not edit by hand. Run `npm run gen:gallery` in /website. -->

| Component | Summary |
|-----------|---------|
| [Accordion](./components/accordion.basic.md) | A set of show/hide sections with heading-wrapped buttons controlling associated panels via aria-expanded (and optionally aria-controls / region). |
| [Account Menu](./components/menu.account.md) | A non-modal, button-invoked account menu that reveals a small list of links and optional actions. Uses aria-expanded plus DOM show/hide so keyboard users Tab into items and Esc closes. |
| [Button](./components/button.basic.md) | Native button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns. |
| [Carousel (Dot Navigation)](./components/carousel.dots.md) | Horizontally-advancing carousel (aka hero or marquee carousel) with 'dot' navigation, prev/next buttons, and pause behavior. |
| [Carousel (Thumbnail Navigation)](./components/carousel.thumbnails.md) | Horizontally-advancing carousel (aka hero or marquee carousel) with thumbnail navigation, prev/next buttons, and pause behavior. |
| [Channel Guide Grid](./components/grid.channel-guide.md) | Interactive channel guide grid with one Tab stop and arrow-key navigation across channels and time slots. |
| [Collection Row](./components/collection-row.basic.md) | Horizontal product shelf with a heading, list semantics, and Prev/Next paging that moves focus to newly revealed items. |
| [Dialog (Modal)](./components/dialog.modal.md) | User-initiated blocking dialog that traps focus, inerts background content, and restores focus on close. |
| [Link](./components/link.basic.md) | Native link for navigation using `<a href>`. Supports optional context in the accessible name, including 'opens in new tab/window/dialog'. |
| [Navigation Menu](./components/navigation-menu.basic.md) | A non-modal header navigation pattern that supports top-level links and optional sub-menus. Uses disclosure-style toggles (buttons) with aria-expanded/controls and Tab-based navigation (no roving focus / no role=menu). |
| [Select](./components/select.basic.md) | A custom-styled form select that matches native `<select>` behavior using a button trigger + listbox popup, and a visually hidden native `<select>` for form submission and browser autofill. |
| [Switch](./components/switch.basic.md) | Two-state on/off control representing a persistent setting. Uses role="switch" with aria-checked, or native checkbox semantics when applicable. |
| [Toast](./components/toast.basic.md) | Temporary, non-blocking status message announced via live region. May include optional dismiss control. Disappears automatically. |
| [Toggle Button](./components/button.toggle.md) | Two- or three-state button that toggles between pressed and not pressed using aria-pressed. |

<!-- gallery:end -->
