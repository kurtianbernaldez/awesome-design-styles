---
name: Clean Product Minimalism
slug: clean-product
family: minimalism
description: A calm, task-oriented system with compact hierarchy, neutral surfaces, and precise controls.
tags:
  - minimal
  - product
  - restrained
  - practical
---

# Clean Product Minimalism

## Overview and Design Philosophy

Efficiency comes from predictable relationships. Use this interpretation for planning tools, settings, workspaces, and focused product pages. Content should feel easy to scan rather than dramatically art-directed. It differs from Editorial through its compact sans-serif hierarchy and repeated modules, and from Monochrome through a small functional color vocabulary.

Visual character: quiet, balanced, flat, and dependable. A user should identify the current task before noticing the styling. Avoid this system when theatrical expression or immersive scenery is the main purpose.

## Core Principles

1. Make the next action clear: one filled primary action per local task.
2. Align repeated information before adding a divider or container.
3. Use a surface only to establish a meaningful group.
4. Preserve legibility and task completion when restraint conflicts with either.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#f6f7f9` | Page background |
| `surface` | `#ffffff` | Cards and inputs |
| `ink` | `#202a35` | Main text; on canvas or surface |
| `muted` | `#526171` | Secondary text on surface |
| `accent` | `#285a50` | Primary button and links |
| `on-accent` | `#ffffff` | Text on accent |
| `line` | `#c8cfd7` | Decorative divisions |
| `control-line` | `#74808c` | Input boundaries |
| `error` | `#a42638` | Error text on surface |
| `success` | `#246343` | Success text on surface |
| `warning` | `#765300` | Warning text on surface |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Use `system-ui, sans-serif` throughout; use `ui-monospace, monospace` only for identifiers. Display/H1: 48px/1.1, 650, -0.035em; shrink fluidly to 32px. H2: 28px/1.2, 600. H3: 20px/1.3, 600. Body: 16px/1.6, 400. Lead: 18px/1.6. Labels: 14px/1.4, 600. Captions: 13px/1.5. Numbers: 32px/1.15, 600, tabular numerals. Keep body text within 65ch. Do not uppercase navigation or compress tracking on small text.

## Spacing

Use 4, 8, 12, 16, 24, 32, 48, and 72px. Label-to-control: 8px; control-to-help: 4px; related fields: 16px; groups: 32px; sections: 72px. Card padding: 24px. Buttons: 12px vertically and 20px horizontally. Whitespace signals grouping, not luxury; do not add large voids inside routine forms.

## Layout and Grid

A centered 1120px container has 32px desktop gutters. Use a 12-column grid with 24px gaps: a hero may use 7/5 columns, cards 4/4/4, settings 3/9. A reading view uses one 65ch column. Keep repeated card titles aligned and actions at the end of a content group. In application shells, a 224px sidebar is permitted when navigation genuinely needs it. Avoid arbitrary offsets and masonry for comparable items.

## Surfaces, Borders, Radius, Shadows, and Depth

Canvas and surface provide two resting planes. Cards use a 1px line border and 10px radius; controls use 6px radius. No decorative gradients. Resting cards have no shadow. Menus use `0 8px 24px #202a351f`; dialogs use `0 20px 60px #202a3529`. Control boundaries use control-line rather than the softer divider. Depth order: content 0, sticky navigation 10, menus 20, backdrop 40, dialog 50, feedback 60.

## Components

### Buttons
Primary: accent fill, white label, 44px minimum height, 6px radius, 600 weight. Secondary: white with control-line border and ink text. Text actions are underlined links or clearly labeled buttons with a 44px hit area. Destructive actions use error fill only at confirmation. Loading keeps width and replaces the icon with a progress label; prevent repeated submissions.

### Forms
White inputs have a 1px control-line border, 12px padding, and 44px minimum height. Labels remain above controls; placeholders are examples, never labels. Textarea starts at 112px. Native selects, checkboxes, and radios use accent-color. Validation adds error text and a 2px error boundary without changing geometry. Show errors after blur or submit; retain values. Success appears below the form with the next action.

