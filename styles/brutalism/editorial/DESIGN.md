---
name: Editorial Brutalism
slug: editorial
family: brutalism
description: "Poster-scale brutalism: compressed oversized type, interrupted reading rhythm, and heavy editorial rules."
tags:
  - brutalist
  - editorial
  - poster
  - expressive
---

# Editorial Brutalism

## Overview and Design Philosophy

Poster-scale brutalism: compressed oversized type, interrupted reading rhythm, and heavy editorial rules.

The opening is a single large poster rather than two equal product columns. Set uppercase condensed H1 at up to 132px and 0.9 leading. Place supporting copy beneath it, then inset the workspace by 28%. Features use unequal 2:1:1 spans.

This is an original, independently usable interpretation of the family. Its defining relationships must remain visible across landing pages, working screens, forms, and overlays; changing the palette alone does not establish this design language.

## Core Principles

- Preserve the defining composition and material together.
- Use uncoated paper color, solid black rules up to 8px, and a reversed dark quotation block.
- Let the control construction explain state and hierarchy.
- Do not shrink the headline into a conventional SaaS hero or scatter unrelated hard-shadow cards.
- Keep text, reading order, keyboard access, and error recovery clear even when decoration is expressive.

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

Use ink and muted text on their documented reading surfaces. Body links use ink with a persistent underline; bright filled-action colors must not be reused as low-contrast link text. Accent/on-accent is the tested filled-action pair; a raised neutral button instead uses ink or accent text on surface. Status colors always have words or icons as a second cue. Additional field colors are specified in the construction rules below; do not infer arbitrary color substitutions.

Use uncoated paper color, solid black rules up to 8px, and a reversed dark quotation block. Cards become ruled editorial sections; remove rounded outlines and drop shadows.

## Typography

The opening is a single large poster rather than two equal product columns. Set uppercase condensed H1 at up to 132px and 0.9 leading. Place supporting copy beneath it, then inset the workspace by 28%. Features use unequal 2:1:1 spans.

| Role | Font stack | Size and rhythm |
|---|---|---|
| Display | `Barlow Condensed, Arial Narrow, sans-serif` | Use the display scale and weight described above; 34–40px on phones unless specified below |
| Section heading | `Barlow Condensed, Arial Narrow, sans-serif` | 32px / 1.2; 28px on small screens |
| Card heading | `Barlow Condensed, Arial Narrow, sans-serif` | 22px / 1.3; wrap naturally |
| Body | `system-ui,sans-serif` | 17px / 1.6–1.7; regular weight |
| Lead | body stack | 18px / 1.6; no more than 44ch |
| Control label | body stack | 14px / 1.4; 600 weight |
| Caption and index | body or monospace stack | 12–13px / 1.5; secondary information only |
| Statistics | display stack | 30–48px / 1.1; tabular figures where supported |

Keep paragraphs below 65ch. Never use display tracking or condensed letterforms for lengthy error messages. Preserve live text, browser zoom, and fallback fonts. Barlow Condensed and Silkscreen, when specified, are open-license fonts; retain their OFL notices if distributed. The preview bundles them locally. Other stacks use system fallbacks and require no remote font service.

## Spacing

Scale: 4, 8, 16, 24, 32, 48, 72, 104px. Headline-to-lead gap: 24px. Section gap: 104px. Controls: 12px by 24px. Cards: 24px internal padding and 32px content gaps. Heavy rules get 24px breathing room. A deliberately uneven section cadence is allowed only when it reinforces content hierarchy.

## Layout and Grid

The opening is a single large poster rather than two equal product columns. Set uppercase condensed H1 at up to 132px and 0.9 leading. Place supporting copy beneath it, then inset the workspace by 28%. Features use unequal 2:1:1 spans.

Use a container no wider than 1240px unless this interpretation explicitly uses the full page. The default gutter is 40px. Set flexible grid tracks with minmax(0, 1fr), allow action rows to wrap, and keep cards content-sized. Hero, workspace, statistics, features, quotation, pricing, contact form, and footer remain in that source order. Change visual arrangement without assigning a contradictory keyboard order.

## Surfaces, Borders, Radius, Shadows, and Depth

Use uncoated paper color, solid black rules up to 8px, and a reversed dark quotation block. Cards become ruled editorial sections; remove rounded outlines and drop shadows.

Use the construction example below for precise borders, radius, backgrounds, and shadow recipes. Decoration belongs to the containing region; text and hit targets remain clear. Keep ordinary content at layer 0, menus around 20, the modal backdrop at 40, dialogs at 50, and feedback above that. Native dialog belongs in the top layer; do not trap it inside a transformed card. Avoid clipping focus rings with overflow hidden. A passive surface does not gain interactive elevation simply because the pointer crosses it.

## Components

Buttons are blunt bordered blocks. Tabs and menus use the same heavy linear organization; fields retain calm interior spacing. The enormous headline never sets the scale of a form label or dialog.

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

Use the opaque surface token and the variant’s framing around a calm reading area. A dialog has a concise heading, supporting text, close action, and one clear primary task. Use 24–32px interior padding, maximum width 600px, maximum height 85dvh, and internal scrolling. Keep at least 16px viewport clearance. Use a native dialog where available to trap focus, support Escape, and restore the opener. Backdrop dims the environment without making the dialog’s text translucent. Menus never trap focus.

