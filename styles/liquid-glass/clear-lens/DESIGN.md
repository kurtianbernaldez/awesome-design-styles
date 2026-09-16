---
name: Clear Lens Liquid Glass
slug: clear-lens
family: liquid-glass
description: Transparent optical control islands over a spacious dimmed environment, with clear centers and luminous curved edges.
tags:
  - liquid-glass
  - optical
  - transparent
  - immersive
  - rounded
---

# Clear Lens Liquid Glass

## Overview

Clear Lens is an immersive interface with small, almost transparent control islands over a deep teal environment. Its recognizable feature is the curved edge of a lens: concentrated light and slight background displacement define a surface whose center stays clear. Content remains crisp and structurally separate from controls.

Use it for creative workspaces, media browsing, presentation tools, or an expressive project dashboard. It differs from Frosted Controls through open composition and low scattering, and from Fluid Dock through separated, spacious control islands. It is not a generic glass-card grid. A document table or paragraph does not become a lens merely because navigation does.

## Design Philosophy

Let people see through the functional layer without making them read through noise. The environment supplies atmosphere; a small number of lenses reveal where interaction happens. Each lens needs a recognizable silhouette, readable labels, and enough room around it to feel separate from the content beneath.

## Visual Character

Deep blue-green fields, pale mint emphasis, generous negative space, clear optical centers, bright upper rims, and soft grounding shadows. Rounded rectangles use continuous-looking curves; compact tools use circles and capsules. Typography is contemporary and neutral rather than a proprietary platform typeface.

## Core Principles

1. Put optical material on navigation, contextual controls, and transient tools. Keep long reading and data surfaces stable.
2. Define glass through edge light and backdrop lensing, not through a white outline alone.
3. Use a bounded, dimmed environment. Unknown imagery requires a reading scrim or an opaque surface.
4. Keep one physical material plane per control group. Children are flat overlays on that plane.
5. Feedback may illuminate a lens; it must not move a hit target away from the pointer.

## Color System

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#122f3b` | Deep base environment |
| `surface` | `#163840` | Opaque reading and fallback surface |
| `ink` | `#f3f9fb` | Primary text |
| `muted` | `#d2e4e8` | Secondary text, never translucent |
| `accent` | `#b8e5dc` | Primary action and selected control |
| `on-accent` | `#13352f` | Text on mint emphasis |
| `line` | `#637d84` | Group separators |
| `control-line` | `#93b0b8` | Essential input and control boundary |
| `error` | `#ffc6ce` | Error text plus an explanation |
| `success` | `#bce7cf` | Confirmed state plus wording |
| `warning` | `#f5d69b` | Caution plus recovery guidance |

Environment colors are bounded to `#142d3b`, `#133d44`, `#112b3e`, `#2b616a`, and `#354f70`. Blend broad radial fields and curved color bands over a deep linear base. Their restrained movement belongs to the background: pointer or scroll input may displace the environment by at most 10px before it settles. Dim bands where they meet text. Continuous, gently moving scene contours pass behind both the header and the workspace; preserve recognizable edges through the material. A control lens uses `rgb(255 255 255 / .035)`, .35px backdrop blur, and saturation 1.05. Its border highlight may be white at 70% opacity; it is decorative and does not replace the essential control boundary. Use opaque surface for menus, dialogs with substantial text, inputs, charts, and pricing details.

Do not reduce foreground opacity when the glass is clear. Primary actions use mint with dark text; repeated secondary controls use neutral translucent fills. Color cannot carry state alone.

### Clear material and bounded backdrops

This interpretation uses Clear material for sticky navigation and the workspace tool island over the dimmed page environment. Keep bright, bold labels over that environment. The neutral reflection remains `rgb(255 255 255 / .035)` with opaque `#fafeff` labels; it does not switch to Regular material over lighter content. Tabs, primary actions, menus, and dialogs use conventional opaque surfaces. Do not mix Clear and Regular glass within this interpretation.

The navigation stays sticky 12px below the viewport top, or 8px on phones, over this dim page. Leave the Clear lens free of an opaque scroll-edge overlay so actual content remains visible and refracts through it. Sections use the measured navigation height for anchor clearance. If a future media background cannot support readable bright labels, strengthen its dimming layer or use an opaque control. Clear is conditional, not a universally safe transparent style.

