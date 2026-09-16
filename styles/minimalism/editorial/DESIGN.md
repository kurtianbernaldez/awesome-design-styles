---
name: Editorial Minimalism
slug: editorial
family: minimalism
description: "Typography-led minimalism: a magazine-like opening, generous reading space, serif contrast, and almost no card furniture."
tags:
  - minimal
  - editorial
  - typography
  - spacious
---

# Editorial Minimalism

## Overview and Design Philosophy

Typography-led minimalism: a magazine-like opening, generous reading space, serif contrast, and almost no card furniture.

Use a 3:2 hero with a 64px gap, aligned at the bottom. The regular-weight serif H1 reaches 84px with a 1.04 line height. Keep a narrower marginal workspace with an italic subheading. Features follow 2:1:1 proportions; the quotation begins roughly one quarter into the grid.

This is an original, independently usable interpretation of the family. Its defining relationships must remain visible across landing pages, working screens, forms, and overlays; changing the palette alone does not establish this design language.

## Core Principles

- Preserve the defining composition and material together.
- The cream canvas carries most content directly.
- Let the control construction explain state and hierarchy.
- Do not substitute a bold geometric SaaS headline, centered card grids, or luxury ornament for the typographic hierarchy.
- Keep text, reading order, keyboard access, and error recovery clear even when decoration is expressive.

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

Use ink and muted text on their documented reading surfaces. Body links use ink with a persistent underline; bright filled-action colors must not be reused as low-contrast link text. Accent/on-accent is the tested filled-action pair; a raised neutral button instead uses ink or accent text on surface. Status colors always have words or icons as a second cue. Additional field colors are specified in the construction rules below; do not infer arbitrary color substitutions.

The cream canvas carries most content directly. Panels become thin top rules with no fill or shadow. The workspace begins with a 4px double rule. Reserve physical framing for temporary overlays and editable fields.

## Typography

Use a 3:2 hero with a 64px gap, aligned at the bottom. The regular-weight serif H1 reaches 84px with a 1.04 line height. Keep a narrower marginal workspace with an italic subheading. Features follow 2:1:1 proportions; the quotation begins roughly one quarter into the grid.

| Role | Font stack | Size and rhythm |
|---|---|---|
| Display | `Georgia, ui-serif, serif` | Use the display scale and weight described above; 34–40px on phones unless specified below |
| Section heading | `Georgia, ui-serif, serif` | 32px / 1.2; 28px on small screens |
| Card heading | `Georgia, ui-serif, serif` | 22px / 1.3; wrap naturally |
| Body | `system-ui,sans-serif` | 17px / 1.6–1.7; regular weight |
| Lead | body stack | 18px / 1.6; no more than 44ch |
| Control label | body stack | 14px / 1.4; 600 weight |
| Caption and index | body or monospace stack | 12–13px / 1.5; secondary information only |
| Statistics | display stack | 30–48px / 1.1; tabular figures where supported |

Keep paragraphs below 65ch. Never use display tracking or condensed letterforms for lengthy error messages. Preserve live text, browser zoom, and fallback fonts. Barlow Condensed and Silkscreen, when specified, are open-license fonts; retain their OFL notices if distributed. The preview bundles them locally. Other stacks use system fallbacks and require no remote font service.

## Spacing

Scale: 4, 8, 12, 20, 28, 40, 64, 96px. Labels sit 8px above fields; paragraphs have 20px separation. Card contents use 20px gaps; article groups use 40px. Sections have 96px top separation. Use 40px desktop panel padding. Space follows the narrative: a lead gets more separation than two related facts.

## Layout and Grid

Use a 3:2 hero with a 64px gap, aligned at the bottom. The regular-weight serif H1 reaches 84px with a 1.04 line height. Keep a narrower marginal workspace with an italic subheading. Features follow 2:1:1 proportions; the quotation begins roughly one quarter into the grid.

Use a container no wider than 1180px unless this interpretation explicitly uses the full page. The default gutter is 48px. Set flexible grid tracks with minmax(0, 1fr), allow action rows to wrap, and keep cards content-sized. Hero, workspace, statistics, features, quotation, pricing, contact form, and footer remain in that source order. Change visual arrangement without assigning a contradictory keyboard order.

## Surfaces, Borders, Radius, Shadows, and Depth

The cream canvas carries most content directly. Panels become thin top rules with no fill or shadow. The workspace begins with a 4px double rule. Reserve physical framing for temporary overlays and editable fields.

Use the construction example below for precise borders, radius, backgrounds, and shadow recipes. Decoration belongs to the containing region; text and hit targets remain clear. Keep ordinary content at layer 0, menus around 20, the modal backdrop at 40, dialogs at 50, and feedback above that. Native dialog belongs in the top layer; do not trap it inside a transformed card. Avoid clipping focus rings with overflow hidden. A passive surface does not gain interactive elevation simply because the pointer crosses it.

## Components

Use compact dark actions and quiet outlined secondary actions. Keep icon tools small and economical. Selection is an underline; forms remain plainly bounded. Do not turn editorial elegance into a sea of floating white cards.

