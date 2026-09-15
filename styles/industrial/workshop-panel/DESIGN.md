---
name: Workshop Industrial
slug: workshop-panel
family: industrial
description: Durable-looking panels, explicit labels, and restrained safety accents for practical interfaces.
tags:
  - industrial
  - workshop-panel
  - complete-system
---

# Workshop Industrial

## Overview and Design Philosophy

Durable-looking panels, explicit labels, and restrained safety accents for practical interfaces. This is one original interpretation of the industrial family, not a definitive rulebook for the entire aesthetic. It is intended for complete websites and application surfaces that benefit from this visual character. Its layout, material choices, and control conventions below define why it exists as a separate system.

Use a 3:2 hero and three equal functional panels. Align labels and numeric readouts. A narrow section rule may signal a change of task, but the layout should feel serviceable rather than militarized.

Treat the visual character as a way to organize content. Do not invent confusing behavior to make the interface feel more stylistic. For dense operational work, use the same palette and controls with smaller section gaps; do not import another variant's unrelated card language.

## Core Principles

- Label controls explicitly.
- Build hierarchy through the specified type, spacing, and composition together.
- Keep reading order, meaningful labels, and a recognizable primary action intact.
- If a decorative treatment conflicts with readability, keyboard access, or accurate data, simplify that treatment first.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#dce0dd` | Page environment; ink text |
| `surface` | `#f0f2ec` | Opaque reading and control plane |
| `ink` | `#2d3635` | Main text on canvas or surface |
| `muted` | `#59635f` | Secondary text on surface |
| `accent` | `#76531b` | Primary action and selected state |
| `on-accent` | `#ffffff` | Text on the accent fill |
| `line` | `#78847d` | Grouping rules |
| `control-line` | `#78847d` | Visible input and control boundaries |
| `error` | `#9a2540` | Error text on surface |
| `success` | `#285c3b` | Success text on surface |
| `warning` | `#735200` | Warning text on surface |

Use `ink` and `muted` on the opaque reading surface; use `on-accent` only on the primary accent fill. Status tokens are text/icon colors on surface, accompanied by explicit wording. Do not use a decorative field to mean success or failure. Selection uses accent with on-accent text. Link text must remain distinguishable through an underline, even when a color also differentiates it.

The palette defines this presentation only. Do not derive another mode by blindly inverting colors. Any photography, additional field color, gradient, or texture requires a fresh contrast check. Preserve the opaque reading plane when embedding this system into another page.

## Typography

Use monospaced headings and labels with plain sans body text. Statistics use tabular numerals. Uppercase section markers are short; instructions remain sentence case.

| Role | Stack | Size / line height | Weight and tracking |
|---|---|---|---|
| Display / H1 | `ui-monospace, monospace` | fluid 36–56px / 1.08 | 700; -0.03em |
| H2 | `ui-monospace, monospace` | 30px / 1.2 | 700; -0.02em |
| H3 | `ui-monospace, monospace` | 22px / 1.3 | 650; normal |
| Body | `system-ui, sans-serif` | 17px / 1.65 | 400; normal |
| Lead | `system-ui, sans-serif` | 19px / 1.6 | 400; normal |
| Labels and buttons | `system-ui, sans-serif` | 14px / 1.4 | 600; normal |
| Caption / metadata | `ui-monospace, monospace` where specified, otherwise body stack | 13px / 1.5 | 400; normal |
| Statistics | display stack | 36px / 1.15 | 650; tabular figures |

Use a 60–65ch maximum prose measure, narrower where this interpretation specifies it. Let headings wrap naturally. Use installed system fonts; there are no required font downloads or proprietary font assets. If a fallback changes line lengths, adjust the layout instead of shrinking text until it fits. Keep labels horizontal and translate complete phrases without fixed-width clipping.

## Spacing

Use 4/8/12/16/24/32/48/64px. Group controls tightly within a panel and separate tasks by 32px. Keep a minimum 44px action target despite the workshop density.

Use 8px from label to field, 4–8px from field to help, 20px between form fields, and 24–32px between task groups. Standard controls have 12px vertical and 20px horizontal padding with a minimum 48px height. Card padding is 24px unless the surface guidance gives a stronger role-specific value. Separate unrelated page sections by 64px at wide widths. Convert these reference pixels to rem in implementations that respect user text settings.

## Layout and Grid

Use a 3:2 hero and three equal functional panels. Align labels and numeric readouts. A narrow section rule may signal a change of task, but the layout should feel serviceable rather than militarized.

The outer container is at most 1160px wide, with 28px gutters and 24px gaps. Use CSS grid with `minmax(0, 1fr)` tracks so long content cannot enlarge the page. Use flex wrapping for action groups and navigation. Cards grow with content; do not enforce fixed text heights. Comparable pricing keeps the same benefit order and aligned actions even if decorative feature blocks have unequal spans.

