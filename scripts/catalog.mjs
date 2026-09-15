import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
export function parseDesign(markdown, family, slug) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`${family}/${slug}: missing frontmatter`);
  const metadata = {}; let tags = false;
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (tags && /^  - /.test(line)) { metadata.tags.push(line.slice(4).trim()); continue; }
    const pair = line.match(/^(name|slug|family|description|tags):\s*(.*)$/);
    if (!pair) throw new Error(`${family}/${slug}: unsupported metadata line: ${line}`);
    if (Object.hasOwn(metadata, pair[1])) throw new Error(`${family}/${slug}: duplicate ${pair[1]}`);
    tags = pair[1] === 'tags';
    if (tags && pair[2]) throw new Error('Use a block list for tags');
    metadata[pair[1]] = tags ? [] : pair[2].replace(/^"(.*)"$/, '$1');
  }
  for (const key of ['name', 'slug', 'family', 'description']) {
    if (!metadata[key]) throw new Error(`${family}/${slug}: missing ${key}`);
  }
  if (!metadata.tags?.length) throw new Error(`${family}/${slug}: tags required`);
  if (metadata.family !== family || metadata.slug !== slug) throw new Error(`${family}/${slug}: path and metadata disagree`);
  if (![family, slug].every(value => /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(value))) throw new Error('Invalid path slug');
  return { ...metadata, path: `styles/${family}/${slug}/DESIGN.md`, markdown };
}
export async function discover(root) {
  const families = [];
  const css = await readFile(path.join(root, 'dist/themes.css'), 'utf8');
  for (const entry of await readdir(path.join(root, 'styles'), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const variants = [];
    for (const variant of await readdir(path.join(root, 'styles', entry.name), { withFileTypes: true })) {
      if (!variant.isDirectory()) continue;
      let markdown;
      try { markdown = await readFile(path.join(root, 'styles', entry.name, variant.name, 'DESIGN.md'), 'utf8'); }
      catch (error) { if (error.code === 'ENOENT') continue; throw error; }
      const record = parseDesign(markdown, entry.name, variant.name);
      if (!css.includes(`[data-theme="${entry.name}/${variant.name}"]`)) throw new Error(`${record.path}: missing preview theme`);
      variants.push(record);
    }
    if (!variants.length) continue;
    const readme = await readFile(path.join(root, 'styles', entry.name, 'README.md'), 'utf8');
    const [title, description] = readme.trim().split(/\n\s*\n/);
    families.push({ slug: entry.name, name: title.replace(/^# /, ''), description, variants });
  }
  const order = ['minimalism', 'brutalism', 'glassmorphism'];
  families.sort((a,b) => (order.indexOf(a.slug) < 0 ? 99 : order.indexOf(a.slug)) - (order.indexOf(b.slug) < 0 ? 99 : order.indexOf(b.slug)) || a.name.localeCompare(b.name));
  const variants = ['clean-product','editorial','monochrome','raw-web','colorful','dark-glass','light-glass','vibrant-glass'];
  for (const family of families) family.variants.sort((a,b) => {
    const rank = s => family.slug === 'brutalism' ? ['raw-web','editorial','colorful'].indexOf(s) : variants.indexOf(s);
    return rank(a.slug)-rank(b.slug) || a.name.localeCompare(b.name);
  });
  return families;
}
