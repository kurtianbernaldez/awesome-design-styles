import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { discover } from './catalog.mjs';
import { buildThumbnails } from './thumbnails.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const families = await discover(root);
if (!families.length) throw new Error('No complete variants found');
const shell = await readFile(path.join(root, 'dist/index.html'), 'utf8');
const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Only generated route output is replaced. Authored assets and source designs are untouched.
await rm(path.join(root, 'dist/styles'), { recursive: true, force: true });
for (const family of families) {
  const dir = path.join(root, 'dist/styles', family.slug);
  await mkdir(dir, { recursive: true });
  const page = (title, description) => shell.replace('<title>design-style-mds — Visual design library</title>', `<title>${escape(title)} — design-style-mds</title>`).replace('Compare original, complete design systems. Choose a family, explore its variants, and use its DESIGN.md.', escape(description));
  await writeFile(path.join(dir, 'index.html'), page(family.name, family.description));
  for (const variant of family.variants) {
    await mkdir(path.join(dir, variant.slug), { recursive: true });
    await writeFile(path.join(dir, variant.slug, 'index.html'), page(variant.name, variant.description));
    await writeFile(path.join(root, 'dist', variant.path), variant.markdown);
  }
}
await writeFile(path.join(root, 'dist/catalog.json'), JSON.stringify(families));
await writeFile(path.join(root, 'dist/thumbnails.css'), buildThumbnails(await readFile(path.join(root, 'dist/themes.css'), 'utf8'), families));
console.log(`Built ${families.length} families, ${families.flatMap(f=>f.variants).length} variants, and all direct routes.`);
