---
name: Pastel Desktop Vaporwave
slug: pastel-desktop
family: vaporwave
description: "A dreamlike desktop interpretation combining pastel window chrome and artificial calm rather than a monumental nostalgic collage."
tags:
  - vaporwave
  - pastel-desktop
  - complete-system
---

# Pastel Desktop Vaporwave

## Overview and Design Philosophy

A dreamlike desktop interpretation combining pastel window chrome and artificial calm rather than a monumental nostalgic collage.

This is a complete original interpretation for whole interfaces: reading pages, working screens, navigation, forms, and overlays. It is not a historical reconstruction or a component-only theme.

### Why this variant exists

Use a compact 4:5 opening with a 54px serif title. Workspace and features become layered desktop windows with restrained title strips and generous text interiors.

The distinction from **Mall Directory Vaporwave** is structural: that interpretation follows this direction: Center a widely tracked 72px title above a broad directory panel. Feature entries form a full-width index with large ordinal rails. Preserve large empty plazas between sections. Choose this variant when the composition above suits the content. A palette substitution alone does not establish either interpretation.

## Visual Character

Use lavender, pale cyan, thin beveled gray edges, and one soft artificial gradient. Keep window interiors opaque; nostalgia comes from chrome and composition, not blurry text.

## Core Principles

- Build the composition around the organizing idea above before decorating individual components.
- Carry the same material logic through navigation, controls, content groups, and overlays.
- Buttons are beveled desktop keys. Tabs attach to the active window. Fields use white inset wells, while dialogs look like a foreground window with an explicit title.
- Keep reading order, labels, error recovery, and keyboard navigation dependable.
- Treat photographs and ornament as supporting material; the design must remain recognizable without them.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#e7ddef` | Page environment |
| `surface` | `#fbf0fa` | Opaque reading surface |
| `ink` | `#503551` | Primary text on surface |
| `muted` | `#644964` | Secondary text on surface |
| `accent` | `#825587` | Action and selection cue |
| `on-accent` | `#ffffff` | Text on filled accent |
| `line` | `#927596` | Grouping rules |
| `control-line` | `#927596` | Control boundary |
| `error` | `#9a2540` | Error text with written explanation |
| `success` | `#285c3b` | Success text with written confirmation |
| `warning` | `#735200` | Warning text with written next step |

Use these pairs on the stated opaque surfaces. Body links use ink with a persistent underline; an accent suitable for a filled button is not automatically suitable for text on every background. Decorative field colors are specified in the construction rules below. Never place muted text over a decorative field without checking the actual resulting contrast. Status uses words or icons as well as color. The surface token remains the default for menus, editable wells, and dense reading content even where a large region has a special treatment.

Use lavender, pale cyan, thin beveled gray edges, and one soft artificial gradient. Keep window interiors opaque; nostalgia comes from chrome and composition, not blurry text.

## Typography

Use a compact 4:5 opening with a 54px serif title. Workspace and features become layered desktop windows with restrained title strips and generous text interiors.

| Role | Font stack | Size and rhythm |
|---|---|---|
| Display | `ui-serif, Georgia, serif`; use the specific heading override in the construction rules | Follow the opening size above; 36px on small phones |
| Section heading | `ui-serif, Georgia, serif` | 36px / 1.2; 28px on phones |
| Card heading | `ui-serif, Georgia, serif` | 24px / 1.3; variant overrides below take precedence |
| Body | `system-ui,sans-serif` | 17px / 1.65; never condense long prose |
| Lead | body stack | 18px / 1.6; maximum 44ch |
| Control label | body stack | 14px / 1.4; 600 weight; editable text at least 16px |
| Caption and index | body or monospace stack | 12–14px / 1.5; no essential instruction only in microtype |
| Statistics | display or tabular stack specified below | 32px on phones; tabular figures for changing values |

Keep paragraphs below 65ch and preserve browser text enlargement. Font choice for display does not require the same treatment on errors or long tables. Barlow Condensed and Silkscreen, when used, are locally bundled open-license fonts; retain their SIL OFL notices when redistributing them. System stacks need no remote font service.

## Spacing

