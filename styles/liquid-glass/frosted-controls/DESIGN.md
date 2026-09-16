---
name: Frosted Controls Liquid Glass
slug: frosted-controls
family: liquid-glass
description: A bright document-centered workspace with diffused floating controls, dark readable type, and softly concentrated lens edges.
tags:
  - liquid-glass
  - frosted
  - productive
  - light
  - document
---

# Frosted Controls Liquid Glass

## Overview

Frosted Controls brings liquid material to a practical, bright workspace. A centered reading composition and white content panels establish order; navigation and contextual tools form small diffused islands with smooth rims. The material is visible through its thickness and reflected light, while the interface remains comfortable for extended reading.

Choose this interpretation for planning, knowledge work, account settings, and collaborative documents. Clear Lens prioritizes transparency over an immersive environment; Fluid Dock prioritizes compact grouped tools. Frosted Controls prioritizes stable reading and a calm, centered hierarchy. Its identity depends on layout and material distribution, not a light recoloring of another variant.

## Design Philosophy

Treat glass as a helpful boundary around a set of actions. Give the actual work a plain, quiet surface. Whiten and soften the surroundings of navigation enough that its labels stay predictable, then use a fine curved reflection to distinguish the material from a flat toolbar.

## Visual Character

Cool white paper, deep blue-gray type, a restrained petrol accent, softly colored peripheral fields, broad concentric corners, and short glints. Content is centered and airy, with thin separators. Glass feels substantial and softly diffused rather than transparent or jewel-like.

## Core Principles

1. Reading surfaces stay opaque; a control island can be translucent.
2. Use one centered dominant workspace rather than two equally loud hero columns.
3. Establish thickness through a luminous rim and a restrained grounding shadow.
4. Keep toolbar children on the same material plane; do not stack lenses.
5. Use motion to identify selection and immediate feedback, then stop.

## Color System

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#f0f4f7` | Cool page base |
| `surface` | `#ffffff` | Reading panels and opaque fallback |
| `ink` | `#20333f` | Primary text |
| `muted` | `#425765` | Secondary text |
| `accent` | `#245c62` | Primary actions and selected tools |
| `on-accent` | `#ffffff` | Text on accent |
| `line` | `#c2ced5` | Content dividers |
| `control-line` | `#6c7e8a` | Input and essential control boundary |
| `error` | `#a22d40` | Error text plus message |
| `success` | `#286144` | Confirmed state plus wording |
| `warning` | `#775b17` | Caution plus explanation |

Blend broad peripheral fields of `#c6e2df` and `#d8d5ef` into the canvas. Pointer and scroll input may shift these fields by at most 10px before they settle; keep the central reading area white. Glass uses adaptive Regular fill, 4px backdrop blur, and saturation 1.05. The selected segment is a flat contrasting overlay; its text follows the material polarity and stays fully opaque. Use a dark `#223d49` testimonial plane with `#f3fbff` text and `#cbdee5` secondary text to give the bright document composition a deliberate pause.

Primary hover is `#1d4b50`, pressed is `#173f44`. Never use faint pastel colors for essential labels or validation. If a control must appear over an unknown photograph, increase the white backing or use opaque surface. Color is always paired with text, an icon, or a structural state.

### Adaptive Regular material

Small functional surfaces choose light or dark material from the content underneath. Use a light base `#f8f8f8` with `#111f2a` ink, or a dark base `#161616` with `#fafeff` ink. Mix 1.5% of the ambient color into the base. Start at 16% opacity for light material and 12% for dark; raise it by up to 35 percentage points over busy text. Increase opacity further whenever the sampled composite would fall below 4.5:1 text contrast. Labels stay opaque. Use separate thresholds for switching toward dark (relative luminance below .28) and light (above .48) to avoid flickering near a boundary.

Tint only a primary action: mix 12% ambient color into its accent, begin at 94% opacity, and choose black or white text by the worst sampled contrast. Other controls remain neutral. Shadow opacity starts at .12 and increases by up to .18 over busy content. Ambient edge light supplies restrained context without tinting every control.

Larger menus and dialogs capture their trigger's backdrop when opened, choose a tone once, and retain it while the user reads. Their base starts at 92% opacity, receives 6% ambient tint, and adds .10 shadow opacity. As the body grows, add up to 4px blur and 6 refraction scale within the existing total +24 budget. Editable fields remain opaque. Expanded material is denser, never a transparent card with blurred text.

