---
name: Xerox Zine Grunge
slug: xerox-zine
family: grunge
description: "A photocopied independent-publication interpretation using stark monochrome, cut-paper edges, and typographic urgency rather than colored weathering."
tags:
  - grunge
  - xerox-zine
  - complete-system
---

# Xerox Zine Grunge

## Overview and Design Philosophy

A photocopied independent-publication interpretation using stark monochrome, cut-paper edges, and typographic urgency rather than colored weathering.

This is a complete original interpretation for whole interfaces: reading pages, working screens, navigation, forms, and overlays. It is not a historical reconstruction or a component-only theme.

### Why this variant exists

Use an 88px condensed headline above an offset workspace. Feature content becomes unboxed zine columns with rough-looking rule separators. Keep body text clean and comfortably spaced.

The distinction from **Layered Poster Grunge** is structural: that interpretation follows this direction: Use a 3:2 opening with a 76px heavy serif title. Place the workspace against a larger backing-paper offset. Features form broad unequal panels with visible edge layering. Choose this variant when the composition above suits the content. A palette substitution alone does not establish either interpretation.

## Visual Character

Use off-white paper, black ink, double registration-like edges, and subtle noise only in margins. Avoid applying low-opacity distress to actual text.

## Core Principles

- Build the composition around the organizing idea above before decorating individual components.
- Carry the same material logic through navigation, controls, content groups, and overlays.
- Buttons resemble black pasted labels. Tabs use thick underlines. Forms and dialogs are clean paper sheets with strong dark frames.
- Keep reading order, labels, error recovery, and keyboard navigation dependable.
- Treat photographs and ornament as supporting material; the design must remain recognizable without them.

## Color System

| Token | Value | Role |
|---|---|---|
| `canvas` | `#e6e4dd` | Page environment |
| `surface` | `#f6f4e9` | Opaque reading surface |
| `ink` | `#292925` | Primary text on surface |
| `muted` | `#4c4c43` | Secondary text on surface |
| `accent` | `#30302b` | Action and selection cue |
| `on-accent` | `#ffffff` | Text on filled accent |
| `line` | `#99998d` | Grouping rules |
| `control-line` | `#77776c` | Control boundary |
| `error` | `#812d38` | Error text with written explanation |
| `success` | `#345a3b` | Success text with written confirmation |
| `warning` | `#6f520b` | Warning text with written next step |

Use these pairs on the stated opaque surfaces. Body links use ink with a persistent underline; an accent suitable for a filled button is not automatically suitable for text on every background. Decorative field colors are specified in the construction rules below. Never place muted text over a decorative field without checking the actual resulting contrast. Status uses words or icons as well as color. The surface token remains the default for menus, editable wells, and dense reading content even where a large region has a special treatment.

Use off-white paper, black ink, double registration-like edges, and subtle noise only in margins. Avoid applying low-opacity distress to actual text.

## Typography

Use an 88px condensed headline above an offset workspace. Feature content becomes unboxed zine columns with rough-looking rule separators. Keep body text clean and comfortably spaced.

| Role | Font stack | Size and rhythm |
|---|---|---|
| Display | `'Barlow Condensed','Arial Narrow',sans-serif`; use the specific heading override in the construction rules | Follow the opening size above; 36px on small phones |
| Section heading | `'Barlow Condensed','Arial Narrow',sans-serif` | 42px / 1.2; 28px on phones |
| Card heading | `'Barlow Condensed','Arial Narrow',sans-serif` | 27px / 1.3; variant overrides below take precedence |
| Body | `system-ui,sans-serif` | 17px / 1.65; never condense long prose |
| Lead | body stack | 18px / 1.6; maximum 44ch |
| Control label | body stack | 14px / 1.4; 600 weight; editable text at least 16px |
| Caption and index | body or monospace stack | 12–14px / 1.5; no essential instruction only in microtype |
| Statistics | display or tabular stack specified below | 32px on phones; tabular figures for changing values |

Keep paragraphs below 65ch and preserve browser text enlargement. Font choice for display does not require the same treatment on errors or long tables. Barlow Condensed and Silkscreen, when used, are locally bundled open-license fonts; retain their SIL OFL notices when redistributing them. System stacks need no remote font service.

## Spacing

Use a 4px base with 8/12/16/24/32/48/64/96px intervals. The wide-screen section interval is 80px; the default module gap is 24px and outer gutter is 28px. Follow the role-specific interiors in the construction rules rather than forcing every region to have identical padding.

