// Homepage closing CTA — the full intake form lives on contact.html now

window.HomeCTA = function HomeCTA() {
  const T = window.THE_TOKENS;
  return (
    <section style={{ background: T.PAPER, color: T.INK, padding: '160px 72px', textAlign: 'center' }}>
      <window.Eyebrow>§ · Begin</window.Eyebrow>
      <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '28px 0 24px' }}>
        Write us<br />a <span style={{ fontStyle: 'italic' }}>letter</span><span style={{ color: T.GOLD }}>.</span>
      </h2>
      <div style={{ fontFamily: T.SERIF, fontSize: 18, fontStyle: 'italic', opacity: 0.82, maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
        A partner reads every intake within five working days. If we're the right practice for you, we'll write back with a reading date.
      </div>
      <a href="contact.html" style={{
        display: 'inline-block', marginTop: 48, fontFamily: T.SANS, fontSize: 12, fontWeight: 600,
        letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
        color: T.INK, background: T.GOLD, padding: '18px 36px',
      }}>
        Begin a reading &nbsp;→
      </a>
    </section>
  );
};
