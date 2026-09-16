---
name: Fluid Dock Liquid Glass
slug: fluid-dock
family: liquid-glass
description: Compact connected tool groups with floating capsule navigation, an elastic selection lens, and structured dark content.
tags:
  - liquid-glass
  - dock
  - fluid
  - compact
  - dark
---

# Fluid Dock Liquid Glass

## Overview

Fluid Dock organizes work around compact connected tool groups. A floating navigation capsule stays above a deep, structured canvas. Within each group, one selected lens can stretch and glide between fixed controls. The important visual relationship is a continuous tool plane above stable content, rather than many independently floating cards.

Use this interpretation for a compact studio, a media workspace, or an interface with frequent mode switching. It differs from the open, transparent Clear Lens and the centered reading composition of Frosted Controls through density, grouped navigation, and elastic selection. Its dark palette supports the composition; palette alone does not define the variant.

## Design Philosophy

Give the user one clear place to act, and keep that place physically consistent as the active tool changes. Fluidity belongs to the selected material beneath the labels. The task list, data, and reading order remain stable. A compact surface should feel tactile and forgiving rather than crowded.

## Visual Character

Deep indigo content, pale periwinkle emphasis, restrained teal environment light, large capsule ends, bright rounded rims, and compact horizontal controls. Work areas use solid dark panels and structured rows. Small tool islands feel slightly thick and buoyant; oversized transparent reading panels are absent.

## Core Principles

1. Group related actions into one physical dock rather than separate glass objects.
2. Keep labels and hit targets still while the selected material moves beneath them.
3. Separate content and navigation in depth and spacing.
4. Use a restrained tint only for the main action or selected tool.
5. Keep compact interfaces usable at touch sizes and high zoom.

## Color System

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#181d36` | Deep indigo base |
| `surface` | `#232b46` | Content panels and opaque fallback |
| `ink` | `#f5f4ff` | Primary text |
| `muted` | `#d5d9ed` | Secondary text |
| `accent` | `#c3c3ff` | Selected controls and primary action |
| `on-accent` | `#252348` | Labels on emphasis |
| `line` | `#6b7894` | Content rules |
| `control-line` | `#a0acc8` | Essential input/control boundary |
| `error` | `#ffc6d2` | Error plus explanation |
| `success` | `#bce7d7` | Confirmed state plus wording |
| `warning` | `#f5dca5` | Caution plus next step |

Use broad ambient fields of `#55539a` and `#30646e` over the canvas. Pointer and scroll input may shift these fields by at most 10px, then settle. Keep paragraph backgrounds bounded; use the opaque surface when contrast cannot be guaranteed. Navigation uses adaptive Regular fill, .7px blur, and saturation 1.08. The selected segment is a flat contrasting overlay; its text follows the material polarity and stays opaque. Feature rows sit on a light `#e8f0f2` plane with `#19313d` headings, `#435d69` secondary text, and `#91a6b0` rules. This reading plane separates the long feature comparison from the surrounding indigo workspace.

Primary hover is `#d4d4ff`; pressed is `#aeaceb`. A tinted primary action uses dark text. Status colors always accompany text or icons. Do not invert a large panel’s polarity while the user is reading.

### Adaptive Regular material

Small functional surfaces choose light or dark material from the content underneath. Use a light base `#f8f8f8` with `#111f2a` ink, or a dark base `#161616` with `#fafeff` ink. Mix 1.5% of the ambient color into the base. Start at 16% opacity for light material and 12% for dark; raise it by up to 35 percentage points over busy text. Increase opacity further whenever the sampled composite would fall below 4.5:1 text contrast. Labels stay opaque. Use separate thresholds for switching toward dark (relative luminance below .28) and light (above .48) to avoid flickering near a boundary.

Tint only a primary action: mix 12% ambient color into its accent, begin at 94% opacity, and choose black or white text by the worst sampled contrast. Other controls remain neutral. Shadow opacity starts at .12 and increases by up to .18 over busy content. Ambient edge light supplies restrained context without tinting every control.

Larger menus and dialogs capture their trigger's backdrop when opened, choose a tone once, and retain it while the user reads. Their base starts at 92% opacity, receives 6% ambient tint, and adds .10 shadow opacity. As the body grows, add up to 4px blur and 6 refraction scale within the existing total +24 budget. Editable fields remain opaque. Expanded material is denser, never a transparent card with blurred text.

