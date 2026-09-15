---
name: Editorial Minimalism
slug: editorial
family: minimalism
description: Typography-led composition with open margins, quiet rules, and a deliberate reading rhythm.
tags:
  - minimal
  - editorial
  - typography
  - spacious
---

# Editorial Minimalism

## Overview and Design Philosophy

Treat the interface as a sequence worth reading. This variant suits journals, portfolios, knowledge products, and thoughtful product introductions. Unlike Clean Product, it prioritizes narrative hierarchy over compact repetition. Unlike Monochrome, it permits warmth and a restrained editorial accent.

Visual character: composed, literate, spacious, and human. Large type, a narrow reading measure, and asymmetric column proportions do the visual work. It is unsuitable for dense operational consoles without a more compact application sublayout.

## Core Principles

1. Establish a reading order before choosing containers.
2. Let typographic contrast replace decorative chrome.
3. Reserve margin and silence for genuinely important content.
4. Keep controls practical even when adjacent headlines are expressive.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#faf8f3` | Reading canvas |
| `surface` | `#fffefa` | Form and dialog paper |
| `ink` | `#302d29` | Text on paper |
| `muted` | `#686157` | Captions and secondary prose |
| `accent` | `#85503b` | Links and principal actions |
| `on-accent` | `#ffffff` | Accent button text |
| `line` | `#c9c2b8` | Section rules |
| `control-line` | `#82786a` | Interactive boundaries |
| `error` | `#a12638` | Inline error |
| `success` | `#326345` | Written success |
| `warning` | `#795300` | Written caution |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Headings use `ui-serif, Georgia, serif`; body and controls use `system-ui, sans-serif`. H1/display: clamp(40px, 6vw, 76px)/1.04, 400, -0.035em. H2: 40px/1.15, 400. H3: 25px/1.25, 400. Body: 17px/1.75; lead: 20px/1.65. Labels: 14px/1.4, 600. Eyebrows: 12px/1.5, 600, 0.1em uppercase, no more than six words. Captions: 13px/1.55. Statistics: serif 44px/1.1. Reading measure is 58ch; headings may use 16ch. Use real italics only for short emphasis, never entire instructions.

## Spacing

Scale: 4, 8, 12, 20, 28, 40, 64, 96px. Labels sit 8px above fields; paragraphs have 20px separation. Card contents use 20px gaps; article groups use 40px. Sections have 96px top separation. Use 40px desktop panel padding. Space follows the narrative: a lead gets more separation than two related facts.

## Layout and Grid

Container is 1180px with 48px gutters. Build a 12-column grid with 28px gaps. Hero headline spans eight columns; contextual details occupy four and align to the bottom. Reading text starts one column inward and spans six. Features are a three-column set of ruled text blocks. Do not visually reorder content with CSS; asymmetry comes from span and whitespace. Pricing remains comparable with aligned benefits even when the surrounding page is asymmetric.

## Surfaces, Borders, Radius, Shadows, and Depth

The page is one continuous paper plane. Feature cards have no fill and only a 1px top rule. Inputs and dialogs use surface. All corners are square; small checkboxes may retain native geometry. No resting shadows. A modal alone may use `0 16px 48px #302d2924`. Navigation remains in normal flow. Layer order is content 0, menus 20, overlay 40, dialog 50; do not cover the headline with sticky ornaments.

## Components

### Buttons
Primary is a square accent rectangle with white 14px/600 text, 48px minimum height and 24px horizontal padding. Secondary is an ink outline on paper. Text links remain underlined with a 3px underline offset. Avoid arrow-only calls to action. Destructive confirmation uses error fill and a literal action label. Loading keeps the button box stable and writes “Saving…” beside a static progress mark.

### Forms
Use full rectangular 1px control-line boundaries, never an ambiguous underline alone. Surface fill, 14px padding, and 48px minimum height distinguish controls from reading material. Labels use the sans stack. Group related fields with a serif legend and 28px separation. Checkboxes and radio labels remain sentence case. Errors add a concise sans-serif explanation linked to the field; retain the user's text and show an error summary on long forms.

