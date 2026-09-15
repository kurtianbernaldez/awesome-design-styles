# Form Atlas

An original visual design library of complete, reusable **DESIGN.md** files for general design languages and aesthetics.

**Style → variants → visual comparison → select → copy/use DESIGN.md**

A style family is a starting point, not one definitive appearance. Minimalism can be practical and product-focused, spacious and editorial, or almost entirely monochrome. Each interpretation has its own complete design system. Choose the one that best matches your idea.

## The library

| Family | Available interpretations |
|---|---|
| [Minimalism](styles/minimalism) | [Clean Product](styles/minimalism/clean-product/DESIGN.md) · [Editorial](styles/minimalism/editorial/DESIGN.md) · [Monochrome](styles/minimalism/monochrome/DESIGN.md) |
| [Brutalism](styles/brutalism) | [Raw Web](styles/brutalism/raw-web/DESIGN.md) · [Editorial](styles/brutalism/editorial/DESIGN.md) · [Colorful](styles/brutalism/colorful/DESIGN.md) |
| [Glassmorphism](styles/glassmorphism) | [Dark Glass](styles/glassmorphism/dark-glass/DESIGN.md) · [Light Glass](styles/glassmorphism/light-glass/DESIGN.md) · [Vibrant Glass](styles/glassmorphism/vibrant-glass/DESIGN.md) |

```text
styles/
  minimalism/
    clean-product/DESIGN.md
    editorial/DESIGN.md
    monochrome/DESIGN.md
  brutalism/
    raw-web/DESIGN.md
    editorial/DESIGN.md
    colorful/DESIGN.md
  glassmorphism/
    dark-glass/DESIGN.md
    light-glass/DESIGN.md
    vibrant-glass/DESIGN.md
```

Every variant independently specifies philosophy, visual character, colors, typography, spacing, layout, grid, surfaces, borders, depth, components, imagery, motion, interaction states, responsive behavior, accessibility, and implementation guidance. No separate typography, button, material, or layout libraries are needed.

Additional family directories reserve space for future contributions. Their READMEs explicitly mark them as planned. They have no invented variants and do not appear in the production browser. A family can have two, three, five, or more meaningful interpretations.

## Use one design

Give your coding agent this instruction:

> Use `styles/minimalism/editorial/DESIGN.md` for this project.

Or be more explicit:

> Build this interface using Editorial Minimalism as defined in `styles/minimalism/editorial/DESIGN.md`. Follow its typography, spacing, layout, surface, component, interaction, motion, responsive, and accessibility rules.

The path must exist in the agent's workspace. Copy the file into your project, provide its contents, or make this repository available to the agent. If you rename the file, update the instruction accordingly.

## Compare variants

Run the browser and open `/styles/minimalism`. Switch between Clean Product, Editorial, and Monochrome in the **same preview area**. The same fictional workspace contains navigation, hero, heading hierarchy, prose, buttons, cards, features, statistics, form controls, badges, tabs, menus, a dialog, testimonial, pricing, and footer.

The content stays the same; typography, composition, density, surfaces, and component treatments change. The preview is a representative implementation, while DESIGN.md is the complete specification.

Select **DESIGN.md** to read the full source. Copy the file, download it, copy its repository path, or copy either agent instruction. Direct links such as `/styles/minimalism/editorial` restore the selected variant. Desktop and Mobile controls change the width of the same embedded showcase. Sample forms and pricing controls operate locally; they create no accounts, purchases, or network submissions.

## Mix styles

Mixing is done through AI instructions, not an automatic composition engine:

> Use Editorial Minimalism overall and Dark Glass for overlays. Keep each overlay's text and controls on its documented opaque surfaces. Recheck contrast and focus at the boundary.

A future combination could say:

> Use Editorial Minimalism overall, Dark Glass for overlays, and Solarpunk for interactive controls. Use Grunge for the hero section.

**Solarpunk and Grunge are planned families, not implemented systems.** “Solarpunk / Organic” is a possible future interpretation, not a file you can use today. Supply your own complete rules for those regions until suitable variants exist. Name exactly which system owns each region and resolve conflicting tokens explicitly; each DESIGN.md remains independently coherent.

## Run locally

Requires Node.js 22 or newer. The site has **zero package dependencies** and uses native HTML, CSS, JavaScript, and Node build scripts. The original repository had no application framework to preserve.

```sh
npm run dev
```

Open `http://127.0.0.1:4173`. Edit the source files, rerun `npm run build` after Markdown changes, and reload. Authored CSS/JavaScript updates are served directly. `PORT=4300 npm run dev` selects another port.

```sh
npm run check   # discovery/build, JS syntax, metadata/content/route/contrast tests
npm run build   # regenerate catalog, downloadable Markdown, and direct routes
npm start       # serve an already built dist directory
```

### How the website works

- `styles/<family>/<variant>/DESIGN.md` is the source of truth for discovery and copy/download content.
- `templates/DESIGN.template.md` defines completeness, not shared aesthetics.
- `scripts/catalog.mjs` reads lightweight frontmatter: `family`, `slug`, `name`, `description`, and `tags`. `slug` identifies the variant within its family.
- A family README supplies its display title and short introductory paragraph.
- `dist/index.html`, `app.js`, and `app.css` implement the library shell.
- `dist/preview.html` and `preview.js` implement **one** reusable showcase. `themes.css` gives each variant its own scoped tokens and visual rules.
- `scripts/build.mjs` generates `dist/catalog.json` and `dist/styles/` from the source documents. These generated files are ignored by Git and must not be hand-edited.
- A variant without a matching preview theme fails the build. Empty family directories are excluded. Unknown routes return a useful 404.

Deploy the built `dist/` directory to any static host supporting directory index pages. No database, backend, or external font service is required. Run the build before deployment; deep routes are real generated HTML entrypoints. `.openai/hosting.json` configures the optional Sites deployment. Root-relative asset URLs assume the site is hosted at an origin root, not a repository subpath.

## Contribute

Introduce a family, propose a meaningful variant, improve a system, or improve the shared preview. Explain why a new variant deserves to exist separately. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Originality and license

The design systems, sample content, and preview treatments are original interpretations of general aesthetics, not reconstructions of particular brands. No proprietary fonts, logos, imagery, or branded components are included. System font stacks require no font downloads.

The original brand collection was inspected only for document structure and quality expectations, then removed after the replacement was complete. See [the structural review](docs/STRUCTURAL-REVIEW.md).

This project retains the original repository's **MIT License and copyright notice, Copyright (c) 2026 VoltAgent**, unchanged in [LICENSE](LICENSE). Keep that notice and the license with copies or substantial portions of the software. Contributions use the same license.
