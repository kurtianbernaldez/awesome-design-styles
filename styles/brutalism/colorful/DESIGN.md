---
name: Colorful Brutalism
slug: colorful
family: brutalism
description: Assertive color fields, heavy frames, and large tactile controls with a clear task hierarchy.
tags:
  - brutalist
  - colorful
  - graphic
  - bold
---

# Colorful Brutalism

## Overview and Design Philosophy

Give different content groups the force of independent signs. Use this variant for creative communities, energetic learning tools, and participatory projects. It differs from Raw Web's exposed utility and Editorial's type-dominant paper composition: here color fields and emphatic block boundaries carry the page.

Visual character: loud, graphic, immediate, and physical. Color is assigned to stable roles rather than randomized by component. Avoid the system where a quiet reading environment is essential.

## Core Principles

1. Assign color by role and keep that assignment stable.
2. Use a strong outline to make controls unmistakable.
3. Keep text on flat, tested fills.
4. Enthusiasm must not obscure the primary action or validation.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#f5ebd6` | Page field |
| `surface` | `#fff9ec` | Reading and input field |
| `ink` | `#302139` | All text on light color fields |
| `muted` | `#625169` | Supporting text on surface |
| `accent` | `#f7be39` | Primary action fill |
| `on-accent` | `#302139` | Primary action label |
| `line` | `#302139` | Heavy frames |
| `control-line` | `#302139` | Input boundaries |
| `error` | `#a01f38` | Error text on surface |
| `success` | `#265b38` | Success text on surface |
| `warning` | `#765000` | Warning text on surface |
| `pink` | `#efadd0` | Feature field; ink text only |
| `mint` | `#91d7b8` | Statistics field; ink text only |
| `lilac` | `#c8b2f1` | Supporting feature field; ink text only |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Use `system-ui, sans-serif` with 800–900 weight for headings; `ui-monospace, monospace` may label ordinals. H1: clamp(40px, 6vw, 72px)/1.02, 900, -0.04em. H2: 36px/1.1, 800. H3: 24px/1.2, 800. Body: 17px/1.6, 400. Lead: 20px/1.5. Labels: 15px/1.3, 700. Captions: 13px/1.5. Stats: 48px/1.05, 900. Body measure is 60ch. Use heavy weight rather than outlines or text shadows; never stretch glyphs.

## Spacing

Scale: 4, 8, 12, 20, 28, 40, 64, 88px. Buttons use 14px by 24px padding. Cards use 28px; card content gaps 20px. Groups are 40px apart and sections 88px. Reserve at least 8px outside every hard shadow so it never collides with neighboring content.

## Layout and Grid

Use a centered 1160px container with 32px gutters and 28px gaps. Hero uses a 3:2 split. Features use three equal blocks; each field can carry a different assigned color, but the same component role keeps its color across pages. Pricing and statistics stay aligned. Avoid random rotation and overlapping stickers; the stable grid lets the palette be expressive.

## Surfaces, Borders, Radius, Shadows, and Depth

Frames are 3px ink, corners 0. Primary controls use a 4px by 4px hard ink shadow; feature blocks may use 6px by 6px. Inputs have no shadow. No soft shadows, gradients, or blur. Reading copy stays on surface or a flat light field. Use pink for discovery cards, mint for statistics, lilac for supporting information, and accent only for primary actions or one featured price. Layer order: content 0, menu 20, backdrop 40, dialog 50.

## Components

### Buttons
Primary is yellow accent with ink text, 3px frame, 4px hard offset, 48px minimum height. Secondary is surface with ink text and frame, no resting shadow. Text links are underlined with 2px thickness. Destructive actions use surface with error text and an explicit label until confirmation; confirmed destructive fill uses error with white. Loading keeps the shadow stable and writes “Working…”.

### Forms
Fields use surface fill, 3px ink border, 14px padding, and a 48px minimum height. Do not tint input interiors according to validity. Native checkboxes and radios use ink accent-color. Error messages sit in a surface block with an error-colored start rule and “Error:” prefix. Retain values and offer correction. Group labels use 15px bold type; help remains 15px regular.