## Surfaces, Borders, Radius, Shadows, and Depth

Use opaque pale metal-like panels, 2px seams, almost-square corners, and a small lower edge. Safety amber is reserved for a main action or a written caution. Never use hazard stripes as a generic background.

Reference card boundary: 2px where a frame is used; reference corner radius: 2px. Surface shadow: `0 3px 0 #a3ada7`. Controls generally use 2px corners unless their component treatment specifies a more precise shape. Content stays at layer 0, navigation at 10 when sticky, menus at 20, backdrop at 40, dialog at 50, and transient feedback at 60. Avoid creating stacking contexts on every card. Overlays must remain above all decorative treatments.

## Components

Primary buttons are amber-brown with white labels and clear rectangular boundaries. Secondary buttons use pale panels. Inputs are inset but retain strong borders and visible units. Cards have a label strip and flat content area; pricing is a factual comparison without faux specifications. Navigation uses a hard lower seam. Tabs are connected rectangular segments. Menus and dialogs use opaque panels and explicit action names rather than symbolic switches.

### Buttons

Use one filled primary action per local task, with a 48px minimum target and explicit verb label. Secondary actions remain visibly bounded; text links are underlined. Destructive actions use an explicit confirmation and error-colored text on surface, or an independently contrast-tested error fill. Loading preserves the button's width, disables duplicate submission, and includes written progress. Icon-only actions need accessible names and the same target size.

### Forms

Use persistent labels, opaque inputs, a visible control-line boundary, and 17px editable text. Textareas start at 112px tall and can grow. Selects, checkboxes, and radio groups retain native semantics; group choices with a fieldset and legend. Placeholder text is an example, never the label. Associate help and errors with aria-describedby. Validate after blur or submission, preserve values, and explain how to fix an error. A long form includes a linked error summary. Never shake or recolor the entire form as its only feedback.

### Cards

Arrange a short index or icon, H3, body, then action, using 16–24px internal gaps. Distinguish passive cards from clickable ones; do not give passive cards hover elevation. If a card contains several links, do not wrap it in another link. Statistics show explicit units and tabular numerals. Pricing uses equal comparison criteria and a written recommendation. Empty states explain what is missing and offer one useful next action. Loading states use stable placeholders or a text status rather than endless decorative animation.

### Navigation and Menus

Global navigation is a 64–76px row that expands when links wrap. Mark the current location with aria-current and the specified visible underline or rail. Keep menu surfaces opaque with 8px outer padding and 48px rows. Navigation dropdowns can use ordinary lists of links; do not add application-menu roles without implementing their keyboard model. Escape dismisses and restores the trigger. Clicking outside dismisses without losing input elsewhere.

### Tabs

Use a labeled tablist, one selected tab, and a corresponding named tabpanel. Targets are at least 48px high. Arrow keys move among tabs, Home/End reach the extremes, and only the active tab is in the sequential tab order. Selected styling persists without hover. Long labels wrap or the tab strip scrolls within its own region; the whole page must not overflow. Do not use color as the only selection cue.

### Modals and Overlays

Use an opaque surface, visible control-line frame, 32px padding, maximum width 560px, and maximum height 85dvh with internal scrolling. Backdrop uses ink at 60% opacity. Keep a visible close control, a concise title, body, fields if needed, and actions in source order. Native dialog is preferred: trap focus while modal, support Escape, and restore the opener on close. Do not render essential dialog text into a decorative image. Menus do not trap focus.

### Badges and Feedback

Badges use explicit short text, 13px type, 4px by 8px padding, and a visible boundary. Passive badges do not resemble buttons. Use words plus optional icons for success, warning, and error. Critical feedback stays inline until resolved. A noncritical toast can disappear after enough reading time, but must not contain the only route to a required action. Announce completion through a polite live region.

## Icons, Imagery, and Illustration

Use original workshop or material photographs outside controls, with rectangular crops. Icons use robust 2px strokes. Charts use direct values and clear units; warnings include words and symbols. Do not fabricate technical readings for decoration, and provide a data table alternative.

Use a consistent 20–24px icon box and readable 1.75–2px strokes unless the visual rule above requires a different weight. Keep meaningful image captions outside the crop. Informative images need useful alt text; decorative images have empty alt text. Every asset must be original or appropriately licensed, with attribution retained when required. Do not copy logos, unique branded layouts, proprietary assets, or recognizable commercial components.

## Data Visualization

Charts use direct values and clear units; warnings include words and symbols. Do not fabricate technical readings for decoration, and provide a data table alternative.

Charts must communicate the same conclusion without relying on hue alone: combine color with labels, line styles, or patterns. Provide an accessible table or equivalent textual values. Distinguish zero, missing, and loading. Tables use visible column headers, right-aligned numbers, 48px minimum interactive rows, and a labeled local scroll region on narrow screens. Sort controls state the current direction. Decorative perspective, texture, or shadow must not change the apparent value of a mark.

