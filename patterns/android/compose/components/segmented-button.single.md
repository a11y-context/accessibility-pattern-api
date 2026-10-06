---
id: segmented-button.single
title: Segmented Button (Single Choice)
stack: android/compose
status: beta
latest_version: 0.1.0
tags: [segmented button, segmented control, single choice, selection, radio, view switcher]
aliases: [SegmentedButton, SingleChoiceSegmentedButtonRow, segmented control, single-select segmented button, toggle group, button group, view switcher]
summary: Row of two to five connected options, exactly one of them selected. Material's single-choice row gives each segment radio semantics and announces its position in the set; naming the row and keeping a visible marker on the selected segment are the caller's.
---

# Segmented Button (Single Choice)

Pattern ID: `segmented-button.single`

Row of two to five connected options, exactly one of them selected. Material's single-choice row gives each segment radio semantics and announces its position in the set; naming the row and keeping a visible marker on the selected segment are the caller's.

## Use When
- Use when the user chooses one of two to five short options that stay visible together as one connected control (e.g., "Day", "Week", "Month").
- Use when the choice takes effect immediately, such as changing how the content below is shown or sorted.

## Do Not Use When
- Do not use when any number of the options may be chosen (use `segmented-button.multi`).
- Do not use when there are more than five options or the labels are too long to fit side by side (use `radio.basic`, or `select.basic` for a compact control).
- Do not use when each option opens its own pane of content, such as the sections of a profile (use `tabs.basic`).
- Do not use when the control is a single on or off choice (use `switch.basic` or `button.toggle`).

## Must Haves
- Each segment reports `Role.RadioButton`, its selected state, and its position in the set. Material's `SegmentedButton` inside `SingleChoiceSegmentedButtonRow` is the reference implementation: each segment sets `Role.RadioButton` on a selectable surface with a 48dp target, and the row applies `selectableGroup()`, from which Compose derives each segment's position (`global.native-first`).
- Ship the row with one segment selected, and keep it selected when the user activates it again. The segments report radio semantics, and a radio set has no state with nothing chosen.
- Name the row with `Modifier.semantics { contentDescription = "..." }` on `SingleChoiceSegmentedButtonRow`, matching a visible label above or beside it (e.g., "Calendar view"), so a user entering the row hears what it chooses (`global.collection-semantics`).
- Give each segment a short text label, which becomes its name. A segment showing only an icon is named with `contentDescription` on the `SegmentedButton`, and the `Icon` inside it carries `contentDescription = null` (`global.icon`).
- Keep the check mark `SegmentedButton` draws on the selected segment by default, or another icon shown only when selected. Passing `icon = {}`, or an icon shown in both states, leaves the selection marked by the container color alone (`global.use-of-color`).
- If an option is unavailable, pass `enabled = false` to its segment, so it stays in the accessibility tree and reports that it is disabled.
- Meets the touch target baseline in `global_rules.md` (`global.touch-target-size`).
- Meets the focus states baseline in `global_rules.md` (`global.focus-states`).

## Don'ts
- Do not build the row from `Button`s or clickable boxes in a `Row`. They report buttons with no selected state and no position in the set.
- Do not clear the selection when the selected segment is activated again.
- Do not use `MultiChoiceSegmentedButtonRow` and enforce a single choice in code. Its segments report checked states, so TalkBack describes independent toggles where the row allows only one.

## Customizable
- A segment may show text, an icon, or both. With both, the icon is decorative and the text is the name.
- The row's visible label may sit above or beside it, provided its text matches the row's `contentDescription`.
- Colors come from `SegmentedButtonDefaults.colors()`, drawn from the theme's color scheme (`global.semantic-color`).

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```kotlin
@Composable
fun SegmentedButtonSingleExamples() {
    val views = listOf("Day", "Week", "Month")
    var selected by remember { mutableIntStateOf(0) }

    Column {
        Text("Calendar view")
        SingleChoiceSegmentedButtonRow(
            modifier = Modifier.semantics { contentDescription = "Calendar view" }
        ) {
            views.forEachIndexed { index, view ->
                SegmentedButton(
                    selected = index == selected,
                    onClick = { selected = index },
                    shape = SegmentedButtonDefaults.itemShape(index = index, count = views.size)
                ) {
                    Text(view)
                }
            }
        }
    }
}
```