### Cards
A discovery card uses pink, a 3px frame, 28px padding, and optional 6px hard offset. Place title, prose, and action in one column. Supporting cards use lilac; statistics use mint with large ink numbers. Featured pricing uses accent plus a written “Recommended” badge. Do not make noninteractive cards lift on hover. Empty cards keep the same structure but offer a clear creation action.

### Navigation and Menus
Navigation is a surface strip with a 3px lower edge and 72px minimum height. Current location has an ink underline and weight 800. Menus are opaque surface with 3px frame and 4px hard shadow, 8px padding, 48px rows. Highlight hovered rows with accent; selected rows also show a check. Escape restores focus to the trigger.

### Tabs
Tabs are large outlined rectangles, 48px tall. Selected tab has accent fill and an inset 3px lower ink line. Others use surface. Maintain arrow-key navigation, Home/End, and correctly labeled panels. Do not assign a different unrelated color to every tab state.

### Modals and Overlays
Use an opaque surface dialog, 3px frame, 8px hard shadow, 32px padding, 560px maximum width and 85dvh maximum height. Backdrop is ink at 60%. A short title strip may use lilac, but body and fields stay on surface. Close is a 48px square action within the dialog boundary.

### Badges and Feedback
Use squared 2px framed labels with 6px by 10px padding. Status includes words and optionally an icon; palette fields do not encode success or failure. Toasts have surface fill and 3px frame. Keep essential errors inline until fixed. Progress bars are rectangular, ink-outlined, with a written value.

## Icons, Imagery, and Illustration

Use 24px icons with 2px strokes and simple silhouettes. Images use 4:3 rectangular crops with a 3px frame; avoid mixing many photographic treatments. Illustration can be original flat geometry using the defined field colors and ink outlines. Keep decorations out of controls and text regions. Do not copy mascots or signature brand characters.

## Data Visualization

Use chunky bars with ink outlines and direct labels. Use pink, mint, and lilac only with distinct patterns and ink labels; their meaning is specified in a legend. Axes remain accurate and zero baselines are honored for bars. Provide a table alternative. Tables use 3px outer frames and 1px internal dividers.

## Motion and Animation

Buttons press toward their shadow by 2px over 90ms ease-out; release restores the offset. Hover does not bounce. Dialogs appear immediately. Do not animate decorative blocks indefinitely. Reduced motion removes translation and changes shadow size alone. Unknown-duration progress uses a written loading message, not a flashing fill.

## Interaction States

Hover primary changes to #edac23, with the same ink label. Secondary gains accent fill. Focus-visible is a 3px ink outline plus 3px surface gap so it survives every field color. Pressed controls reduce shadow to 1px. Disabled controls lose shadows and use surface fill, muted text, dashed borders, and disabled semantics. Selected cards get a checked label, not merely another color.

## Responsive Behavior

Below 920px, stack the hero and use two feature columns. Below 640px, use 20px gutters, 48px section gaps, single-column blocks, and 40px H1. Reduce card shadows to 3px and keep room around them. Actions stack when labels wrap. Navigation wraps with 48px targets. Dialogs have 20px padding and 20px viewport margins to accommodate the shadow.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-brutalism-colorful {
  --canvas: #f5ebd6;
  --surface: #fff9ec;
  --ink: #302139;
  --muted: #625169;
  --accent: #f7be39;
  --on-accent: #302139;
  --line: #302139;
  --control-line: #302139;
  --error: #a01f38;
  --success: #265b38;
  --warning: #765000;
  --pink: #efadd0;
  --mint: #91d7b8;
  --lilac: #c8b2f1;
  color: var(--ink);
  background: var(--canvas);
}
.design-brutalism-colorful *,
.design-brutalism-colorful *::before,
.design-brutalism-colorful *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

## Do

- Keep color roles stable and readable.
- Make controls visibly bounded and generously sized.
- Leave physical space for hard shadows.

## Don't

- Do not randomize colors on every render.
- Do not place white body text on pastel fields.
- Do not use bouncing controls, gradients, or exaggerated overlapping stickers.

