function hexToRgb(hex){
  const h = hex.replace('#','');
  return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)];
}
function srgbToLinear(c){ c/=255; return c<=0.03928? c/12.92: Math.pow((c+0.055)/1.055,2.4); }
function luminance(hex){ const [r,g,b]=hexToRgb(hex); return 0.2126*srgbToLinear(r)+0.7152*srgbToLinear(g)+0.0722*srgbToLinear(b); }
function contrast(hex1,hex2){ const L1=luminance(hex1), L2=luminance(hex2); const lighter=Math.max(L1,L2), darker=Math.min(L1,L2); return (lighter+0.05)/(darker+0.05); }
const vars = {
  background: '#071023',
  surface: '#0b1220',
  foreground: '#e6eef6',
  muted: '#9aa6b2',
  accent: '#ff7a18',
  accent2: '#66ff99'
};
console.log('Contrast ratios (foreground vs background):');
for(const [k,v] of Object.entries(vars)){
  console.log(`${k} vs background: ${contrast(v,vars.background).toFixed(2)}`);
}
console.log('\nKey pairs:');
console.log('accent vs foreground:', contrast(vars.accent,vars.foreground).toFixed(2));
console.log('muted vs surface:', contrast(vars.muted,vars.surface).toFixed(2));
console.log('accent2 vs background:', contrast(vars.accent2,vars.background).toFixed(2));