Use 8px from label to field, 4–8px from field to help, 20px between fields, and 24–32px between task groups. Principal controls are at least 48px high; all targets are at least 44×44px. Convert reference pixels to rem where appropriate. Texture and shadows need their own breathing room outside text and focus rings.

## Layout and Grid

Use an 88px condensed headline above an offset workspace. Feature content becomes unboxed zine columns with rough-looking rule separators. Keep body text clean and comfortably spaced.

Use a flexible container around 1180px, with minmax(0,1fr) tracks and content-sized cards. Keep navigation, opening, workspace, statistics, features, testimonial, pricing, contact, and footer in a coherent source order. A visually offset panel must not change the keyboard order. Allow action rows to wrap and avoid fixed heights around text.

## Surfaces, Borders, Radius, Shadows, and Depth

Use off-white paper, black ink, double registration-like edges, and subtle noise only in margins. Avoid applying low-opacity distress to actual text.

The CSS construction below gives exact edges, corner treatment, and depth for the representative roles. Treat static content as layer 0, menus as layer 20, modal backdrop as 40, dialogs as 50, and feedback as 60. Native dialog uses the browser top layer. Do not clip a menu or focus ring inside a decorative mask. Passive content does not lift on hover unless it is actually interactive.

## Components

Buttons resemble black pasted labels. Tabs use thick underlines. Forms and dialogs are clean paper sheets with strong dark frames.

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

Buttons resemble black pasted labels. Tabs use thick underlines. Forms and dialogs are clean paper sheets with strong dark frames.

Use the same material language on an opaque reading surface. Keep a concise title, explanatory text, reachable close action, and one primary task. Maximum width is 560px; use at least 16px viewport clearance, 24–32px interior padding, 85dvh maximum height, and internal scrolling. Native dialog handles focus containment and Escape; restore the opener on close. Background content is inert while modal. Menus do not trap focus. Dim the environment without making the dialog text itself translucent.

### Badges and Feedback

Follow the badge construction specified above, using 13px readable text and 4–8px vertical padding. State is written explicitly: status color alone is insufficient. A passive badge must not resemble an actionable tool. Keep errors inline until resolved; announce completed actions through a polite status region. Noncritical toasts may dismiss after enough reading time, but cannot hold the only route to a required action.

## Icons, Imagery, and Illustration

Use original high-contrast photos with captions and text alternatives. Grain may affect imagery, never essential interface copy.

Use a consistent 20–24px functional icon box and a roughly 2px stroke, or a coherent pixel construction when specified. Icon buttons need accessible names. Decorative imagery has empty alt text; meaningful imagery has useful alternatives and captions outside crops. Use original or properly licensed assets. Keep logos, proprietary fonts, branded layouts, and distinctive commercial components out of this system.

## Data Visualization

Use flat plotting areas, explicit units, truthful axes, directly labeled series, and tabular alternatives. Use labels, line patterns, or shapes in addition to hue. The family’s surface treatment may frame a chart but must not distort its marks. Distinguish zero, missing, and loading values. Tables use real headers, right-aligned numbers, announced sort state, and at least 44px interactive rows. Put wide tables in a labeled local scroll region on phones.

## Motion and Animation

Use immediate state changes with no flickering or jittering text.

Animation explains an actual state change. Do not delay readable content behind an entrance animation or invent percentages for unknown-duration work. Honor prefers-reduced-motion with immediate state changes and static progress feedback.

## Interaction States

- **Hover:** preserve the control material and use an underline, color, or restrained highlight change. Essential content is never hover-only.
- **Focus-visible:** use a 3px ink or accent outline with 4px offset; verify it against the actual surrounding surface. No decorative mask may hide it.
- **Active / pressed:** Use immediate state changes with no flickering or jittering text.
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
  --canvas: #e6e4dd;
  --surface: #f6f4e9;
  --ink: #292925;
  --muted: #4c4c43;
  --accent: #30302b;
  --on-accent: #ffffff;
  --line: #99998d;
  --control-line: #77776c;
  --error: #812d38;
  --success: #345a3b;
  --warning: #6f520b;
  --hover: #30302b;
  --pressed: #30302b;
  --font: system-ui,sans-serif;
  --heading: 'Barlow Condensed','Arial Narrow',sans-serif;
  --display: 80px;
  --display-weight: 900;
  --h2: 42px;
  --h3: 27px;
  --body: 17px;
  --leading: 1.65;
  --radius: 0px;
  --control-radius: 0px;
  --border: 2px;
  --panel-padding: 24px;
  --gap: 24px;
  --section: 80px;
  --gutter: 28px;
  --max: 1180px;
  --shadow: 4px 4px 0 #8b7d68;
  --duration: 0ms;
  --hero-columns: 7fr 5fr;
  --button-height: 48px;
  --dialog-radius: 0px;
  --dialog-width: 560px;
  --dialog-padding: 32px;
  --backdrop: #3c352d99;
  --dialog-shadow: 4px 4px 0 #8b7d68;
  --stat: 36px;
  --scheme: light;
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
.design body{background:var(--canvas)}

