---
name: Vibrant Glass
slug: vibrant-glass
family: glassmorphism
description: "Expressive translucent glass in a saturated violet, magenta, and teal environment."
tags:
  - glass
  - vibrant
  - gradient
  - expressive
---

# Vibrant Glass

## Overview and Design Philosophy

Expressive translucent glass in a saturated violet, magenta, and teal environment.

Use equal columns, large 80px display type, and an asymmetrical 36px/12px corner rhythm on the workspace. Reserve the largest saturated fields for the environment, allowing them to cross behind several panes.

This is an original, independently usable interpretation of the family. Its defining relationships must remain visible across landing pages, working screens, forms, and overlays; changing the palette alone does not establish this design language.

## Core Principles

- Preserve the defining composition and material together.
- Use a #241443 environment with #913468, #4935a4, and #206f82 fields.
- Let the control construction explain state and hierarchy.
- Do not put 90%-opaque cards on a flat background, fake glass with a gray fill, blur foreground text, or remove translucency merely because the viewport is narrow.
- Keep text, reading order, keyboard access, and error recovery clear even when decoration is expressive.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#241c43` | Environment base |
| `surface` | `#342747` | Opaque fallback and controls |
| `ink` | `#faf0ff` | Primary text on dark panes |
| `muted` | `#f0dfef` | Secondary text |
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

Use ink and muted text on their documented reading surfaces. Body links use ink with a persistent underline; bright filled-action colors must not be reused as low-contrast link text. Accent/on-accent is the tested filled-action pair; a raised neutral button instead uses ink or accent text on surface. Status colors always have words or icons as a second cue. Additional field colors are specified in the construction rules below; do not infer arbitrary color substitutions.

Use a #241443 environment with #913468, #4935a4, and #206f82 fields. Pane fill is rgb(30 17 63 / .30), 24px backdrop blur, a 1px #f4ceff6b rim, and inset edge light. Do not convert the pane to an opaque gradient.

The opaque surface token is the no-blur and reduced-transparency fallback. The live pane uses the separate glass recipe above. Check text against the composite of pane and every permitted environment endpoint; never test transparent glass against the opaque fallback alone.

## Typography

Use equal columns, large 80px display type, and an asymmetrical 36px/12px corner rhythm on the workspace. Reserve the largest saturated fields for the environment, allowing them to cross behind several panes.

| Role | Font stack | Size and rhythm |
|---|---|---|
| Display | `system-ui,sans-serif` | Use the display scale and weight described above; 34–40px on phones unless specified below |
| Section heading | `system-ui,sans-serif` | 32px / 1.2; 28px on small screens |
| Card heading | `system-ui,sans-serif` | 22px / 1.3; wrap naturally |
| Body | `system-ui,sans-serif` | 17px / 1.6–1.7; regular weight |
| Lead | body stack | 18px / 1.6; no more than 44ch |
| Control label | body stack | 14px / 1.4; 600 weight |
| Caption and index | body or monospace stack | 12–13px / 1.5; secondary information only |
| Statistics | display stack | 30–48px / 1.1; tabular figures where supported |

Keep paragraphs below 65ch. Never use display tracking or condensed letterforms for lengthy error messages. Preserve live text, browser zoom, and fallback fonts. Barlow Condensed and Silkscreen, when specified, are open-license fonts; retain their OFL notices if distributed. The preview bundles them locally. Other stacks use system fallbacks and require no remote font service.

## Spacing

Scale: 4, 8, 12, 20, 28, 40, 64, 96px. Panels use 32px padding; contents use 20px gaps. Controls use 14px by 24px and labels have 8px separation. Keep 28px between panes and 96px between sections so the environment remains visible without intruding into reading areas.

## Layout and Grid

Use equal columns, large 80px display type, and an asymmetrical 36px/12px corner rhythm on the workspace. Reserve the largest saturated fields for the environment, allowing them to cross behind several panes.

