---
id: component-gallery
title: Components
slug: /compose/component-gallery
---

# Components

Every published Android / Compose pattern, with the situation it selects for. The table is generated from `patterns.json`.

<!-- gallery:start — generated from patterns.json; do not edit by hand. Run `npm run gen:gallery` in /website. -->

| Component | Summary |
|-----------|---------|
| [Bottom Sheet (Modal)](./components/bottom-sheet.modal.md) | Overlay that rises from the bottom edge and blocks the content behind it. Most of the dismissal contract arrives with the component rather than the caller, and every part of it disappears under some configuration the caller controls. |
| [Button](./components/button.basic.md) | Control that triggers an immediate action. Covers text, icon-only, floating, and action-chip presentations, which share one role and differ in where the accessible name comes from. |
| [Checkbox](./components/checkbox.basic.md) | Yes or no choice submitted with a form, independent of any other checkbox beside it. The control and its label form one accessibility node, and the row that owns the toggle owns the role and the touch target. |
| [Content Shelf](./components/content-shelf.basic.md) | Horizontally scrolling strip of tiles under a heading that says what the tiles have in common. A LazyRow reports that the user is in a list and nothing else, so the shelf's name, each tile's name, and every position announcement are the app's to supply. |
| [List Item](./components/list-item.basic.md) | A row in a vertical list. The row is one accessibility node rather than the several elements it looks like, so a second control inside it becomes a custom action rather than a nested target. |
| [Radio Group](./components/radio.basic.md) | Exactly one choice from a mutually exclusive set. The group carries selectableGroup, which is what makes each option announce its position in the set, and each row carries the selection rather than the button. |
| [Switch](./components/switch.basic.md) | Persistent on or off setting that takes effect immediately. The control and its label form one accessibility node, and the row that owns the toggle owns the role and the touch target. |
| [Text Field](./components/text-field.basic.md) | Single-line text entry whose accessible name has to come from the field's own label slot rather than a Text beside it. Supporting text and error messages are separate nodes the component does not attach, so both have to be associated deliberately. |

<!-- gallery:end -->