.design .demo-nav{ border-bottom:5px dashed; }

.design .hero{ gap:42px; }

.design h1{ font:900 clamp(48px,7vw,88px)/.98 'Barlow Condensed','Arial Narrow',sans-serif; text-transform:uppercase; transform:rotate(-3deg); text-shadow:2px 1px #bb422c77,-1px -2px #eee3ca; }

.design .hero-copy>.eyebrow{ background:#3b352f; color:#f3ead5; padding:8px 16px; display:inline-block; transform:rotate(2deg); }

.design .project-card{ background:#ece0c6; border:0; border-top:7px dashed #514538; border-radius:0; box-shadow:7px 7px #60554844; transform:rotate(2deg); }

.design .project-card::before{ content:''; width:100px; height:26px; background:#bbaa7477; border-inline:2px dashed #bbaa74; position:absolute; top:-17px; left:32%; transform:rotate(-6deg); }

.design .feature-card{ background:transparent; border:0; border-top:5px dashed; border-radius:0; box-shadow:none; }

.design .primary{ border:3px solid; border-radius:0; box-shadow:3px 3px #3b352f; }

.design .testimonial{ border:4px dashed; transform:rotate(-1deg); background:#c9bfa9; }

.design .stats{ border-block:6px double; }

/* Interpretation-specific construction; keep after the material foundations. */
.design .stats{background:var(--surface);color:var(--ink)}.design .stats>div>span{color:var(--muted)}
.design body{background:#e6e4dd}.design .hero{display:block;padding:36px 0}.design .hero h1{font:700 88px/.96 'Barlow Condensed',Impact,sans-serif;text-transform:uppercase;text-shadow:2px 2px #b5b2a8}
.design .hero-copy{border-block:8px double;padding:24px 0}.design .project-card{margin:36px 0 0 25%;border:3px solid;border-radius:0;transform:none;background:#f6f4e9;box-shadow:7px 7px #333}
.design .features{grid-template-columns:2fr 1fr;gap:28px}.design .feature-card:nth-child(n){border:0;border-top:6px double;border-radius:0;transform:none;background:none;box-shadow:none}
.design .feature-card:first-child{grid-row:span 2}.design .feature-index{font:700 16px/1.4 ui-monospace,monospace}
.design .stats{border-block:8px double;padding:28px 0}.design .stats strong{font-family:'Barlow Condensed',Impact,sans-serif;font-size:56px}
.design .testimonial{text-align:left;border-left:8px solid;padding:32px;font-style:italic}
.design .testimonial blockquote{font-style:italic}.design .demo-form{border:3px solid;border-radius:0;background:#f6f4e9;transform:none}
.design .feature-card:nth-child(n){transform:none}
.design body{background:var(--canvas)}.design .demo-shell{background:var(--canvas);color:var(--ink)}.design .hero h1{color:var(--ink)}
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

- Use an 88px condensed headline above an offset workspace. Feature content becomes unboxed zine columns with rough-looking rule separators. Keep body text clean and comfortably spaced.
- Use off-white paper, black ink, double registration-like edges, and subtle noise only in margins. Avoid applying low-opacity distress to actual text.
- Preserve the material when making narrow-screen adjustments.
- Verify real focus, input, selection, and modal behavior against the complete document.

## Don't

- Reduce this interpretation to a color swap of another variant.
- Force every region into the same generic rounded card.
- Let ornament, texture, or oversized type obstruct text and hit targets.
- Copy a particular brand’s assets, font files, terminology, or distinctive layouts.
- Treat a static screenshot as a substitute for working accessible controls.
