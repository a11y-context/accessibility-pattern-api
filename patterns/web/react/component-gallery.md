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
| [Button (Basic)](./components/button.basic.md) | Native button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns. |
| [Button (Toggle)](./components/button.toggle.md) | Two- or three-state button that toggles between pressed and not pressed using aria-pressed. |
| [Carousel (Dots)](./components/carousel.dots.md) | Horizontally-advancing carousel (aka hero or marquee carousel) with 'dot' navigation, prev/next buttons, and pause behavior. |
| [Carousel (Thumbnails)](./components/carousel.thumbnails.md) | Horizontally-advancing carousel (aka hero or marquee carousel) with thumbnail navigation, prev/next buttons, and pause behavior. |
| [Collection Row](./components/collection-row.basic.md) | Horizontal product shelf with a heading, list semantics, and Prev/Next paging that moves focus to newly revealed items. |
| [Combobox (Autocomplete)](./components/combobox.autocomplete.md) | An editable text input that filters a listbox of options as the user types; uses role="combobox" with aria-autocomplete, aria-expanded, aria-controls, and aria-activedescendant while DOM focus stays on the input. |
| [Dialog (Modal)](./components/dialog.modal.md) | User-initiated blocking dialog. Uses the native `<dialog>` element with .showModal() so the browser handles focus trap, background inertness, Escape dismissal, focus restoration, and top-layer rendering. |
| [Dialog (Non-Modal)](./components/dialog.nonmodal.md) | A dialog that does not block the page; uses role="dialog" with an accessible name, moves focus in on open and restores it on close, but does not trap focus or inert the background. |
| [Disclosure](./components/disclosure.basic.md) | A button that shows and hides an associated content region; uses aria-expanded on the trigger and aria-controls to the region, with DOM show/hide. |
| [Grid (Channel Guide)](./components/grid.channel-guide.md) | Interactive channel guide grid with one Tab stop and arrow-key navigation across channels and time slots. |
| [Link](./components/link.basic.md) | Native link for navigation using `<a href>`. Supports optional context in the accessible name, including "opens in new tab/window/dialog". |
| [Listbox](./components/listbox.basic.md) | An always-visible list of selectable options using role="listbox" and role="option", supporting single or multiple selection with roving tabindex or aria-activedescendant. |
| [Menu](./components/menu.basic.md) | A button that opens a menu of commands using role='menu' and role='menuitem', with roving tabindex focus management and the full menu keyboard contract. |
| [Menubar](./components/menu.menubar.md) | A persistent horizontal bar of application command menus using role="menubar", role="menu", and role="menuitem", for desktop-application command surfaces only, never site navigation. |
| [Navigation (Flat List)](./components/navigation-menu.basic.md) | A non-modal header navigation pattern that supports top-level links and optional sub-menus. Uses disclosure-style toggles (buttons) with aria-expanded/controls and Tab-based navigation (no roving focus / no role=menu). |
| [Navigation (Disclosure)](./components/navigation-menu.dropdown.md) | A single-trigger, non-modal dropdown that reveals a short list of navigation links and optional actions, using a native button with aria-expanded plus DOM show/hide, and never role="menu". |
| [Select (Basic)](./components/select.native.md) | A native select element styled with CSS, the default single-value form control; retains native keyboard, mobile, dismissal, and assistive-technology behavior. |
| [Select (Custom Style)](./components/select.basic.md) | A custom-styled form select that matches native `<select>` behavior using a button trigger + listbox popup, and a visually hidden native `<select>` for form submission and browser autofill. |
| [Switch](./components/switch.basic.md) | Two-state on/off control representing a persistent setting. Uses role="switch" with aria-checked, or native checkbox semantics when applicable. |
| [Toast](./components/toast.basic.md) | Temporary, non-blocking status message announced via live region. May include optional dismiss control. Disappears automatically. |
| [Tooltip](./components/tooltip.basic.md) | A brief supplementary text label shown on hover and focus of its trigger; uses role="tooltip" referenced by aria-describedby, and is hoverable, dismissible, and persistent. |

<!-- gallery:end -->
