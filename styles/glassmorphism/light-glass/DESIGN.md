---
name: Light Glass
slug: light-glass
family: glassmorphism
description: Bright, lightly frosted surfaces with crisp typography, open spacing, and restrained atmospheric color.
tags:
  - glass
  - light
  - airy
  - restrained
---

# Light Glass

## Overview and Design Philosophy

Use a bright environment and gentle surface separation to make an interface feel open. Appropriate for personal organization, collaborative planning, and approachable product tools. It differs from Dark Glass through strong dark text on light planes and from Vibrant Glass through a near-neutral atmosphere and minimal saturation.

Visual character: clear, airy, clean, and shallowly layered. Transparency is a supporting cue, not the main attraction. This system should still look coherent when every translucent layer becomes opaque.

## Core Principles

1. Favor crisp dark typography over pale-on-pale elegance.
2. Use subtle depth to group tasks, not to simulate floating objects.
3. Keep the environment low contrast and free of competing detail.
4. Make the opaque fallback a first-class presentation.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#e9f0f4` | Bright environment |
| `surface` | `#fbfdff` | Opaque fallback, fields, menus |
| `ink` | `#263948` | Primary text |
| `muted` | `#536979` | Secondary text |
| `accent` | `#315f79` | Primary action and links |
| `on-accent` | `#ffffff` | Action label |
| `line` | `#acbecb` | Panel boundary |
| `control-line` | `#718a9b` | Control boundary |
| `error` | `#a3243d` | Error text |
| `success` | `#285f43` | Success text |
| `warning` | `#735200` | Caution text |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Use `system-ui, sans-serif`. H1: clamp(36px, 5vw, 56px)/1.12, 550, -0.03em. H2: 30px/1.25, 550. H3: 21px/1.3, 600. Body: 17px/1.65. Lead: 19px/1.65. Labels: 14px/1.4, 600. Captions: 13px/1.5. Statistics: 36px/1.15, 550, tabular figures. Keep prose to 64ch. Use ordinary weights, never ultralight gray text to imply lightness. Controls and long descriptions share the same clear sans stack.

## Spacing

Scale: 4, 8, 12, 20, 28, 36, 56, 88px. Panels use 28px padding, 20px internal gaps, and 28px exterior separation. Inputs use 12px by 16px. Labels are 8px above controls and help is 4px below. Section spacing is 88px. Airiness comes from group spacing rather than oversized empty controls.

## Layout and Grid

Use a 1120px container with 36px gutters and a 12-column grid with 28px gaps. Hero uses equal halves; cards use thirds. Keep headings and panel edges aligned. The ambient background covers the entire page and remains mostly uniform; surfaces are shallow layers within a stable grid. Long forms use one 680px maximum reading pane.

## Surfaces, Borders, Radius, Shadows, and Depth

Environment is a static linear wash between #e9f0f4 and #dce9ee. Panels are `rgb(251 253 255 / 0.86)` with 12px backdrop blur, 1px line border, and 20px corners. Use `0 8px 24px #26394812` for resting panels. Inputs use opaque surface, 8px corners, and control-line edges. Buttons have 10px corners. Menus and dialogs are opaque. One blur layer only, maximum six visible panes; no shiny bevels. Layers: environment 0, content 1, navigation 10, menus 20, backdrop 40, dialog 50.

## Components

### Buttons
Primary uses solid accent with white text, 46px minimum height, 10px corners, and 22px horizontal padding. Secondary is opaque surface with a 1px control-line boundary and ink text. Text actions use accent and a visible underline. Destructive confirmation uses error fill and white text. Loading preserves geometry with a written progress label and no glass animation.

### Forms
Fields are opaque surface with 1px control-line edges, 8px corners, 12px padding, and 46px minimum height. Labels are ink and help is muted. Native checkbox/radio controls use accent. Focus never removes the boundary. Errors add a written explanation and error border; success is a local confirmation with a check and text. Do not rely on soft shadows to make input boundaries detectable.

### Cards
Use 28px padding and generous 20px spacing between icon, title, body, and action. Cards do not drift or scale on hover. Statistics use dark numerals; pricing recommendation uses a stronger accent edge and a written badge. Empty states explain the first step with one practical action. Loading remains a static neutral placeholder with an accessible status.