Pinned navigation sits 12px below the viewport edge (8px on phones). Once scrolling passes 24px, a contextual edge fade gradually appears over the next 72px. It covers the area through the navigation's lower edge plus 30px, matching that material's solid color before fading to transparent. It is decorative and cannot intercept input. Section tabs remain in document flow with 32px of space before their panel. A sticky-navigation offset must never be applied to a relatively positioned tab strip.

## Typography

Use `system-ui, sans-serif`. Display: 62px maximum, weight 580–620, line-height 1.05, tracking around −0.05em. Section headings: 32px/1.2. Card headings: 23px/1.3. Body: 17px/1.7, with lead text at 18px/1.6. Controls: 14px, weight 600; metadata: 13px/1.5. Keep editable text at least 16px. Paragraphs should remain within 65 characters. Center only short introductory text; field labels, workspace rows, cards, and longer prose are left-aligned. Use tabular numerals for comparable values.

## Spacing

Use a 4px base and the 8, 12, 16, 20, 24, 28, 32, 40, 64, and 80px steps. The hero separates introduction from workspace by 40px. Workspace padding is 32px; tool-island padding is 16px. Controls have a 48px minimum hit height, with 8–12px between neighbors. Use 20px between form fields and 24px between content groups. Do not compress these gaps to fit an arbitrary screen height.

## Layout and Grid

Constrain the page to 1120px including 36px side gutters. Center the introduction in a 700px measure, then place the primary workspace beneath it in an 800px-wide white panel. The hero is one column with 64px top and 44px bottom spacing. Center the short action row below the introduction. Inside the workspace, three task summaries form equal columns; the tool island below them is at most 620px wide.

Use three unboxed statistic columns. Feature descriptions use fine upper rules rather than three more floating white boxes. Pricing uses two white panels; contact uses text beside a white form. Use 80px between major sections. The centered opening establishes this interpretation; later sections use practical left-aligned grids.

## Surfaces, Borders, Radius, Shadows, and Depth

Page content uses a white surface, thin cool-gray dividers, and little or no shadow. The main workspace has 32px radius and a quiet `0 16px 48px #314a6010` shadow. Ordinary content panels use 24px corners. A floating control group has 32–38px corners, white upper and side reflections, and `0 12px 28px #45647224` grounding shadow. A single action or tab group is a capsule.

Preserve concentric spacing: with a 38px outer curve and 16px interior padding, inner elements should feel nested rather than independently rounded. Generate the optical map from each body's measured rounded-rectangle geometry. Its center is neutral; inward displacement follows the curved perimeter rather than stretched horizontal and vertical bands. Use resting scale 34 with 4px blur, adding at most 24 to the scale during an input response. This interpretation softens refraction more than Clear Lens but retains an identifiable curved edge. The absolute decorative material child samples the real backdrop; its host and labels stay unfiltered. Never blur labels, clone a background into the lens, or reduce foreground opacity to imply glass.

Set the refracting bevel width to `min(1.6 × corner radius, 0.46 × surface height, 72px)`. Within this shoulder, use `sin((1 - inwardDistance / shoulderWidth) × π/2)^1.2` for the bend strength. This distributes visible bending well into the body; the center remains neutral. Measure the actual control body rather than applying the same percentage bands to every shape.

## Components

### Buttons

Use petrol primary actions with an adaptive accent-color material fill starting at 94% opacity, white text, 48px height, and a restrained top glint. Use a capsule for the main introduction action and 16px corners for ordinary content actions. Secondary controls are white or lightly tinted with an essential boundary. A circular toolbar button is 48px; a selected icon uses petrol fill plus `aria-pressed`. Press adds an inset shade and darker fill, without moving the target. Loading preserves the control’s width and accessible name. Disabled actions use native disabled semantics, readable muted text, and an explanation when a prerequisite matters.

### Forms

Forms belong on white panels. Use persistent labels, 16px editable text, 48px-high inputs, 16px input padding, and 20px between fields. Inputs use `control-line` and 12–16px corners; never use a barely visible white rim as their only boundary. Keep native checkbox, switch, select, and range semantics. Show the range’s numeric value. Group related options with a fieldset. Validate after blur or submission, associate errors with fields, preserve input, and provide a linked summary for long forms. Placeholder text only illustrates an expected value.

### Cards