Pinned navigation sits 12px below the viewport edge (8px on phones). Once scrolling passes 24px, a contextual edge fade gradually appears over the next 72px. It covers the area through the navigation's lower edge plus 30px, matching that material's solid color before fading to transparent. It is decorative and cannot intercept input. Section tabs remain in document flow with 32px of space before their panel. A sticky-navigation offset must never be applied to a relatively positioned tab strip.

## Typography

Use `system-ui, sans-serif`. Display: 64px maximum, weight 660, line-height 1.02, tracking −0.055em. Section headings: 32px/1.2. Card headings: 23px/1.3. Body: 17px/1.6; lead: 18px/1.6. Tool labels: 14px, weight 600. Metadata: 13px/1.5. Input text stays at least 16px. Use tabular numbers in statistics, sliders, and prices. Compactness comes from grouped layout and shorter labels, not tiny type. Set prose in a 60–65-character measure.

## Spacing

Use a 4px base with 8, 12, 16, 18, 24, 28, 32, 48, 56, 72, and 80px steps. A dock uses 18px vertical and 24px horizontal padding. Circular tools are at least 48px, with 8–10px gaps. Keep 24px between separate material islands. Use 28px content-panel padding, 16px paragraph gaps, and 24px before a shared action group. A compact row is at least 48px when interactive.

## Layout and Grid

Constrain the page to 1160px including 32px gutters. The hero uses 1fr introduction to 1.1fr workspace with a 56px gap and 72px top / 48px bottom spacing. The main workspace is a solid dark rounded panel; the compact optical dock sits inside its lower region as the only interactive material plane.

At desktop widths, navigation is a content-sized floating capsule centered above the hero, sticky 12px from the viewport top. Keep ordinary content clear of it at rest. Statistics form one low, solid horizontal rail. Feature descriptions use full-width structured rows with index, heading, and explanation columns of roughly 120px / 1fr / 1.4fr. Their action aligns under the explanation. Pricing and contact use two columns. Use 80px between major sections.

The section tab dock stays centered in document flow with 32px before its active panel. It scrolls with its section, so switching between Overview and Recent activity never covers a heading or feature index. Primary navigation remains sticky 12px from the top, or 8px on phones. Wrapping must not cover essential content or actions.

## Surfaces, Borders, Radius, Shadows, and Depth

Use the opaque surface for reading, task rows, forms, and charts. The workspace itself may use `#202741`, a 1px `#69738d` border, and 36px corners. Its dock uses fully rounded ends; leave enough height that two tool rows still appear as one capsule. Ordinary cards use 28px corners, no hover lift, and thin dividers.

A lens has a pale 1px rim, inset highlights concentrated at its upper and lateral edges, and a restrained grounding shadow around `0 18px 36px #061b3540`. A map generated from its actual rounded-rectangle geometry keeps the middle neutral and bends the backdrop inward along curved edges. Use resting displacement scale 52, preceded by .7px blur; input can add up to 24 to the scale before settling. The strong edge and low scattering distinguish this connected, elastic material from Frosted Controls. Filter only an absolute decorative child; leave the host and foreground labels unfiltered. The lens samples actual page pixels, including scrolling content and the responsive environment, rather than a cloned background image. If SVG backdrop filtering is unsupported, retain blur and specular highlights; if blur is unsupported, use opaque surface and explicit boundaries.

Set the refracting bevel width to `min(1.6 × corner radius, 0.46 × surface height, 72px)`. Within this shoulder, use `sin((1 - inwardDistance / shoulderWidth) × π/2)^1.2` for the bend strength. This distributes visible bending well into the body; the center remains neutral. A long capsule and a compact rounded body each need a map generated from their own geometry.

## Components

### Buttons

Use pale periwinkle for the main action, with an adaptive accent-color material fill starting at 94% opacity, dark text, and a fine top glint. Buttons are at least 48px high; single actions may be capsules. Inside a dock, use thin neutral fills and circular icon controls without adding a separate glass layer to every child. A selected toggle uses periwinkle plus `aria-pressed` and a persistent icon change or fill. Press adds a bounded inset shade immediately. Neither press nor hover changes the target’s position. Loading retains width and name; disabled controls retain native disabled semantics and readable text.

### Forms

Keep all editable text on opaque wells. Use 48px minimum height, 16px editable text and padding, 20px between fields, and persistent labels. Favor 12–16px input corners even though navigation is pill-shaped; long fields need a clear reading geometry. Use native range, switch, checkbox, and select controls with names and current values. Validate after blur or submit, retain input, and connect messages using `aria-describedby`. Offer a linked error summary for larger forms. Avoid lensing beneath a numeric value or text caret.

### Cards