## Typography

Use `system-ui, sans-serif` for every role. Desktop display: 66px maximum, weight 620, line-height 1.02, tracking −0.055em. Section headings: 32px/1.2, weight 620. Card headings: 23px/1.3, weight 650. Body: 17px/1.65; lead: 18px/1.6 with a 35-character line limit. Controls: 14px/1.4, weight 600. Metadata: 13px/1.5. Eyebrows: 12px uppercase, modest tracking, never used for essential instructions. Use tabular numbers for statistics and prices.

Keep paragraphs within 60–65 characters. A large heading can break intentionally into two or three lines; do not shrink body copy to make a control island fit. At phone widths use a 36–56px fluid heading, preserving normal body size.

## Spacing

Use a 4px base with 8, 12, 16, 24, 28, 32, 48, 64, and 88px steps. Controls have 48px minimum height. A capsule group has 16px interior clearance and 10px between tools. Leave at least 24px between two separate lenses. Text clusters use 8–16px internal gaps, with 24–28px before an action group.

## Layout and Grid

Constrain the page to 1180px including 32px side gutters. Use an asymmetric hero of 1.2fr text to 1fr workspace, a 48px column gap, and 84px top / 64px bottom spacing. Put the headline and primary action left; put the representative workspace and its control island right. Workspace content has no enclosing glass card. Its bottom controls form the physical lens.

Use three unboxed statistics, three equal feature columns, two pricing columns, and a two-column contact region. Content cards use the opaque surface. The hero is a deliberate opening composition; later sections use orderly comparisons. Preserve source order when columns collapse.

## Surfaces, Borders, Radius, Shadows, and Depth

Use three levels: environment, readable content, and functional glass. A lens has a 1px pale outer rim; an inset upper highlight around 2px; small lateral reflections; and a restrained shadow, `0 18px 36px #061b3540`. Control-island radius is 38px; navigation and opaque single actions can use full capsules. Interior circular tools are 48px, with a 1px contrasting boundary. Content-card radius is 28px and carries no optical distortion.

Lens refraction is an enhancement to the background only. Generate a displacement map from each surface's actual width, height, and corner radius. Use distance to its rounded perimeter to preserve a neutral center and direct inward bends along curved edges. Set the resting displacement scale to 56; input energy can add up to 24 to that scale before settling. This is a filter scale, not a promise of 56px movement at every pixel. Apply the map to a decorative material child, with .35px blur before displacement, while the host and its labels stay unfiltered. The backdrop must sample the real color fields and content beneath it, including their current scroll position. Do not paint a cloned background onto the lens. If SVG backdrop filters are unavailable, keep conventional backdrop blur and layered edge highlights. If blur itself is unavailable, use opaque surface.

Set the refracting bevel width to `min(1.6 × corner radius, 0.46 × surface height, 72px)`. Within this shoulder, use `sin((1 - inwardDistance / shoulderWidth) × π/2)^1.2` for the bend strength. This distributes visible bending well into the body; the center remains neutral. This geometry rule replaces a fixed percentage band across every aspect ratio.

## Components

### Buttons

Use a mint capsule for the main action, 48px high with 20–24px horizontal padding, an opaque accent-color fill, a small upper glint, and dark text. Secondary controls are thin overlays on an existing lens or opaque buttons on content surfaces. Avoid stacking an independent glass button on a glass toolbar. Icon buttons keep an accessible verb label and a 24px icon. A selected icon toggle uses mint fill and `aria-pressed`; it must remain recognizable without the pointer effect. Press increases the inset shadow and changes fill immediately. Loading preserves width and uses written status; disabled buttons retain native disabled behavior and a nearby reason where needed.

### Forms

Use opaque editable wells on an opaque form panel. Set labels above fields, 16px editable text, 48px minimum height, 16px input padding, and 20px between fields. Keep checkboxes and sliders native and labeled. A slider’s round thumb can carry a glint, but its track and current numeric value must be plainly visible. Errors follow blur or submission, stay connected with `aria-describedby`, and preserve entered values. Group related options in a fieldset. Never distort typed text or replace a label with a placeholder.

### Cards

