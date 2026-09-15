---
name: Dark Glass
slug: dark-glass
family: glassmorphism
description: Luminous translucent panels over a controlled dark environment, with solid controls and quiet depth.
tags:
  - glass
  - dark
  - luminous
  - layered
---

# Dark Glass

## Overview and Design Philosophy

Use atmosphere to establish depth while keeping work on stable readable planes. Suitable for media tools, focused dashboards, and evening-oriented workspaces. Dark Glass differs from Light Glass through its dark tonal range and luminous edge hierarchy, and from Vibrant Glass through a restrained environment without saturated competing fields.

Visual character: nocturnal, composed, softly layered. Glass is a surface relationship, not an excuse to blur every element. It is unsuitable for situations where the background is uncontrolled unless the opaque fallback is used.

## Core Principles

1. Bound the background before tuning a translucent surface.
2. Keep controls and long text on high-opacity planes.
3. Use light edges to separate layers, not glowing text.
4. Contrast and rendering performance override the glass effect.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#111e2c` | Dark environment base |
| `surface` | `#203447` | Opaque fallback and controls |
| `ink` | `#edf4fa` | Main text on dark planes |
| `muted` | `#bbc9d8` | Secondary text on dark planes |
| `accent` | `#a7d9ed` | Primary action fill |
| `on-accent` | `#172a39` | Primary action text |
| `line` | `#71899e` | Panel boundaries |
| `control-line` | `#91a7bb` | Solid input edges |
| `error` | `#ffb8c4` | Error text on dark planes |
| `success` | `#a9dfbb` | Success text on dark planes |
| `warning` | `#f0d399` | Caution text on dark planes |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Use `system-ui, sans-serif` with regular, 500, and 650 weights. H1: clamp(36px, 5vw, 60px)/1.08, 650, -0.035em. H2: 30px/1.2, 600. H3: 21px/1.3, 600. Body: 16px/1.65. Lead: 18px/1.6. Labels: 14px/1.4, 600. Captions: 13px/1.5. Stats: 36px/1.1, tabular numerals. Keep long text within 62ch. Avoid thin weights on translucent surfaces and never add glow or transparency to text.

## Spacing

Scale: 4, 8, 12, 16, 24, 32, 48, 80px. Glass panels use 28px padding; inputs use 12px by 16px; labels sit 8px above fields. Related content gaps are 16px and section gaps 80px. Leave 24px between panels so the background and edges remain distinguishable.

## Layout and Grid

Use a 1160px container with 32px gutters and a 12-column grid, 24px gaps. Hero uses 7/5 columns; repeated panels use equal thirds. Keep the ambient layer behind the entire page, not separately behind every card. Do not overlap content panels. Place extended reading and data entry in a single high-opacity pane.

## Surfaces, Borders, Radius, Shadows, and Depth

The environment is a static radial wash from #29465d to canvas, with no pixels brighter than the wash. Panels use `rgb(32 52 71 / 0.88)`, `backdrop-filter: blur(16px)`, a 1px line border, and 16px corners. Inputs are opaque surface with 8px corners. Buttons use 8px corners. Depth uses `0 12px 32px #050d183d`; menus use 12px corners and opaque surface. Only outer panels blur: never nest backdrop filters. Limit visible blurred panes to roughly six. Layers: ambient 0, content 1, nav 10, menu 20, backdrop 40, dialog 50.

## Components

### Buttons
Primary is opaque accent with dark text, 44px minimum height, 8px corners, and 20px horizontal padding. Secondary is opaque surface with control-line border and ink text. No transparent primary buttons. Destructive confirmation uses error fill with on-accent text after validating contrast. Loading preserves dimensions and writes “Working…” with a small progress indicator.

### Forms
Use opaque surface inputs with a 1px control-line border, 12px padding, 16px text, and 44px minimum height. Placeholder uses muted, while the persistent label uses ink. Native checkbox/radio accents use accent. Error text is error-colored and includes an explicit message linked by aria-describedby; add a 2px error boundary. Never lower field opacity on focus or put moving scenery behind input values.

### Cards
Panels hold a small icon, H3, short body, and one action with 16px gaps. Stats use tabular ink numerals and muted labels. Pricing recommendation uses an accent edge and written badge, not a stronger blur. Empty states remain high-opacity with a clear next action. Loading uses static opaque shapes; no shimmer across translucent panes.