The project workspace is a stable solid panel, with a heading, context, structured task rows, one shared dock, then collaborator metadata. Do not add independent floating frames around each task. Feature content appears in horizontal rows with upper rules. Pricing and forms use ordinary solid panels because they support comparison and editing. Recommendations are written, not only tinted. Passive cards have no click cursor or hover lift. Empty states keep the heading and show one useful next step.

### Navigation and Menus

Build one rounded navigation group containing identity, destinations, and an optional action. A thin selected segment identifies the current route with `aria-current`. Keep at least 24px between logical groups. The dock can stick on desktop with a bounded shadow; at 760px it wraps destinations onto a second line and remains 8px below the viewport edge. Menus grow from their trigger on dense adaptive Regular material with 24px corners, 8px padding, and 44px rows. Use native disclosure/link semantics, Escape and outside dismissal, and focus restoration after keyboard dismissal. The menu must paint above both navigation and content.

### Tabs

Tabs are the main fluid behavior: one rounded selected marker slides beneath stationary labels. Use 6px container padding, 4px gaps, and resting marker dimensions matching the selected button. Animate travel over 300ms with a bounded directional stretch and bend that resolves into the selected capsule. The small overshoot applies only to decoration and never obscures another label. This morph is a selection response, not a looping wobble. Keep selection immediately available to assistive technology. Use roving tab order, arrow keys, Home/End, `aria-selected`, `aria-controls`, and named panels. Recompute the marker after font or size changes and preserve unrelated inputs.

### Modals and Overlays

Use a native dialog on dense adaptive Regular material with a lens-like rim, 36px corners, 32px padding, and a 560px maximum width. Use `rgb(10 14 33 / .75)` behind it. Cap height at 85dvh and keep at least 16px clearance, with internal scrolling and an always-reachable close action. Focus enters the task, remains contained, and returns to its opener on close; Escape dismisses. Keep one clear primary action and a plain secondary cancel. Do not make a large dialog elastically wobble.

### Badges and Feedback

Badges use a small solid capsule with 13px text and explicit state wording. They do not acquire independent depth or moving reflections. Validation remains inline; successful local actions can use a polite status region. A toast must not contain the only undo or recovery mechanism. Keep recommendation and unavailable states understandable without hue.

## Icons, Imagery, and Illustration

Fade decorative hero and workspace contours to transparent before their paint bounds using intersecting horizontal and vertical edge masks. Apply masks only to the scene pseudo-elements, leaving the optical body and control contents unclipped. Preserve real scene detail behind the glass without exposing hard rectangular cutoffs.

Use original 20–24px line icons with consistent 1.8–2px strokes. The surrounding environment can contain broad arcs or bands behind navigation to reveal the material edge; any input response follows the bounded environment motion rules. Do not add ornamental objects to the task list. Meaningful imagery belongs in content, with appropriate alt text and stable reading surfaces nearby. Keep decorative geometry aria-hidden. Use licensed or original assets and standard fonts; do not import platform logos, proprietary type, or recognizable screenshots of another application.

## Data Visualization

Use solid chart panels with opaque labels. Periwinkle marks the primary series; use line styles, symbols, or labels to differentiate the rest. Show units, scales, missing values, and a textual or tabular alternative. Tables use visible headers, tabular numerals, 48px interactive rows, and an explicit sort state. A local scroll region is acceptable on narrow screens; the whole page cannot overflow. Material distortion is never applied to plotted data or selected ranges.

## Motion and Animation

Use 160ms control-color feedback and 300ms selected-marker travel. A pointer movement or press energizes a damped spring in the dock's decorative material body. Cap its translation at ±5px and stretch at ±4.5%; keep labels, focus rings, hit targets, and content panels fixed. Let light, shape, and refraction settle together in roughly 1000–1800ms. Refraction scale starts at 56 and may increase by at most 24 from input energy. Broad environment fields can respond by no more than 10px, supplying changing background pixels for the lens to bend. No idle orbit, drift, pulses, or particle trails: schedule frames only during input and settling. A completed state appears promptly without waiting for decoration. Reduced motion and the saved material-motion-off preference stop these dynamics and show selection immediately. Loading uses written status or actual progress.


Menus and dialogs reveal their decorative body from the trigger rectangle over 300ms and retract over 210ms, using `cubic-bezier(.2,.8,.2,1)`. Fade content in over 180ms after a 70ms delay; do not scale glyphs or move final hit targets with the material. Cancel stale animation completion when reopened quickly. Keep native disclosure/dialog semantics, Escape, outside dismissal where appropriate, and focus restoration. With reduced motion or material motion disabled, open and close immediately. Native dialogs remain in the top layer throughout dismissal.