The main workspace is one dominant white container, with a clear heading and brief context above task summaries. Separate tasks with fine rules and generous space. Put their shared tools in one diffused island below. Repeated feature descriptions are open sections with upper rules. Pricing and forms use white panels because comparison and editing need consistent reading surfaces. Passive cards never hover-lift. Use a heading and useful next action for empty states; keep loading placeholders within the expected content bounds.

### Navigation and Menus

Use a diffused capsule above the centered introduction. Its labels adapt to the underlying content; the current link receives a flat contrasting segment plus `aria-current`. A neutral secondary action sits at the far end. On narrow screens the destinations wrap onto their own line. Menus use a dense adaptive Regular material, 24px corners, an essential boundary, 8px internal padding, and 44px minimum rows. Keep menu position tied to the disclosure trigger. Ordinary navigation uses a list of links rather than application-menu roles. Escape and outside click close it; keyboard dismissal restores focus.

### Tabs

Place the tab strip in a compact frosted capsule with 6px padding and a single white selected marker. The marker glides beneath fixed labels over 300ms, briefly stretching and bending toward the new selection before returning to a rounded resting form. Keep its deformation small enough that the quiet document hierarchy remains dominant. Its border and inner glint remain visible over the frosted base. Preserve one selected tab, roving tab order, arrow keys, Home/End, and linked tabpanel names. Recompute marker dimensions after resize and font loading. Keep focus visible inside the strip’s rounded clipping boundary.

### Modals and Overlays

Use a native dialog with dense adaptive Regular material up to 540px wide, with 32px padding, 32px corners, an upper glint, and a soft shadow. Use `rgb(24 44 57 / .44)` for the backdrop. Cap the dialog at 85dvh, allow internal scrolling, and keep 16px viewport clearance. Focus enters the task, remains trapped, and returns to the opener after dismissal. Support Escape, an explicit close button, and a clearly labeled primary task. A larger dialog becomes a reading surface; it should not become more transparent to appear lighter.

### Badges and Feedback

Use a small white or pale neutral capsule, 13px text, an essential contrast boundary when interactive, and written state. A selected badge is not a substitute for a true toggle. Keep inline errors visible until resolved. Success feedback uses words and optional color, announced through a polite live region. Avoid glowing badges and repeated animated notifications in a document-centered workspace.

## Icons, Imagery, and Illustration

Fade decorative hero and workspace contours to transparent before their paint bounds using intersecting horizontal and vertical edge masks. Apply masks only to the scene pseudo-elements, leaving the optical body and control contents unclipped. Preserve real scene detail behind the glass without exposing hard rectangular cutoffs.

Use a consistent set of 20–24px line icons with 1.8–2px strokes and accessible names on icon controls. Abstract cool color fields stay near page edges; a broad band behind the workspace can demonstrate diffusion without distracting from work. Meaningful images belong in the content with alt text and a caption, not under inputs. Use original or licensed material and standard system fonts. Do not reproduce another product’s logo, icons, screen layout, or proprietary typography.

## Data Visualization

Use white plotting areas, dark labels, explicit units, and petrol as the primary series. Combine series colors with dash patterns, shapes, or direct labels. Use accurate axes and preserve zero or missing-value semantics. Tables have visible headers, 48px interactive rows, right-aligned numbers, and explicit sort direction. Provide a textual equivalent and a labeled local scroll region on small screens. Optical effects cannot alter marks, labels, or selection bounds.

## Motion and Animation

Use 140–180ms color feedback and a 300ms selected marker. The interface appears immediately. Pointer movement or a press energizes a damped spring in the decorative material body, with translation limited to ±5px and stretch limited to ±4.5%. Refraction scale can rise from 34 by at most 24, then settles with the body and light in roughly 1000–1800ms. Labels, reading panels, focus rings, and hit targets remain stationary. Peripheral environment fields respond by no more than 10px; their real movement remains visible through the diffused lens. Update only while input changes or the spring settles; there is no idle drift or repeating animation. Reduced motion and the saved material-motion-off preference remove dynamics and change selection immediately while preserving resting material. Loading shows a written status and real progress when available.


Menus and dialogs reveal their decorative body from the trigger rectangle over 300ms and retract over 210ms, using `cubic-bezier(.2,.8,.2,1)`. Fade content in over 180ms after a 70ms delay; do not scale glyphs or move final hit targets with the material. Cancel stale animation completion when reopened quickly. Keep native disclosure/dialog semantics, Escape, outside dismissal where appropriate, and focus restoration. With reduced motion or material motion disabled, open and close immediately. Native dialogs remain in the top layer throughout dismissal.

