---
id: checkbox.basic
title: Checkbox
stack: web/react
status: draft
latest_version: 0.1.0
tags: [checkbox, form, form-control, boolean, consent, selection]
aliases: [checkbox, check box, tickbox, agree to terms, remember me, opt-in, consent checkbox, boolean input]
summary: A single binary checkbox for an independent on/off choice submitted with a form. Uses a native <input type="checkbox"> with an associated <label>, or role="checkbox" with aria-checked when a native input cannot be used.
---

# Checkbox

Pattern ID: `checkbox.basic`

A single binary checkbox for an independent on/off choice submitted with a form. Uses a native `<input type="checkbox">` with an associated `<label>`, or `role="checkbox"` with `aria-checked` when a native input cannot be used.

Native `<input type="checkbox">` is accessible out of the box and is the preferred implementation; a custom `role="checkbox"` element applies only when a native input cannot be used. For a set of related checkboxes that together answer one question, use `checkbox.group`.

## Use When
- Use when a single control records an independent yes/no choice that is submitted with a form rather than taking effect immediately (e.g., "I agree to the Terms of Service", "Remember me on this device", "Email me about new releases").
- Use when the control's label is self-sufficient, including when several such independent checkboxes appear in the same form.
- Use when both the checked and unchecked values are meaningful and are read when the form is submitted.

## Do Not Use When
- Do not use when several checkboxes answer one shared question and their labels are not meaningful without it (use `checkbox.group`).
- Do not use when toggling the control takes effect immediately as a persistent setting rather than a value submitted with a form (use `switch.basic`).
- Do not use when the control toggles a feature, tool, or formatting state in the current context rather than recording a value to submit (use `button.toggle`).
- Do not use when a third "mixed" or "partially checked" state is required, such as a parent reflecting a mix of checked children (use `checkbox.tristate`).

## Must Haves
- Use a native `<input type="checkbox">` for built-in state, keyboard, and focus behavior.
  - A custom implementation with `role="checkbox"` is appropriate only when a native input cannot be used.
  - If `role="checkbox"` is used instead of a native input, add `tabindex="0"`, set `aria-checked="true|false"` to reflect state, and add a key handler so Space toggles the control while preventing page scrolling.
- The checkbox has a programmatically associated visible label.
  - Associate a native `<label>` by wrapping the input or by pointing `for` (`htmlFor` in JSX) at the input's `id`.
  - Word the label so it describes what checking the box means and reads true when checked (e.g., "Remember me on this device").
- The checkbox has an accessible name equivalent to its visible label.
- When additional context is needed beyond the visible label, add it via `aria-label`, `aria-labelledby`, or offscreen text (i.e., `.sr-only`). The visible text appears at the start of the accessible name.
- Convey the checked state programmatically.
  - For a native input, use the `checked` property and do not add `aria-checked`.
  - For `role="checkbox"`, set `aria-checked="true"` when checked and `aria-checked="false"` when unchecked.
- The checkbox is focusable and toggles with the keyboard.
  - A native `<input type="checkbox">` is focusable by default, and Space toggles it.
  - A `role="checkbox"` element needs `tabindex="0"` and a key handler where Space toggles the state.
  - Enter does not toggle a checkbox; within a form, Enter submits the form.
- A lone checkbox is frequently optional. If it is required:
  - Convey the requirement programmatically with the native `required` attribute and visibly with a text indicator (e.g., "(required)"), not color alone. If the visible indicator would otherwise be announced on top of the native required state, mark it `aria-hidden="true"`.
  - Provide a field-level inline error container that is present in the DOM at all times (empty until invalid), carries `aria-live="polite"`, and is referenced by the input's `aria-describedby`.
  - Populate the error when the user leaves the field invalid (on blur), not on submit and not on every interaction. The error text identifies the problem and is itself a non-color indication (e.g., it begins with "Error:", or pairs an icon carrying `aria-label="Error"`).
  - Do not move focus to the checkbox on error. Submit-time focus handling is a form-level concern, not a field-level one (see `form.error-summary`).
- If descriptive static text supports the checkbox, associate it using `aria-describedby` (e.g., a hint shown under the label).
- If the choice is unavailable, disable the control using the native `disabled` attribute. (It becomes unfocusable and non-interactive.)
- Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) around the checkbox control.

## Customizable
- The base element: a native `<input type="checkbox">` (preferred), or a custom `role="checkbox"` element only when a native input cannot be used. Native elements reduce the keyboard, focus, and state wiring that must be hand-rolled.
- Visual styling, in increasing order of control, while keeping a real native input:
  - Recolor only: set `accent-color` on the input to apply a brand color with no markup change.
  - Full control: set `appearance: none` on the input and style the element directly (border, background, check indicator), driving the appearance from the `:checked` state, and keep a visible `:focus-visible` indicator.
  - Older equivalent: visually hide the native input with the `.sr-only` utility (`global.sr-only`) and draw a styled box from the associated `<label>`. The input must remain focusable and operable.
- Whether the label wraps the input or is associated by `for` / `htmlFor`.
- Whether the box is rendered before or after the label text, as long as the two remain programmatically associated.
- Whether a hint or description is shown under the label (associate it with `aria-describedby` when present).

