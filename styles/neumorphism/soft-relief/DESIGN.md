---
name: Soft Relief Neumorphism
slug: soft-relief
family: neumorphism
description: "A continuous pale surface where controls appear pressed into or raised from the same material through opposed soft light and shadow."
tags:
  - neumorphism
  - soft-relief
  - complete-system
---

# Soft Relief Neumorphism

## Overview and Design Philosophy

A continuous pale surface where controls appear pressed into or raised from the same material through opposed soft light and shadow.

Use a 1:1.1 opening so the relief workspace has room to breathe. Leave a 56px gap and 32–36px panel interiors. Keep the heading medium weight at 54px. Separate controls by at least 12–16px so their shadow pairs do not merge into mud.

This is an original, independently usable interpretation of the family. Its defining relationships must remain visible across landing pages, working screens, forms, and overlays; changing the palette alone does not establish this design language.

## Core Principles

- Preserve the defining composition and material together.
- Canvas and panel are both #e8ecf4.
- Let the control construction explain state and hierarchy.
- Do not put a dark outline around every resting shape, use unrelated card and canvas colors, or mistake a single generic drop shadow for neumorphism. Keep strong focus outlines and provide explicit boundaries in increased-contrast modes.
- Keep text, reading order, keyboard access, and error recovery clear even when decoration is expressive.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#e8ecf4` | Page environment; ink text |
| `surface` | `#e8ecf4` | Opaque reading and control plane |
| `ink` | `#344159` | Main text on canvas or surface |
| `muted` | `#52617a` | Secondary text on surface |
| `accent` | `#6950aa` | Primary action and selected state |
| `on-accent` | `#ffffff` | Text on the accent fill |
| `line` | `#718294` | Grouping rules |
| `control-line` | `#718294` | Visible input and control boundaries |
| `error` | `#9a2540` | Error text on surface |
| `success` | `#285c3b` | Success text on surface |
| `warning` | `#735200` | Warning text on surface |

Use ink and muted text on their documented reading surfaces. Body links use ink with a persistent underline; bright filled-action colors must not be reused as low-contrast link text. Accent/on-accent is the tested filled-action pair; a raised neutral button instead uses ink or accent text on surface. Status colors always have words or icons as a second cue. Additional field colors are specified in the construction rules below; do not infer arbitrary color substitutions.

Canvas and panel are both #e8ecf4. Raised panels use 12px 12px 26px #bac4d5 and -12px -12px 26px white. Smaller controls use 6px 6px 12px #bdc7d8 and the opposite white highlight. Recesses invert the same pair. Resting panels have no drawn outline. Use 28px panel corners and circular 48px icon controls.

## Typography

Use a 1:1.1 opening so the relief workspace has room to breathe. Leave a 56px gap and 32–36px panel interiors. Keep the heading medium weight at 54px. Separate controls by at least 12–16px so their shadow pairs do not merge into mud.

| Role | Font stack | Size and rhythm |
|---|---|---|
| Display | `system-ui, sans-serif` | Use the display scale and weight described above; 34–40px on phones unless specified below |
| Section heading | `system-ui, sans-serif` | 32px / 1.2; 28px on small screens |
| Card heading | `system-ui, sans-serif` | 22px / 1.3; wrap naturally |
| Body | `system-ui,sans-serif` | 17px / 1.6–1.7; regular weight |
| Lead | body stack | 18px / 1.6; no more than 44ch |
| Control label | body stack | 14px / 1.4; 600 weight |
| Caption and index | body or monospace stack | 12–13px / 1.5; secondary information only |
| Statistics | display stack | 30–48px / 1.1; tabular figures where supported |

Keep paragraphs below 65ch. Never use display tracking or condensed letterforms for lengthy error messages. Preserve live text, browser zoom, and fallback fonts. Barlow Condensed and Silkscreen, when specified, are open-license fonts; retain their OFL notices if distributed. The preview bundles them locally. Other stacks use system fallbacks and require no remote font service.

## Spacing

Use 4/8/12/20/32/48/64/80px. Relief needs 32px of separation around modules. Keep interiors roomy and avoid a dense nest of embossed boxes.

Use 8px from label to field, 4–8px from field to help, 20px between form fields, and 24–32px between task groups. Standard controls have 12px vertical and 20px horizontal padding with a minimum 48px height. Card padding is 32px unless the surface guidance gives a stronger role-specific value. Separate unrelated page sections by 80px at wide widths. Convert these reference pixels to rem in implementations that respect user text settings.

