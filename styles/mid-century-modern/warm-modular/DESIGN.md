---
name: Warm Modular Mid-Century Modern
slug: warm-modular
family: mid-century-modern
description: "Warm domestic modernism: asymmetrical modular construction, modest serif type, and wood-like structural accents."
tags:
  - mid-century-modern
  - warm-modular
  - complete-system
---

# Warm Modular Mid-Century Modern

## Overview and Design Philosophy

Warm domestic modernism: asymmetrical modular construction, modest serif type, and wood-like structural accents.

Use a 1.2:1 hero with 52px separation and a regular 76px serif headline. The workspace has one broad curved corner and a rust-colored cap. A mustard statistics band has a single curved end. Features read as joined modules.

This is an original, independently usable interpretation of the family. Its defining relationships must remain visible across landing pages, working screens, forms, and overlays; changing the palette alone does not establish this design language.

## Core Principles

- Preserve the defining composition and material together.
- Combine warm paper, muted green, mustard, and rust.
- Let the control construction explain state and hierarchy.
- Do not reduce the style to beige and orange, or substitute an Art Deco symmetry and ornament system.
- Keep text, reading order, keyboard access, and error recovery clear even when decoration is expressive.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#eee6d5` | Page environment; ink text |
| `surface` | `#fff7e8` | Opaque reading and control plane |
| `ink` | `#3b423b` | Main text on canvas or surface |
| `muted` | `#494f40` | Secondary text on surface |
| `accent` | `#805234` | Primary action and selected state |
| `on-accent` | `#ffffff` | Text on the accent fill |
| `line` | `#7e866e` | Grouping rules |
| `control-line` | `#7e866e` | Visible input and control boundaries |
| `error` | `#9a2540` | Error text on surface |
| `success` | `#285c3b` | Success text on surface |
| `warning` | `#735200` | Warning text on surface |

Use ink and muted text on their documented reading surfaces. Body links use ink with a persistent underline; bright filled-action colors must not be reused as low-contrast link text. Accent/on-accent is the tested filled-action pair; a raised neutral button instead uses ink or accent text on surface. Status colors always have words or icons as a second cue. Additional field colors are specified in the construction rules below; do not infer arbitrary color substitutions.

Combine warm paper, muted green, mustard, and rust. Use a solid lower ledge and flat surfaces rather than a floating shadow. Structural wood-like color belongs on rails and joints, not fake grain over every card.

## Typography

Use a 1.2:1 hero with 52px separation and a regular 76px serif headline. The workspace has one broad curved corner and a rust-colored cap. A mustard statistics band has a single curved end. Features read as joined modules.

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

Use 4/8/12/20/28/40/56/88px. Favor generous outer spacing and moderate interiors. Repeated modules share dimensions and baselines.

Use 8px from label to field, 4–8px from field to help, 20px between form fields, and 24–32px between task groups. Standard controls have 12px vertical and 20px horizontal padding with a minimum 48px height. Card padding is 28px unless the surface guidance gives a stronger role-specific value. Separate unrelated page sections by 88px at wide widths. Convert these reference pixels to rem in implementations that respect user text settings.

## Layout and Grid

Use a 1.2:1 hero with 52px separation and a regular 76px serif headline. The workspace has one broad curved corner and a rust-colored cap. A mustard statistics band has a single curved end. Features read as joined modules.

Use a container no wider than 1120px unless this interpretation explicitly uses the full page. The default gutter is 36px. Set flexible grid tracks with minmax(0, 1fr), allow action rows to wrap, and keep cards content-sized. Hero, workspace, statistics, features, quotation, pricing, contact form, and footer remain in that source order. Change visual arrangement without assigning a contradictory keyboard order.

## Surfaces, Borders, Radius, Shadows, and Depth

Combine warm paper, muted green, mustard, and rust. Use a solid lower ledge and flat surfaces rather than a floating shadow. Structural wood-like color belongs on rails and joints, not fake grain over every card.