### Badges and Feedback

Follow the badge construction specified above, using 13px readable text and 4–8px vertical padding. State is written explicitly: status color alone is insufficient. A passive badge must not resemble an actionable tool. Keep errors inline until resolved; announce completed actions through a polite status region. Noncritical toasts may dismiss after enough reading time, but cannot hold the only route to a required action.

## Icons, Imagery, and Illustration

Use original poster-like photography or typographic compositions when content calls for them. Condensed Barlow Condensed is bundled under OFL; never rasterize the headline.

Use a consistent 20–24px icon box and roughly 1.8–2px line weight, adjusted for the variant’s visual density. Decorative imagery has empty alt text or is hidden from the accessibility tree; meaningful images have useful alt text and captions outside the crop. All assets must be original or appropriately licensed. Do not copy proprietary fonts, logos, recognizable branded layouts, or distinctive commercial components.

## Data Visualization

Charts behave like printed infographics: strong baseline, few ticks, directly labeled values, and clear source text. Use accent only for the key comparison and patterns for other series. Avoid exaggerated axes for visual drama. Tables use bold headers and 2px group rules; include a readable summary or table alternative.

## Motion and Animation

Use immediate active states and short 100ms color feedback. Do not animate the oversized headline on every view.

Animation must explain an actual state change. Do not delay content until an entrance completes. Unknown-duration tasks use written progress rather than fabricated percentages. Honor prefers-reduced-motion with immediate state changes and static loading feedback.

## Interaction States

- **Hover:** use a small brightness or underline change on interactive controls, with their material intact. Do not reveal essential content only on hover.
- **Focus-visible:** use a 3px accent or ink outline separated from the surrounding material by 3–5px. Keep it visible over all local surfaces; decorative clipping must not hide it.
- **Active / pressed:** Use immediate active states and short 100ms color feedback. Do not animate the oversized headline on every view.
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
  --canvas: #f4f0e8;
  --surface: #fffdf7;
  --ink: #302822;
  --muted: #655b52;
  --accent: #92351e;
  --on-accent: #fff;
  --line: #302822;
  --control-line: #302822;
  --error: #a32238;
  --hover: #762916;
  --pressed: #302822;
  --font: system-ui,sans-serif;
  --heading: 'Barlow Condensed','Arial Narrow',sans-serif;
  --display: 104px;
  --display-weight: 900;
  --body: 17px;
  --leading: 1.65;
  --radius: 0px;
  --control-radius: 0px;
  --border: 2px;
  --panel-padding: 24px;
  --gap: 24px;
  --section: 104px;
  --gutter: 40px;
  --max: 1240px;
  --shadow: none;
  --duration: 100ms;
  --hero-columns: 8fr 4fr;
  --button-height: 48px;
  --dialog-radius: 0px;
  --dialog-width: 600px;
  --dialog-padding: 32px;
  --backdrop: rgb(48 40 34 / .65);
  --dialog-shadow: none;
}

.design .hero{ display:block; padding:40px 0; }

.design h1{ font:900 clamp(54px,11vw,132px)/.9 'Barlow Condensed','Arial Narrow',sans-serif; text-transform:uppercase; letter-spacing:-.035em; max-width:13ch; }

.design .hero-copy{ padding-bottom:28px; border-bottom:8px solid; }

.design .lead{ max-width:40ch; }

.design .project-card{ margin:24px 0 0 28%; border:0; border-left:6px solid; border-radius:0; box-shadow:none; }

.design .features{ grid-template-columns:2fr 1fr 1fr; gap:0; }

.design .feature-card{ border:0; border-top:6px solid; border-radius:0; box-shadow:none; }

.design .testimonial{ text-align:left; border:0; background:var(--ink); color:var(--canvas); padding:40px; }

.design .testimonial :is(p,.caption,.eyebrow){ color:var(--canvas); }
```

Use a labeled shared control set when checking implementation: primary and secondary buttons, an icon toggle, a checkbox/switch, a range input, text fields, navigation, tabs, and a modal. Check the neutral and selected states, not just the hero screenshot. A 1px brightness change on hover is not a substitute for the material-specific pressed state. On narrow screens, apply the responsive rules above after the construction rules.

## Do

- Poster-scale brutalism: compressed oversized type, interrupted reading rhythm, and heavy editorial rules.
- Carry the construction through navigation, inputs, cards, tabs, and overlays.
- Preserve readable text and stable hit areas when adding decoration.
- Compare the same interface content at desktop and phone widths.
- Verify actual composited backgrounds, focus rings, selected states, and unavailable controls.

## Don't

- Do not shrink the headline into a conventional SaaS hero or scatter unrelated hard-shadow cards.
- Replace these rules with the same card grid and a different palette.
- Copy a particular brand, its fonts, assets, terminology, or exact components.
- Hide missing behavior behind a beautiful static screenshot.

## Research Context

Background reference: [NN/g: brutalism and antidesign](https://www.nngroup.com/articles/brutalism-antidesign/). The rules in this document are an original interface interpretation, not a reproduction of a source artifact or a claim that this variant exhausts the family.
