// Landing images are actual local-browser captures of the shared showcase.
// Regenerate with: node scripts/browser-audit.mjs thumbnails
export function buildThumbnails(css, families) {
  return families.map(f => {
    const key=`${f.slug}/${f.variants[0].slug}`;
    if (!css.includes(`[data-theme="${key}"]`)) throw new Error(`Missing theme ${key}`);
    return `.family-art[data-card-theme="${key}"]{background:transparent}`;
  }).join('\n') + `
.family-art[data-card-theme]{padding:0;height:auto;min-height:0;aspect-ratio:1100/850;overflow:hidden;border-bottom:1px solid #dce0e7}
.family-preview{display:block;width:100%;height:100%;object-fit:cover;object-position:top;transition:filter 120ms}
.family-card:hover .family-preview{filter:brightness(.98)}
`;
}
