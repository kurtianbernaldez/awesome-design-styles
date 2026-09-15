---
name: Vibrant Glass
slug: vibrant-glass
family: glassmorphism
description: Expressive gradient environments with substantial translucent panes and confident, readable controls.
tags:
  - glass
  - vibrant
  - gradient
  - expressive
---

# Vibrant Glass

## Overview and Design Philosophy

Make a saturated environment part of the composition while sheltering content on stable dark panes. Suitable for creative tools, audio communities, and expressive personal workspaces. Unlike Dark Glass, the background is a visible part of the identity; unlike Light Glass, the palette deliberately creates energy. Content planes remain dark so changing scenery does not change reading contrast.

Visual character: immersive, chromatic, substantial, and controlled. The system is not a collection of transparent stickers. It is inappropriate for uncontrolled user-uploaded backgrounds without opaque surfaces.

## Core Principles

1. Separate expressive scenery from the reading plane.
2. Spend saturation on the environment and the main action.
3. Make glass panes substantial enough to protect typography.
4. Prefer static atmosphere and responsive performance to spectacle.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#241c43` | Environment base |
| `surface` | `#342747` | Opaque fallback and controls |
| `ink` | `#faf0ff` | Primary text on dark panes |
| `muted` | `#d5c5e0` | Secondary text |
| `accent` | `#f2c37d` | Primary action fill |
| `on-accent` | `#35243f` | Action label |
| `line` | `#a38cac` | Panel boundaries |
| `control-line` | `#bba4c4` | Control edges |
| `error` | `#ffc0cf` | Error text |
| `success` | `#b6ecc9` | Success text |
| `warning` | `#ffe0a8` | Caution text |
| `violet` | `#6745a1` | Environment only |
| `berry` | `#94486b` | Environment only |
| `teal` | `#246879` | Environment only |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Use `system-ui, sans-serif`. H1: clamp(40px, 6vw, 68px)/1.05, 750, -0.04em. H2: 34px/1.15, 700. H3: 23px/1.25, 650. Body: 17px/1.65. Lead: 20px/1.55. Labels: 15px/1.4, 650. Captions: 13px/1.5. Stats: 42px/1.1, 700, tabular figures. Use 60ch body measure and 15ch display measure. Keep all text opaque and single-color. Gradient text, outlined letterforms, and ultralight headings are excluded.

## Spacing

Scale: 4, 8, 12, 20, 28, 40, 64, 96px. Panels use 32px padding; contents use 20px gaps. Controls use 14px by 24px and labels have 8px separation. Keep 28px between panes and 96px between sections so the environment remains visible without intruding into reading areas.

## Layout and Grid

Use a 1200px container, 36px gutters, and a 12-column grid with 28px gaps. Hero is 7/5; repeated cards use thirds. One continuous gradient spans the showcase. Panels remain aligned and nonoverlapping; use larger composition and color contrast instead of rotating cards. Pricing stays equal-width and data-heavy sections use one opaque pane.

## Surfaces, Borders, Radius, Shadows, and Depth

Environment uses static radial gradients of violet at the upper left, berry at the upper right, and teal below, over canvas. Text-bearing panes use `rgb(52 39 71 / 0.90)`, 20px backdrop blur, 1px line border, 24px corners, and `0 16px 40px #170e343d`. Inputs and menus use opaque surface. Controls use 12px corners. Only outer panels blur, no more than six visible panes. Dialogs are opaque with 24px corners. Layers: environment 0, content 1, navigation 10, menu 20, backdrop 40, dialog 50.

## Components

### Buttons
Primary is opaque accent with on-accent text, 48px minimum height, 12px corners, and 24px horizontal padding. Secondary is opaque surface with control-line border and ink label. No gradient-filled controls. Destructive confirmation uses error fill with on-accent text, after contrast validation. Loading reserves width, disables duplicate submission, and includes a readable progress label.

### Forms
Use opaque surface inputs with 1px control-line borders, 12px corners, 14px padding, and 48px minimum height. Labels and values use ink. Native checkbox/radio accents use accent. Errors add a 2px error border and a written explanation; successful submission produces a persistent inline message. Do not let background colors become input validation colors.

### Cards
A pane contains an icon, strong H3, readable prose, and one main action with 20px gaps. Feature cards share one surface treatment rather than adopting random gradients. Pricing recommendation uses an accent border and explicit badge. Stats are opaque ink numerals; avoid animated counters. Empty states use an original small icon and a concrete next step. Loading uses static placeholders on the protected surface.

