---
id: progress-indicator.determinate
title: Progress Indicator (Determinate)
stack: android/compose
status: beta
latest_version: 0.1.0
tags: [progress, progress bar, loading, upload, download, percentage]
aliases: [LinearProgressIndicator, CircularProgressIndicator, progress bar, progress ring, determinate progress, upload progress, download progress, ProgressBarRangeInfo]
summary: Bar or ring showing how much of a task with a known size is done. Material reports the value as a range TalkBack reads as a percentage, but gives the indicator no name, so on its own it says "45 percent" without saying of what.
---

# Progress Indicator (Determinate)

Pattern ID: `progress-indicator.determinate`

Bar or ring showing how much of a task with a known size is done. Material reports the value as a range TalkBack reads as a percentage, but gives the indicator no name, so on its own it says "45 percent" without saying of what.

The determinate overloads put `ProgressBarRangeInfo` on a merged node, which is the whole of the value contract and why TalkBack can read a percentage at all. They set no `contentDescription`. An indicator standing alone has to be named for the work it tracks; one drawn inside a control that already names the work has to hand its value to that control instead, because a merging child inside a merging parent stays a separate stop.

## Use When
- Use when the app knows how much of a task is done and how much remains (e.g., an upload, a download, a multi-step import).
- Use when the user benefits from seeing how far along the task is.

## Do Not Use When
- Do not use when the duration or size of the work is unknown (use `progress-indicator.indeterminate`).
- Do not use when the user sets the value (use `slider.basic`).

## Must Haves
- The indicator reports its current value as a range. Material's `LinearProgressIndicator` and `CircularProgressIndicator` with the `progress` lambda are the reference implementation of that contract, through `ProgressBarRangeInfo` on a merged node; a hand-drawn bar satisfies none of it by default (`global.native-first`).
- Use the overload that takes `progress` as a lambda (`progress = { fraction }`). The overload taking a `Float` is deprecated.
- Name an indicator that stands on its own for the work it tracks, with `Modifier.semantics { contentDescription = "..." }` on the indicator (e.g., "Uploading 3 photos").
- Pass the fraction done, from 0 to 1. Material coerces the value into that range and reports `NaN` as 0, so a miscalculated value reads as an empty bar rather than failing.
- When the indicator sits inside a control that already names the work, such as a download button showing its own progress, put the value on the control with `stateDescription` (e.g., "45 percent") and remove the indicator's own semantics with `Modifier.clearAndSetSemantics {}`. The indicator merges its own semantics, so inside a merged control it stays a second stop.
- Announce the end of the work, success or failure, with a polite live region on the status text that replaces the indicator (`global.announcements`).
- Remove the indicator from composition when the work finishes, so it does not stay in the tree reporting a value.

## Don'ts
- Do not leave a standalone indicator unnamed. TalkBack reads its percentage with nothing to say what it measures.
- Do not make the indicator itself a live region. Every change in value would be read aloud.
- Do not show a visible percentage label beside the indicator and leave both in the tree. The user hears the value twice; hide the label with `Modifier.clearAndSetSemantics {}` or fold the indicator into the label.
- Do not build the bar from a `Box` with a fractional width. It draws progress and reports nothing.
- Do not move focus to the indicator when the work starts (`global.focus-management`).

## Customizable
- Linear or circular is a visual choice with the same contract.
- A visible label naming the work may sit beside the indicator, in which case the indicator's `contentDescription` matches it.
- Colors come from the theme's color scheme, so the indicator keeps its contrast against the track and the surface in light and dark themes (`global.semantic-color`).

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```kotlin
@Composable
fun DeterminateProgressExamples(uploaded: Int, total: Int, downloadFraction: Float?) {
    Column {
        if (uploaded < total) {
            LinearProgressIndicator(
                progress = { uploaded.toFloat() / total },
                modifier = Modifier
                    .fillMaxWidth()
                    .semantics { contentDescription = "Uploading $total photos" }
            )
        } else {
            Text(
                "$total photos uploaded",
                modifier = Modifier.semantics { liveRegion = LiveRegionMode.Polite }
            )
        }

        Button(
            onClick = { /* cancel or open */ },
            modifier = Modifier.semantics {
                if (downloadFraction != null) {
                    stateDescription = "${(downloadFraction * 100).roundToInt()} percent"
                }
            }
        ) {
            if (downloadFraction != null) {
                CircularProgressIndicator(
                    progress = { downloadFraction },
                    modifier = Modifier.size(18.dp).clearAndSetSemantics {}
                )
                Spacer(Modifier.width(8.dp))
                Text("Downloading episode")
            } else {
                Text("Download episode")
            }
        }
    }
}
```
