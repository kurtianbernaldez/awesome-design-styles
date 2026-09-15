// Read the same theme tokens used by the live showcase; no hand-maintained family palette list.
export function buildThumbnails(css, families) {
  const roots = new Map([...css.matchAll(/^\[data-theme="([^"]+)"\]\{([^{}]+)\}/gm)].map(match => [match[1], match[2]]));
  const rules=[];
  for (const family of families) {
    const first=family.variants[0];
    const key=`${family.slug}/${first.slug}`;
    const declarations=roots.get(key);
    if(!declarations) throw new Error(`No representative thumbnail theme for ${key}`);
    rules.push(`.family-art[data-card-theme="${key}"]{${declarations}}`);
  }
  return rules.join('\n') + `
.family-art[data-card-theme]{background:var(--environment,var(--canvas));color:var(--ink)}
.family-art[data-card-theme] .art-index{color:var(--muted)}
.family-art[data-card-theme] .mini-browser{background:var(--surface);color:var(--ink);font-family:var(--font);border:var(--border) solid var(--line);border-radius:calc(var(--radius) * .4);box-shadow:var(--shadow);transform:none}
.family-art[data-card-theme] .mini-nav{border-color:var(--line)}
.family-art[data-card-theme] .mini-hero>strong{font-family:var(--heading);font-weight:var(--display-weight);font-size:clamp(24px,2.3vw,34px)}
.family-art[data-card-theme] .mini-eyebrow,.family-art[data-card-theme] .mini-hero>p{color:var(--muted)}
.family-art[data-card-theme] .mini-button{background:var(--accent);color:var(--on-accent);border-radius:calc(var(--control-radius) * .4);border:1px solid var(--control-line)}
.family-art[data-card-theme] .mini-blocks>span{background:var(--surface);color:var(--ink);border:var(--border) solid var(--line);border-radius:calc(var(--radius) * .3)}
`;
}