### Navigation and Menus
A 72px navigation row sits directly on the environment with a subtle bottom rule. Links use ink; current location has an accent underline. Dropdown menus are opaque, 12px rounded, bordered with control-line, and use 46px rows. Apply a small `0 8px 24px #26394824` shadow only to menus. Escape closes and restores focus.

### Tabs
Use a surface segmented group with a 1px control-line boundary and 10px radius. Selected tab is accent with white text; inactive labels use ink. Targets are 46px high. Provide arrow navigation, Home/End, and associated panels. Keep the surrounding region free of nested frosted rails.

### Modals and Overlays
Dialog uses opaque surface with 20px corners, 32px padding, 540px max-width, 85dvh max-height, and a 1px control-line edge. Backdrop is #263948 at 44%. Shadow is `0 20px 64px #26394833`. Keep a visible close action and logical focus order. Do not blur the entire page behind the modal.

### Badges and Feedback
Use an opaque surface capsule with a line border, 4px by 10px padding, and 13px text. Status colors apply to the label and icon with explicit wording. Toasts are opaque and should not obscure form actions. Important messages stay inline and are announced politely after completion.

## Icons, Imagery, and Illustration

Use 20px icons with 1.5px strokes. Photography should be naturally lit and softly contrasted, in 3:2 or 16:10 rectangles with 12px corners. Keep image data outside translucent text panels. Illustrations are restrained flat or fine-line compositions with ample negative space. Avoid glossy 3D decorations and unlicensed stock assets.

## Data Visualization

Use solid chart strokes and ink axis labels on an opaque surface. Accent marks the primary series; patterns or dash styles distinguish secondary series. Soft atmospheric colors are not suitable for data marks. Tables use 48px rows, visible headers, and local horizontal scrolling when required. Supply a text summary or data table.

## Motion and Animation

Color transitions use 180ms ease-out. Menus fade over 140ms; dialogs fade over 180ms with no scale. Background wash and blur remain static. No springy floating cards. Reduced motion makes state changes immediate and uses text for progress.

## Interaction States

Hover primary deepens to #274d63; secondary gains #edf3f7 fill. Focus-visible is a 3px accent outline with a 3px surface gap. Active primary uses #203f52. Disabled controls keep opaque fills and muted labels, with dashed boundaries and native semantics. Selected items include a clear indicator and accessible state. Decorative panel edges never replace control focus rings.

## Responsive Behavior

Below 900px, hero stacks and cards use two columns. Below 620px, use 20px gutters, 56px section spacing, one-column panels, 20px padding, 36px H1. Remove backdrop blur and use opaque surface on mobile. Navigation wraps, controls remain at least 46px, and dialogs use 20px padding with 16px viewport margins. Text enlargement must not force fixed-height cards to clip.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

For glass, test the composited surface over every allowed gradient endpoint, not only the base color. If a backdrop is unknown, use opaque surface. Default to opaque backgrounds and add blur only inside @supports. Provide an explicit opaque fallback for reduced transparency; disable blur on the mobile breakpoint and in forced colors. Do not lower text opacity. Browser support or GPU cost must never prevent access to content.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-glassmorphism-light-glass {
  --canvas: #e9f0f4;
  --surface: #fbfdff;
  --ink: #263948;
  --muted: #536979;
  --accent: #315f79;
  --on-accent: #ffffff;
  --line: #acbecb;
  --control-line: #718a9b;
  --error: #a3243d;
  --success: #285f43;
  --warning: #735200;
  color: var(--ink);
  background: var(--canvas);
}
.design-glassmorphism-light-glass *,
.design-glassmorphism-light-glass *::before,
.design-glassmorphism-light-glass *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

Progressive enhancement example (apply the panel opacity and blur values specified above):

```css
.glass-panel { background: var(--surface); }
@supports (backdrop-filter: blur(1px)) {
  .glass-panel { background: rgb(251 253 255 / 0.86); backdrop-filter: blur(12px); }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .glass-panel { background: var(--surface); backdrop-filter: none; }
}
```

The opaque declaration must exist outside @supports. Keep animation on opacity or small transforms only, never backdrop-filter. Use the system's mobile opaque rule even when the browser lacks the reduced-transparency media feature.

## Do

- Use dark text and explicit control boundaries.
- Keep the background quiet enough to disappear behind content.
- Check the opaque version before adding transparency.

## Don't

- Do not use white text on bright glass.
- Do not treat shadows as the only input boundary.
- Do not add bright gradients, floating bubbles, or reflective text.

