---
id: segmented-button.multi
title: Segmented Button (Multiple Choice)
stack: android/compose
status: beta
latest_version: 0.1.0
tags: [segmented button, segmented control, multiple choice, selection, checkbox, toggle group]
aliases: [SegmentedButton, MultiChoiceSegmentedButtonRow, segmented control, multi-select segmented button, toggle group, button group]
summary: Row of two to five connected options, any number of them on at once. Material's multiple-choice segment reports a checked state but no role, unlike the single-choice segment, and its row reports no set, so the role, each segment's position, and the row's name are the caller's.
---

# Segmented Button (Multiple Choice)

Pattern ID: `segmented-button.multi`

Row of two to five connected options, any number of them on at once. Material's multiple-choice segment reports a checked state but no role, unlike the single-choice segment, and its row reports no set, so the role, each segment's position, and the row's name are the caller's.

## Use When
- Use when the user turns on any number of two to five short, related options shown together as one connected control (e.g., "Walk", "Bike", "Transit" as the ways a route may travel).

## Do Not Use When
- Do not use when exactly one option must be chosen (use `segmented-button.single`).
- Do not use when the options filter a set of results, or there are more than five of them (use `chip.filter`).
- Do not use when each control turns its own feature on and off, such as formatting in a toolbar (use `button.toggle`).
- Do not use when the choices are recorded with a form and need room for longer labels (use `checkbox.basic`).

## Must Haves
- Each segment reports `Role.Checkbox` and its checked state. Material's `SegmentedButton` inside `MultiChoiceSegmentedButtonRow` supplies the checked state and a 48dp target but sets no role, unlike the single-choice segment, which sets `Role.RadioButton` itself. Pass `Modifier.semantics { role = Role.Checkbox }` to each segment (`global.native-first`).
- Declare the set on the row with `collectionInfo = CollectionInfo(rowCount = 1, columnCount = count)`, and each segment's place with `collectionItemInfo = CollectionItemInfo(rowIndex = 0, rowSpan = 1, columnIndex = index, columnSpan = 1)`. `MultiChoiceSegmentedButtonRow` sets neither, so without them this row reports nothing of the set the single-choice row reports (`global.collection-semantics`).
- Name the row with `Modifier.semantics { contentDescription = "..." }` on `MultiChoiceSegmentedButtonRow`, matching a visible label above or beside it (e.g., "Travel modes"), so a user entering the row hears what it chooses.
- Give each segment a short text label, which becomes its name. A segment showing only an icon is named with `contentDescription` on the `SegmentedButton`, and the `Icon` inside it carries `contentDescription = null` (`global.icon`).
- Keep the check mark `SegmentedButton` draws on each checked segment by default, or another icon shown only when checked. Passing `icon = {}`, or an icon shown in both states, leaves the state marked by the container color alone (`global.use-of-color`).
- If an option is unavailable, pass `enabled = false` to its segment, so it stays in the accessibility tree and reports that it is disabled.
- Meets the touch target baseline in `global_rules.md` (`global.touch-target-size`).
- Meets the focus states baseline in `global_rules.md` (`global.focus-states`).

## Don'ts
- Do not add `selectableGroup()` to the row to report the set. Compose derives position from it only for selectable children, so checked segments gain nothing, and the modifier looks like the fix.
- Do not use `SingleChoiceSegmentedButtonRow` and allow several segments to be selected in code. Its segments report radio buttons, so TalkBack describes a one-of-many choice the row does not enforce.
- Do not build the row from `Button`s or clickable boxes in a `Row`. They report buttons with no checked state.

## Customizable
- The row may start with none of its options on.
- A segment may show text, an icon, or both. With both, the icon is decorative and the text is the name.
- Colors come from `SegmentedButtonDefaults.colors()`, drawn from the theme's color scheme (`global.semantic-color`).

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```kotlin
@Composable
fun SegmentedButtonMultiExamples() {
    val modes = listOf("Walk", "Bike", "Transit")
    val checked = remember { mutableStateListOf(true, false, true) }

    Column {
        Text("Travel modes")
        MultiChoiceSegmentedButtonRow(
            modifier = Modifier.semantics {
                contentDescription = "Travel modes"
                collectionInfo = CollectionInfo(rowCount = 1, columnCount = modes.size)
            }
        ) {
            modes.forEachIndexed { index, mode ->
                SegmentedButton(
                    checked = checked[index],
                    onCheckedChange = { checked[index] = it },
                    shape = SegmentedButtonDefaults.itemShape(index = index, count = modes.size),
                    modifier = Modifier.semantics {
                        role = Role.Checkbox
                        collectionItemInfo = CollectionItemInfo(
                            rowIndex = 0,
                            rowSpan = 1,
                            columnIndex = index,
                            columnSpan = 1
                        )
                    }
                ) {
                    Text(mode)
                }
            }
        }
    }
}
```