Use a container no wider than 1200px unless this interpretation explicitly uses the full page. The default gutter is 36px. Set flexible grid tracks with minmax(0, 1fr), allow action rows to wrap, and keep cards content-sized. Hero, workspace, statistics, features, quotation, pricing, contact form, and footer remain in that source order. Change visual arrangement without assigning a contradictory keyboard order.

## Surfaces, Borders, Radius, Shadows, and Depth

Use a #241443 environment with #913468, #4935a4, and #206f82 fields. Pane fill is rgb(30 17 63 / .30), 24px backdrop blur, a 1px #f4ceff6b rim, and inset edge light. Do not convert the pane to an opaque gradient.

Use the construction example below for precise borders, radius, backgrounds, and shadow recipes. Decoration belongs to the containing region; text and hit targets remain clear. Keep ordinary content at layer 0, menus around 20, the modal backdrop at 40, dialogs at 50, and feedback above that. Native dialog belongs in the top layer; do not trap it inside a transformed card. Avoid clipping focus rings with overflow hidden. A passive surface does not gain interactive elevation simply because the pointer crosses it.

## Components

Glass toolbar buttons, badges, and tabs repeat the pane material. Primary buttons have an opaque, contrast-tested fill and a small specular top edge. Inputs and menus use the opaque surface token for predictable text contrast. Dialogs can use the same glass within this bounded environment, with opaque fields and an explicit close action. A selected tab uses an opaque inset segment.

### Buttons

Use the variant’s button material above for primary, secondary, and icon actions. Keep at least 44×44px targets; use 48px for principal actions. Each task has one clearly identifiable primary action and a verb label. Icon controls need an accessible name; toggle buttons expose aria-pressed and a persistent filled icon or inset state. Loading keeps the label or a written progress state and prevents duplicate submission without changing width. Disabled controls retain readable labels, use native disabled behavior, remove movement, and explain any prerequisite nearby.

### Forms

Carry the specified surface into editable wells without putting texture or decorative imagery behind text. Use visible persistent labels, 16px or larger editable text, and a minimum 44px control height. Give multiline fields at least 112px initial height. Group radio and checkbox sets with fieldset and legend. Native checkboxes or switches retain their checked state, keyboard access, and accessible name; sliders expose a label and current value. Validate after blur or submission, retain entered values, connect errors with aria-describedby, and explain recovery. Placeholder text is an example rather than a label. Provide a linked error summary for long forms.

### Cards

Use the surface and region construction above. A card is a content group, not necessarily a raised rectangle. Keep a heading, explanation, optional status, and action in a predictable order with 16–24px internal spacing. Passive regions have no misleading hover lift. Do not wrap multiple nested links in a second card link. Pricing compares the same criteria in the same order and states recommendations in words. Empty and loading states remain inside the intended content space without inventing decorative activity.

### Navigation and Menus

Navigation adopts the framing and density described above while keeping recognizable links. Mark the current destination with aria-current and a persistent underline or structural rail. Allow wrapping rather than shrinking labels. Menus use an opaque reading surface, 8px surrounding padding, and at least 44px link rows; preserve the variant’s border and corner language. Use ordinary link lists for navigation menus. Escape and outside click dismiss; return focus to the trigger when dismissal is keyboard-driven. Do not add application-menu roles without their full keyboard behavior.

### Tabs

The tab strip is glass with a fine rim; the selected tab is an opaque inset segment. Selection persists when blur is unavailable. Use a labeled tablist with one selected tab, aria-selected, aria-controls, and a named tabpanel. Arrow keys move within the set; Home/End move to its ends. Only the selected tab is in the sequential tab order. Keep labels legible at narrow widths with an internally scrollable strip or wrapping supported by the implementation. Switching does not reset unrelated input.

### Modals and Overlays