### Buttons

Use the variant’s button material above for primary, secondary, and icon actions. Keep at least 44×44px targets; use 48px for principal actions. Each task has one clearly identifiable primary action and a verb label. Icon controls need an accessible name; toggle buttons expose aria-pressed and a persistent filled icon or inset state. Loading keeps the label or a written progress state and prevents duplicate submission without changing width. Disabled controls retain readable labels, use native disabled behavior, remove movement, and explain any prerequisite nearby.

### Forms

Carry the specified surface into editable wells without putting texture or decorative imagery behind text. Use visible persistent labels, 16px or larger editable text, and a minimum 44px control height. Give multiline fields at least 112px initial height. Group radio and checkbox sets with fieldset and legend. Native checkboxes or switches retain their checked state, keyboard access, and accessible name; sliders expose a label and current value. Validate after blur or submission, retain entered values, connect errors with aria-describedby, and explain recovery. Placeholder text is an example rather than a label. Provide a linked error summary for long forms.

### Cards

Use the surface and region construction above. A card is a content group, not necessarily a raised rectangle. Keep a heading, explanation, optional status, and action in a predictable order with 16–24px internal spacing. Passive regions have no misleading hover lift. Do not wrap multiple nested links in a second card link. Pricing compares the same criteria in the same order and states recommendations in words. Empty and loading states remain inside the intended content space without inventing decorative activity.

### Navigation and Menus

Navigation adopts the framing and density described above while keeping recognizable links. Mark the current destination with aria-current and a persistent underline or structural rail. Allow wrapping rather than shrinking labels. Menus use an opaque reading surface, 8px surrounding padding, and at least 44px link rows; preserve the variant’s border and corner language. Use ordinary link lists for navigation menus. Escape and outside click dismiss; return focus to the trigger when dismissal is keyboard-driven. Do not add application-menu roles without their full keyboard behavior.

### Tabs

Use a stable underline or accent rail unless the construction specifies a filled, inset, beveled, or framed selected tab. Use a labeled tablist with one selected tab, aria-selected, aria-controls, and a named tabpanel. Arrow keys move within the set; Home/End move to its ends. Only the selected tab is in the sequential tab order. Keep labels legible at narrow widths with an internally scrollable strip or wrapping supported by the implementation. Switching does not reset unrelated input.

### Modals and Overlays

Use the opaque surface token and the variant’s framing around a calm reading area. A dialog has a concise heading, supporting text, close action, and one clear primary task. Use 24–32px interior padding, maximum width 560px, maximum height 85dvh, and internal scrolling. Keep at least 16px viewport clearance. Use a native dialog where available to trap focus, support Escape, and restore the opener. Backdrop dims the environment without making the dialog’s text translucent. Menus never trap focus.

### Badges and Feedback

Follow the badge construction specified above, using 13px readable text and 4–8px vertical padding. State is written explicitly: status color alone is insufficient. A passive badge must not resemble an actionable tool. Keep errors inline until resolved; announce completed actions through a polite status region. Noncritical toasts may dismiss after enough reading time, but cannot hold the only route to a required action.

## Icons, Imagery, and Illustration

If imagery is needed, use a small number of carefully captioned photographs with a consistent crop. Keep headlines as selectable type and allow italic contrast in quotations.

Use a consistent 20–24px icon box and roughly 1.8–2px line weight, adjusted for the variant’s visual density. Decorative imagery has empty alt text or is hidden from the accessibility tree; meaningful images have useful alt text and captions outside the crop. All assets must be original or appropriately licensed. Do not copy proprietary fonts, logos, recognizable branded layouts, or distinctive commercial components.

## Data Visualization

Present charts like editorial evidence: title, short conclusion, plot, then source/caption. Use ink for the primary series and accent for the comparison, with solid/dashed distinctions. Avoid dashboard gauges. Tables have clear horizontal rules and generous 16px cell padding; provide a text summary that communicates the finding without seeing the chart.

## Motion and Animation

Use 160ms opacity and underline changes. Content is visible immediately; no page-turn imitation or decorative parallax.

Animation must explain an actual state change. Do not delay content until an entrance completes. Unknown-duration tasks use written progress rather than fabricated percentages. Honor prefers-reduced-motion with immediate state changes and static loading feedback.

## Pointer Effects

**Pointer policy: none.** The reduced visual system relies on whitespace, type, and clear control feedback.

### No decorative tracking

Use the native cursor and the hover, focus-visible, pressed, selected, and disabled states specified below. Do not add a cursor companion, moving margin marker, or pointer-following overlay. Ordinary controls remain fully usable with a mouse, touch, or keyboard; no pointer-tracking script is needed for this interpretation.

## Interaction States