Use a 4px base with 8/12/16/24/32/48/64/96px intervals. The wide-screen section interval is 96px; the default module gap is 28px and outer gutter is 36px. Follow the role-specific interiors in the construction rules rather than forcing every region to have identical padding.

Use 8px from label to field, 4–8px from field to help, 20px between fields, and 24–32px between task groups. Principal controls are at least 48px high; all targets are at least 44×44px. Convert reference pixels to rem where appropriate. Texture and shadows need their own breathing room outside text and focus rings.

## Layout and Grid

Use a compact 4:5 opening with a 54px serif title. Workspace and features become layered desktop windows with restrained title strips and generous text interiors.

Use a flexible container around 1120px, with minmax(0,1fr) tracks and content-sized cards. Keep navigation, opening, workspace, statistics, features, testimonial, pricing, contact, and footer in a coherent source order. A visually offset panel must not change the keyboard order. Allow action rows to wrap and avoid fixed heights around text.

## Surfaces, Borders, Radius, Shadows, and Depth

Use lavender, pale cyan, thin beveled gray edges, and one soft artificial gradient. Keep window interiors opaque; nostalgia comes from chrome and composition, not blurry text.

The CSS construction below gives exact edges, corner treatment, and depth for the representative roles. Treat static content as layer 0, menus as layer 20, modal backdrop as 40, dialogs as 50, and feedback as 60. Native dialog uses the browser top layer. Do not clip a menu or focus ring inside a decorative mask. Passive content does not lift on hover unless it is actually interactive.

## Components

Buttons are beveled desktop keys. Tabs attach to the active window. Fields use white inset wells, while dialogs look like a foreground window with an explicit title.

### Buttons

Use the variant’s button material above for primary, secondary, and icon actions. Keep at least 44×44px targets; use 48px for principal actions. Each task has one clearly identifiable primary action and a verb label. Icon controls need an accessible name; toggle buttons expose aria-pressed and a persistent filled icon or inset state. Loading keeps the label or a written progress state and prevents duplicate submission without changing width. Disabled controls retain readable labels, use native disabled behavior, remove movement, and explain any prerequisite nearby.

### Forms

Carry the specified surface into editable wells without putting texture or decorative imagery behind text. Use visible persistent labels, 16px or larger editable text, and a minimum 44px control height. Give multiline fields at least 112px initial height. Group radio and checkbox sets with fieldset and legend. Native checkboxes or switches retain their checked state, keyboard access, and accessible name; sliders expose a label and current value. Validate after blur or submission, retain entered values, connect errors with aria-describedby, and explain recovery. Placeholder text is an example rather than a label. Provide a linked error summary for long forms.

### Cards

Use the surface and region construction above. A card is a content group, not necessarily a raised rectangle. Keep a heading, explanation, optional status, and action in a predictable order with 16–24px internal spacing. Passive regions have no misleading hover lift. Do not wrap multiple nested links in a second card link. Pricing compares the same criteria in the same order and states recommendations in words. Empty and loading states remain inside the intended content space without inventing decorative activity.

### Navigation and Menus

Navigation uses the variant’s framing and density while keeping recognizable links. Mark the current destination with aria-current and a persistent underline or structural rail. Allow wrapping rather than shrinking labels. Menus use an opaque reading surface, 8px surrounding padding, and at least 44px link rows; preserve the variant’s border and corner language. Use ordinary link lists for navigation menus. Escape and outside click dismiss; return focus to the trigger when dismissal is keyboard-driven. Do not add application-menu roles without their full keyboard behavior.

### Tabs

Use the selected treatment described in the component direction above and the construction rules below. Selected state needs a persistent shape, rule, inset, or fill as well as readable text. Implement a labeled tablist, aria-selected, aria-controls, and a named tabpanel. Arrow keys move between tabs; Home and End reach the first and last. Only the selected tab participates in sequential tab order. Preserve unrelated form values when switching. Keep labels at readable size on phones with wrapping or an explicitly scrollable tab strip.

### Modals and Overlays

Buttons are beveled desktop keys. Tabs attach to the active window. Fields use white inset wells, while dialogs look like a foreground window with an explicit title.