On contact, the body stretches horizontally and compresses vertically within a 4.5% bound, the optical shoulder bends the background more strongly, and blur reduces by up to 65%. Regular controls can shed up to 14 percentage points of fill only when the sampled foreground contrast still passes; dense menus and dialogs keep their fill. Clear changes from 3.5% resting neutral fill toward 1.2% over its bounded dim environment. On release, refraction, blur, shape, and fill return together through the damped spring. This sequence belongs to the control body; there is no free-floating liquid attached to the cursor.

## Pointer Effects

**Pointer policy: surface.** Light, deformation, and refraction belong to functional glass controls; the cursor remains normal.

### Diffused flow

**Construction.** Illuminate only the active material surface, with a bounded response on an immediately neighboring control. Preserve the native cursor. No detached droplet, page-wide lens, water trail, or decoration follows it. Use the existing rounded material body behind stationary labels; avoid a second optical layer inside the same control group.

**Movement.** Measure velocity using elapsed milliseconds, smooth it over 28ms, cap it at 2400 CSS pixels/second, and discard stale input after 180ms. Test the swept segment between events with an 18px proximity margin so a quick pass still energizes a narrow control. Apply one entry impulse, then let its spring settle. Body translation stays within ±5px, stretch within ±4.5%, and additional refraction within 24 of the resting scale. Light, flex, and refraction share the same input energy. Background fields can shift by at most 10px, without moving reading content. Stop requesting animation frames after settling.

**Implementation and fallbacks.** Keep decoration aria-hidden and pointer-events: none. Reuse cached optical maps and filter graphs. Clear transient motion on keyboard input, resize, blur, and variant changes. A persistent user opt-out and prefers-reduced-motion disable material motion; forced colors uses system surfaces. Reduced transparency and increased contrast replace optical material with opaque surfaces. Touch presses can activate the same material without mouse tracking. The preview's **Material motion: On/Off** control changes dynamics, while contrast adaptation remains active. Ordinary blur is the fallback when SVG backdrop filtering is unavailable.

## Interaction States

- **Hover:** brighten a control’s rim; underline ordinary text links. Do not move cards or reveal hidden instructions.
- **Focus-visible:** use a 3px dark-ink outline separated by 3px; inset the ring in a clipped tab group.
- **Active / pressed:** darken petrol actions, add an inset shade, and give the decorative material one bounded spring impulse while targets stay fixed.
- **Selected:** show a white segment or petrol fill together with ARIA state.
- **Disabled:** preserve native semantics and readable muted labels, and remove press behavior.
- **Loading:** preserve layout and accessible names while blocking duplicate work.
- **Error / success:** use explicit wording and associated field feedback, not hue alone.

## Responsive Behavior

Below 760px, keep the centered introduction but stack all content grids. The workspace task columns become rows. Navigation wraps into two lines and uses 28px corners. Use 24px gutters, 48px hero spacing, and 16–24px panel padding. Let tools wrap and put the range on a separate row. Below 480px, use 20px gutters, a 36–44px headline, and unchanged 16px+ editable text. Retain diffusion on phones; reduced transparency is a separate preference. Check 320px, 390px, narrow comparison iframes, 200% text scaling, and 400% zoom. No fixed control may cover the form or dialog close action.

## Accessibility

Target 4.5:1 text contrast and 3:1 essential control contrast, including hover and selected states. Test dark labels over the whitest and most colorful allowed glass composite. Keep text opaque and use white backing when a backdrop is unknown. Preserve headings, landmarks, visible labels, native controls, keyboard order, focus restoration, and error associations. A persistent pointer toggle has an accurate pressed state. Reduced transparency or increased contrast replaces optical surfaces with white and an explicit `control-line`; forced colors uses system colors. Reduced motion removes elastic and tracking behavior. Every task must work without blur, SVG filters, or pointer movement.

## Implementation Guidance

### Backdrop adaptation in a browser

Separate optical rendering from legibility decisions. CSS/SVG backdrop filtering bends the actual rendered background. The adaptation controller estimates context from nine DOM hit-test points, composites known CSS surface colors, and marks text or unknown image/video/canvas content as busy. Authored gradients provide a representative scene color. These estimates do not read arbitrary image or video pixels and cannot guarantee contrast over unbounded media; provide a dimming layer or opaque backing in that case.

