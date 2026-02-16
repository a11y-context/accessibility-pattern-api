---
id: button.basic
stack: web/react
status: beta
tags: [button, control, action, icon-button]
aliases: [btn, primary-button, icon-button, call-to-action, cta]
summary: Native button that triggers an action. Supports text-only, icon+text, and icon-only labeling patterns.
---

# Basic Button

## Use When
- Use when the user triggers an immediate action (e.g., “Save”, “Continue”, “Dismiss”).

## Do Not Use When
- Do not use when the control navigates to a new URL (use `link`).
- Do not use when the control represents an on/off pressed state (use `button.toggle`).

## Must Haves
- Use a native `<button>` element for built-in semantics and keyboard behavior. 
- Ensure the button has an accessible name that clearly describes its purpose or action.
- For buttons with visible text, the button's inner text may serve as the accessible name. Additional context may be added for screen reader users with `aria-label` or `aria-labelledby`, or offscreen text, when needed.
- If the accessible name extends beyond the visible text, ensure the visible text appears at the beginning of the accessible name.
- For icon-only buttons, provide an accessible name using `aria-label` or `aria-labelledby`.
- Icons within buttons must be decorative (`aria-hidden="true"`).
- If the action is unavailable, disable the button using the native `disabled` attribute. (It becomes unfocusable and non-interactive.)
- Ensure a visible focus state (e.g., a 2px solid outline offset by 1-2px) around the button.

## Customizable
- Buttons with visible text don't usually need additional context for screen reader users (though they might). If they do, then an `aria-label` or offscreen element should be used.

## Don’ts
- Don’t build a button out of a `<div>` or `<span>` with `role="button"` unless you absolutely must; native `<button>` is the baseline.
- Don’t create icon-only buttons without an accessible name (no unlabeled icons). 
- Don’t use `aria-label` that conflicts with (or is wildly different from) the visible label text. Accessible names should at least begin with the visible label.
- Don’t hide focus outlines without providing a strong custom focus style.

## Golden Pattern
```jsx
import * as React from "react";

export function ButtonBasic({
  children,
  onClick,
  disabled = false,
  ariaLabel,
  leadingIcon,
  trailingIcon,
  style,
  ...rest
}) {
  const isIconOnly = children == null || (typeof children === "string" && children.trim() === "");

  if (isIconOnly && !ariaLabel) {
    // Keep this guard minimal and explicit: icon-only buttons must be labeled.
    throw new Error("ButtonBasic: icon-only buttons require ariaLabel.");
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={isIconOnly ? ariaLabel : undefined}
      style={{ ...baseButtonStyle, ...style }}
      {...rest}
    >
      {leadingIcon ? <span aria-hidden="true" style={iconWrapStyle}>{leadingIcon}</span> : null}
      {children ? <span style={labelStyle}>{children}</span> : null}
      {trailingIcon ? <span aria-hidden="true" style={iconWrapStyle}>{trailingIcon}</span> : null}
    </button>
  );
}

/** Demo: text-only, icon+text, icon-only */
export function ButtonBasicDemo() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", padding: 16 }}>
      <ButtonBasic onClick={() => alert("Saved")}>Save</ButtonBasic>

      <ButtonBasic
        onClick={() => alert("Downloaded")}
        leadingIcon={<DownloadIcon />}
      >
        Download
      </ButtonBasic>

      <ButtonBasic
        onClick={() => alert("Settings")}
        ariaLabel="Open settings"
        leadingIcon={<SettingsIcon />}
        style={{ paddingInline: 12 }}
      />
      
      <ButtonBasic disabled onClick={() => alert("Won't fire")}>
        Disabled
      </ButtonBasic>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" focusable="false">
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M5 21h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" focusable="false">
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19.4 15a7.9 7.9 0 0 0 .1-2l2-1.1-2-3.4-2.3.7a7.4 7.4 0 0 0-1.7-1l-.3-2.4H9.1l-.3 2.4a7.4 7.4 0 0 0-1.7 1l-2.3-.7-2 3.4 2 1.1a7.9 7.9 0 0 0 .1 2l-2 1.1 2 3.4 2.3-.7a7.4 7.4 0 0 0 1.7 1l.3 2.4h5.8l.3-2.4a7.4 7.4 0 0 0 1.7-1l2.3.7 2-3.4-2-1.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const baseButtonStyle = {
  appearance: "none",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: 10,
  background: "#111",
  color: "#fff",
  padding: "10px 14px",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.1,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

const iconWrapStyle = {
  display: "inline-flex",
  alignItems: "center",
};

const labelStyle = {
  display: "inline-block",
};
```

## Acceptance Checks
- Tab to the button: a visible focus indicator is present.
- Press Space or Enter: the button activates.
- Text-only button: screen reader announces the visible label.
- Icon+text button: screen reader announces the text label (icon is not redundantly announced).
- Icon-only button: screen reader announces the `aria-label` (e.g., "Open settings").
- Disabled button:
  - Cannot be activated by click/keyboard.
  - Is not focusable when `disabled` is set.