## Don'ts
- Do not build a checkbox out of a `<div>` or `<span>` with a click handler unless a native input cannot be used; the native `<input type="checkbox">` is the baseline.
- Do not convey the checked state by appearance alone (e.g., a filled box) without the native `checked` property or `aria-checked`.
- Do not set both the native `checked` property and `aria-checked` on the same element.
- Do not hide the input with `display: none` or `visibility: hidden` when styling a custom box; that removes it from the tab order and disables keyboard operation. Use the `.sr-only` technique instead.
- Do not remove the focus ring when restyling with `accent-color` or `appearance: none`; provide a visible `:focus-visible` indicator.
- Do not bind Enter to toggle the box; a checkbox toggles on Space, and Enter submits the surrounding form.
- Do not rely on adjacent or placeholder text for the label without a programmatic association (`<label for>`, a wrapping `<label>`, `aria-labelledby`, or `aria-label`).
- Do not indicate the required state or an error with color alone; include text (e.g., "Required", "Error:") or an icon carrying an `aria-label`.
- Do not move focus to the checkbox when its inline error appears; populating the `aria-live` container is what announces it.
- Do not use a single checkbox for a set of related options that answer one question (that is a grouped pattern).

## Golden Pattern

*Provisional. Pending AT verification.*

```jsx
"use client";

import * as React from "react";

export function CheckboxDemo() {
  const [rememberMe, setRememberMe] = React.useState(false);
  const [marketing, setMarketing] = React.useState(true);
  const [agreed, setAgreed] = React.useState(false);
  const [agreeError, setAgreeError] = React.useState("");

  // Custom role="checkbox" state (used only when a native input cannot be used).
  const [parentalControls, setParentalControls] = React.useState(false);

  return (
    // Field-level inline errors only (no submit button, no form-level
    // validation). Enter does not toggle a checkbox.
    <form noValidate>
      {/* Basic: label associated by htmlFor */}
      <div>
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me on this device</label>
      </div>

      {/* With a description via aria-describedby */}
      <div>
        <input
          type="checkbox"
          id="marketing"
          checked={marketing}
          onChange={(e) => setMarketing(e.target.checked)}
          aria-describedby="marketing-hint"
        />
        <label htmlFor="marketing">Email me about new releases and offers</label>
        <p id="marketing-hint">You can unsubscribe at any time.</p>
      </div>

      {/*
        Required checkbox with a FIELD-LEVEL inline error:
        - "Required" is shown as text (not color alone).
        - The error container is always in the DOM (empty until invalid) with
          aria-live="polite", so populating it announces the error once.
        - aria-describedby always points the input at the container, so the
          error is re-announced if focus returns.
        - The error populates on blur when left unchecked, not on submit, and
          focus is never moved.
      */}
      <div>
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          required
          aria-describedby="agree-error"
          onChange={(e) => {
            setAgreed(e.target.checked);
            if (e.target.checked) setAgreeError("");
          }}
          onBlur={(e) =>
            setAgreeError(
              e.target.checked
                ? ""
                : "Error: You must agree to the Terms of Service to continue."
            )
          }
        />
        <label htmlFor="agree">
          I agree to the Terms of Service and Privacy Policy{" "}
          <span aria-hidden="true">(required)</span>
        </label>
        <p id="agree-error" aria-live="polite">
          {agreeError}
        </p>
      </div>

      {/* Disabled: native disabled attribute removes it from the tab order */}
      <div>
        <input type="checkbox" id="promo" defaultChecked disabled />
        <label htmlFor="promo">Founding-member pricing (applied)</label>
      </div>

      {/*
        Custom role="checkbox": use ONLY when a native input cannot be used.
        It takes on tabindex, aria-checked, and the Space key handler manually.
        The visual box must reflect aria-checked (shown here with a placeholder).
      */}
      <div
        role="checkbox"
        aria-checked={parentalControls ? "true" : "false"}
        tabIndex={0}
        onClick={() => setParentalControls((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            setParentalControls((v) => !v);
          }
        }}
      >
        <span aria-hidden="true">{parentalControls ? "[x]" : "[ ]"}</span> Enable
        parental controls
      </div>
    </form>
  );
}
```

## Acceptance Checks

Keyboard
- Tab moves focus to each checkbox, and the disabled checkbox is skipped.
- Space toggles the focused checkbox.
- Enter does not toggle the checkbox.
- A visible focus indicator is present on the focused checkbox.

Screen Reader
- Each checkbox is announced with its accessible name and role ("checkbox").
- The checked or unchecked state is announced and updates when toggled.
- A description associated with `aria-describedby` is announced (e.g., "You can unsubscribe at any time").
- A required checkbox is announced as required.
- The custom `role="checkbox"` control announces its role and `aria-checked` state just like the native input, and its visible box matches the announced state.

Validation
- Leaving the required checkbox unchecked (moving focus away) populates an inline error that is announced once via the `aria-live="polite"` container.
- Returning focus to the checkbox re-announces the error via `aria-describedby`.
- Focus is not moved when the error appears.
- Checking the box clears the error.