Batch geometry/color reads before style writes and coalesce scroll/resize work into one animation frame. Update foreground, fill, ambient rim, and shadow together. Continue static legibility adaptation when motion is disabled. The CSS example below supplies baseline material and fallback structure; the adaptive controller overrides fill and ink at runtime. Verify real composites and focus/hover states in the target browser, not only the base palette.


Build the centered content hierarchy first. Apply optical material only to control groups, using an absolute decorative child behind stationary labels. Keep the host unfiltered:

```css
.design { background:#f0f4f7; color:#20333f; font:17px/1.7 system-ui,sans-serif; }
.design .workspace { max-width:800px; margin:auto; padding:32px;
  background:#fff; border-radius:32px; }
.design .lens { position:relative; isolation:isolate; background:none; }
.design .lens-body { position:absolute; inset:0; z-index:-1; pointer-events:none;
  background:#fff; border:1px solid #ffffffed; border-radius:38px;
  box-shadow:inset 0 2px 2px -1px #fff,0 12px 28px #45647224; }
@supports(backdrop-filter:blur(1px)) {
  .design .lens-body { background:rgb(241 248 251 / .22);
    backdrop-filter:blur(4px) saturate(1.05); }
}
@media(prefers-reduced-transparency:reduce),(prefers-contrast:more) {
  .design .lens-body { background:#fff; backdrop-filter:none; border-color:#6c7e8a; }
}
```

Give each material body its own SVG filter ID. At creation and resize, measure width, height, and corner radius; rasterize a rounded-rectangle signed-distance field into a PNG map. Encode an inward normal in R/X and G/Y close to the perimeter, tapering smoothly to approximately 128 in both channels at the neutral center. Feed the map through `feImage` into `feDisplacementMap` with `color-interpolation-filters="sRGB"` and resting scale 34. Apply `backdrop-filter: blur(4px) url(#unique-lens-filter) saturate(1.05)` to the decorative child. Cache the map until geometry changes; animate filter scale and the material body's transform rather than rasterizing on every frame. Keep ancestor opacity at 1 and avoid ancestor masks, filters, or additional backdrop planes that cut off the real background. Retain ordinary blur and rim highlights when SVG backdrop rendering is unavailable.

Limit displacement textures to 1024 × 512 pixels while preserving aspect ratio. Limit channel amplitude so peak displacement remains below 52% of the shoulder width; narrow navigation lenses must not fold or reverse the background. Use spring stiffness 210 and damping 16 for a visible, bounded release. Scroll impulses energize the pinned navigation, and light coordinates follow the same spring.

Use filterUnits and primitiveUnits set to userSpaceOnUse, with explicit measured pixel dimensions on the filter region and feImage. Prepare at most 13 immutable optical graphs per body, covering its resting strength through resting strength +24 in steps of two, all sharing the same map image. Select an existing graph during motion; do not clone graphs or regenerate maps in animation frames. Rebuild this bounded set only when the measured body geometry changes, and remove its old set. This avoids Chromium caching of mutable SVG backdrop graphs and repeated allocation during pointer movement.

Use a bounded damped spring with a clamped time step; cap translation at ±5px, stretch at ±4.5%, and added refraction scale at 24. Let the small response settle for roughly 1000–1800ms and cancel frames at rest. Recompute the selected marker after selection and resize, keeping the keyboard tab model intact. Cancel dynamics when preferences or theme change. Verify curved refraction over moving background detail, stationary label and hit bounds, menu stacking, tab alignment, input validation, dialog focus, and contrast across accessibility preferences and phone widths.

## Do

- Give the work a stable white surface and the tools a visibly diffused edge.
- Use the centered workspace to establish hierarchy.
- Keep inner controls on one material plane with readable boundaries.
- Preserve an immediately usable opaque fallback.

## Don't

- Replace the layout with a dark glass-card dashboard and a pale palette.
- Put texture, images, or refracted text inside editable wells.
- Make every item float or animate its blur on idle.
- Confuse reduced motion with removing all static material cues.

## Research Context

Material context: [Apple’s Liquid Glass overview](https://developer.apple.com/videos/play/wwdc2025/219/). Browser mechanics: [backdrop filtering and backdrop roots](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) and [SVG displacement channels](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap). Typography, layout, palette, and response values define an original browser approximation, not Apple's native renderer. Frosted Controls is a library interpretation, not a native platform preset.
