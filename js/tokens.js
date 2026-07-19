// Shared design tokens & primitives for the 28N 77E — The Higher Education Consultants site

window.THE_TOKENS = {
  INK: '#0F1E3D',
  INK_DEEP: '#0A1530',
  INK_SOFT: '#1C2B4E',
  PAPER: '#F5EFE4',
  PAPER_WARM: '#EDE4D1',
  PAPER_DEEP: '#E3D9C3',
  GOLD: '#B8935A',
  GOLD_DEEP: '#8F6F3F',
  OXBLOOD: '#6B2B2B',
  RULE: 'rgba(15,30,61,0.12)',
  RULE_DARK: 'rgba(245,239,228,0.15)',
  SERIF: '"Fraunces", "Times New Roman", Georgia, serif',
  SANS: '"Inter", "Helvetica Neue", system-ui, sans-serif',
  MONO: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
};

// Primary nav — shared by SiteNav and Footer across every page
window.NAV_SECTIONS = [
  { key: 'home', href: 'index.html', label: 'Home' },
  { key: 'about', href: 'about.html', label: 'About' },
  { key: 'approach', href: 'approach.html', label: 'Approach' },
  { key: 'outcomes', href: 'outcomes.html', label: 'Outcomes' },
  { key: 'journal', href: 'journal.html', label: 'Journal' },
  { key: 'faq', href: 'faq.html', label: 'FAQ' },
];

// The seal lockup — always rendered the same way across the site
window.TheDot = function TheDot({ color, scale = 1, showTag = true, tagColor }) {
  const T = window.THE_TOKENS;
  const ink = color || T.INK;
  const tag = tagColor || ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 * scale, lineHeight: 1 }}>
      <img src="assets/logo.jpeg" alt="28N 77E seal" style={{ height: 56 * scale, width: 56 * scale, display: 'block', flexShrink: 0, mixBlendMode: 'multiply' }} />
      <div style={{ fontFamily: T.SERIF, fontSize: 22 * scale, fontWeight: 500, letterSpacing: '0.01em', color: ink, lineHeight: 1 }}>
        28N 77E
      </div>
      {showTag && (
        <div style={{ marginLeft: 2 * scale, paddingLeft: 14 * scale, borderLeft: `1px solid ${tag}`, height: 32 * scale, display: 'flex', alignItems: 'center' }}>
          <div style={{ fontFamily: T.SANS, fontSize: 10 * scale, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: tag, lineHeight: 1, whiteSpace: 'nowrap' }}>
            The Higher Education Consultants
          </div>
        </div>
      )}
    </div>
  );
};

// Small type helpers — used throughout
window.Eyebrow = function Eyebrow({ children, color, align = 'left' }) {
  const T = window.THE_TOKENS;
  return (
    <div style={{
      fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase',
      color: color || T.INK, opacity: 0.6, textAlign: align,
    }}>{children}</div>
  );
};

window.HRule = function HRule({ color, dashed = false, style = {} }) {
  const T = window.THE_TOKENS;
  return (
    <div style={{
      height: 1,
      background: dashed ? 'transparent' : (color || T.RULE),
      borderTop: dashed ? `1px dashed ${color || T.RULE}` : 'none',
      ...style,
    }} />
  );
};