## Layout and Grid

Use a 1:1.1 opening so the relief workspace has room to breathe. Leave a 56px gap and 32–36px panel interiors. Keep the heading medium weight at 54px. Separate controls by at least 12–16px so their shadow pairs do not merge into mud.

Use a container no wider than 1080px unless this interpretation explicitly uses the full page. The default gutter is 36px. Set flexible grid tracks with minmax(0, 1fr), allow action rows to wrap, and keep cards content-sized. Hero, workspace, statistics, features, quotation, pricing, contact form, and footer remain in that source order. Change visual arrangement without assigning a contradictory keyboard order.

## Surfaces, Borders, Radius, Shadows, and Depth

Canvas and panel are both #e8ecf4. Raised panels use 12px 12px 26px #bac4d5 and -12px -12px 26px white. Smaller controls use 6px 6px 12px #bdc7d8 and the opposite white highlight. Recesses invert the same pair. Resting panels have no drawn outline. Use 28px panel corners and circular 48px icon controls.

Use the construction example below for precise borders, radius, backgrounds, and shadow recipes. Decoration belongs to the containing region; text and hit targets remain clear. Keep ordinary content at layer 0, menus around 20, the modal backdrop at 40, dialogs at 50, and feedback above that. Native dialog belongs in the top layer; do not trap it inside a transformed card. Avoid clipping focus rings with overflow hidden. A passive surface does not gain interactive elevation simply because the pointer crosses it.

## Components

Buttons rise from the shared plane; primary action text is lavender #6950aa rather than a solid painted slab. Pressing changes the shadow pair to inset. Inputs are recessed pill wells. The active icon is recessed and filled. Switches use an inset lavender track and a raised pale thumb; range tracks are inset with a raised circular thumb. Selected tabs press inward. Disabled controls lose relief and retain their labels.

### Buttons

Use the variant’s button material above for primary, secondary, and icon actions. Keep at least 44×44px targets; use 48px for principal actions. Each task has one clearly identifiable primary action and a verb label. Icon controls need an accessible name; toggle buttons expose aria-pressed and a persistent filled icon or inset state. Loading keeps the label or a written progress state and prevents duplicate submission without changing width. Disabled controls retain readable labels, use native disabled behavior, remove movement, and explain any prerequisite nearby.

### Forms

Carry the specified surface into editable wells without putting texture or decorative imagery behind text. Use visible persistent labels, 16px or larger editable text, and a minimum 44px control height. Give multiline fields at least 112px initial height. Group radio and checkbox sets with fieldset and legend. Native checkboxes or switches retain their checked state, keyboard access, and accessible name; sliders expose a label and current value. Validate after blur or submission, retain entered values, connect errors with aria-describedby, and explain recovery. Placeholder text is an example rather than a label. Provide a linked error summary for long forms.

### Cards

Use the surface and region construction above. A card is a content group, not necessarily a raised rectangle. Keep a heading, explanation, optional status, and action in a predictable order with 16–24px internal spacing. Passive regions have no misleading hover lift. Do not wrap multiple nested links in a second card link. Pricing compares the same criteria in the same order and states recommendations in words. Empty and loading states remain inside the intended content space without inventing decorative activity.

### Navigation and Menus

Navigation adopts the framing and density described above while keeping recognizable links. Mark the current destination with aria-current and a persistent underline or structural rail. Allow wrapping rather than shrinking labels. Menus use an opaque reading surface, 8px surrounding padding, and at least 44px link rows; preserve the variant’s border and corner language. Use ordinary link lists for navigation menus. Escape and outside click dismiss; return focus to the trigger when dismissal is keyboard-driven. Do not add application-menu roles without their full keyboard behavior.

### Tabs

Selected tabs are inset wells on the continuous surface; their accent label remains visible. Unselected tabs stay flat. Use a labeled tablist with one selected tab, aria-selected, aria-controls, and a named tabpanel. Arrow keys move within the set; Home/End move to its ends. Only the selected tab is in the sequential tab order. Keep labels legible at narrow widths with an internally scrollable strip or wrapping supported by the implementation. Switching does not reset unrelated input.

### Modals and Overlays

