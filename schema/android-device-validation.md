# Android device validation list

Assumptions in merged `android/compose` patterns that only a device running TalkBack can settle. Each one was reasoned from the Compose and Material sources, which show what Compose reports to accessibility services but not what TalkBack says aloud. The list is worked through in the sample app built once the catalog is written. Add an item whenever a pattern is written on an assumption like these, and record the result here when it is checked.

Run each check with TalkBack on, and repeat the focus checks with a hardware keyboard. Note the Android version, TalkBack version, and Compose and Material versions the sample app was built against.

| ID | Question | Relied on by | Status |
|---|---|---|---|
| V-01 | Does a named group container become a TalkBack stop of its own? | `global.collection-semantics`, `radio.basic`, `segmented-button.basic`, `checkbox.group` | open |
| V-02 | What does TalkBack say for position in a set, Material's and hand-set? | `segmented-button.basic`, `checkbox.group` | open |
| V-03 | How does a multiple-choice segment read with and without `Role.Checkbox`? | `segmented-button.basic` | open |
| V-04 | Is a group-level error announced once? | `checkbox.group` | open |
| V-05 | Does TalkBack's heading navigation reach `heading()`? | `global.headings`, `radio.basic`, `checkbox.group` | open |
| V-06 | How does an icon toggle button announce its name and state? | `button.toggle` | open |
| V-07 | Does a tri-state parent read "Partially checked" and stay quiet when a child changes it? | `checkbox.tristate` | open |
| V-08 | Does an icon button named on its `Icon` read the same as one named on the button? | `global.icon`, `button.basic`, `button.toggle` | open |
| V-09 | Does TalkBack land on an alert dialog's title when it opens? | `dialog.alert` | open |
| V-10 | Does `windowTitle` or a caller's `paneTitle` replace the generic "Dialog"? | `dialog.alert` | open |
| V-11 | Does keyboard focus land on a dropdown menu's first item by itself? | `menu.basic` | open |
| V-12 | Does a caller's `error()` on a `TextField` override Material's default message? | `text-field.basic` | open |
| V-13 | Do an input chip and its remove button read as two clean stops, and where does focus go after removal? | `chip.input` | open |
| V-14 | How does a filter chip announce its state, and is the result count read once? | `chip.filter` | open |
| V-15 | Do a badge's words read after its host's name, and a row's status after the row's name? | `badge.basic` | open |
| V-16 | Do a clickable card's click label and custom action work, and is its focus visible? | `card.basic` | open |
| V-17 | Does a static card keep its contents together, and read as one item when merged? | `card.basic` | open |
| V-18 | How does a select field announce itself, its opening, and its current option? | `select.basic` | open |

## Groups and sets

### V-01: A named group container as its own stop

`global.collection-semantics` requires naming a set's container with `contentDescription`, so a user who reaches the options by any route other than the visible label still hears the question. CVS's radio-group technique does not do this: it places a `Text` above the group and states that Compose offers no way to associate the label with the controls. Check whether the named container becomes a TalkBack stop of its own, whether the user hears the group's name twice (from the visible label and again from the container), and whether touching an option inside the set announces the container's name. If the name reads twice, either the visible label is hidden from TalkBack or the container name is dropped in favor of the label's place in traversal order, and the Foundations rule changes with it.

### V-02: Position in a set

The single-choice segmented row gets each segment's `CollectionItemInfo` from `selectableGroup()`. The multiple-choice row and the checkbox group set `collectionInfo` and `collectionItemInfo` by hand, as `global.collection-semantics` requires. The patterns claim the hand-set rows report what the single-choice row reports, not any particular phrase. Check what TalkBack says on each segment and option, and whether the hand-set values read the same way as Material's. If they read differently, adjust the values; if they add nothing a user would miss, the requirement may drop to Customizable.

### V-03: A multiple-choice segment's role

Material's multiple-choice `SegmentedButton` reports a checked state and sets no role; the single-choice one sets `Role.RadioButton`. `segmented-button.basic` requires adding `Role.Checkbox`. Check what TalkBack says for a segment with Material's default and with the role added. If the default already reads clearly, the Must Have may be unnecessary; if "checkbox" reads oddly on a segment, the pattern needs another way to report the control type.

### V-04: One error for a group

`checkbox.group` shows a group-level error ("Choose at least one way to contact you") as visible text that is a polite live region, and sets no `error()` on the options. Check that the error is read once when it appears on submit, that it is not repeated at each option, and that a user who moves through the options afterward can still find it. If it is missed, the error moves to `error()` on the first option or on the container, which needs its own check.

### V-05: Heading navigation

`global.headings` marks section headers with `heading()` because TalkBack's heading granularity is the only skip mechanism Android offers. Check that TalkBack's heading navigation stops on Compose nodes marked with `heading()` in current versions, including a group's label in `radio.basic` and `checkbox.group`.

## Toggles and checkboxes

### V-06: An icon toggle button's announcement

