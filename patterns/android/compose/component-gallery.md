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
| [Dialog (Alert)](./components/dialog.alert.md) | Modal message that interrupts to ask for a decision or report something the user must acknowledge. Material's dialog window blocks the screen and closes on back and Escape, but announces itself only as a generic "Dialog", so the title has to be the first thing the user lands on. |
| [Image](./components/image.basic.md) | Picture or icon whose accessibility comes down to one decision about what it means. A meaningful image is named for what it conveys, a decorative one passes null and leaves the tree, and an empty string is not decorative. |
| [List Item](./components/list-item.basic.md) | A row in a vertical list. The row is one accessibility node rather than the several elements it looks like, so a second control inside it becomes a custom action rather than a nested target. |
| [Menu](./components/menu.basic.md) | Pull-down list of commands opened from a button. Material's menu takes focus and closes on back and Escape on its own; its items carry no role, so each one's label has to stand on its own as a command. |
| [Navigation Bar](./components/navigation-bar.basic.md) | Bar of three to five top-level destinations along the bottom of the screen. Each item reports Role.Tab, its selected state, and its position, and Material removes the icon's semantics whenever the label shows, which takes any badge with it. |
| [Radio Group](./components/radio.basic.md) | Exactly one choice from a mutually exclusive set. The group carries selectableGroup, which is what makes each option announce its position in the set, and each row carries the selection rather than the button. |
| [Snackbar](./components/snackbar.basic.md) | Brief message confirming something that already happened, shown at the bottom of the screen without taking focus. SnackbarHost supplies the announcement, the dismiss action, and the time extension a user can ask for; a Snackbar drawn outside it gets none of them. |
| [Snackbar with Action](./components/snackbar.action.md) | Brief message carrying one action, such as Undo, shown without taking focus. Because focus never moves to it, its action is hard to reach from a keyboard and easy to miss with TalkBack, so the action must also be available somewhere else and the message must stay until dismissed. |
| [Switch](./components/switch.basic.md) | Persistent on or off setting that takes effect immediately. The control and its label form one accessibility node, and the row that owns the toggle owns the role and the touch target. |
| [Tabs](./components/tabs.basic.md) | Row of tabs that switches between views of the same screen. Each tab reports Role.Tab, its selected state, and its position, and only the selected tab's content belongs in the tree. Unlike a navigation bar item, a tab keeps its icon's semantics. |
| [Text Field](./components/text-field.basic.md) | Single-line text entry whose accessible name has to come from the field's own label slot rather than a Text beside it. Supporting text and error messages are separate nodes the component does not attach, so both have to be associated deliberately. |

<!-- gallery:end -->