### Cards
Feature cards begin with a quiet ordinal or eyebrow, then serif H3, prose, and an underlined link. Use a top rule and 28px top padding. Pricing adds a second lower rule; the featured plan uses a small written recommendation, not a colored slab. Statistics use large serif numerals with short sans-serif explanations. Empty states are short editorial notes with an explicit recovery link, not ornamental illustrations.

### Navigation and Menus
Navigation is a spacious 80px row with a word label and plain 14px links. Current location has an underline. Menus use opaque paper, square edges, 1px ink border, 12px padding, and 48px rows. Do not imitate print by making controls tiny. On opening, focus enters the menu; Escape returns it to the trigger.

### Tabs
Use a text index above a single fine rule. Selected text is accent with a 3px underline; other labels stay muted. Targets are 48px tall. Preserve proper tab/panel associations and arrow-key navigation. Do not use serif display sizes for tab labels.

### Modals and Overlays
A dialog reads as a short letter: serif title, sans body, fields, then actions. Use opaque surface, square corners, 40px padding, 560px maximum width, and a 38% ink backdrop. Content scrolls within 85dvh. Close stays visible in the upper corner with a 44px hit target. Avoid full-bleed decorative images in task dialogs.

### Badges and Feedback
Badges are small textual annotations with a 1px rule beneath or an outlined square label. Use words such as “Available” or “Draft”. Feedback sits near the action, separated by a thin rule. Error and success messages remain sans-serif and use explicit text rather than typographic flourish.

## Icons, Imagery, and Illustration

Use fine 1.5px line icons sparingly; words usually serve better. Images use uncropped documentary framing or a deliberate 3:2 crop, with captions beneath and no rounded corners. Keep one dominant image per reading section. Illustrations may be spare line studies on the paper background. Use original or licensed assets; explain informative images in alt text rather than repeating captions.

## Data Visualization

Present charts like editorial evidence: title, short conclusion, plot, then source/caption. Use ink for the primary series and accent for the comparison, with solid/dashed distinctions. Avoid dashboard gauges. Tables have clear horizontal rules and generous 16px cell padding; provide a text summary that communicates the finding without seeing the chart.

## Motion and Animation

Use 180ms ease-out for underline and color changes. Menus and dialogs fade in 180ms without positional movement. Reading content never reveals on scroll. Reduced motion makes all state changes immediate; no animated numbers or typewriter headlines.

## Interaction States

Hover deepens accent to #6e412f and thickens link underlines without moving text. Focus-visible is a 3px ink outline with 4px offset on paper, using a paper inner ring on dark buttons. Active buttons use #593426. Selected tabs retain both underline and text weight. Disabled controls use muted text, a dashed boundary, and native disabled behavior; put the reason in nearby prose.

## Responsive Behavior

Below 960px, remove the reading column offset and reduce section gaps to 64px. Below 640px, use 24px gutters, a single column, 40px H1, 30px H2, and 17px body. Features retain their top rules when stacked. Navigation wraps into two rows. Dialogs use 24px padding and viewport-minus-32px width. At zoom, allow all headings to wrap naturally; never clip a line for an editorial crop.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-minimalism-editorial {
  --canvas: #faf8f3;
  --surface: #fffefa;
  --ink: #302d29;
  --muted: #686157;
  --accent: #85503b;
  --on-accent: #ffffff;
  --line: #c9c2b8;
  --control-line: #82786a;
  --error: #a12638;
  --success: #326345;
  --warning: #795300;
  color: var(--ink);
  background: var(--canvas);
}
.design-minimalism-editorial *,
.design-minimalism-editorial *::before,
.design-minimalism-editorial *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

## Do

- Use serif scale and margin to create emphasis.
- Keep captions close to their images.
- Preserve the reading sequence across viewport sizes.

## Don't

- Do not style every block as a floating card.
- Do not sacrifice form boundaries for visual purity.
- Do not use centered text for long paragraphs or fake oversized drop caps in controls.

