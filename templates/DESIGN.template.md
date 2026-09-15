---
name: Human-readable variant name
slug: variant-slug
family: family-slug
description: One sentence explaining the interpretation and its purpose.
tags:
  - aesthetic
  - distinguishing-trait
---

# Variant name

## Overview
Describe intended applications, visual character, and situations where this system is unsuitable. Explain why this interpretation deserves to exist separately from its siblings. This document must work without reading another design file.

## Design Philosophy
State the central idea and the tradeoffs it makes. Describe hierarchy, density, composition, and the relationship between content and decoration.

## Core Principles
Give actionable priorities and a rule for resolving conflicts between them.

## Color System
Document semantic tokens, exact values, roles, approved foreground/background pairs, status colors, and selection. Explain permitted accent coverage. For transparency, specify the underlying environment, opaque fallback, and contrast testing conditions. Do not assume a dark mode is a palette inversion.

## Typography
Specify available system stacks or openly licensed fonts with fallbacks. Give display, H1, H2, H3, body, label, caption, and numeric sizes, weights, line heights, and tracking. Explain reading measure, wrapping, and language fallbacks.

## Spacing
Define a scale with values and uses: control interiors, related items, groups, sections, and page gutters. Explain density exceptions.

## Layout and Grid
Specify container width, columns, gaps, alignment, reading order, overflow, and content-driven collapse. Explain the intended composition, not just grid syntax.

## Surfaces, Borders, Radius, Shadows, and Depth
Define surface roles, border widths and colors, corner geometry, elevation levels, overlay ordering, and when effects must be absent. Explicitly say when a treatment is not part of the design.

## Components
### Buttons
Specify primary, secondary, text, destructive, loading, and icon controls, with dimensions and state behavior.
### Forms
Cover labels, inputs, textarea, selects, checkboxes, radios, help, validation, error, success, and submission feedback.
### Cards
Explain content hierarchy, padding, links, interactive boundaries, featured pricing, statistics, and empty/loading states.
### Navigation and Menus
Define global/local navigation, current location, dropdowns, dismissal, and small-screen behavior.
### Tabs
Define appearance, selected indicator, keyboard behavior, panel relationships, and narrow layouts.
### Modals and Overlays
Specify geometry, backdrop, content limits, close behavior, focus management, and small-screen behavior.
### Badges and Feedback
Define semantic labels, notifications, errors, progress, and announcements without depending on color alone.

## Icons, Imagery, and Illustration
Specify stroke/fill, scale, image ratios, crops, captions, decorative limits, alternative text, and asset licensing. State when imagery should be omitted.

## Data Visualization
Define axes, series, labels, semantic encoding, tables, and alternatives. If charts are uncommon, explain how to render them without breaking the system.

## Motion and Animation
Specify durations, easing, properties, entry/exit behavior, loading, and reduced-motion alternatives. A deliberate absence of animation is valid.

## Interaction States
Cover hover, focus-visible, active/pressed, selected, disabled, loading, validation, and error recovery. Include touch and keyboard equivalents.

## Responsive Behavior
Give concrete breakpoints and component changes, mobile typography, stacking order, navigation collapse, tables, dialogs, zoom, and long-content behavior.

## Accessibility
Specify contrast requirements, keyboard navigation, focus visibility, semantic markup, accessible names, error associations, target sizes, reduced motion, forced colors, and transparency fallbacks as applicable.

## Implementation Guidance
Provide starter tokens/CSS and examples of composition. Explain which decisions are invariant, what can adapt, how to scope the system, and how to verify fidelity. Include an implementation checklist.

## Do
List positive rules that preserve this interpretation's identity.

## Don't
List tempting mistakes that would dilute it or harm usability.