Use the same translucent pane in the bounded environment defined above; inputs remain opaque. Without backdrop-filter or with reduced transparency, switch the entire dialog to the opaque surface token. A dialog has a concise heading, supporting text, close action, and one clear primary task. Use 24–32px interior padding, maximum width 580px, maximum height 85dvh, and internal scrolling. Keep at least 16px viewport clearance. Use a native dialog where available to trap focus, support Escape, and restore the opener. Backdrop dims the environment without making the dialog’s text translucent. Menus never trap focus.

### Badges and Feedback

Follow the badge construction specified above, using 13px readable text and 4–8px vertical padding. State is written explicitly: status color alone is insufficient. A passive badge must not resemble an actionable tool. Keep errors inline until resolved; announce completed actions through a polite status region. Noncritical toasts may dismiss after enough reading time, but cannot hold the only route to a required action.

## Icons, Imagery, and Illustration

The backdrop is part of the material: keep visible, static color fields behind the glass. Include one crisp static environmental ring or band that crosses behind a pane, so the softening of its edge visibly demonstrates backdrop blur. Use only a color from the bounded environment palette. Do not place an unrelated photo behind reading text without testing the composite. Blur the backdrop, never the content. Prefer sparse, crisp line icons.

Use a consistent 20–24px icon box and roughly 1.8–2px line weight, adjusted for the variant’s visual density. Decorative imagery has empty alt text or is hidden from the accessibility tree; meaningful images have useful alt text and captions outside the crop. All assets must be original or appropriately licensed. Do not copy proprietary fonts, logos, recognizable branded layouts, or distinctive commercial components.

## Data Visualization

Place charts on opaque surface with ink labels. Use accent plus distinguishable solid/dashed patterns, and direct labels for series. Do not sample random background colors for data. Tables use 52px rows, tabular numerals, and visible sort controls. Supply a text summary and accessible data alternative.

## Motion and Animation

Use 140–180ms color feedback and immediate material changes. Do not continuously animate blur, gradients, or floating panes. Reduced transparency replaces every glass plane with the opaque surface; lack of blur support does the same.

Animation must explain an actual state change. Do not delay content until an entrance completes. Unknown-duration tasks use written progress rather than fabricated percentages. Honor prefers-reduced-motion with immediate state changes and static loading feedback.

## Interaction States

- **Hover:** use a small brightness or underline change on interactive controls, with their material intact. Do not reveal essential content only on hover.
- **Focus-visible:** use a 3px accent or ink outline separated from the surrounding material by 3–5px. Keep it visible over all local surfaces; decorative clipping must not hide it.
- **Active / pressed:** Use 140–180ms color feedback and immediate material changes. Do not continuously animate blur, gradients, or floating panes. Reduced transparency replaces every glass plane with the opaque surface; lack of blur support does the same.
- **Selected:** use the variant’s inset, filled, beveled, or ruled state; expose aria-selected, aria-pressed, or aria-current as appropriate.
- **Disabled:** retain readable muted labels and native disabled semantics; remove interactive shadow travel. Use a written prerequisite or unavailable label where necessary.
- **Error / success:** use words and a semantic color or icon, preserve user input, and provide a clear next step.

## Responsive Behavior

At 760px and below, stack the hero in source order, switch feature/pricing/contact groups to one column, and let navigation wrap into a second row. Remove decorative tilts and staggered margins, but keep the material, border language, palette, and typographic hierarchy. Use 24px gutters and 56px section intervals.

At 480px and below, use 20px gutters, 24px panel interiors, a 34–40px headline, and 28px section headings. Keep 16px+ editable text and normal body size. Allow toolbar controls to wrap; give a slider its own row when needed. Reduce ornamental frames without eliminating the style. Tables may scroll within a labeled region; the entire page must not scroll sideways.

Test at 320px, 390px, a narrow comparison iframe, and desktop widths. Also check 200% text enlargement and 400% zoom. Dialogs scroll internally with an always-reachable close action.

