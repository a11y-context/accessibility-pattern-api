---
id: chip.input
title: Input Chip
stack: android/compose
status: beta
latest_version: 0.1.0
tags: [chip, input chip, token, removable, entered value, tag]
aliases: [InputChip, input chip, token, removable chip, removable tag, recipient chip, entity chip, tag input, CustomAccessibilityAction]
summary: Chip standing for a value the user entered, such as a recipient or a tag, that can be selected and removed. Material's InputChip is a single click target, and its trailing icon is content rather than a button, so removal is the caller's to build, as a touch target TalkBack skips plus a Remove action on the chip.
---

# Input Chip

Pattern ID: `chip.input`

Chip standing for a value the user entered, such as a recipient or a tag, that can be selected and removed. Material's `InputChip` is a single click target, and its trailing icon is content rather than a button, so removal is the caller's to build, as a touch target TalkBack skips plus a Remove action on the chip.

## Use When
- Use when values the user entered are shown as tokens they can select and remove (e.g., recipients in a "To" field, tags added to a photo).

## Do Not Use When
- Do not use when the chip filters content (use `chip.filter`).
- Do not use when the chip performs an action (use `button.basic`, which covers assist and suggestion chips).
- Do not use when tapping the token does something other than select it, such as opening its details (use `button.basic` with an `AssistChip`, and add removal the same way).

## Must Haves
- The chip reports its label, its selected state, a click action, and a remove action. Material's `InputChip` is the reference implementation of the first three, reporting `Role.Checkbox` and a selected state on a selectable surface with a 48dp target. Its `trailingIcon` slot is content, not a control: an icon placed there joins the chip's name and does nothing when tapped on its own (`global.native-first`).
- Expose removal as a `CustomAccessibilityAction` labeled "Remove" in the chip's `customActions`. TalkBack lists it in the chip's actions menu, and each chip stays one stop (`global.merge-semantics`).
- Give touch and keyboard users a remove target in the `trailingIcon` slot: a clickable box at least 24dp square holding the close icon, with `Modifier.clearAndSetSemantics {}` placed before its `clickable` so TalkBack skips it in favor of the custom action. The chip is too short for a 48dp target inside it, so 24dp is the floor (`global.touch-target-size`).
- Name the chip with its visible label. Give an avatar or leading icon `contentDescription = null` when it shows the person or thing the label names, and give the close icon `contentDescription = null` (`global.icon`).
- When a chip is removed, move focus to a neighboring chip or to the text field the chips belong to. The removed chip takes focus with it, which leaves a keyboard or TalkBack user nowhere (`global.focus-management`).
- Name the set of chips on its container with `Modifier.semantics { contentDescription = "..." }` (e.g., "Recipients") (`global.collection-semantics`).
- Keep the selected state visible by more than color. `InputChip` drops its border and fills its container when selected; keep that border change when restyling it (`global.use-of-color`).
- Meets the focus states baseline in `global_rules.md` (`global.focus-states`).

## Don'ts
- Do not put an `IconButton` in `trailingIcon` and leave it in the accessibility tree. TalkBack then meets every chip twice, once as the chip and once as its remove button.
- Do not give the close icon a `contentDescription` such as "Remove" and stop there. It joins the chip's name ("Alex Rivera, Remove"), and activating the chip still only selects it.
- Do not remove the chip on its main click. `InputChip` reports a selected state on every chip, so TalkBack announces a selection the tap does not make.
- Do not remove a chip without moving focus somewhere deliberate.

## Customizable
- The chip may show an avatar or a leading icon, which `InputChip` places before the label.
- A chip that has keyboard focus may also be removed with Backspace or Delete, through `Modifier.onKeyEvent` on the chip.
- Removal may also be announced ("Alex Rivera removed") through a polite live region, in addition to moving focus.

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```kotlin
@Composable
fun InputChipExamples() {
    val recipients = remember { mutableStateListOf("Alex Rivera", "Sam Chen") }
    val selected = remember { mutableStateListOf<String>() }
    val fieldFocus = remember { FocusRequester() }
    var entry by remember { mutableStateOf("") }

    Column {
        FlowRow(modifier = Modifier.semantics { contentDescription = "Recipients" }) {
            recipients.forEach { name ->
                val remove = {
                    recipients.remove(name)
                    selected.remove(name)
                    fieldFocus.requestFocus()
                }
                InputChip(
                    selected = name in selected,
                    onClick = {
                        if (name in selected) selected.remove(name) else selected.add(name)
                    },
                    label = { Text(name) },
                    trailingIcon = {
                        Box(
                            modifier = Modifier
                                .size(24.dp)
                                .clearAndSetSemantics { }
                                .clickable { remove() },
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                Icons.Filled.Close,
                                contentDescription = null,
                                modifier = Modifier.size(InputChipDefaults.IconSize)
                            )
                        }
                    },
                    modifier = Modifier.semantics {
                        customActions = listOf(
                            CustomAccessibilityAction("Remove") { remove(); true }
                        )
                    }
                )
            }
        }

        TextField(
            value = entry,
            onValueChange = { entry = it },
            label = { Text("Add recipient") },
            modifier = Modifier.focusRequester(fieldFocus)
        )
    }
}
```
