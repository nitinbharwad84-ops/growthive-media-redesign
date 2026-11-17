// WCAG contrast check for the GrowthiveMedia token palette.
//   node scrollcraft/contrast.mjs

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r = 0;
  let g = 0;
  let b = 0;
  if (hp >= 0 && hp < 1) [r, g, b] = [c, x, 0];
  else if (hp < 2) [r, g, b] = [x, c, 0];
  else if (hp < 3) [r, g, b] = [0, c, x];
  else if (hp < 4) [r, g, b] = [0, x, c];
  else if (hp < 5) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const m = l - c / 2;
  return [r + m, g + m, b + m];
}

function lin(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function lum(rgb) {
  const [r, g, b] = rgb.map(lin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const la = lum(a);
  const lb = lum(b);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

// blend fg over bg at alpha (sRGB space, as browsers composite)
function blend(fg, bg, alpha) {
  return fg.map((c, i) => c * alpha + bg[i] * (1 - alpha));
}

const tokens = {
  background: hslToRgb(240, 28, 4),
  surface1: hslToRgb(240, 18, 8),
  surface2: hslToRgb(240, 22, 11),
  primary: hslToRgb(263, 80, 58),
  accent: hslToRgb(260, 90, 85),
  mutedFg: hslToRgb(215, 16, 65),
  white: [1, 1, 1],
};

const rows = [];
const add = (label, fg, bg) => rows.push({ label, r: ratio(fg, bg).toFixed(2) });

add("primary on background", tokens.primary, tokens.background);
add("primary on surface-2 (card)", tokens.primary, tokens.surface2);
add("accent on background", tokens.accent, tokens.background);
add("accent on surface-2", tokens.accent, tokens.surface2);
add("white on primary (button)", tokens.white, tokens.primary);
add("muted-foreground on background", tokens.mutedFg, tokens.background);
add("muted-fg /80 on background", blend(tokens.mutedFg, tokens.background, 0.8), tokens.background);
add("muted-fg /80 on surface-2", blend(tokens.mutedFg, tokens.surface2, 0.8), tokens.surface2);
add("muted-fg /75 on surface-2", blend(tokens.mutedFg, tokens.surface2, 0.75), tokens.surface2);
add("muted-fg /70 on background", blend(tokens.mutedFg, tokens.background, 0.7), tokens.background);
add("muted-fg /70 on surface-2", blend(tokens.mutedFg, tokens.surface2, 0.7), tokens.surface2);
add("muted-fg /60 on background", blend(tokens.mutedFg, tokens.background, 0.6), tokens.background);
add("muted-fg /50 on surface-2 (placeholder)", blend(tokens.mutedFg, tokens.surface2, 0.5), tokens.surface2);
add("muted-fg full on surface-2 (placeholder)", tokens.mutedFg, tokens.surface2);

console.log("pair".padEnd(46), "ratio");
for (const row of rows) {
  const fail = Number(row.r) < 4.5;
  console.log(row.label.padEnd(46), row.r, fail ? "  <-- under 4.5" : "");
}