- **Hover:** use a small brightness or underline change on interactive controls, with their material intact. Do not reveal essential content only on hover.
- **Focus-visible:** use a 3px accent or ink outline separated from the surrounding material by 3–5px. Keep it visible over all local surfaces; decorative clipping must not hide it.
- **Active / pressed:** Use 160ms opacity and underline changes. Content is visible immediately; no page-turn imitation or decorative parallax.
- **Selected:** use the variant’s inset, filled, beveled, or ruled state; expose aria-selected, aria-pressed, or aria-current as appropriate.
- **Disabled:** retain readable muted labels and native disabled semantics; remove interactive shadow travel. Use a written prerequisite or unavailable label where necessary.
- **Error / success:** use words and a semantic color or icon, preserve user input, and provide a clear next step.

## Responsive Behavior

At 760px and below, stack the hero in source order, switch feature/pricing/contact groups to one column, and let navigation wrap into a second row. Remove decorative tilts and staggered margins, but keep the material, border language, palette, and typographic hierarchy. Use 24px gutters and 56px section intervals.

At 480px and below, use 20px gutters, 24px panel interiors, a 34–40px headline, and 28px section headings. Keep 16px+ editable text and normal body size. Allow toolbar controls to wrap; give a slider its own row when needed. Reduce ornamental frames without eliminating the style. Tables may scroll within a labeled region; the entire page must not scroll sideways.

Test at 320px, 390px, a narrow comparison iframe, and desktop widths. Also check 200% text enlargement and 400% zoom. Dialogs scroll internally with an always-reachable close action.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

## Implementation Guidance

Apply a `.design` scope to the interface root. Start with the composition and reading hierarchy, then the material and controls. The class names below describe roles: `.hero` is the opening region, `.project-card` the representative workspace, `.panel` a grouped surface, `.feature-card` a repeated explanatory region, and `.primary` an action. Map those roles to your application’s semantic components; the demo copy is not required.

The following tokens and construction rules are included here so this file remains independently useful. They are not a replacement for the responsive, keyboard, form, and accessibility requirements above. Use semantic HTML and preserve normal layout flow around the decorative frames.

```css
.design {
  --canvas: #faf8f3;
  --surface: #fffefa;
  --ink: #302d29;
  --muted: #686157;
  --accent: #85503b;
  --on-accent: #fff;
  --line: #c9c2b8;
  --control-line: #82786a;
  --error: #a12638;
  --hover: #6e412f;
  --pressed: #593426;
  --font: system-ui,sans-serif;
  --heading: ui-serif,Georgia,serif;
  --display: 76px;
  --display-weight: 400;
  --body: 17px;
  --leading: 1.75;
  --radius: 0px;
  --control-radius: 0px;
  --border: 1px;
  --panel-padding: 40px;
  --gap: 28px;
  --section: 96px;
  --gutter: 48px;
  --max: 1180px;
  --shadow: none;
  --duration: 180ms;
  --hero-columns: 8fr 4fr;
  --button-height: 48px;
  --dialog-radius: 0px;
  --dialog-width: 560px;
  --dialog-padding: 40px;
  --backdrop: rgb(48 45 41 / .38);
  --dialog-shadow: 0 16px 48px #302d2924;
}

.design .hero{ grid-template-columns:3fr 2fr; align-items:end; padding:80px 0; gap:64px; }

.design h1{ font-family:Georgia,serif; font-weight:400; font-size:clamp(42px,7vw,84px); line-height:1.04; }

.design .eyebrow{ letter-spacing:.18em; font-size:11px; }

.design .panel{ background:transparent; box-shadow:none; border:0; border-top:1px solid var(--line); border-radius:0; padding:28px 0; }

.design .project-card{ border-top:4px double var(--ink); }

.design .project-card h2{ font-weight:400; font-style:italic; font-size:36px; }

.design .stats strong{ font-weight:400; font-size:48px; }

.design .features{ grid-template-columns:2fr 1fr 1fr; }

.design .testimonial{ text-align:left; margin-left:24%; padding:40px 0; border:0; }

.design .testimonial blockquote{ font-style:italic; font-weight:400; margin-left:0; }
```

Use a labeled shared control set when checking implementation: primary and secondary buttons, an icon toggle, a checkbox/switch, a range input, text fields, navigation, tabs, and a modal. Check the neutral and selected states, not just the hero screenshot. A 1px brightness change on hover is not a substitute for the material-specific pressed state. On narrow screens, apply the responsive rules above after the construction rules.

## Do

- Typography-led minimalism: a magazine-like opening, generous reading space, serif contrast, and almost no card furniture.
- Carry the construction through navigation, inputs, cards, tabs, and overlays.
- Preserve readable text and stable hit areas when adding decoration.
- Compare the same interface content at desktop and phone widths.
- Verify actual composited backgrounds, focus rings, selected states, and unavailable controls.

## Don't

- Do not substitute a bold geometric SaaS headline, centered card grids, or luxury ornament for the typographic hierarchy.
- Replace these rules with the same card grid and a different palette.
- Copy a particular brand, its fonts, assets, terminology, or exact components.
- Hide missing behavior behind a beautiful static screenshot.

## Research Context

Background reference: [NN/g: characteristics of minimalism](https://www.nngroup.com/articles/characteristics-minimalism/). The rules in this document are an original interface interpretation, not a reproduction of a source artifact or a claim that this variant exhausts the family.