Do not disable glass on phones. Keep the same pane recipe and fewer, smaller blurred surfaces if performance requires it. Reduced transparency is a user preference, not a viewport breakpoint.

## Accessibility

Use semantic landmarks and sequential headings. Every control needs an accessible name; icon-only controls need text alternatives. Provide a skip link. All tasks must work with keyboard alone and without hover. Target at least 44×44 CSS pixels for standalone controls. Keep focus visible and unobscured by sticky regions. Use native buttons, links, input controls, and `<dialog>` where possible. A modal must trap focus while open, close on Escape unless a critical operation explicitly prevents it, and return focus to its opener. Nonmodal menus must not trap focus.

Use aria-current for navigation, aria-selected for tabs, and aria-describedby for help/errors. On submission, focus the first invalid field or a linked error summary; preserve input. Announce asynchronous completion through a polite live region, reserving alerts for urgent failures. Do not announce every keystroke. Honor reduced motion. In forced-colors mode, allow system Canvas, CanvasText, Highlight, and ButtonText colors; preserve borders with solid outlines and do not suppress system adjustments.

Require at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful control boundaries and focus indicators. Divider tokens are decorative and are not input boundaries. Check actual foreground/background pairings and interactive states, including antialiasing and images. Keep body readable at 200% text enlargement and layouts usable at 400% zoom / 320 CSS pixels. Avoid fixed-height text containers. Status always includes wording or another non-color cue.

For glass, test the composited surface over every allowed gradient endpoint, not only the base color. If a backdrop is unknown, use opaque surface. Default to opaque backgrounds and add blur only inside @supports. Provide an explicit opaque fallback for reduced transparency; disable blur on the mobile breakpoint and in forced colors. Do not lower text opacity. Browser support or GPU cost must never prevent access to content.

## Implementation Guidance

Apply a `.design` scope to the interface root. Start with the composition and reading hierarchy, then the material and controls. The class names below describe roles: `.hero` is the opening region, `.project-card` the representative workspace, `.panel` a grouped surface, `.feature-card` a repeated explanatory region, and `.primary` an action. Map those roles to your application’s semantic components; the demo copy is not required.

The following tokens and construction rules are included here so this file remains independently useful. They are not a replacement for the responsive, keyboard, form, and accessibility requirements above. Use semantic HTML and preserve normal layout flow around the decorative frames.

