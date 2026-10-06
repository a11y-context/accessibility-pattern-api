---
id: progress-indicator.indeterminate
title: Progress Indicator (Indeterminate)
stack: android/compose
status: beta
latest_version: 0.1.0
tags: [progress, loading, spinner, busy, wait, activity indicator]
aliases: [CircularProgressIndicator, LinearProgressIndicator, loading spinner, spinner, activity indicator, busy indicator, loading indicator, progressSemantics]
summary: Bar or ring showing that work is happening with no known end. Material marks it as indeterminate and names nothing, so the indicator alone says only that something is in progress, and nothing says when it stops.
---

# Progress Indicator (Indeterminate)

Pattern ID: `progress-indicator.indeterminate`

Bar or ring showing that work is happening with no known end. Material marks it as indeterminate and names nothing, so the indicator alone says only that something is in progress, and nothing says when it stops.

The overloads without a `progress` argument apply `progressSemantics()`, which sets `ProgressBarRangeInfo.Indeterminate` on a merged node and nothing else. What the user needs from a wait is what is loading and when it is done, and neither comes from the indicator. A standalone indicator is named for the work; one inside a control hands the wait to the control's own label; and either way, the end of the wait is announced by the content that replaces it.

## Use When
- Use when work is under way and the app cannot say how much remains (e.g., loading a screen's content, contacting a server).
- Use when a control shows that its own action is in progress, such as a button that displays a spinner while it saves.

## Do Not Use When
- Do not use when the app knows how far along the work is (use `progress-indicator.determinate`).

## Must Haves
- The indicator reports that work is in progress with no value. Material's `CircularProgressIndicator` and `LinearProgressIndicator` without a `progress` argument are the reference implementation of that contract, through `progressSemantics()` (`global.native-first`).
- Name an indicator that stands on its own for the work it waits on, with `Modifier.semantics { contentDescription = "..." }` on the indicator (e.g., "Loading reviews").
- When the indicator sits inside a control, carry the wait in the control's own label (e.g., "Save" becomes "Saving") and remove the indicator's semantics with `Modifier.clearAndSetSemantics {}`. The indicator merges its own semantics, so inside a merged control it stays a second stop.
- Keep a control focusable while it shows its own wait, and ignore a repeat activation in its click handler. A clickable set to `enabled = false` drops its focusable node, so a keyboard user who has just pressed Save loses focus the moment it changes to Saving.
- Announce the end of the wait, success or failure alike, with a polite live region on the content or status text that replaces the indicator (`global.announcements`).
- Remove the indicator from composition when the wait ends, so it does not keep reporting that work is in progress.

## Don'ts
- Do not leave a standalone indicator unnamed. TalkBack says something is in progress with nothing to say what.
- Do not move focus to the indicator, or to the content when it arrives, unless the user has to act on it (`global.focus-management`).
- Do not disable the control that started the wait. Its focus goes with it.
- Do not make the indicator itself a live region. Its arrival says only that work started, which the user usually caused and already knows.
- Do not end a wait silently. A user who cannot see the screen has no other way to learn that the content is ready or that loading failed.
- Do not draw a spinner by rotating an `Icon` forever. It reports at most an image, never that work is in progress.

## Customizable
- Circular or linear is a visual choice with the same contract.
- A visible label such as "Loading reviews" may sit beside a standalone indicator, in which case the indicator's `contentDescription` matches it.
- The arrival message may be the loaded content itself, marked as a polite live region, or a short status line such as "12 reviews loaded".

## Golden Pattern

Structural reference for AI coding assistants — semantics, focus, and keyboard behavior. Styling, copy, and demo data are illustrative.

```kotlin
@Composable
fun IndeterminateProgressExamples(reviews: List<Review>?, failed: Boolean, saving: Boolean, onSave: () -> Unit) {
    Column {
        when {
            failed -> Text(
                "Reviews could not be loaded",
                modifier = Modifier.semantics { liveRegion = LiveRegionMode.Polite }
            )
            reviews == null -> CircularProgressIndicator(
                modifier = Modifier.semantics { contentDescription = "Loading reviews" }
            )
            else -> Text(
                "${reviews.size} reviews",
                modifier = Modifier.semantics { liveRegion = LiveRegionMode.Polite }
            )
        }

        Button(onClick = { if (!saving) onSave() }) {
            if (saving) {
                CircularProgressIndicator(
                    modifier = Modifier.size(18.dp).clearAndSetSemantics {},
                    strokeWidth = 2.dp
                )
                Spacer(Modifier.width(8.dp))
                Text("Saving")
            } else {
                Text("Save")
            }
        }
    }
}
```