Use the shared opaque pale surface, 28px corners, one broad cast shadow for separation, and a soft inset top highlight. Do not add a dark border in ordinary mode; preserve the strong focus ring and increased-contrast fallback. A dialog has a concise heading, supporting text, close action, and one clear primary task. Use 24–32px interior padding, maximum width 560px, maximum height 85dvh, and internal scrolling. Keep at least 16px viewport clearance. Use a native dialog where available to trap focus, support Escape, and restore the opener. Backdrop dims the environment without making the dialog’s text translucent. Menus never trap focus.

### Badges and Feedback

Follow the badge construction specified above, using 13px readable text and 4–8px vertical padding. State is written explicitly: status color alone is insufficient. A passive badge must not resemble an actionable tool. Keep errors inline until resolved; announce completed actions through a polite status region. Noncritical toasts may dismiss after enough reading time, but cannot hold the only route to a required action.

## Icons, Imagery, and Illustration

Use simple, legible icons with blue-gray ink. Keep photography away from the relief controls. The reference is a physical lighting relationship, not an illustration of a physical object. Charts remain flat for truthful value reading.

Use a consistent 20–24px icon box and roughly 1.8–2px line weight, adjusted for the variant’s visual density. Decorative imagery has empty alt text or is hidden from the accessibility tree; meaningful images have useful alt text and captions outside the crop. All assets must be original or appropriately licensed. Do not copy proprietary fonts, logos, recognizable branded layouts, or distinctive commercial components.

## Data Visualization

Use flat plotting surfaces, explicit units, directly labeled series, and accurate axes.

Charts must communicate the same conclusion without relying on hue alone: combine color with labels, line styles, or patterns. Provide an accessible table or equivalent textual values. Distinguish zero, missing, and loading. Tables use visible column headers, right-aligned numbers, 48px minimum interactive rows, and a labeled local scroll region on narrow screens. Sort controls state the current direction. Decorative perspective, texture, or shadow must not change the apparent value of a mark.

## Motion and Animation

Change shadow state immediately on press and use 140ms text-color feedback. Keep pointer lighting bounded to one active panel with two shadows; do not run continuous shadow animation or make controls drift.

Animation must explain an actual state change. Do not delay content until an entrance completes. Unknown-duration tasks use written progress rather than fabricated percentages. Honor prefers-reduced-motion with immediate state changes and static loading feedback.

## Pointer Effects

**Pointer policy: surface.** Local opposing light and shade explain raised and recessed surfaces.

### Moving relief light

The active slab receives a small opposing shadow and highlight shift as the light position changes. This is decorative material feedback, not a status indicator.

**Construction.** Use a 200px radial white light with a transparent outer edge. On one active relief panel, keep two opposing 22px-blur shadows: a cool gray shade and a white highlight. Shift their offsets only within 3–9px as the pointer moves; retain the surface color, raised controls, and recessed inputs. Use this document’s accent and ink tokens. Unless the material recipe specifies another size, use a 96px-wide region with height equal to width / 1 and a 1px base stroke.

**Movement and coverage.** React on only the active material surface. Follow both local pointer coordinates with at most 12.5 degrees of angular change. Measure coordinates relative to that surface, keep the reflection behind its content, and clip it to the material radius. Leave page margins, section gaps, and unrelated reading regions still. The material host, labels, and hit targets never tilt or move.

**Implementation and fallbacks.** Keep the native cursor. Reuse one aria-hidden decorative layer with pointer-events: none; keep it out of layout and the tab order. Coalesce movement into requestAnimationFrame with no idle loop or particle trail. Clear the layer on pointer exit, keyboard input, scroll, resize, blur, dialog close, and variant changes. Enable tracking only for a fine mouse pointer with hover. Disable it for touch, prefers-reduced-motion, forced colors, and a persistent user opt-out; retain static material and ordinary control states. Check text contrast at the brightest reflection, and reduce decorative opacity if necessary.

## Interaction States

- **Hover:** use a small brightness or underline change on interactive controls, with their material intact. Do not reveal essential content only on hover.
- **Focus-visible:** use a 3px accent or ink outline separated from the surrounding material by 3–5px. Keep it visible over all local surfaces; decorative clipping must not hide it.
- **Active / pressed:** Change shadow state immediately on press and use 140ms text-color feedback. Keep pointer lighting bounded to one active panel with two shadows; do not run continuous shadow animation or make controls drift.
- **Selected:** use the variant’s inset, filled, beveled, or ruled state; expose aria-selected, aria-pressed, or aria-current as appropriate.
- **Disabled:** retain readable muted labels and native disabled semantics; remove interactive shadow travel. Use a written prerequisite or unavailable label where necessary.
- **Error / success:** use words and a semantic color or icon, preserve user input, and provide a clear next step.

