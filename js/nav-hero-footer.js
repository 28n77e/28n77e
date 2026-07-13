// Nav + Hero + Footer for the site

(function() {
  const T = window.THE_TOKENS;

  // ──────────────────────────────────────────────────────────────────────
  // NAV — sticky, scroll-aware, with active section highlighting
  // ──────────────────────────────────────────────────────────────────────
  window.SiteNav = function SiteNav({ active, dark }) {
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    // Pages that open on a dark full-bleed section (Approach, Begin) need a
    // light-on-dark nav before the user scrolls, or the dark-ink text
    // vanishes against the dark section behind the transparent nav.
    const showLight = dark && !scrolled;
    const textColor = showLight ? T.PAPER : T.INK;
    const background = scrolled ? 'rgba(245,239,228,0.92)' : (dark ? 'rgba(10,21,48,0.6)' : 'transparent');
    return (
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? '14px 48px' : '24px 48px',
        background,
        backdropFilter: (scrolled || dark) ? 'blur(14px) saturate(1.1)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.RULE}` : '1px solid transparent',
        transition: 'padding .35s cubic-bezier(.2,.7,.3,1), background .35s, border-color .35s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="index.html" style={{ textDecoration: 'none' }}>
          <window.TheDot scale={0.9} showTag={false} color={textColor} />
        </a>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {window.NAV_SECTIONS.map(s => (
            <a key={s.key} href={s.href}
              style={{
                fontFamily: T.SANS, fontSize: 12, fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: textColor, opacity: active === s.key ? 1 : 0.55,
                transition: 'opacity .15s, color .35s',
                position: 'relative', paddingBottom: 4,
              }}>
              {s.label}
              {active === s.key && (
                <span style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 1, background: T.GOLD }} />
              )}
            </a>
          ))}
          <a href="contact.html" style={{
            fontFamily: T.SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', textDecoration: 'none', color: T.PAPER, background: T.INK,
            border: 'none', padding: '12px 22px', cursor: 'pointer', display: 'inline-block',
            transition: 'background .15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = T.INK_DEEP}
            onMouseLeave={e => e.currentTarget.style.background = T.INK}
          >
            Begin &nbsp;→
          </a>
        </div>
      </nav>
    );
  };

  // ──────────────────────────────────────────────────────────────────────
  // HERO — editorial, restrained, type-led
  // ──────────────────────────────────────────────────────────────────────
  window.Hero = function Hero() {
    const [t, setT] = React.useState(0);
    React.useEffect(() => {
      const id = setInterval(() => setT(v => v + 1), 2400);
      return () => clearInterval(id);
    }, []);
    const rotations = ['Harvard', 'Yale', 'Princeton', 'Columbia', 'Brown', 'Dartmouth', 'Cornell', 'Penn'];
    const current = rotations[t % rotations.length];

    return (
      <section id="top" style={{
        background: T.PAPER, color: T.INK, padding: '180px 72px 80px',
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Layered decorative background: grid + oxblood & gold color blocks */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(${T.RULE} 1px, transparent 1px)`,
          backgroundSize: '100% 80px', opacity: 0.4 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: 180, height: '100%', background: T.OXBLOOD, opacity: 0.92 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 180, width: 8, height: '100%', background: T.GOLD }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 60, right: 40, width: 100, color: T.PAPER, fontFamily: T.MONO, fontSize: 9, letterSpacing: '0.3em', writingMode: 'vertical-rl', transform: 'rotate(180deg)', opacity: 0.6 }}>
          THE HIGHER EDUCATION · MMXXV
        </div>

        <div style={{ position: 'relative', paddingRight: 200 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 8, height: 8, background: T.GOLD, borderRadius: '50%' }} />
              <window.Eyebrow>MMXXV &nbsp;·&nbsp; A Boutique Practice &nbsp;·&nbsp; <span style={{ color: T.OXBLOOD }}>Ivy League &amp; Peer Institutions</span></window.Eyebrow>
            </div>
          </div>

          {/* Ornamental rule row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, color: T.OXBLOOD }}>
            <div style={{ width: 40, height: 2, background: T.OXBLOOD }} />
            <div style={{ fontFamily: T.SERIF, fontSize: 18, fontStyle: 'italic' }}>§</div>
            <div style={{ width: 60, height: 1, background: T.RULE }} />
            <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.GOLD_DEEP }}>Prospectus · I</div>
            <div style={{ flex: 1, height: 1, background: T.RULE }} />
          </div>

          <h1 style={{
            fontFamily: T.SERIF, fontSize: 132, fontWeight: 300, lineHeight: 0.95,
            letterSpacing: '-0.04em', margin: 0, color: T.INK,
          }}>
            Where the best<br />
            applications<br />
            are <span style={{ fontStyle: 'italic', color: T.OXBLOOD }}>quietly</span> made<span style={{ color: T.GOLD }}>.</span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, marginTop: 72, alignItems: 'stretch' }}>
            <div style={{ fontFamily: T.SERIF, fontSize: 22, fontStyle: 'italic', lineHeight: 1.55, opacity: 0.88 }}>
              We prepare a small number of students each year for entry into{' '}
              <span style={{ borderBottom: `2px solid ${T.GOLD}`, color: T.OXBLOOD, fontStyle: 'normal', fontWeight: 500, padding: '0 4px' }}>
                {current}
              </span>{' '}
              and its peers. Quietly, meticulously, and without shortcuts.
              <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
                <a href="contact.html" style={{ fontFamily: T.SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: T.PAPER, background: T.INK, border: 'none', padding: '18px 28px', display: 'inline-block' }}>
                  Begin a reading &nbsp;→
                </a>
                <a href="outcomes.html" style={{ fontFamily: T.SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: T.INK, background: 'transparent', border: `1px solid ${T.INK}`, padding: '18px 28px', display: 'inline-block' }}>
                  Our outcomes
                </a>
              </div>
            </div>
            {/* Gilded stat card */}
            <div style={{ background: T.INK, color: T.PAPER, padding: 36, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ position: 'absolute', top: -6, left: -6, width: 40, height: 40, border: `2px solid ${T.GOLD}`, borderRight: 'none', borderBottom: 'none' }} />
              <div style={{ position: 'absolute', bottom: -6, right: -6, width: 40, height: 40, border: `2px solid ${T.GOLD}`, borderLeft: 'none', borderTop: 'none' }} />
              <div>
                <div style={{ fontFamily: T.MONO, fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.GOLD, opacity: 0.9 }}>
                  ✦ &nbsp; Class of 2026
                </div>
                <div style={{ fontFamily: T.SERIF, fontSize: 128, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 18, color: T.PAPER }}>
                  94<span style={{ color: T.GOLD }}>%</span>
                </div>
                <div style={{ fontFamily: T.SERIF, fontSize: 15, fontStyle: 'italic', opacity: 0.82, marginTop: 14, maxWidth: 240, lineHeight: 1.5 }}>
                  placed at a top-choice programme — across Ivy, Oxbridge and Russell Group institutions.
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 40, paddingTop: 24, borderTop: `1px solid ${T.RULE_DARK}` }}>
                {[['24', 'Cohort'], ['7', 'Yrs'], ['2', 'Offices']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: T.SERIF, fontSize: 32, color: T.GOLD, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: T.MONO, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.6, marginTop: 6 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 56, position: 'relative', paddingRight: 200, marginTop: 40, borderTop: `1px solid ${T.RULE}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20 }}>
            <div style={{ width: 24, height: 1, background: T.GOLD }} />
            <window.Eyebrow>Read on</window.Eyebrow>
          </div>
          <div style={{ display: 'flex', gap: 32, fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', paddingTop: 20 }}>
            <a href="#serve" style={{ color: T.INK, textDecoration: 'none' }}><span style={{ color: T.GOLD }}>§</span> 01 · Who we serve</a>
            <a href="approach.html" style={{ color: T.INK, textDecoration: 'none' }}><span style={{ color: T.OXBLOOD }}>§</span> 02 · Approach</a>
            <a href="outcomes.html" style={{ color: T.INK, textDecoration: 'none' }}><span style={{ color: T.GOLD }}>§</span> 03 · Outcomes</a>
          </div>
        </div>
      </section>
    );
  };

  // ──────────────────────────────────────────────────────────────────────
  // FOOTER
  // ──────────────────────────────────────────────────────────────────────
  window.Footer = function Footer() {
    return (
      <footer style={{ background: T.INK_DEEP, color: T.PAPER, padding: '80px 72px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 64, borderBottom: `1px solid ${T.RULE_DARK}` }}>
          <div>
            <window.TheDot color={T.PAPER} dotColor={T.GOLD} tagColor={T.PAPER} scale={1.3} />
            <div style={{ fontFamily: T.SERIF, fontSize: 16, fontStyle: 'italic', marginTop: 28, opacity: 0.8, lineHeight: 1.6, maxWidth: 360 }}>
              A boutique admissions practice for the Ivy League and peer institutions. Since 2019.
            </div>
          </div>
          <div>
            <window.Eyebrow color={T.PAPER}>Practice</window.Eyebrow>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: T.SERIF, fontSize: 15, opacity: 0.85 }}>
              {window.NAV_SECTIONS.map(s => (
                <a key={s.key} href={s.href} style={{ color: T.PAPER, textDecoration: 'none' }}>{s.label}</a>
              ))}
            </div>
          </div>
          <div>
            <window.Eyebrow color={T.PAPER}>Offices</window.Eyebrow>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14, fontFamily: T.SERIF, fontSize: 15, opacity: 0.85, fontStyle: 'italic' }}>
              <div>New Delhi</div>
              <div>Bangalore</div>
            </div>
          </div>
          <div>
            <window.Eyebrow color={T.PAPER}>Correspondence</window.Eyebrow>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: T.SERIF, fontSize: 15, opacity: 0.85 }}>
              <a href="mailto:connect@28n77e.in" style={{ color: T.PAPER, textDecoration: 'none', borderBottom: `1px solid ${T.GOLD}`, paddingBottom: 2, alignSelf: 'flex-start' }}>connect@28n77e.in</a>
              <a href="tel:+919886085668" style={{ color: T.PAPER, textDecoration: 'none' }}>+91 98860 85668</a>
              <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.18em', marginTop: 12, opacity: 0.55 }}>CONSULTATIONS · BY APPOINTMENT</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 32, fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}>
          <div>© 2026 · 28N 77E — The Higher Education Consultants LLP</div>
          <div>The Higher Education · EST · MMXXV</div>
        </div>
      </footer>
    );
  };
})();