### Navigation and Menus
Navigation is a 68px high-opacity strip with a lower line border; keep it in normal flow unless task navigation needs sticking. Current links have an accent underline. Menus are opaque surface with 1px control-line edge, 8px padding, and 44px rows. Escape dismisses; focus returns to the trigger. Menus must remain readable even above another panel.

### Tabs
A high-opacity segmented rail contains 44px targets. Selected tab is accent fill with on-accent text; inactive labels use ink. Use arrow keys, Home/End, aria-selected, and associated panels. The selected pill is functional; do not turn all passive labels into glowing capsules.

### Modals and Overlays
Dialog uses opaque surface, 16px corners, 32px padding, 560px max-width, and 85dvh max-height. Its backdrop is #07121e at 72%. A 1px control-line edge distinguishes the dialog from the dimmed page. Keep focus trapped using native dialog behavior, close with Escape, and restore the opener. Do not apply a second full-screen blur.

### Badges and Feedback
Badges use a solid surface, 1px line border, 999px radius, 4px by 10px padding, and a written status. Feedback uses opaque panels. Error, success, and caution colors are for text/icons on the dark surface, not arbitrary full-panel fills. Critical messages persist inline.

## Icons, Imagery, and Illustration

Use 20px icons with 1.75px strokes, no glow. Media should be dark-toned original imagery with rectangular 16:10 crops and 12px corners; captions stay outside the image. Ambient gradients are static nonsemantic decoration. Do not position imagery beneath text-bearing translucent panels unless the composite is revalidated. Illustrations should have clear silhouettes and restrained cool highlights.

## Data Visualization

Charts live on opaque surface. Use accent for one series, solid/dashed distinctions for additional series, ink labels, and muted grid lines. Avoid translucent bars whose values visually depend on the background. Provide a table or text alternative; tables use 48px rows and tabular figures.

## Motion and Animation

Controls transition color over 160ms ease-out. Menus fade over 140ms; dialogs fade and move at most 6px over 180ms cubic-bezier(.2,.8,.2,1). Backgrounds never move, and blur radius never animates. Reduced motion removes transforms, fades, and spinning indicators; show a static loading label.

## Interaction States

Hover primary becomes #c2e8f5; secondary becomes #2b4358. Focus-visible is a 3px accent outline with 3px offset and a dark inner gap. Active primary is #91c4d9. Disabled controls use opaque surface and muted labels with dashed control-line boundaries. Selected rows add an accent edge and check mark. Do not express disabled state by making the whole pane transparent.

## Responsive Behavior

Below 900px, stack hero content and use two-column panels. Below 600px, use 20px gutters, 48px section gaps, single-column panels, 20px panel padding, and 36px H1. Disable backdrop-filter on small screens to reduce compositing cost; use opaque surface. Dialog width is viewport minus 32px. Navigation wraps; tables scroll in a labeled local region.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

For glass, test the composited surface over every allowed gradient endpoint, not only the base color. If a backdrop is unknown, use opaque surface. Default to opaque backgrounds and add blur only inside @supports. Provide an explicit opaque fallback for reduced transparency; disable blur on the mobile breakpoint and in forced colors. Do not lower text opacity. Browser support or GPU cost must never prevent access to content.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-glassmorphism-dark-glass {
  --canvas: #111e2c;
  --surface: #203447;
  --ink: #edf4fa;
  --muted: #bbc9d8;
  --accent: #a7d9ed;
  --on-accent: #172a39;
  --line: #71899e;
  --control-line: #91a7bb;
  --error: #ffb8c4;
  --success: #a9dfbb;
  --warning: #f0d399;
  color: var(--ink);
  background: var(--canvas);
}
.design-glassmorphism-dark-glass *,
.design-glassmorphism-dark-glass *::before,
.design-glassmorphism-dark-glass *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

Progressive enhancement example (apply the panel opacity and blur values specified above):

```css
.glass-panel { background: var(--surface); }
@supports (backdrop-filter: blur(1px)) {
  .glass-panel { background: rgb(32 52 71 / 0.88); backdrop-filter: blur(16px); }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .glass-panel { background: var(--surface); backdrop-filter: none; }
}
```

The opaque declaration must exist outside @supports. Keep animation on opacity or small transforms only, never backdrop-filter. Use the system's mobile opaque rule even when the browser lacks the reduced-transparency media feature.

## Do

- Test contrast against the lightest allowed background composite.
- Keep dialogs, menus, and fields opaque.
- Maintain a small, fixed set of glass layers.

## Don't

- Do not stack translucent cards inside translucent cards.
- Do not animate blur, glow text, or put video behind forms.
- Do not assume white text is readable on any glass surface.