### Navigation and Menus
Navigation is a 76px high-opacity surface strip with a line edge and 16px corners when inset. Current links have an accent underline. Menus are opaque surface with a control-line border, 12px corners, 8px padding, and 48px rows. No gradient or blur inside menus. Escape dismisses, focus enters on opening, and returns to the trigger on closing.

### Tabs
A solid segmented rail has 12px corners and 48px targets. Selected tab is accent with dark text; inactive labels use ink. Arrow keys and Home/End navigate a properly associated tab/panel structure. Do not color each tab according to a different gradient region.

### Modals and Overlays
Dialog is opaque surface, 24px corners, 32px padding, 580px maximum width, 85dvh maximum height. A 1px control-line edge and shadow distinguish it from the #160f2c 76% backdrop. Keep scenery outside the dialog. Provide visible close/cancel actions, a clear title, and safe focus restoration. Do not make the modal itself a transparent spectacle.

### Badges and Feedback
Badges use opaque surface, line border, capsule corners, 5px by 12px padding, and explicit status text. Accent may mark a recommended plan but does not mean success. Feedback remains on opaque panels with icon-plus-text semantic cues. Critical failures stay next to the task and offer recovery.

## Icons, Imagery, and Illustration

Use 24px icons with 1.75px strokes and opaque ink. Media can be expressive original photography or illustration, in 16:10 crops with 16px corners. Keep informative imagery separate from ambient scenery. Illustrations may use the gradient environment colors, but functional diagrams need solid strokes and labels. No embedded brand marks, glossy text, or copied album art.

## Data Visualization

Place charts on opaque surface with ink labels. Use accent plus distinguishable solid/dashed patterns, and direct labels for series. Do not sample random background colors for data. Tables use 52px rows, tabular numerals, and visible sort controls. Supply a text summary and accessible data alternative.

## Motion and Animation

Controls use 160ms ease-out color changes. Menus fade in 140ms; dialogs fade and translate at most 8px in 200ms cubic-bezier(.2,.8,.2,1). Gradients and blur are static. No cursor-following light, parallax, flashing scenery, or endless floating objects. Reduced motion removes transforms and fades and replaces spinners with a static status label.

## Interaction States

Hover primary uses #ffdaa1; secondary uses #443452. Focus-visible is a 3px accent outline with a 3px dark surface gap. Active primary uses #dfad64. Disabled controls stay opaque with muted text and a dashed control-line border; remove interactive shadows. Selected rows carry a check mark and accent edge. Never use background hue shifts as the only state signal.

## Responsive Behavior

Below 940px, hero stacks and feature panes become two columns. Below 640px, use 20px gutters, 56px section gaps, single-column panes, 20px panel padding, and 40px H1. Turn blur off and use opaque surface on mobile; keep the static gradient outside panels. Dialog uses 20px padding and 16px viewport margins. Navigation wraps and all controls retain 48px targets.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

For glass, test the composited surface over every allowed gradient endpoint, not only the base color. If a backdrop is unknown, use opaque surface. Default to opaque backgrounds and add blur only inside @supports. Provide an explicit opaque fallback for reduced transparency; disable blur on the mobile breakpoint and in forced colors. Do not lower text opacity. Browser support or GPU cost must never prevent access to content.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-glassmorphism-vibrant-glass {
  --canvas: #241c43;
  --surface: #342747;
  --ink: #faf0ff;
  --muted: #d5c5e0;
  --accent: #f2c37d;
  --on-accent: #35243f;
  --line: #a38cac;
  --control-line: #bba4c4;
  --error: #ffc0cf;
  --success: #b6ecc9;
  --warning: #ffe0a8;
  --violet: #6745a1;
  --berry: #94486b;
  --teal: #246879;
  color: var(--ink);
  background: var(--canvas);
}
.design-glassmorphism-vibrant-glass *,
.design-glassmorphism-vibrant-glass *::before,
.design-glassmorphism-vibrant-glass *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

Progressive enhancement example (apply the panel opacity and blur values specified above):

```css
.glass-panel { background: var(--surface); }
@supports (backdrop-filter: blur(1px)) {
  .glass-panel { background: rgb(52 39 71 / 0.90); backdrop-filter: blur(20px); }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .glass-panel { background: var(--surface); backdrop-filter: none; }
}
```

The opaque declaration must exist outside @supports. Keep animation on opacity or small transforms only, never backdrop-filter. Use the system's mobile opaque rule even when the browser lacks the reduced-transparency media feature.

## Do

- Bound the scenery and protect every text plane.
- Use saturation to establish environment, not status.
- Check low-performance and opaque-fallback presentations.

## Don't

- Do not put white text directly over bright gradients.
- Do not nest backdrop filters or animate the scenery.
- Do not use transparency to hide weak information hierarchy.