Material's icon toggle buttons report `Role.Checkbox` and a checked state, and `button.toggle` keeps the name the same in both states ("Favorite", checked or not checked). Check the wording and order TalkBack uses, and whether hearing "checkbox" on a heart or a bold toggle confuses rather than helps. If it confuses, the pattern revisits its state model, for example a `stateDescription` that replaces "checked", or the next-action naming that `button.basic` uses for Play and Pause.

### V-07: A tri-state parent

Compose supplies "Partially checked" as the state description when the parent's state is indeterminate and none is set. `checkbox.tristate` assumes the parent's change stays silent when the user toggles a child, and that the updated state is there when the user returns to it. Check all three, and check the three-step restore cycle the pattern allows as Customizable.

### V-08: An icon button named on its `Icon`

`global.icon` names an icon-only control on its `Icon` and lets the control merge the description into its own name. The Compose merge policies keep the control's role and combine the descriptions, so this should read exactly like naming the control ("Settings, button", with no "image"). Confirm it on an `IconButton` and an `IconToggleButton`.

## Chips, badges, and cards

### V-13: Removing an input chip

`chip.input` nests a remove button (`Role.Button`, named "Remove Alex Rivera") inside the chip's trailing slot, and also puts a "Remove" custom action on the chip. Check that TalkBack reads the chip ("Alex Rivera" with its selected state) and the remove button as two separate stops, that the chip's own announcement does not pick up the button's name, and that both the button and the actions-menu entry remove the chip. Check that the 24dp button is tappable without hitting the chip by mistake, and that a hardware keyboard reaches the chip and its button as two stops. After a removal, check that both keyboard focus and the TalkBack cursor land on the text field the golden pattern moves focus to.

### V-14: A filter chip's announcement

`FilterChip` reports `Role.Checkbox` with a selected state rather than a checked one, and Compose reports a selected state on a checkbox as checked, with "Selected" or "Not selected" as the state description. Check what TalkBack actually says, and that the polite status line ("12 recipes") is read once after a chip changes, without moving focus off the chip.

### V-15: A badge's words

`badge.basic` replaces a badge's content with words through `clearAndSetSemantics { contentDescription = "..." }`, relying on `BadgedBox` placing the badge after its host so the words follow the host's name ("Notifications, 3 unread"). For a status beside a name, it uses `stateDescription` on the row instead. Check both orders, and that the count updates in the announcement when the value changes.

### V-16: A clickable card

`Card`'s `onClick` overload takes no click label, so `card.basic` sets one through `Modifier.semantics { onClick(label = "...", action = null) }`, the same mechanism `button.basic` uses on an `IconButton`. Check that TalkBack says "Double tap to open recipe", that activating it opens the card, and that the "Share" custom action works while the hidden share button stays out of the swipe order. Check also that a focused card's focus indication is visible from a keyboard, since a clickable `Surface` shows focus as a state layer over a large area.

### V-17: A static card

Material's static `Card` marks itself a traversal group. Check that its contents are read in order before anything after the card, that `semantics(mergeDescendants = true)` makes a card of plain content a single stop, and that a title marked `heading()` inside a card is reachable through TalkBack's heading navigation.

### V-18: A select field

`menuAnchor` gives a read-only field `Role.DropdownList`, which Compose reports to Android as a `Spinner`, and sets no expanded or collapsed state on it; only the editable variant does. `select.basic` marks the current option with `selected` on its `DropdownMenuItem`. Check what TalkBack says on the field (its role word, label, and value), whether opening the list is announced or only evident from focus moving into it, that the current option reads as selected and the others as not selected, and where keyboard focus and the TalkBack cursor land after an option is chosen. If opening is silent and focus does not move into the list, the field needs an expanded state of its own.

## Dialogs, menus, and fields

### V-09: Initial TalkBack focus in an alert dialog

Material 3 1.4.0 lays out an `AlertDialog`'s icon, title, text, then buttons. With the icon decorative, the title is first in traversal order, which is where TalkBack's initial placement normally goes. `dialog.alert` relies on it and requests no focus. Check that TalkBack lands on the title, not a button.

### V-10: The dialog's pane title

`BasicAlertDialog` sets the generic pane title "Dialog" on its content box. Check whether `DialogProperties(windowTitle = ...)` is announced in its place, and whether a caller's own `paneTitle` on the dialog's `modifier` wins over Material's. `dialog.alert` keeps both out of its Must Haves and requires the title to be the first content instead; a clear result here could add one.

### V-11: Keyboard focus in a dropdown menu

A `DropdownMenu` popup is focusable and arrow keys move between items, but nothing in Material 3 1.4.0 requests focus on an item. `menu.basic` requests focus on the first item explicitly, which is correct either way. Check whether focus lands there without it.

### V-12: A text field's error message

When `isError` is true, Material's `TextField` applies `error()` with a generic default string on its inner `BasicTextField`. `text-field.basic` assumes a caller's `error("...")` set through `Modifier.semantics` on the `TextField` wins, since the default merge policy keeps the ancestor's value, but the two sit on different nodes. Check which message TalkBack reads. If Material's wins, the message moves into the field's label instead.
