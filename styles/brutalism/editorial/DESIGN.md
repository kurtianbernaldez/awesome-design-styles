---
name: Editorial Brutalism
slug: editorial
family: brutalism
description: Poster-scale typography, asymmetric blocks, and uncompromising rules arranged in a readable sequence.
tags:
  - brutalist
  - editorial
  - poster
  - expressive
---

# Editorial Brutalism

## Overview and Design Philosophy

Create the force of a public notice while preserving the order of a usable interface. Suitable for cultural programs, independent publishing, event platforms, and expressive portfolios. It differs from Raw Web through deliberately large display type and unequal spans, and from Colorful through a tightly limited ink-and-paper palette.

Visual character: declarative, compressed, graphic, and confrontational. The headline owns the composition; controls remain plainly usable. Use elsewhere for dense data-entry work where the oversized hierarchy would compete with the task.

## Core Principles

1. Make one typographic statement dominate each section.
2. Create asymmetry through unequal spans, not arbitrary overlap.
3. Keep supporting copy in a quiet, readable register.
4. Reading order and control clarity override poster effects.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#f4f0e8` | Main sheet |
| `surface` | `#fffdf7` | Control and dialog sheet |
| `ink` | `#302822` | Text and rules |
| `muted` | `#655b52` | Supporting copy |
| `accent` | `#92351e` | Principal action and short editorial marker |
| `on-accent` | `#ffffff` | Action label |
| `line` | `#302822` | Structural rules |
| `control-line` | `#302822` | Form boundaries |
| `error` | `#a32238` | Error text |
| `success` | `#305a35` | Success text |
| `warning` | `#735000` | Caution text |

Use ink and muted on canvas/surface, and on-accent on accent. Semantic text colors belong on the documented reading surface. These pairs are the starting contract; validate final rendered states. Do not infer a second color mode by inversion. Text selection uses accent with on-accent text.

## Typography

Display headings use `Impact, Haettenschweiler, "Arial Narrow", sans-serif`, falling back to a heavy system sans; do not download commercial fonts. H1: clamp(48px, 8vw, 104px)/0.98, 900, -0.025em, uppercase. H2: 48px/1.02, 900. H3: 27px/1.1, 800. Body uses `system-ui, sans-serif`, 17px/1.65. Lead: 20px/1.6. Labels: 14px/1.4, 700. Captions: `ui-monospace, monospace`, 13px/1.5. Stats: display 56px/1.05. Limit display measure to 12ch and body to 60ch. Allow heading wrapping; condensed fallback differences must not create clipping.

## Spacing

Scale: 4, 8, 16, 24, 32, 48, 72, 104px. Headline-to-lead gap: 24px. Section gap: 104px. Controls: 12px by 24px. Cards: 24px internal padding and 32px content gaps. Heavy rules get 24px breathing room. A deliberately uneven section cadence is allowed only when it reinforces content hierarchy.

## Layout and Grid

Use a 1240px container, 40px gutters, and a 12-column grid with 24px gaps. Hero splits 8/4; features may split 6/3/3. Major headlines sit flush with a strong rule, and secondary text aligns beneath the start of its own column. Do not rotate text, cover body copy, or use negative margins to fake a poster. Comparable prices retain equal columns and common action alignment.

## Surfaces, Borders, Radius, Shadows, and Depth

Square edges everywhere. Major section rules are 4px ink; card boundaries are 2px; fine captions may use 1px rules. Resting elements have no shadows. One inverted ink section is permitted per page, with surface-colored text and matching high-contrast controls. Menus and modals remain opaque surface with 3px frames. No blur, bevels, soft glow, or translucent overlays beyond the backdrop. Layers: content 0, menus 20, backdrop 40, dialog 50.

## Components

### Buttons
Primary: square accent block, white bold sans text, 48px minimum height, 2px ink border, 24px horizontal padding. Secondary: ink outline on surface. Labels remain short and sentence case even beside uppercase headings. Destructive confirmations use error fill and specific wording. Loading is a stable “Saving…” label, never scrolling type.

### Forms
Use surface fields with 2px ink borders and 14px padding. Group fields beneath 24px bold sans legends, not poster-sized headings. Labels remain above, body-size help below. Native radio and checkbox controls are acceptable and should have 48px label hit areas. Validation adds a written error and a strong start marker. Do not move fields or scale them during validation.

### Cards
Use a large ordinal, heavy top rule, H3, and compact prose. Features may differ in width according to importance, but shared demo content must stay in the same order. Pricing is an equal-column exception: the recommended tier has a 4px top rule and written badge. Stats use oversized display figures with quiet captions. Empty states are short announcements with a useful action.