Use the same material language on an opaque reading surface. Keep a concise title, explanatory text, reachable close action, and one primary task. Maximum width is 560px; use at least 16px viewport clearance, 24–32px interior padding, 85dvh maximum height, and internal scrolling. Native dialog handles focus containment and Escape; restore the opener on close. Background content is inert while modal. Menus do not trap focus. Dim the environment without making the dialog text itself translucent.

### Badges and Feedback

Follow the badge construction specified above, using 13px readable text and 4–8px vertical padding. State is written explicitly: status color alone is insufficient. A passive badge must not resemble an actionable tool. Keep errors inline until resolved; announce completed actions through a polite status region. Noncritical toasts may dismiss after enough reading time, but cannot hold the only route to a required action.

## Icons, Imagery, and Illustration

Use original abstract landscape or geometric imagery. Avoid unlicensed album art and borrowed operating-system icons.

Use a consistent 20–24px functional icon box and a roughly 2px stroke, or a coherent pixel construction when specified. Icon buttons need accessible names. Decorative imagery has empty alt text; meaningful imagery has useful alternatives and captions outside crops. Use original or properly licensed assets. Keep logos, proprietary fonts, branded layouts, and distinctive commercial components out of this system.

## Data Visualization

Use flat plotting areas, explicit units, truthful axes, directly labeled series, and tabular alternatives. Use labels, line patterns, or shapes in addition to hue. The family’s surface treatment may frame a chart but must not distort its marks. Distinguish zero, missing, and loading values. Tables use real headers, right-aligned numbers, announced sort state, and at least 44px interactive rows. Put wide tables in a labeled local scroll region on phones.

## Motion and Animation

Use immediate bevel reversal and a 140ms dialog fade; no animated haze.

Animation explains an actual state change. Do not delay readable content behind an entrance animation or invent percentages for unknown-duration work. Honor prefers-reduced-motion with immediate state changes and static progress feedback.

## Interaction States

- **Hover:** preserve the control material and use an underline, color, or restrained highlight change. Essential content is never hover-only.
- **Focus-visible:** use a 3px ink or accent outline with 4px offset; verify it against the actual surrounding surface. No decorative mask may hide it.
- **Active / pressed:** Use immediate bevel reversal and a 140ms dialog fade; no animated haze.
- **Selected:** apply the persistent tab, toggle, or navigation treatment above and expose aria-selected, aria-pressed, or aria-current.
- **Disabled:** retain readable labels and native disabled semantics; remove movement and explain prerequisites nearby.
- **Error / success:** use words and a semantic cue, preserve input, and state a clear next step. Announce feedback through a polite live region.

## Responsive Behavior

At 760px and below, stack the hero in source order, remove staggered margins, and turn features, pricing, and contact into one column. Keep the defining material and typography. Reflow index rails into headings above their text rather than shrinking the text.

At 480px and below, use 20px gutters, 24px panel interiors, a 36px headline, and 26–28px secondary headings. Reduce heavy ornamental frame thickness while retaining its construction. Let toolbars wrap; a slider may occupy its own row. Keep 16px editable text and full target sizes. Tables can scroll locally; the page must not scroll sideways. All dialogs retain a reachable close action and scroll internally.

Test at 320px, 390px, a narrow comparison iframe, and desktop widths; also test 200% text enlargement and 400% zoom. The full construction and responsive fallback below belong together.

## Accessibility

Meet 4.5:1 for normal text, 3:1 for large text and functional graphics, and 3:1 for required control boundaries. Verify each special colored region rather than assuming token contrast covers it. Decorative relief, gloss, pattern, or shadow is never the sole cue for control identity or state.

Use native semantics, persistent labels, logical headings, a skip link, keyboard-operable menus and tabs, and focus restoration after dialogs. Keep all targets at least 44px. Increased contrast may add explicit boundaries; forced colors removes decorative paint and uses system-colored borders and selection. Reduced motion disables nonessential transitions. Errors remain associated with their fields and instructions remain understandable without imagery or color.

## Implementation Guidance

This file includes its own tokens and complete family construction followed by this interpretation’s overrides; no sibling DESIGN.md is required. Apply a `.design` scope to the document root. Map the illustrative class names to semantic roles in your application: `.hero` is the opening, `.project-card` is a workspace, `.panel` is a content group, `.feature-card` is a repeated explanation, and `.primary` is a principal action. Reuse semantic components rather than duplicating markup for each style.