On contact, the body stretches horizontally and compresses vertically within a 4.5% bound, the optical shoulder bends the background more strongly, and blur reduces by up to 65%. Regular controls can shed up to 14 percentage points of fill only when the sampled foreground contrast still passes; dense menus and dialogs keep their fill. Clear changes from 3.5% resting neutral fill toward 1.2% over its bounded dim environment. On release, refraction, blur, shape, and fill return together through the damped spring. This sequence belongs to the control body; there is no free-floating liquid attached to the cursor.

## Pointer Effects

**Pointer policy: surface.** Light, deformation, and refraction belong to functional glass controls; the cursor remains normal.

### Flowing reflection

**Construction.** Illuminate only the active material surface, with a bounded response on an immediately neighboring control. Preserve the native cursor. No detached droplet, page-wide lens, water trail, or decoration follows it. Use the existing rounded material body behind stationary labels; avoid a second optical layer inside the same control group.

**Movement.** Measure velocity using elapsed milliseconds, smooth it over 28ms, cap it at 2400 CSS pixels/second, and discard stale input after 180ms. Test the swept segment between events with an 18px proximity margin so a quick pass still energizes a narrow control. Apply one entry impulse, then let its spring settle. Body translation stays within ±5px, stretch within ±4.5%, and additional refraction within 24 of the resting scale. Light, flex, and refraction share the same input energy. Background fields can shift by at most 10px, without moving reading content. Stop requesting animation frames after settling.

**Implementation and fallbacks.** Keep decoration aria-hidden and pointer-events: none. Reuse cached optical maps and filter graphs. Clear transient motion on keyboard input, resize, blur, and variant changes. A persistent user opt-out and prefers-reduced-motion disable material motion; forced colors uses system surfaces. Reduced transparency and increased contrast replace optical material with opaque surfaces. Touch presses can activate the same material without mouse tracking. The preview's **Material motion: On/Off** control changes dynamics, while contrast adaptation remains active. Ordinary blur is the fallback when SVG backdrop filtering is unavailable.

## Interaction States

- **Hover:** increase local edge light; text links gain a stronger underline. Keep target bounds stable.
- **Focus-visible:** use a 3px opaque ink outline with a 3px offset; inset it within the rounded tab strip.
- **Active / pressed:** add an inset shade or darker action fill immediately, and energize the decorative material without scaling the button's labels or hit target.
- **Selected:** move the decorative marker, update ARIA immediately, and retain a visible filled or outlined state.
- **Disabled:** preserve native disabled behavior and readable labels, with no active light response.
- **Loading:** keep the action’s name and width, and prevent duplicate submission.
- **Error / success:** include explanatory text and optional icons; preserve input and context.

## Responsive Behavior

At 760px and below, use a one-column hero and one-column feature, pricing, and contact groups. Turn structured feature rows into vertical content with ordinary reading order. Navigation and tabs stop sticking; destinations wrap onto a separate line. Use 24px gutters, 48px hero spacing, and 16–24px panel padding. Tool groups wrap with 30px corners, and the range gets its own row. Below 480px use 20px gutters and a 36–44px display heading; keep body and editable type unchanged. Retain optical material when supported on phones. Check 320px, 390px, comparison iframes, 200% text size, and 400% zoom. Never let a dock cover a field, footer link, or dialog close button.

## Accessibility

Target 4.5:1 for body text and 3:1 for large text and essential control boundaries. Test the dark surface, ambient-field endpoints, selected marker, and brightest pointer reflection. Keep labels opaque; use the solid surface if imagery is unbounded. Preserve semantic landmarks, headings, native input behavior, keyboard tab order, focus management, and error associations. Reduced transparency and increased contrast replace optical surfaces with opaque `surface` plus `control-line`. Forced colors uses Canvas/CanvasText, and Highlight/HighlightText for the selected marker. Reduced motion removes the elastic and pointer responses. Every task remains available with the motion toggle off and without optical filter support.

## Implementation Guidance

### Backdrop adaptation in a browser

Separate optical rendering from legibility decisions. CSS/SVG backdrop filtering bends the actual rendered background. The adaptation controller estimates context from nine DOM hit-test points, composites known CSS surface colors, and marks text or unknown image/video/canvas content as busy. Authored gradients provide a representative scene color. These estimates do not read arbitrary image or video pixels and cannot guarantee contrast over unbounded media; provide a dimming layer or opaque backing in that case.