Use the construction example below for precise borders, radius, backgrounds, and shadow recipes. Decoration belongs to the containing region; text and hit targets remain clear. Keep ordinary content at layer 0, menus around 20, the modal backdrop at 40, dialogs at 50, and feedback above that. Native dialog belongs in the top layer; do not trap it inside a transformed card. Avoid clipping focus rings with overflow hidden. A passive surface does not gain interactive elevation simply because the pointer crosses it.

## Components

Buttons are simple warm rectangles with slight radius. Feature indexes use circular color fields. Forms use understated but clear boundaries; the same measured joinery carries into pricing and dialogs.

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

Use original domestic photography, abstract geometric prints, or restrained material closeups with clear crops. Do not borrow a designer furniture silhouette as the identity.

Use a consistent 20–24px icon box and roughly 1.8–2px line weight, adjusted for the variant’s visual density. Decorative imagery has empty alt text or is hidden from the accessibility tree; meaningful images have useful alt text and captions outside the crop. All assets must be original or appropriately licensed. Do not copy proprietary fonts, logos, recognizable branded layouts, or distinctive commercial components.

## Data Visualization

Charts use muted but distinguishable fills with dark labels and patterns; provide data tables. Never let period mood reduce readability.

Charts must communicate the same conclusion without relying on hue alone: combine color with labels, line styles, or patterns. Provide an accessible table or equivalent textual values. Distinguish zero, missing, and loading. Tables use visible column headers, right-aligned numbers, 48px minimum interactive rows, and a labeled local scroll region on narrow screens. Sort controls state the current direction. Decorative perspective, texture, or shadow must not change the apparent value of a mark.

## Motion and Animation

Use 140ms color feedback. Components stay grounded; no exaggerated bounce.

Animation must explain an actual state change. Do not delay content until an entrance completes. Unknown-duration tasks use written progress rather than fabricated percentages. Honor prefers-reduced-motion with immediate state changes and static loading feedback.

## Interaction States

- **Hover:** use a small brightness or underline change on interactive controls, with their material intact. Do not reveal essential content only on hover.
- **Focus-visible:** use a 3px accent or ink outline separated from the surrounding material by 3–5px. Keep it visible over all local surfaces; decorative clipping must not hide it.
- **Active / pressed:** Use 140ms color feedback. Components stay grounded; no exaggerated bounce.
- **Selected:** use the variant’s inset, filled, beveled, or ruled state; expose aria-selected, aria-pressed, or aria-current as appropriate.
- **Disabled:** retain readable muted labels and native disabled semantics; remove interactive shadow travel. Use a written prerequisite or unavailable label where necessary.
- **Error / success:** use words and a semantic color or icon, preserve user input, and provide a clear next step.

## Responsive Behavior

At 760px and below, stack the hero in source order, switch feature/pricing/contact groups to one column, and let navigation wrap into a second row. Remove decorative tilts and staggered margins, but keep the material, border language, palette, and typographic hierarchy. Use 24px gutters and 56px section intervals.

At 480px and below, use 20px gutters, 24px panel interiors, a 34–40px headline, and 28px section headings. Keep 16px+ editable text and normal body size. Allow toolbar controls to wrap; give a slider its own row when needed. Reduce ornamental frames without eliminating the style. Tables may scroll within a labeled region; the entire page must not scroll sideways.

Test at 320px, 390px, a narrow comparison iframe, and desktop widths. Also check 200% text enlargement and 400% zoom. Dialogs scroll internally with an always-reachable close action.

## Accessibility

Require 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. The documented opaque text and control token pairs are tested; final images, fills, hover treatments, and composites still require verification. Never make opacity reduction the only disabled cue. Keep text as HTML and preserve browser zoom.

Use semantic header, nav, main, sections, and footer; provide a skip link and sequential heading levels. Every interaction works with keyboard, touch, and pointer. Standalone targets are at least 44×44px, with 48px preferred here. Keep focus unobscured and restore it after dismissing overlays. Use native form and dialog behavior where possible, accessible names for icons, and associated error messages. Avoid announcements on every keystroke.

Honor reduced motion. In forced-colors mode, remove decorative fills/shadows as needed, allow system Canvas/CanvasText/ButtonText/Highlight colors, and preserve solid control outlines. Do not suppress system color adjustments. If the presentation loses its decoration, it must still retain clear grouping, labels, state, and reading order.