## Motion and Animation

Use 80ms linear color changes and immediate press depth. No alarm flash, animated caution stripes, or mechanical sound. Reduced motion is static.

Only animate properties with a clear functional purpose. Do not delay content until an entrance effect completes. An unknown-duration operation uses written progress rather than a fabricated percentage. Honor prefers-reduced-motion with immediate state changes and a static loading label.

## Interaction States

- **Hover:** change the action fill or underline while preserving contrast and geometry. A text label remains readable throughout. Never reveal essential actions only on hover.
- **Focus-visible:** use a 3px accent or ink outline with a 3px surface-colored gap. On an accent-filled button, the separated outer ring must remain visible against the surrounding surface. Do not clip outlines with container overflow.
- **Active / pressed:** use the surface-depth behavior above; where no depth is part of the system, use a stronger boundary or label emphasis. Keep the hit target stationary.
- **Selected:** retain the specified underline, filled segment, or rail and expose aria-selected or aria-current. A check mark or text cue supports color.
- **Disabled:** use readable muted text, an opaque surface, a dashed control boundary, and native disabled semantics. Remove interactive shadow/translation and explain prerequisites nearby.
- **Error / success:** use explicit wording, the semantic text token, and an icon or start rule. Retain user input and make the recovery action available.

## Responsive Behavior

At 960px, reduce multi-card groups to two columns. At 900px, stack the hero in source order and remove deliberate desktop span asymmetry. At 640px, use 20px gutters, 20px card interiors, 48px section gaps, one-column cards and pricing, and 36px H1 / 28px H2. Keep body text at its normal size. Navigation wraps into a second row rather than hiding every link.

Reduce large shadows or outer decorative frames on phones so they do not create horizontal overflow. Remove nonessential margin patterns. Dialogs use 20px padding and at least 16px viewport margins. Forms remain one column. Tables scroll only in their labeled container. Test at 320 CSS pixels, 200% text enlargement, and 400% zoom; long words and translated labels wrap without covering another control.

## Accessibility

Require 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. The documented opaque text and control token pairs are tested; final images, fills, hover treatments, and composites still require verification. Never make opacity reduction the only disabled cue. Keep text as HTML and preserve browser zoom.

Use semantic header, nav, main, sections, and footer; provide a skip link and sequential heading levels. Every interaction works with keyboard, touch, and pointer. Standalone targets are at least 44×44px, with 48px preferred here. Keep focus unobscured and restore it after dismissing overlays. Use native form and dialog behavior where possible, accessible names for icons, and associated error messages. Avoid announcements on every keystroke.

Honor reduced motion. In forced-colors mode, remove decorative fills/shadows as needed, allow system Canvas/CanvasText/ButtonText/Highlight colors, and preserve solid control outlines. Do not suppress system color adjustments. If the presentation loses its decoration, it must still retain clear grouping, labels, state, and reading order.

## Implementation Guidance

Start with scoped tokens, then implement the type hierarchy and grid before decorative treatment:

```css
.design-industrial-workshop-panel {
  --canvas: #dce0dd;
  --surface: #f0f2ec;
  --ink: #2d3635;
  --muted: #59635f;
  --accent: #76531b;
  --on-accent: #ffffff;
  --line: #78847d;
  --control-line: #78847d;
  --error: #9a2540;
  --success: #285c3b;
  --warning: #735200;
  color: var(--ink);
  background: var(--canvas);
}
.design-industrial-workshop-panel * { box-sizing: border-box; }
```

Scope tokens and component rules to the design root, including portals and dialog surfaces. Avoid leaking them into the surrounding application. Implement the specified opaque surfaces first, then add only the permitted border, radius, shadow, and motion treatments. The preview uses one shared component set; it is a representative implementation, not a separate source of design rules.

Verify navigation, a hero, features, statistics, cards, pricing, a testimonial, form validation, tabs, menus, and a modal together. Test long content, empty states, loading, disabled actions, keyboard use, mobile stacking, and reduced motion. Check both visual fidelity and practical task completion. Do not reuse another family's unexamined rules to fill gaps.

When mixing manually, name exactly which region this document controls, preserve one owner per component, and retest contrast and focus at boundaries. Never average palettes or merge component rules automatically. Content can adapt; the philosophy, hierarchy, and surface relationships are the invariant parts of this interpretation.

## Do

- Label controls explicitly.
- preserve units.
- reserve caution signals for caution.
- Preserve the readable control and feedback behavior when adapting the visual composition.

## Don't

- Do not use tiny technical text, decorative hazards, or unlabeled toggle-like ornaments.
- Do not use a color swap as a substitute for the system's composition and component rules.