```css
.design {
  --canvas: #241c43;
  --surface: #342747;
  --ink: #faf0ff;
  --muted: #f0dfef;
  --accent: #f2c37d;
  --on-accent: #35243f;
  --line: #a38cac;
  --control-line: #bba4c4;
  --error: #ffc0cf;
  --hover: #ffdaa1;
  --pressed: #dfad64;
  --font: system-ui,sans-serif;
  --heading: system-ui,sans-serif;
  --display: 68px;
  --display-weight: 750;
  --body: 17px;
  --leading: 1.65;
  --radius: 24px;
  --control-radius: 12px;
  --border: 1px;
  --panel-padding: 32px;
  --gap: 28px;
  --section: 96px;
  --gutter: 36px;
  --max: 1200px;
  --shadow: 0 16px 40px #170e343d;
  --duration: 160ms;
  --hero-columns: 7fr 5fr;
  --button-height: 48px;
  --dialog-radius: 24px;
  --dialog-width: 580px;
  --dialog-padding: 32px;
  --backdrop: rgb(22 15 44 / .76);
  --dialog-shadow: 0 20px 60px #170e3480;
  --stat: 42px;
  --glass: rgb(30 17 63 / .30);
  --blur: 24px;
  --environment: radial-gradient(ellipse 45% 34% at 86% 20%,#913468 0,transparent 100%),radial-gradient(ellipse 40% 28% at 8% 20%,#4935a4 0,transparent 100%),radial-gradient(ellipse 50% 24% at 55% 65%,#206f82 0,transparent 100%),#241443;
  --rim: #f4ceff6b;
}

.design body{ background:var(--environment); background-attachment:fixed; }

.design .hero{ padding:64px 0; gap:48px; }

.design .panel,
.design .demo-nav,
.design .stats,
.design dialog{
 background:var(--surface); border:1px solid var(--rim); border-radius:24px;
 box-shadow:inset 0 1px 0 #ffffff50,0 24px 50px #00000024;
}

@supports (backdrop-filter:blur(1px)) {
 .design :is(.panel,.demo-nav,.stats,dialog) { background:var(--glass); backdrop-filter:blur(var(--blur)); -webkit-backdrop-filter:blur(var(--blur)); }
}

.design .demo-nav{ margin-top:24px; padding:12px 20px; }

.design .stats{ padding:24px; }

.design .project-card{ box-shadow:inset 0 1px 0 #ffffff70,inset 1px 0 0 #ffffff20,0 32px 60px #0003; }

.design .project-rows>div,
.design .card-bottom{ border-color:var(--rim); }

.design .icon-button{ background:var(--glass); border:1px solid var(--rim); border-radius:14px; box-shadow:inset 0 1px #ffffff40; }

.design .badge{ background:var(--glass); border-color:var(--rim); }

.design .demo-tabs{ border:1px solid var(--rim); padding:5px; border-radius:16px; background:var(--glass); }

.design .demo-tabs button[aria-selected=true]{ background:var(--surface); border:0; border-radius:10px; }

.design .testimonial{ border:0; }

.design .primary{ box-shadow:inset 0 1px #ffffff60,0 4px 14px #0002; }

.design{
 --environment:radial-gradient(ellipse 45% 34% at 86% 20%,#913468 0,transparent 100%),radial-gradient(ellipse 40% 28% at 8% 20%,#4935a4 0,transparent 100%),radial-gradient(ellipse 50% 24% at 55% 65%,#206f82 0,transparent 100%),#241443;
 --glass:rgb(30 17 63 / .30);--blur:24px;--rim:#f4ceff6b;--muted:#f0dfef;
}

.design .hero{ grid-template-columns:1fr 1fr; }

.design h1{ font-size:clamp(42px,6.5vw,80px); line-height:1; }

.design .project-card{ border-radius:36px 12px 36px 12px; }

.design { --glass-object:#913468; }
.design .hero::before { content:''; position:absolute; width:46%; height:66%; right:-5%; top:16%; border:42px solid var(--glass-object); border-radius:50%; transform:rotate(-18deg); z-index:-1; pointer-events:none; }
.design .hero::before { border-radius:0; border-width:60px 0; transform:rotate(-24deg); }
```

Use a labeled shared control set when checking implementation: primary and secondary buttons, an icon toggle, a checkbox/switch, a range input, text fields, navigation, tabs, and a modal. Check the neutral and selected states, not just the hero screenshot. A 1px brightness change on hover is not a substitute for the material-specific pressed state. On narrow screens, apply the responsive rules above after the construction rules.

## Do

- Expressive translucent glass in a saturated violet, magenta, and teal environment.
- Carry the construction through navigation, inputs, cards, tabs, and overlays.
- Preserve readable text and stable hit areas when adding decoration.
- Compare the same interface content at desktop and phone widths.
- Verify actual composited backgrounds, focus rings, selected states, and unavailable controls.

## Don't

- Do not put 90%-opaque cards on a flat background, fake glass with a gray fill, blur foreground text, or remove translucency merely because the viewport is narrow.
- Replace these rules with the same card grid and a different palette.
- Copy a particular brand, its fonts, assets, terminology, or exact components.
- Hide missing behavior behind a beautiful static screenshot.

## Research Context

Background reference: [NN/g: glassmorphism](https://www.nngroup.com/articles/glassmorphism/). The rules in this document are an original interface interpretation, not a reproduction of a source artifact or a claim that this variant exhausts the family.