## Responsive Behavior

At 760px and below, stack the hero in source order, switch feature/pricing/contact groups to one column, and let navigation wrap into a second row. Remove decorative tilts and staggered margins, but keep the material, border language, palette, and typographic hierarchy. Use 24px gutters and 56px section intervals.

At 480px and below, use 20px gutters, 24px panel interiors, a 34–40px headline, and 28px section headings. Keep 16px+ editable text and normal body size. Allow toolbar controls to wrap; give a slider its own row when needed. Reduce ornamental frames without eliminating the style. Tables may scroll within a labeled region; the entire page must not scroll sideways.

Test at 320px, 390px, a narrow comparison iframe, and desktop widths. Also check 200% text enlargement and 400% zoom. Dialogs scroll internally with an always-reachable close action.

Keep paired raised and inset shadows on phones. Reduce excessive outer radius if necessary, but do not replace the material with outlined flat boxes.

## Accessibility

Text and functional icons must meet 4.5:1 and 3:1 respectively against the pale surface. Raised and inset shadows are decorative depth cues, not the only identification of a control. Buttons have explicit readable text or recognizable icons; labels identify inputs and switches. Focus-visible always uses a strong 3px outline, regardless of relief. Increased-contrast mode adds 1px control boundaries. Forced colors removes the shadows and uses system-colored borders and selection indicators.

Use native semantics for buttons, inputs, switches, sliders, and dialogs. Keep targets at least 44px, preserve browser zoom, label every icon, and make active/checked state available to assistive technology. Test low-vision usability with the actual controls; never claim that soft shadows alone satisfy contrast requirements. Forms retain associated error messages and focus returns after a dialog closes.

## Implementation Guidance

Apply a `.design` scope to the interface root. Start with the composition and reading hierarchy, then the material and controls. The class names below describe roles: `.hero` is the opening region, `.project-card` the representative workspace, `.panel` a grouped surface, `.feature-card` a repeated explanatory region, and `.primary` an action. Map those roles to your application’s semantic components; the demo copy is not required.

The following tokens and construction rules are included here so this file remains independently useful. They are not a replacement for the responsive, keyboard, form, and accessibility requirements above. Use semantic HTML and preserve normal layout flow around the decorative frames.