Feature, pricing, and form cards use `surface`, a 1px `line` border, 28px radius, and 28px padding. They are reading containers and do not lift on hover. A project summary can sit directly in the dimmed environment when every text pairing is checked; its tools occupy a distinct lens below. Keep headings, explanations, status, and actions in a consistent order. Give empty states a heading and next action, rather than adding animated glass ornaments.

### Navigation and Menus

Use a full-width capsule within the page gutters, with 10–24px padding and ordinary links. The current destination uses a thin filled segment and `aria-current`. Keep the brand, destinations, and one optional action in separate groups. A menu opens beside its trigger on an opaque 24px-radius reading surface, with 8px surrounding padding and 44px minimum rows. Use disclosure semantics for a link list; Escape and outside click dismiss it, with focus returned after keyboard dismissal. Do not continuously tint-flip a large open menu.

### Tabs

An opaque capsule contains the tab labels and one flat selected segment. Tabs belong to the content layer and do not add another glass material. Pad the group by 6px and keep 4px between labels. Over a 300ms selection transition, the marker travels to the new bounds with a small directional stretch and bend, then returns to its resting silhouette. Button labels and hit areas remain stationary; only decorative material deforms. Use `tablist`, `tab`, `tabpanel`, `aria-selected`, and `aria-controls`; support arrow keys, Home, and End. Selection survives window resizing and does not clear unrelated form values.

### Modals and Overlays

Use a native dialog up to 560px wide, with 32px padding, 36px corners, and at least 16px viewport clearance. Its surface is opaque for predictable reading, while the rim and shadow retain the lens language. Dim the backdrop with `rgb(5 18 26 / .72)`. Cap height at 85dvh and scroll internally. Keep a visible close action, trap focus, support Escape, and restore the opener. Do not blur the entire interface repeatedly during the opening transition.

### Badges and Feedback

Use a small opaque capsule with 13px text, 4–8px vertical padding, and a subdued boundary. Status wording is always present. Error text remains in place until corrected. Announce completed local actions through a polite live region; transient feedback cannot hold the only recovery action. Do not make passive status look like a floating clickable lens.

## Icons, Imagery, and Illustration

Fade decorative hero and workspace contours to transparent before their paint bounds using intersecting horizontal and vertical edge masks. Apply masks only to the scene pseudo-elements, leaving the optical body and control contents unclipped. Preserve real scene detail behind the glass without exposing hard rectangular cutoffs.

Use existing original line icons at 20–24px, with approximately 1.8–2px strokes. Background imagery is optional; the reference composition uses abstract color fields and a few broad translucent bands to make refraction perceptible. Keep the actual reading region dim. Use licensed or original assets, meaningful alternative text, and empty alt text for decoration. Do not import platform logos, proprietary fonts, or a screenshot of another interface as artwork.

## Data Visualization

Place charts and tables on opaque surface. Use mint for the primary series and different line styles or patterns for other series. Label units and axes directly, preserve zero baselines where needed, and provide an accessible table or textual equivalent. Use 48px interactive rows, explicit sorting state, right-aligned numbers, and a labeled internal scroll area on small screens. Refraction must never alter a data mark.

## Motion and Animation

Use 140–180ms color feedback and 300ms selected-segment movement. A press or pointer movement immediately energizes the optical material: a damped spring allows its decorative body to shift by at most 5px and stretch by at most 4.5%, then settles in roughly 1000–1800ms. Increase the refraction scale by at most 24 during the response, tying the light and background bend to the same energy. The host, labels, focus ring, and hit targets retain their positions. A nearby background field may shift by at most 10px, supplying real changing pixels for the lens to bend. Run frames only while input changes or a spring is settling; there is no idle drift, repeated ripple, or autoplay animation. Reduced motion and the saved material-motion-off preference stop these dynamics and show selection immediately. Loading communicates actual progress; do not fabricate percentages.

On contact, the body stretches horizontally and compresses vertically within a 4.5% bound, the optical shoulder bends the background more strongly, and blur reduces by up to 65%. Regular controls can shed up to 14 percentage points of fill only when the sampled foreground contrast still passes; dense menus and dialogs keep their fill. Clear changes from 3.5% resting neutral fill toward 1.2% over its bounded dim environment. On release, refraction, blur, shape, and fill return together through the damped spring. This sequence belongs to the control body; there is no free-floating liquid attached to the cursor.

