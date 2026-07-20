# iOS / SwiftUI Component Taxonomy

The planned component set for the iOS/SwiftUI corpus: the full list of component patterns, the Foundations (`global.*`) rules, the naming convention, and where each accessibility technique lands. **Read this before authoring or proposing an iOS/SwiftUI pattern** so families and names stay consistent.

Informed by the CVS Health iOS SwiftUI Accessibility Techniques project (Apache-2.0). Techniques are re-expressed in original prose per this corpus's style guide; nothing is copied verbatim.

## Naming convention

- **`family.variant`**, lowercase ASCII, dot-separated. Multiword segments use kebab-case (`text-field`, `date-picker`). The default variant is `.basic`.
- **Family = the cross-stack accessibility semantic, not the SwiftUI type or HIG catalog name.** The on/off control is `switch.basic` (not `toggle.basic`) even though the SwiftUI type is `Toggle`, so it stays coherent with the web `switch.*` family and the VoiceOver "Switch" announcement.
- **Variant = an accessibility-distinct sub-form.** One SwiftUI type that renders several ways becomes several variants (`select.menu`, `select.segmented`, `select.wheel`).
- **The SwiftUI/HIG name lives in `aliases` and the `title`, never the ID.** `switch.basic` carries `Toggle`, `UISwitch` in `aliases` so a dev searching either term still lands on it.
- **Many CVS "techniques" are behaviors/modifiers, not components.** Those become `global.*` Foundations rules that components reference rather than restate.

## The button / row / link cluster (settled)

The trickiest boundary, resolved against Apple HIG plus the Fluent UI Apple, Skyscanner Backpack, and Kiwi Orbit native design systems:

- `button.basic` — `Button`. An in-place action; does not change location.
- `list.row` — a `NavigationLink` rendered as a row inside a `List`. The navigable drill-in row: the whole row is the target, it reads as a button to VoiceOver, a trailing disclosure chevron signals the drill-in. Distinct from `button.basic`.
- `link.basic` — `Link(destination:)`. The Link control: opens a URL or webview, carries `.isLink`, VoiceOver says "link".
- `link.inline` — a Markdown or `AttributedString` `.link` run inside a `Text`. An inline hyperlink in a paragraph. Its own pattern because its VoiceOver exposure is unreliable, unlike the standalone Link control.
- In-app push/pop navigation is **not a component**: it is a `NavigationStack` transition. Its focus-management rule (focus lands on the new screen's header on push, returns to the triggering row on pop) is `global.navigation-focus`.
- An action styled to look like a link (Orbit's `ButtonLink`) is `button.basic` to assistive tech; it is a Don't (do not blur the button/link affordance), not a component.

## Components

Legend: ✅ authored · ☆ recommended first wave.

### Actions
| ID | SwiftUI | What it is |
|---|---|---|
| `button.basic` ✅ | `Button` | In-place action |
| `button.toggle` ✅ | `Button` + name change / `.isSelected` | In-context on/off toggle (Mute, Bold) |

### Links
| ID | SwiftUI | What it is |
|---|---|---|
| `link.basic` ✅ | `Link(destination:)` | Opens a URL / webview (`.isLink`) |
| `link.inline` ✅ | `Text` Markdown / `AttributedString` `.link` | Hyperlink inside a paragraph |

### Navigation and rows
| ID | SwiftUI | What it is |
|---|---|---|
| `list.row` ✅ | `NavigationLink` in a `List` | Navigable drill-in row (whole-row target + chevron) |
| `tab-bar.basic` | `TabView` | Switch top-level app sections |
| `toolbar.basic` | `.toolbar` | Nav/action bar items |
| `menu.basic` ✅ | `Menu` | Pull-down list of commands |

### Text input and forms
| ID | SwiftUI | What it is |
|---|---|---|
| `text-field.basic` ✅ | `TextField` / `SecureField` | Single-line text entry |
| `form.validation` | error identification + focus-to-error | Form error handling |
| `combobox.autocomplete` | `.searchable` + suggestions | Search field with suggestions |

### Selection
| ID | SwiftUI | What it is |
|---|---|---|
| `switch.basic` ✅ | `Toggle` | Persistent on/off setting |
| `checkbox.basic` ✅ | `Toggle` / `.isSelected` | Independent binary, form-submitted |
| `radio.basic` ✅ | custom + `.isSelected` | One from a mutually exclusive set |
| `select.menu` ✅ | `Picker(.menu)` | Pop-up single choice |
| `select.segmented` ✅ | `Picker(.segmented)` | Segmented single choice (2 to 5) |
| `select.wheel` ✅ | `Picker(.wheel)` | Wheel single choice |
| `date-picker.basic` ✅ | `DatePicker` | Date or time |
| `listbox.basic` | `List` with selection | Multi-select list |

### Value adjusters
| ID | SwiftUI | What it is |
|---|---|---|
| `slider.basic` ✅ | `Slider` | Continuous range (`accessibilityAdjustableAction`; no `.adjustable` trait) |
| `stepper.basic` ✅ | `Stepper` | Discrete increment / decrement |

### Overlays and feedback
| ID | SwiftUI | What it is |
|---|---|---|
| `dialog.alert` ✅ | `.alert` | Blocking message + actions |
| `dialog.confirmation` ✅ | `.confirmationDialog` | Action sheet |
| `dialog.modal` ✅ | `.sheet` / `.fullScreenCover` | Modal sheet |
| `dialog.nonmodal` | `.popover` | Popover |
| `progress.basic` | `ProgressView` | Determinate / indeterminate status |

### Containers, data, and media
| ID | SwiftUI | What it is |
|---|---|---|
| `list.basic` | `List` | Static list container |
| `table.basic` | `Table` | Data grid |
| `card.basic` | grouped surface | Card (tappable or static) |
| `carousel.basic` | horizontal paging | Carousel |
| `chart.basic` | Swift `Charts` | Chart + audio graph |
| `accordion.basic` | `DisclosureGroup` | Expand / collapse |
| `image.basic` | `Image` | Decorative / informative / functional (roles are variants) |
| `video-player.basic` | `VideoPlayer` | Video + captions |
| `map.basic` | `Map` | Map |

Later / niche: `drag-drop.basic`, `tip.basic` (TipKit).

## Foundations (`global.*` rules)

Referenced by components, not authored as component pages. Rules marked ✅ are authored in `global_rules.md` today.

`touch-target-size` ✅ · `focus-visible` ✅ · `accessible-name` · `value` · `hint` · `traits` · `hidden` · `custom-control-representation` ✅ (`accessibilityRepresentation`; the key custom-control rule) · `grouping` (`.combine` vs `.contain`) · `focus-management` ✅ (`@AccessibilityFocusState`) · `meaningful-names` (WCAG 2.5.3) · `headings` · `language` · `custom-actions` (custom / adjustable / magic-tap) · `escape-action` · `custom-rotor` · `announcements` ✅ · `reading-order` · `navigation-focus` ✅ (push/pop focus) · `text-contrast` + `non-text-contrast` · `dynamic-type` ✅ · `respect-system-settings` (dark mode, reduce motion, increase contrast, etc.) · `reflow` · `form-instructions` · `redundant-entry` · `page-title`

Skipped: A11yCheck / SwiftLint / XCTestAccessibility (tooling), `AccessibilityDetection` (anti-pattern-adjacent), `AccessibilityIdentifier` (test hooks).

## Recommended first wave

`link.basic` then `link.inline` then `list.row` (these three resolve the redirects the button files point at), then `text-field.basic`, `checkbox.basic`, `slider.basic`, `stepper.basic`, `select.menu`, `dialog.alert`. Author these prerequisite globals in the same wave so components reference rather than inline: `text-contrast`, `non-text-contrast`, `dynamic-type`, `custom-control-representation`, `navigation-focus`.

## Authoring pipeline

Each new iOS pattern is authored on its own PR branch. New patterns are `status: beta` from the start (the unmerged branch isolates the work in progress; see `CONTRIBUTING.md` § Status ladder):

1. **AI drafts** the pattern from CVS + Apple docs: Use When / Do Not Use When, Must Haves, Customizable, Don'ts, a minimal SwiftUI Golden Pattern, and Acceptance Checks as prose grouped by iOS AT method (Traits & semantics / VoiceOver / Switch Control & Full Keyboard Access / Dynamic Type). Annotates provenance and lists what a human must verify on device.
2. **Maintainer enriches** on the branch: WCAG success-criterion citations, Apple-doc links, trait-precision review, schema calls.
3. **On-device AT pass** (VoiceOver + Switch Control) is the mandatory gate before merge. Only after it: bump `catalog_revision`, add release notes, merge.

Conform to `schema/style-guide.md` (the conventions) and `schema/pattern-template.md` (the format).