```css
.design {
  --canvas: #e8ecf4;
  --surface: #e8ecf4;
  --ink: #344159;
  --muted: #52617a;
  --accent: #6950aa;
  --on-accent: #ffffff;
  --line: #718294;
  --control-line: #718294;
  --error: #9a2540;
  --success: #285c3b;
  --warning: #735200;
  --hover: #6950aa;
  --pressed: #6950aa;
  --font: system-ui,sans-serif;
  --heading: system-ui, sans-serif;
  --display: 54px;
  --display-weight: 550;
  --body: 17px;
  --leading: 1.65;
  --radius: 28px;
  --control-radius: 24px;
  --border: 0px;
  --panel-padding: 32px;
  --gap: 32px;
  --section: 80px;
  --gutter: 36px;
  --max: 1080px;
  --shadow: 12px 12px 26px #bac4d5,-12px -12px 26px #ffffff;
  --duration: 140ms;
  --hero-columns: 7fr 5fr;
  --button-height: 48px;
  --dialog-radius: 20px;
  --dialog-width: 560px;
  --dialog-padding: 32px;
  --backdrop: #2d3c4b99;
  --dialog-shadow: 8px 8px 18px #bcc4ce, -8px -8px 18px #ffffff;
  --stat: 36px;
  --scheme: light;
  --raised: 6px 6px 12px #bdc7d8,-6px -6px 12px #ffffff;
  --inset: inset 5px 5px 10px #bdc7d8,inset -5px -5px 10px #ffffff;
}

.design{ --canvas:#e8ecf4;--surface:#e8ecf4;--ink:#344159;--muted:#52617a;--accent:#6950aa;--on-accent:#ffffff;--radius:28px;--border:0px;--shadow:12px 12px 26px #bac4d5,-12px -12px 26px #ffffff;--control-radius:24px;--raised:6px 6px 12px #bdc7d8,-6px -6px 12px #ffffff;--inset:inset 5px 5px 10px #bdc7d8,inset -5px -5px 10px #ffffff; }

.design body{ background:#e8ecf4; }

.design .demo-shell{ max-width:1180px; }

.design .demo-nav{ border:0; padding:24px 0; }

.design .hero{ grid-template-columns:1fr 1.1fr; gap:56px; padding:56px 0 72px; }

.design h1{ font-weight:500; letter-spacing:-.045em; }

.design .panel{ border:0; background:var(--surface); box-shadow:var(--shadow); border-radius:28px; }

.design .project-card{ padding:36px; }

.design .project-rows>div{ border:0; padding:10px 0; }

.design .row-icon{ border-radius:50%; box-shadow:var(--inset); padding:4px 8px; }

.design :is(.primary,.secondary,.icon-button){ background:var(--surface); color:var(--ink); border:0; box-shadow:var(--raised); border-radius:26px; }

.design .primary{ color:var(--accent); }

.design :is(.primary,.secondary,.icon-button):active,
.design .icon-button[aria-pressed=true]{ box-shadow:var(--inset); transform:none; color:var(--accent); }

.design .icon-button{ width:48px; height:48px; border-radius:50%; }

.design :is(input:not([type=checkbox]):not([type=range]),select){ border:0; box-shadow:var(--inset); border-radius:24px; padding:16px 20px; background:var(--surface); }

.design .switch-label input{ border:0; width:64px; height:32px; box-shadow:var(--inset); }

.design .switch-label input:checked{ background:#6950aa; box-shadow:inset 3px 3px 7px #45346e,inset -2px -2px 6px #a58ad9; }

.design .switch-label input::after{ width:30px; height:30px; left:1px; top:1px; background:linear-gradient(135deg,#f7faff,#dbe1ec); box-shadow:3px 3px 7px #38435644; }

.design .switch-label input:checked::after{ transform:translateX(32px); }

.design input[type=range]::-webkit-slider-runnable-track{ height:14px; border:0; box-shadow:var(--inset); }

.design input[type=range]::-moz-range-track{ height:14px; border:0; box-shadow:var(--inset); }

.design input[type=range]::-webkit-slider-thumb{ margin-top:-7px; width:28px; height:28px; background:var(--surface); border:0; box-shadow:var(--raised); }

.design .badge{ box-shadow:var(--inset); border:0; padding:8px 12px; color:var(--accent); }

.design :is(.card-bottom,.stats,.stats>div,.testimonial,.demo-footer,.demo-tabs){ border:0; }

.design .stats{ padding:32px; border-radius:24px; box-shadow:var(--inset); }

.design .avatars>span{ border:0; box-shadow:var(--raised); }

.design .demo-tabs{ gap:16px; padding:12px; }

.design .demo-tabs button[aria-selected=true]{ border:0; border-radius:24px; box-shadow:var(--inset); color:var(--accent); }

.design dialog{ border:0; box-shadow:18px 18px 60px #2d365a55,inset 2px 2px 4px #fff; background:var(--surface); }

.design :focus-visible{ outline:3px solid #6950aa; outline-offset:5px; }

.design .primary:hover:not(:disabled){ background:var(--surface); color:var(--accent); }
```

Use a labeled shared control set when checking implementation: primary and secondary buttons, an icon toggle, a checkbox/switch, a range input, text fields, navigation, tabs, and a modal. Check the neutral and selected states, not just the hero screenshot. A 1px brightness change on hover is not a substitute for the material-specific pressed state. On narrow screens, apply the responsive rules above after the construction rules.

## Do

- A continuous pale surface where controls appear pressed into or raised from the same material through opposed soft light and shadow.
- Carry the construction through navigation, inputs, cards, tabs, and overlays.
- Preserve readable text and stable hit areas when adding decoration.
- Compare the same interface content at desktop and phone widths.
- Verify actual composited backgrounds, focus rings, selected states, and unavailable controls.

## Don't

- Do not put a dark outline around every resting shape, use unrelated card and canvas colors, or mistake a single generic drop shadow for neumorphism. Keep strong focus outlines and provide explicit boundaries in increased-contrast modes.
- Replace these rules with the same card grid and a different palette.
- Copy a particular brand, its fonts, assets, terminology, or exact components.
- Hide missing behavior behind a beautiful static screenshot.

## Research Context

Background reference: [NN/g: skeuomorphism and neumorphism](https://www.nngroup.com/articles/skeuomorphism/). The rules in this document are an original interface interpretation, not a reproduction of a source artifact or a claim that this variant exhausts the family.