## Pointer Effects

**Pointer policy: surface.** Light, deformation, and refraction belong to functional glass controls; the cursor remains normal.

### Flowing caustic

**Construction.** Illuminate only the active material surface, with a bounded response on an immediately neighboring control. Preserve the native cursor. No detached droplet, page-wide lens, water trail, or decoration follows it. Use the existing rounded material body behind stationary labels; avoid a second optical layer inside the same control group.

**Movement.** Measure velocity using elapsed milliseconds, smooth it over 28ms, cap it at 2400 CSS pixels/second, and discard stale input after 180ms. Test the swept segment between events with an 18px proximity margin so a quick pass still energizes a narrow control. Apply one entry impulse, then let its spring settle. Body translation stays within ±5px, stretch within ±4.5%, and additional refraction within 24 of the resting scale. Light, flex, and refraction share the same input energy. Background fields can shift by at most 10px, without moving reading content. Stop requesting animation frames after settling.

**Implementation and fallbacks.** Keep decoration aria-hidden and pointer-events: none. Reuse cached optical maps and filter graphs. Clear transient motion on keyboard input, resize, blur, and variant changes. A persistent user opt-out and prefers-reduced-motion disable material motion; forced colors uses system surfaces. Reduced transparency and increased contrast replace optical material with opaque surfaces. Touch presses can activate the same material without mouse tracking. The preview's **Material motion: On/Off** control changes dynamics, while contrast adaptation remains active. Ordinary blur is the fallback when SVG backdrop filtering is unavailable.

## Interaction States

- **Hover:** concentrate light on the nearest lens edge; underline text links. Do not reveal essential text only on hover.
- **Focus-visible:** use a 3px opaque ink outline, separated by 3px; inset the ring within a clipped tab strip.
- **Active / pressed:** deepen the control’s inset shade and give its decorative material one spring impulse; preserve target bounds and expose toggle state semantically.
- **Selected:** use mint or an outlined selected segment plus ARIA state, independent of moving reflections.
- **Disabled:** use native disabled semantics, readable muted text, and no press response.
- **Loading:** prevent duplicate actions without removing the action’s name or changing its width.
- **Error / success:** show words and optional icons, retain context and input, and announce changes appropriately.

## Responsive Behavior

At 760px and below, stack the hero and all multi-column content in source order. Let navigation wrap into a second row, with 28px corners rather than a squeezed capsule. Use 24px gutters, 48px hero spacing, and 16–24px content padding. Tool groups wrap; a slider gets its own row. Retain the glass material on small screens. At 480px, use 20px gutters, a 36–44px heading, and 48px controls. Keep the tab strip within the viewport; no page-wide horizontal scrolling. Check 320px, 390px, 200% text size, and 400% zoom. Never fix a dock over the only submit or close action.

## Accessibility

Target WCAG AA: 4.5:1 body text, 3:1 large text and essential control boundaries. Check the actual background composite, including the brightest reflection. Foreground text remains opaque. If imagery cannot be bounded, put the affected text on an opaque surface. Preserve semantic landmarks, headings, visible labels, keyboard operation, and error associations. Forced colors uses system surfaces, text, boundaries, and a visible selected marker. Reduced transparency or increased contrast removes optical filters and uses `surface` with `control-line`; reduced motion preserves static material but disables movement. The app remains completely operable without pointer tracking, JavaScript optical enhancement, or backdrop-filter support.

## Implementation Guidance


### Backdrop adaptation in a browser

Separate optical rendering from legibility decisions. CSS/SVG backdrop filtering bends the actual rendered background. The adaptation controller estimates context from nine DOM hit-test points, composites known CSS surface colors, and marks text or unknown image/video/canvas content as busy. Authored gradients provide a representative scene color. These estimates do not read arbitrary image or video pixels and cannot guarantee contrast over unbounded media; provide a dimming layer or opaque backing in that case.

Batch geometry/color reads before style writes and coalesce scroll/resize work into one animation frame. Update foreground, fill, ambient rim, and shadow together. Continue static legibility adaptation when motion is disabled. The CSS example below supplies baseline material and fallback structure; the adaptive controller overrides fill and ink at runtime. Verify real composites and focus/hover states in the target browser, not only the base palette.

