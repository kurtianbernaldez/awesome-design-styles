# Liquid Glass

Rounded optical control layers with curved backdrop refraction, springing material, and fluid selection, floating above readable content.

Three original web interpretations of the material approach introduced on iPhone:

- [Clear Lens](clear-lens/DESIGN.md): transparent control islands over a spacious, dimmed color environment.
- [Frosted Controls](frosted-controls/DESIGN.md): a bright, document-centered workspace with diffused navigation and clear reading surfaces.
- [Fluid Dock](fluid-dock/DESIGN.md): compact connected tools, floating navigation, and an elastic selected segment.

These are complete design systems, with shared comparison content and independent typography, spacing, component, responsive, and accessibility rules. Their names describe this library’s interpretations, not native platform API variants.

The browser preview bends the actual backdrop through a rounded displacement map for each glass surface. Its decorative material flexes on pointer movement and press, then settles; the background responds gently and remains visible through the lens. Labels and hit targets stay fixed. Clear Lens emphasizes transparency, Frosted Controls uses more diffusion, and Fluid Dock uses stronger refraction with connected selection motion.

The cursor remains normal. Clear Lens uses nearly colorless glass for sticky navigation and workspace controls over the dimmed page; its reading controls are opaque. Frosted Controls and Fluid Dock use adaptive Regular material: small controls change tone over light/dark content, expanded menus and dialogs retain their opening tone, and sticky navigation has a contextual scroll-edge fade. Material bodies grow from their triggers without scaling labels. Adaptation uses DOM surface colors and authored gradient estimates, not arbitrary image/video pixel sampling.

Motion has a persistent off control and respects reduced motion. Reduced transparency or increased contrast restores opaque material; browsers without SVG backdrop rendering retain a conventional blur fallback. This is an original browser approximation, not Apple's native renderer. Material context: [Apple’s Liquid Glass overview](https://developer.apple.com/videos/play/wwdc2025/219/); implementation references: [backdrop filtering](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) and [SVG displacement](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap).