Start with a responsive layout, readable heading hierarchy, and functional controls. Apply the construction below in order, with responsive and accessibility rules last. Images referenced in a demonstration are optional; substitute original or appropriately licensed imagery according to the imagery section.

```css
.design {
  --canvas: #e7ddef;
  --surface: #fbf0fa;
  --ink: #503551;
  --muted: #644964;
  --accent: #825587;
  --on-accent: #ffffff;
  --line: #927596;
  --control-line: #927596;
  --error: #9a2540;
  --success: #285c3b;
  --warning: #735200;
  --hover: #825587;
  --pressed: #825587;
  --font: system-ui,sans-serif;
  --heading: ui-serif, Georgia, serif;
  --display: 68px;
  --display-weight: 500;
  --h2: 36px;
  --h3: 24px;
  --body: 17px;
  --leading: 1.65;
  --radius: 0px;
  --control-radius: 0px;
  --border: 1px;
  --panel-padding: 28px;
  --gap: 28px;
  --section: 96px;
  --gutter: 36px;
  --max: 1120px;
  --shadow: 8px 8px 0 #c5b6d0;
  --duration: 140ms;
  --hero-columns: 7fr 5fr;
  --button-height: 48px;
  --dialog-radius: 0px;
  --dialog-width: 560px;
  --dialog-padding: 32px;
  --backdrop: #50355199;
  --dialog-shadow: 8px 8px 0 #c5b6d0;
  --stat: 36px;
  --scheme: light;
  --environment: linear-gradient(140deg,#e7ddef,#d9e9ec);
}
.design body { background:var(--canvas);color:var(--ink);font-family:var(--font);line-height:var(--leading);margin:0; }
.design * { box-sizing:border-box; }
.design .hero,.design .features { display:grid;gap:var(--gap); }
.design .hero > *,.design .features > * { min-width:0; }
.design .panel { padding:var(--panel-padding);background:var(--surface);border:var(--border) solid var(--line);border-radius:var(--radius); }
.design :is(h1,h2,h3) { font-family:var(--heading);overflow-wrap:anywhere; }
.design p { max-width:65ch; }
.design :is(button,input,select) { font:inherit;min-height:44px; }
.design :is(button,a,input,select):focus-visible { outline:3px solid var(--ink);outline-offset:4px; }
.design body{ background:linear-gradient(135deg,#e7a5d2,#aaa9e9 50%,#9ddde0); }

.design .hero{ gap:48px; padding:56px 0; }

.design .hero::before{ content:''; position:absolute; right:0; top:10%; width:50%; height:82%; background:linear-gradient(#ffffff33 1px,transparent 1px),linear-gradient(90deg,#ffffff33 1px,transparent 1px); background-size:30px 30px; transform:skewY(-6deg); z-index:-1; }

.design h1{ font:400 italic clamp(44px,7vw,84px)/1.1 Georgia,serif; color:#513471; text-shadow:3px 3px #f5e0ee,-2px -2px #a5ece7; }

.design .project-card{ border:3px outset #f6deef; border-radius:0; background:#eae1f2; box-shadow:12px 12px 0 #8876ac66; transform:translateY(18px); }

.design .card-top{ background:linear-gradient(90deg,#7257a0,#dfa0cb); margin:-24px -24px 20px; padding:12px; }

.design .card-top .eyebrow{ color:#fff; }

.design .feature-card{ border:3px outset #f6deef; border-radius:0; box-shadow:6px 6px #8a6eab55; }

.design .feature-card:nth-child(2){ transform:translateY(16px); }

.design .stats{ background:#d4c4e9; padding:24px; border:2px solid #fff9; }

.design :is(button,.badge){ border-radius:0; border-style:outset; }

/* Interpretation-specific construction; keep after the material foundations. */
.design .stats{background:var(--surface);color:var(--ink)}.design .stats>div>span{color:var(--muted)}
.design .hero{text-align:left}.design .hero-copy{margin:0;max-width:none;transform:none}.design .project-card{margin:0;max-width:none}
.design .hero{display:grid;grid-template-columns:4fr 5fr;gap:36px;align-items:start}.design .hero h1{font:400 54px/1.1 Georgia,serif;text-shadow:2px 2px #c6aee3}
.design .panel{background:#e9e1f2;border:3px ridge #aaa3bc;border-radius:0;box-shadow:6px 6px #8e8caa66;padding:28px}
.design .project-card{border-top:28px solid #b1a0d0}.design .features{grid-template-columns:1fr 1fr;gap:28px}
.design .feature-card:nth-child(n){border-top:20px solid #a7cdd2}.design .feature-index{font:13px/1.5 ui-monospace,monospace}
.design .stats{background:#d8e6ed;border:3px ridge #aaa3bc;padding:24px}.design .stats strong{font:400 38px/1.2 Georgia,serif}
.design :is(button,.badge){border-radius:0}.design .demo-tabs button[aria-selected=true]{background:#e9e1f2;border:2px outset #c3bed1}
.design .testimonial{border:0;font:italic 24px/1.6 Georgia,serif}
.design .testimonial blockquote{font:italic 24px/1.6 Georgia,serif}.design .demo-form{border-top:24px solid #b1a0d0}
.design .feature-card:nth-child(n){transform:none}
.design .row-icon{color:var(--ink)}


@media(max-width:760px){
.design .hero{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:32px!important}
.design .hero-copy{min-width:0;border-right:0}
.design .project-card{margin:20px 0 0!important;max-width:100%;transform:none!important}
.design .features{grid-template-columns:minmax(0,1fr)!important;gap:24px!important}
.design .feature-card{display:flex!important;grid-column:auto!important;grid-row:auto!important;transform:none!important}
.design .feature-index{align-self:flex-start;max-width:100%}
.design .project-rows{display:block!important}
.design .hero h1{font-size:clamp(36px,7vw,56px)!important}
.design .stats strong{font-size:32px!important}
}
@media(max-width:480px){
.design .demo-shell{padding-inline:20px!important;border-inline-width:0!important}
.design .hero{padding:28px 0!important;border-width:2px}
.design .hero-copy{padding:20px 12px!important;border-left-width:4px}
.design .hero h1{font-size:36px!important;letter-spacing:-.035em!important;overflow-wrap:anywhere}
.design .panel{padding:24px!important;border-left-width:min(8px,var(--border))}
.design .feature-card h3{font-size:26px!important}
.design .stats{padding:24px 12px!important;gap:16px!important}
.design .stats>div{padding:16px!important;border-radius:12px;min-width:0}
.design .style-artwork{height:150px!important}
.design .testimonial{padding:24px 16px!important}
.design .control-tools{gap:12px!important;justify-content:flex-start}
.design .switch-label{margin-left:0}
}
.design :focus-visible{outline:3px solid var(--ink);outline-offset:4px}
.design button:disabled{transform:none!important;filter:none;opacity:.65;cursor:not-allowed}
@media(prefers-reduced-motion:reduce){.design *,.design *::before,.design *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
@media(forced-colors:active){.design :is(.panel,button,input,select,dialog){background:Canvas!important;color:CanvasText!important;border:1px solid ButtonText!important;box-shadow:none!important}.design :focus-visible{outline-color:Highlight!important}}

```

Verify the same sample interface across siblings: navigation, hero, workspace controls, feature tabs, statistics, pricing, form validation, and dialog. Check real selected, hover, focus, disabled, and error states in addition to the opening screenshot. Copying the specimen content is not required to use this visual language.

## Do

- Use a compact 4:5 opening with a 54px serif title. Workspace and features become layered desktop windows with restrained title strips and generous text interiors.
- Use lavender, pale cyan, thin beveled gray edges, and one soft artificial gradient. Keep window interiors opaque; nostalgia comes from chrome and composition, not blurry text.
- Preserve the material when making narrow-screen adjustments.
- Verify real focus, input, selection, and modal behavior against the complete document.

## Don't

- Reduce this interpretation to a color swap of another variant.
- Force every region into the same generic rounded card.
- Let ornament, texture, or oversized type obstruct text and hit targets.
- Copy a particular brand’s assets, font files, terminology, or distinctive layouts.
- Treat a static screenshot as a substitute for working accessible controls.