## Implementation Guidance

Apply a `.design` scope to the interface root. Start with the composition and reading hierarchy, then the material and controls. The class names below describe roles: `.hero` is the opening region, `.project-card` the representative workspace, `.panel` a grouped surface, `.feature-card` a repeated explanatory region, and `.primary` an action. Map those roles to your application’s semantic components; the demo copy is not required.

The following tokens and construction rules are included here so this file remains independently useful. They are not a replacement for the responsive, keyboard, form, and accessibility requirements above. Use semantic HTML and preserve normal layout flow around the decorative frames.

```css
.design {
  --canvas: #eee6d5;
  --surface: #fff7e8;
  --ink: #3b423b;
  --muted: #494f40;
  --accent: #805234;
  --on-accent: #ffffff;
  --line: #7e866e;
  --control-line: #7e866e;
  --error: #9a2540;
  --success: #285c3b;
  --warning: #735200;
  --hover: #805234;
  --pressed: #805234;
  --font: system-ui,sans-serif;
  --heading: ui-serif, Georgia, serif;
  --display: 60px;
  --display-weight: 500;
  --body: 17px;
  --leading: 1.65;
  --radius: 4px;
  --control-radius: 4px;
  --border: 1px;
  --panel-padding: 28px;
  --gap: 28px;
  --section: 88px;
  --gutter: 36px;
  --max: 1120px;
  --shadow: 0 3px 0 #c3baa6;
  --duration: 140ms;
  --hero-columns: 7fr 5fr;
  --button-height: 48px;
  --dialog-radius: 4px;
  --dialog-width: 560px;
  --dialog-padding: 32px;
  --backdrop: #3b423b99;
  --dialog-shadow: 0 3px 0 #c3baa6;
  --stat: 36px;
  --scheme: light;
}

.design .hero{ grid-template-columns:1.2fr 1fr; gap:52px; }

.design h1{ font:400 clamp(42px,6.5vw,76px)/1.05 Georgia,serif; }

.design .project-card{ background:#d9dfcc; border:0; border-top:12px solid #8d4b30; border-radius:70px 8px 8px 8px; box-shadow:0 12px 0 #9f7b58; }

.design .stats{ background:#e1bf69; border:0; border-radius:0 60px 0 0; padding:28px; }

.design .features{ gap:0; }

.design .feature-card{ box-shadow:none; border:0; border-left:2px solid #8d4b30; border-radius:0; background:transparent; }

.design .feature-index{ width:60px; height:60px; padding-top:20px; text-align:center; border-radius:50%; background:#e1bf69; font-size:10px; color:var(--ink); }

.design .testimonial{ border:0; border-left:8px solid #8d4b30; background:#d9dfcc; text-align:left; }
```

Use a labeled shared control set when checking implementation: primary and secondary buttons, an icon toggle, a checkbox/switch, a range input, text fields, navigation, tabs, and a modal. Check the neutral and selected states, not just the hero screenshot. A 1px brightness change on hover is not a substitute for the material-specific pressed state. On narrow screens, apply the responsive rules above after the construction rules.

## Do

- Warm domestic modernism: asymmetrical modular construction, modest serif type, and wood-like structural accents.
- Carry the construction through navigation, inputs, cards, tabs, and overlays.
- Preserve readable text and stable hit areas when adding decoration.
- Compare the same interface content at desktop and phone widths.
- Verify actual composited backgrounds, focus rings, selected states, and unavailable controls.

## Don't

- Do not reduce the style to beige and orange, or substitute an Art Deco symmetry and ornament system.
- Replace these rules with the same card grid and a different palette.
- Copy a particular brand, its fonts, assets, terminology, or exact components.
- Hide missing behavior behind a beautiful static screenshot.

## Research Context

Background reference: [NGV: Mid-century design](https://www.ngv.vic.gov.au/explore/collection/collection-on-display/mid-century-design/). The rules in this document are an original interface interpretation, not a reproduction of a source artifact or a claim that this variant exhausts the family.