### Cards
Use an optional 20px icon, H3, short body, then one action. Keep 16px between content groups. Stats show a tabular number above a plain label. Pricing cards align benefits and buttons; highlight one tier with a 2px accent border, not a larger scale. Empty states contain a title, explanation, and recovery action; skeletons use static neutral blocks.

### Navigation and Menus
Use a 64px navigation row with text links and a thin lower divider. Current location has a short accent underline plus aria-current. Menus are opaque white, 8px padding, 44px rows, 6px corners, and restrained elevation. Outside click and Escape dismiss; opening focuses the first item. Ordinary navigation lists remain links rather than application menu roles.

### Tabs
Tabs form a baseline row with a 2px selected underline. Each target is at least 44px tall. Selected text is ink at weight 600. Arrow keys move between tabs, Home/End reach extremes; active panels are labeled by their tabs. Avoid filled pills for every navigation level.

### Modals and Overlays
Use an opaque white dialog, 10px corners, 32px padding, max-width 520px and max-height 85dvh with internal scrolling. Backdrop is ink at 42% opacity. Place cancel before the primary confirmation in reading order. Include a visible close control. Keep title, explanation, fields, and actions in a single column.

### Badges and Feedback
Use text with a small outlined capsule, 13px/1.4, 4px by 8px padding. Status is written explicitly. Toasts are opaque, lower-corner messages with no required action that disappears before it can be read; critical feedback stays inline.

## Icons, Imagery, and Illustration

Use 20px outline icons on a 24px box with 1.5px strokes. Product screenshots should explain a task and retain readable crops; use 16:10 rectangles with 6px corners. Keep illustrations sparse and diagrammatic, with the same stroke as icons. No stock lifestyle collage. Supply captions for complex screenshots and meaningful alt text; purely decorative icons are hidden from assistive technology.

## Data Visualization

Use quiet axes, directly labeled bars, and accent for the selected series. Other series use distinguishable patterns as well as colors. Tables use 48px rows, left-aligned text, right-aligned numbers, and visible header labels. Provide a data table or textual summary for every chart. Empty and zero are different states.

## Motion and Animation

Color transitions use 140ms ease-out. Menus fade over 120ms; dialogs fade and translate at most 4px over 160ms. Do not animate card positions on hover. Loading indicators may rotate only while work is pending. Reduced motion removes translation and rotation and displays a static “Working…” label.

## Interaction States

Hover darkens the primary fill to #204a42 and gives secondary controls a canvas fill. Focus-visible is a 3px accent outline with 3px offset, including links. Pressed buttons use #193d36 without scale. Selected rows have a 3px accent start border and a text label. Disabled controls retain readable muted text, a canvas fill, and the native disabled attribute; explain prerequisites nearby.

## Responsive Behavior

At 900px, reduce the hero to one column and cards to two. At 600px, use 20px gutters, 48px section spacing, one-column cards, and stacked form actions when needed. Keep navigation links wrapping or put secondary links behind an explicit menu button. Tables scroll inside a labeled region; the page itself never scrolls horizontally. Dialog padding becomes 20px and width is viewport minus 32px.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-minimalism-clean-product {
  --canvas: #f6f7f9;
  --surface: #ffffff;
  --ink: #202a35;
  --muted: #526171;
  --accent: #285a50;
  --on-accent: #ffffff;
  --line: #c8cfd7;
  --control-line: #74808c;
  --error: #a42638;
  --success: #246343;
  --warning: #765300;
  color: var(--ink);
  background: var(--canvas);
}
.design-minimalism-clean-product *,
.design-minimalism-clean-product *::before,
.design-minimalism-clean-product *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

## Do

- Repeat alignments and component dimensions.
- Use functional accent sparingly, with one main action per group.
- Test long titles and real validation messages before refining decoration.

## Don't

- Do not turn every paragraph into a card.
- Do not replace form labels with placeholders.
- Do not add floating gradients, display serifs, or bouncy motion.

