---
name: Raw Web Brutalism
slug: raw-web
family: brutalism
description: Exposed structure, direct language, and hard-edged controls with an intentionally utilitarian rhythm.
tags:
  - brutalist
  - raw
  - utilitarian
  - structural
---

# Raw Web Brutalism

## Overview and Design Philosophy

Make the document's structure visible. Use this system for independent tools, experimental indexes, public records, and small utilities. Raw Web values directness and functional exposure, not a historical browser imitation. It differs from Editorial Brutalism's poster scale and Colorful Brutalism's assertive field composition.

Visual character: blunt, mechanical, dense but readable. Borders reveal how information is grouped; type does not pretend to be luxurious. This interpretation should not introduce broken layouts, fake errors, or inaccessible “roughness”.

## Core Principles

1. Expose groups with honest rules and explicit labels.
2. Prefer a recognizable native control to a decorative substitute.
3. Let content determine height; nothing is clipped to preserve a rigid box.
4. Roughness belongs to appearance, never navigation or comprehension.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#eeeee8` | Working canvas |
| `surface` | `#fffff8` | Readable cells |
| `ink` | `#282822` | Text and heavy frame |
| `muted` | `#59594e` | Secondary text |
| `accent` | `#343f93` | Underlined links and primary actions |
| `on-accent` | `#ffffff` | Text on action fill |
| `line` | `#282822` | Structural borders |
| `control-line` | `#282822` | Control edges |
| `error` | `#aa2338` | Error on surface |
| `success` | `#275b36` | Success on surface |
| `warning` | `#705000` | Caution on surface |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Use `ui-monospace, monospace` for headings, navigation, and controls; use `system-ui, sans-serif` for long prose. H1: clamp(32px, 5vw, 52px)/1.05, 700, -0.04em. H2: 28px/1.15, 700. H3: 20px/1.3, 700. Body: 16px/1.6. Lead: 18px/1.6. Labels: monospace 14px/1.5, 700. Captions: monospace 13px/1.5. Numbers: 36px/1.1. Keep prose under 68ch. Uppercase is permitted for short section markers only; long headings and user input remain sentence case.

## Spacing

Use 4, 8, 12, 16, 24, 32, and 56px. Control padding: 10px by 14px; label gap: 8px; cell padding: 20px; section gap: 56px. Dense lists use 12px padding, but hit areas remain 44px. The grid may look tightly assembled; paragraph line spacing must still be comfortable.

## Layout and Grid

A 1200px container has 24px gutters. Use a two-column hero with a 3:2 ratio and a three-column feature grid separated by visible 2px rules. Related cards can share borders like a ledger. Keep source order linear. Tables and labeled lists are preferred over decorative dashboards. Do not simulate old fixed-width layouts that overflow phones.

## Surfaces, Borders, Radius, Shadows, and Depth

All corners are square. Canvas and surface are flat fills. Use 2px ink borders for groups and controls, 1px for table rows, 4px for the page's main section rule. No gradients, blur, or soft shadows. Primary buttons alone may have a 3px by 3px hard ink offset. Menus and dialogs use a 2px frame. Layer order: document 0, menu 20, backdrop 40, dialog 50.

## Components

### Buttons
Primary uses accent fill, white monospace text, 2px ink border, 44px minimum height, and a 3px hard offset. Secondary uses surface fill and no shadow. Text links are underlined at rest. Destructive actions use a literal warning label and error fill only in the confirmation. Loading shows “[working]” without cycling punctuation; width is reserved.

### Forms
Inputs resemble clearly bounded fields: 2px ink border, surface fill, 12px padding, and 16px text. Use real select, checkbox, and radio elements. Labels are visible and may include a short field number. Help text remains proportional sans for readability. An error adds “Error:” and a strong start rule; it does not shake or clear the field. Long forms include a linked error summary.

### Cards
Cells begin with a monospace index, then a bold heading and readable body. Keep borders shared where possible; avoid double 4px seams. Entire cells are not clickable when they contain multiple actions. Pricing uses a simple comparison table or equal cells with a written recommended label. Statistics pair large numerals with explicit units. Empty states say what is missing and how to add it.

### Navigation and Menus
Navigation is a visible horizontal register, with 2px dividers and underlined links, at least 64px tall. Current location uses a bracketed label or a heavy underline with aria-current. Menus use opaque surface, 2px borders, 8px padding, 44px rows, no soft elevation. Escape dismisses, and focus returns to the trigger.

### Tabs
Use adjacent rectangular controls with 2px borders. Selected tab is ink with surface-colored text and a visible “selected” state for assistive technology. Do not imitate terminal shortcuts unless implemented. Support arrow keys and Home/End with one tab stop in the tablist. Panel starts immediately below the control group.

### Modals and Overlays
Use a surface dialog with 2px ink frame, 24px padding, 560px max-width, and a 60% ink backdrop. Title and close control share a ruled header. Content is limited to 85dvh and scrolls internally. Confirmation labels name the actual operation. Dialog appearance is direct and immediate.

### Badges and Feedback
Use bracketed text or squared 1px labels. Write “Warning”, “Saved”, and “Error” explicitly. Notifications are static framed messages near the originating action. Progress is a labeled native progress element with a written percentage where known; do not fake a percentage for unknown work.

## Icons, Imagery, and Illustration

Use small, blunt 2px line icons in 24px boxes. Prefer literal labels to decorative symbols. Images keep rectangular edges and factual captions; do not add fake low-resolution degradation. Technical diagrams can use the same border vocabulary. All assets must be original or licensed; distressed screenshots must not hide information.

## Data Visualization

Charts use hard rules, visible tick labels, and unrounded bars. Accent highlights one important series; others use hatching or dash patterns. Tables expose header and row boundaries, use tabular numbers, and include units. Provide a text/table alternative and explicit sorting controls.

## Motion and Animation

No entry animations. A primary press moves 2px toward its hard shadow over 70ms linear; other state changes are immediate. Reduced motion removes translation and swaps the shadow state instead. No blinking cursors, marquee text, or fake loading delays.

## Interaction States

Hover underlines interactive titles and changes primary fill to #293277. Focus-visible is a 3px accent outline with a 3px surface-colored gap. Active primary controls reduce the offset shadow; secondary controls invert to ink and surface text. Disabled controls use dashed borders, no shadow, and a nearby explanation. Never use a forbidden cursor as the only disabled indication.

## Responsive Behavior

Below 900px, the hero stacks and features use two columns. Below 620px, use 16px gutters, one-column cells, 32px H1, and 40px section gaps. Navigation wraps as a labeled list. Wide tables scroll in their own named regions. Dialogs become viewport-minus-24px with 20px padding. Break long identifiers with overflow-wrap:anywhere without corrupting copied values.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-brutalism-raw-web {
  --canvas: #eeeee8;
  --surface: #fffff8;
  --ink: #282822;
  --muted: #59594e;
  --accent: #343f93;
  --on-accent: #ffffff;
  --line: #282822;
  --control-line: #282822;
  --error: #aa2338;
  --success: #275b36;
  --warning: #705000;
  color: var(--ink);
  background: var(--canvas);
}
.design-brutalism-raw-web *,
.design-brutalism-raw-web *::before,
.design-brutalism-raw-web *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

## Do

- Make structure and actions explicit.
- Preserve useful native browser behavior.
- Keep the visual edges harsh and the wording clear.

## Don't

- Do not imitate broken HTML or intentionally misalign hit targets.
- Do not add soft card shadows or decorative pills.
- Do not sacrifice readable prose to all-monospace density.