Batch geometry/color reads before style writes and coalesce scroll/resize work into one animation frame. Update foreground, fill, ambient rim, and shadow together. Continue static legibility adaptation when motion is disabled. The CSS example below supplies baseline material and fallback structure; the adaptive controller overrides fill and ink at runtime. Verify real composites and focus/hover states in the target browser, not only the base palette.


Use a semantic page scope and one shared control implementation. Give each unfiltered dock host an absolute, aria-hidden material child behind its labels:

```css
.design { color:#f5f4ff; background:#181d36; font:17px/1.6 system-ui,sans-serif; }
.design .dock { position:relative; isolation:isolate; padding:18px 24px;
  background:none; }
.design .dock-body { position:absolute; inset:0; z-index:-1; pointer-events:none;
  border-radius:999px; background:#232b46; border:1px solid #ffffffb3;
  box-shadow:inset 0 2px 2px -1px #ffffff70,0 18px 36px #061b3540; }
@supports(backdrop-filter:blur(1px)) {
  .design .dock-body { background:rgb(15 31 43 / .26);
    backdrop-filter:blur(.7px) saturate(1.08); }
}
.design .selected-marker { pointer-events:none;
  transition:transform 300ms cubic-bezier(.2,.9,.25,1.12),
    width 300ms cubic-bezier(.2,.9,.25,1.12); }
@media(prefers-reduced-motion:reduce) { .design .selected-marker { transition:none; } }
@media(prefers-reduced-transparency:reduce),(prefers-contrast:more) {
  .design .dock-body { background:#232b46; backdrop-filter:none; border-color:#a0acc8; }
}
```

Create a unique SVG filter for each decorative material body. At creation and resize, use its width, height, and corner radius to rasterize a rounded-rectangle signed-distance field into a PNG. Near the perimeter, encode the inward normal in R/X and G/Y; taper to approximately 128 in the neutral center. Load the map through `feImage` and use `feDisplacementMap` with `color-interpolation-filters="sRGB"` and resting scale 52. Apply `backdrop-filter: blur(.7px) url(#unique-lens-filter) saturate(1.08)` to the material child only. Reuse the map while changing scale and body transform. Keep ancestor opacity at 1 and avoid masks, foreground filters, or extra backdrop layers that prevent sampling the page. Conventional blur and rim shadows are the fallback if SVG backdrop rendering is unavailable.

Limit displacement textures to 1024 × 512 pixels while preserving aspect ratio. Limit channel amplitude so peak displacement remains below 52% of the shoulder width; narrow navigation lenses must not fold or reverse the background. Use spring stiffness 210 and damping 16 for a visible, bounded release. Scroll impulses energize the pinned navigation, and light coordinates follow the same spring.

Use filterUnits and primitiveUnits set to userSpaceOnUse, with explicit measured pixel dimensions on the filter region and feImage. Prepare at most 13 immutable optical graphs per body, covering its resting strength through resting strength +24 in steps of two, all sharing the same map image. Select an existing graph during motion; do not clone graphs or regenerate maps in animation frames. Rebuild this bounded set only when the measured body geometry changes, and remove its old set. This avoids Chromium caching of mutable SVG backdrop graphs and repeated allocation during pointer movement.

Use a bounded damped spring with a clamped time step. Translation cannot exceed ±5px, stretch ±4.5%, or extra refraction scale 12. Stop scheduling frames when the roughly 1000–1800ms response settles. Measure the selected tab's offset and width with ResizeObserver and after activation; bend only the decorative marker, never button dimensions. Reset spring state and filter instances on family or preference changes. Verify refraction over scrolling content, stationary labels and targets, keyboard selection, sticky offsets, menu stacking, dialog focus, phone flow, and opaque preference fallbacks.

## Do

- Make related tools feel like one continuous, accessible control plane.
- Put elasticity in the selected material beneath stable labels.
- Keep the content structured and the number of floating groups small.
- Return docks to normal flow when space or zoom requires it.

## Don't

- Use a tiny imitation phone dock with unlabeled or undersized controls.
- Animate the entire workspace or make pointer targets spring away.
- Stack several transparent tool layers over one another.
- Claim the browser approximation contains a native platform renderer.

## Research Context

Material context: [Apple’s Liquid Glass overview](https://developer.apple.com/videos/play/wwdc2025/219/). Browser mechanics: [backdrop filtering and backdrop roots](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) and [SVG displacement channels](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap). The connected-tool composition, palette, motion values, and component rules define an original browser approximation, not Apple's native renderer. Fluid Dock names this library variant, not a native platform preset.