Scope the system under `.design`; use semantic colors and native HTML controls. Put the optical body in an absolute, aria-hidden child behind the labels. The host remains unfiltered so the child's backdrop can reach the page:

```css
.design { color:#f3f9fb; background:#122f3b; font:17px/1.65 system-ui,sans-serif; }
.design .lens { position:relative; isolation:isolate; background:none; }
.design .lens-body { position:absolute; inset:0; z-index:-1; pointer-events:none;
  background:#163840;
  border:1px solid #ffffffb3; border-radius:38px;
  box-shadow:inset 0 2px 2px -1px #ffffff70,
    inset -2px -3px 5px -3px #ffffff88,0 18px 36px #061b3540; }
@supports(backdrop-filter:blur(1px)) {
  .design .lens-body { background:rgb(255 255 255 / .035);
    backdrop-filter:blur(.35px) saturate(1.05); }
}
@media(prefers-reduced-transparency:reduce),(prefers-contrast:more) {
  .design .lens-body { background:#163840; backdrop-filter:none; border-color:#93b0b8; }
}
```

For edge lensing, use a separate SVG filter ID for each visible material body. On creation and ResizeObserver updates, rasterize a rounded-rectangle signed-distance field into a PNG displacement map matching that body's measured geometry. Encode the inward edge normal in R/X and G/Y, with channels at approximately 128 in the neutral center; taper displacement smoothly away from the curved perimeter. Load it through `feImage`, then apply `feDisplacementMap` with `color-interpolation-filters="sRGB"` and resting scale 56. Apply `backdrop-filter: blur(.35px) url(#unique-lens-filter) saturate(1.05)` to the material child. Reuse the PNG while animating scale and body transform; do not regenerate pixels every frame. Keep ancestor opacity at 1, and avoid ancestor masks or foreground filters that establish a separate backdrop root. Ordinary blur is the fallback when SVG backdrop rendering is unavailable.

Limit displacement textures to 1024 × 512 pixels while preserving aspect ratio. Limit channel amplitude so peak displacement remains below 52% of the shoulder width; narrow navigation lenses must not fold or reverse the background. Use spring stiffness 210 and damping 16 for a visible, bounded release. Scroll impulses energize the pinned navigation, and light coordinates follow the same spring.

Use filterUnits and primitiveUnits set to userSpaceOnUse, with explicit measured pixel dimensions on the filter region and feImage. Prepare at most 13 immutable optical graphs per body, covering its resting strength through resting strength +24 in steps of two, all sharing the same map image. Select an existing graph during motion; do not clone graphs or regenerate maps in animation frames. Rebuild this bounded set only when the measured body geometry changes, and remove its old set. This avoids Chromium caching of mutable SVG backdrop graphs and repeated allocation during pointer movement.

Use a small damped spring for translation, stretch, light, and refraction energy; clamp time steps, cap the response at ±5px and ±4.5%, and cancel frames once velocity and displacement are near rest. Input can add at most 24 to refraction scale. Recompute the selected tab marker after selection and resize while keeping one tab in sequential keyboard order. Reset springs and filter instances on theme changes. Verify actual background bending while scrolling, stationary label and target bounds, keyboard selection, menu stacking, opt-out and accessibility preferences, and readable composites at phone widths.

## Do

- Keep the center of a lens quiet and the edge optically defined.
- Let a few functional islands float above open, readable content.
- Preserve native labels, targets, and the shared comparison structure.
- Use opaque surfaces whenever background variability would compromise reading.

## Don't

- Turn every feature card, paragraph, or nested button into a separate lens.
- Use continuous blur animation, noisy displacement, or a custom cursor in place of the native one.
- Hide content behind a mobile floating control.
- Present this web approximation as a native platform renderer.

## Research Context

Material context: [Apple’s Liquid Glass overview](https://developer.apple.com/videos/play/wwdc2025/219/). Browser mechanics: [backdrop filtering and backdrop roots](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) and [SVG displacement channels](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap). The palette, composition, tokens, and response values are an original browser approximation, not Apple's native renderer. Clear Lens is a library variant name, not an Apple API preset.