### Navigation and Menus
A 76px navigation strip uses a 3px lower rule, a bold text title, and 14px links. Selected location gains a thick underline. Menus use 3px frames and 48px rows, without rotation or overlap. Keep focus and selected states separate. Escape closes menus and restores focus.

### Tabs
Tabs read like section labels in a program: bold sans, 48px targets, and a 4px selected underline. Keep the inactive row quiet; do not make each label a headline. Implement tab/panel semantics, arrow navigation, and Home/End. Long labels wrap only if all items retain usable targets.

### Modals and Overlays
Dialog is a 600px opaque sheet, 3px ink frame, 32px padding, max-height 85dvh. Backdrop is ink at 65%. Title uses 36px display but body stays 17px sans. Keep the close action in an independent 48px box, never superimposed over title text. Actions sit beneath a 2px rule.

### Badges and Feedback
Badges are uppercase short labels in squared ink-outlined boxes, 13px/700, with 6px by 10px padding. Critical messages use sentence case body text and explicit status. Do not transform full alerts to uppercase. Progress uses a rectangular bar with a textual status.

## Icons, Imagery, and Illustration

Use bold 2px icons, rectangular image crops, and high-contrast original photography. A 4:3 dominant image may occupy the smaller hero column; captions sit outside the crop. Sparse typographic or geometric illustration is permitted if it does not compete with the display headline. Avoid copied publication mastheads, torn-paper logos, and branded poster compositions.

## Data Visualization

Charts behave like printed infographics: strong baseline, few ticks, directly labeled values, and clear source text. Use accent only for the key comparison and patterns for other series. Avoid exaggerated axes for visual drama. Tables use bold headers and 2px group rules; include a readable summary or table alternative.

## Motion and Animation

Color changes take 100ms linear. Menus and dialogs appear without sliding. No scroll reveals, text scramble, bouncing labels, or marquee motion. A hover underline can change thickness without shifting layout. Reduced motion removes even the short transition.

## Interaction States

Hover primary fill becomes #762916; links gain a heavier underline. Focus-visible uses a 3px accent outline separated by a 3px surface ring; inverted sections use a surface outline. Active controls use ink fill and white text. Disabled buttons use muted text and a dashed frame, with no display effects. Selection always has a persistent line or label.

## Responsive Behavior

Below 980px, use a 7/5 hero and two-column features. Below 680px, stack all content in source order, use 20px gutters, 48px H1 and 36px H2, and 64px section spacing. Reduce rules to 3px where needed but keep their structural role. Navigation wraps without horizontal page overflow. Dialog padding is 24px with 16px viewport margins. Long headings must wrap instead of being cropped.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

## Implementation Guidance

Start by defining these tokens on a scoped root, then implement the component and layout rules above. This is a complete system: do not import missing rules from a sibling variant. The typography stacks use installed system fonts and require no proprietary font download. If an openly licensed substitute is introduced, verify its license, fallback metrics, and line wrapping.

```css
.design-brutalism-editorial {
  --canvas: #f4f0e8;
  --surface: #fffdf7;
  --ink: #302822;
  --muted: #655b52;
  --accent: #92351e;
  --on-accent: #ffffff;
  --line: #302822;
  --control-line: #302822;
  --error: #a32238;
  --success: #305a35;
  --warning: #735000;
  color: var(--ink);
  background: var(--canvas);
}
.design-brutalism-editorial *,
.design-brutalism-editorial *::before,
.design-brutalism-editorial *::after { box-sizing: border-box; }
```

Use rem for text and spacing equivalents with a 16px reference root; do not override the user's root font size. Use CSS grid with `minmax(0, 1fr)`, fluid headings, and `overflow-wrap: anywhere` for untrusted long strings. Preserve native form behavior. Scope this system to its container when embedding it, including portal/dialog surfaces; do not leak its tokens into surrounding application chrome.

Implementation order: establish the canvas and type hierarchy; build the responsive grid; apply component surfaces and geometry; implement all interactive states; then add only the permitted depth and motion. Verify a navigation, hero, feature set, statistics, form, tabs, pricing, testimonial, and dialog together. Test empty content, long labels, validation errors, disabled controls, keyboard navigation, and reduced-motion presentation. Confirm all assets are original or appropriately licensed.

The family identity and this variant's philosophy are invariant. Content length and grid collapse can adapt. When mixing manually, name the exact region and its chosen document, keep one owner for each component, and recheck contrast, focus, and stacking at the boundary. Do not automatically average tokens across systems.

## Do

- Use size and unequal spans for deliberate emphasis.
- Pair large declarations with comfortable supporting text.
- Test fallback fonts and long headlines.

## Don't

- Do not overlap meaningful text for atmosphere.
- Do not treat every UI label as a poster headline.
- Do not animate or rotate controls to appear rebellious.

