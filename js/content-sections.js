// Content sections — Who we serve, Approach, Outcomes

(function() {
  const T = window.THE_TOKENS;

  // ─────────────── WHO WE SERVE ───────────────
  window.WhoWeServe = function WhoWeServe() {
    const items = [
      { n: '01', title: 'The Undergraduate', body: 'Applying from Indian, IB, or international curricula to US and UK undergraduate programmes. We begin, ideally, in Year 10.' },
      { n: '02', title: 'The Transfer', body: 'Sophomores and juniors moving between institutions — often from top Indian universities into US colleges. A narrower, more technical craft.' },
      { n: '03', title: 'The Graduate', body: 'Candidates for the Ivy graduate schools, MBA, MS, PhD — and the specialist programmes (Wharton, HBS, GSB, Oxford Saïd, Cambridge Judge).' },
      { n: '04', title: 'The Scholar', body: 'Rhodes, Marshall, Schwarzman, Knight-Hennessy. A parallel track, advised by former recipients on our panel.' },
    ];
    return (
      <section id="serve" style={{ background: T.PAPER_WARM, padding: '140px 72px', color: T.INK }}>
        <window.Eyebrow>§01 · Who we serve</window.Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 100, marginTop: 28, alignItems: 'flex-start' }}>
          <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>
            Four kinds of<br />
            <span style={{ fontStyle: 'italic' }}>candidate</span>, one<br />standard.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map((it, i) => (
              <div key={it.n} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 32, padding: '32px 0', borderTop: `1px solid ${T.RULE}`, borderBottom: i === items.length - 1 ? `1px solid ${T.RULE}` : 'none' }}>
                <div style={{ fontFamily: T.MONO, fontSize: 12, letterSpacing: '0.18em', opacity: 0.55 }}>{it.n}</div>
                <div>
                  <div style={{ fontFamily: T.SERIF, fontSize: 28, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{it.title}</div>
                  <div style={{ fontFamily: T.SERIF, fontSize: 17, fontStyle: 'italic', marginTop: 10, opacity: 0.72, lineHeight: 1.55, maxWidth: 520 }}>{it.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ─────────────── APPROACH — tabbed 7-stage process ───────────────
  window.Approach = function Approach() {
    const [active, setActive] = React.useState(0);
    const stages = [
      { code: 'I',   tempo: 'Largo',       title: 'The Reading',   sub: 'Apr — Jul, Year 11', body: 'We meet the student. We read their school record, their drafts, their room. A written assessment follows — our estimate of fit, and our candor about gaps.' },
      { code: 'II',  tempo: 'Andante',     title: 'The List',      sub: 'Jul — Aug',          body: 'A shortlist of 12–16 institutions, half ambition and half calibration. Not a factory list; a portrait of where this particular mind might flourish.' },
      { code: 'III', tempo: 'Moderato',    title: 'The Portfolio', sub: 'Jun — Sep',          body: 'Research, fieldwork, public writing, labs, launched projects. What the student does outside school becomes the spine of the application.' },
      { code: 'IV',  tempo: 'Allegretto',  title: 'The Instrument',sub: 'Aug — Nov',          body: 'Tests, when they still matter. We coach SAT, ACT, GRE, GMAT, and the English proficiency tests to the score the list demands — and not a point more.' },
      { code: 'V',   tempo: 'Cantabile',   title: 'The Essays',    sub: 'Sep — Dec',          body: 'The single most-weighted artefact. Twelve drafts is not uncommon. We read like admissions officers, not teachers.' },
      { code: 'VI',  tempo: 'Con fuoco',   title: 'The Submission',sub: 'Nov — Jan',          body: 'Common App, UCAS, Coalition, direct. Proofreading, tracking, and the nerve-steadying final read.' },
      { code: 'VII', tempo: 'Finale',      title: 'The Decision',  sub: 'Mar — May',          body: 'Comparing offers, negotiating aid, the visa pipeline, the summer reading list. Our work continues until the first seminar.' },
    ];
    const a = stages[active];
    return (
      <section id="approach" style={{ background: T.INK, color: T.PAPER, padding: '140px 72px', position: 'relative', overflow: 'hidden' }}>
        {/* Ornamental treble clef watermark */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 80, right: 60, fontFamily: T.SERIF, fontSize: 420, color: T.GOLD, opacity: 0.07, lineHeight: 0.8, pointerEvents: 'none' }}>𝄞</div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, position: 'relative' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 8, height: 8, background: T.GOLD, borderRadius: '50%' }} />
              <window.Eyebrow color={T.PAPER}>§02 · Approach &nbsp;·&nbsp; <span style={{ color: T.GOLD }}>Opus MMXXV</span></window.Eyebrow>
            </div>
            <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '28px 0 0' }}>
              A craft in <span style={{ fontStyle: 'italic', color: T.GOLD }}>seven</span><br />movements<span style={{ color: T.GOLD }}>.</span>
            </h2>
            {/* Tempo marking */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 28, fontFamily: T.SERIF, fontSize: 18, fontStyle: 'italic', color: T.GOLD }}>
              <span style={{ fontSize: 28, lineHeight: 1 }}>𝅘𝅥</span>
              <span>= 60 &nbsp; — &nbsp; lento, ma con cura</span>
              <div style={{ width: 80, height: 1, background: T.RULE_DARK, marginLeft: 8 }} />
            </div>
          </div>
          <div style={{ fontFamily: T.SERIF, fontSize: 17, fontStyle: 'italic', opacity: 0.75, maxWidth: 380, lineHeight: 1.6, borderLeft: `2px solid ${T.GOLD}`, paddingLeft: 20 }}>
            Our method is slow on purpose. We run on the admissions calendar, not yours — and begin, for undergraduates, eighteen months out.
          </div>
        </div>

        {/* Musical staff with notes — each note maps to a movement */}
        <div style={{ position: 'relative', height: 80, margin: '0 0 8px', opacity: 0.9 }}>
          {/* 5-line staff */}
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} style={{ position: 'absolute', top: 14 + i * 12, left: 0, right: 0, height: 1, background: T.RULE_DARK }} />
          ))}
          {/* Clef */}
          <div style={{ position: 'absolute', left: 0, top: -6, fontFamily: T.SERIF, fontSize: 90, color: T.GOLD, lineHeight: 1 }}>𝄞</div>
          {/* Time signature */}
          <div style={{ position: 'absolute', left: 70, top: 8, fontFamily: T.SERIF, fontSize: 22, color: T.PAPER, lineHeight: 1, opacity: 0.85 }}>
            <div>7</div><div style={{ marginTop: -4 }}>4</div>
          </div>
          {/* Notes at rising/descending pitches */}
          {stages.map((s, i) => {
            const pitches = [50, 38, 44, 32, 26, 38, 20]; // y positions
            const left = `calc(${110 + i * 12.3}% / 8.5 * 7 + 110px)`;
            const x = 130 + i * ((100 - 15) / 7) * 10;
            return (
              <button key={i} onClick={() => setActive(i)} style={{
                position: 'absolute', left: `calc(${14 + i * 11}% + 40px)`, top: pitches[i],
                background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
                transform: 'translateX(-50%)',
              }}>
                {/* Stem */}
                <div style={{ position: 'absolute', left: 7, top: -28, width: 1.5, height: 32, background: active === i ? T.GOLD : T.PAPER, opacity: active === i ? 1 : 0.6 }} />
                {/* Notehead */}
                <div style={{ width: 14, height: 10, borderRadius: '50%', background: active === i ? T.GOLD : T.PAPER, transform: 'rotate(-20deg)', opacity: active === i ? 1 : 0.65, transition: 'all .15s' }} />
              </button>
            );
          })}
          {/* Final barline */}
          <div style={{ position: 'absolute', right: 0, top: 14, width: 1, height: 48, background: T.PAPER, opacity: 0.6 }} />
          <div style={{ position: 'absolute', right: 4, top: 14, width: 3, height: 48, background: T.PAPER, opacity: 0.6 }} />
        </div>

        {/* Stage nav */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderTop: `1px solid ${T.RULE_DARK}`, borderBottom: `1px solid ${T.RULE_DARK}` }}>
          {stages.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: 'transparent', border: 'none', padding: '24px 16px', cursor: 'pointer',
              borderLeft: i === 0 ? 'none' : `1px solid ${T.RULE_DARK}`,
              textAlign: 'left', position: 'relative',
              color: T.PAPER, opacity: active === i ? 1 : 0.55,
              transition: 'opacity .15s, background .15s',
              background: active === i ? 'rgba(184,147,90,0.08)' : 'transparent',
            }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.opacity = 0.85; }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.opacity = 0.55; }}
            >
              {active === i && <span style={{ position: 'absolute', top: -1, left: 0, right: 0, height: 1, background: T.GOLD }} />}
              <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', opacity: 0.7 }}>MVT. {s.code}</div>
              <div style={{ fontFamily: T.SERIF, fontSize: 18, fontStyle: 'italic', fontWeight: 400, marginTop: 8 }}>{s.title}</div>
              <div style={{ fontFamily: T.SERIF, fontSize: 12, fontStyle: 'italic', color: T.GOLD, opacity: active === i ? 1 : 0.6, marginTop: 4 }}>— {s.tempo}</div>
            </button>
          ))}
        </div>

        {/* Stage detail */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, padding: '64px 0 0' }}>
          <div>
            <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.28em', color: T.GOLD, marginBottom: 10 }}>MOVIMENTO</div>
            <div style={{ fontFamily: T.SERIF, fontSize: 128, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1, color: T.GOLD }}>
              {a.code}<span style={{ color: T.PAPER }}>.</span>
            </div>
            <div style={{ fontFamily: T.SERIF, fontSize: 24, fontStyle: 'italic', color: T.PAPER, marginTop: 8, opacity: 0.9 }}>— {a.tempo}</div>
            <div style={{ width: 40, height: 1, background: T.GOLD, margin: '24px 0' }} />
            <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.22em', opacity: 0.7 }}>{a.sub}</div>
          </div>
          <div>
            <div style={{ fontFamily: T.SERIF, fontSize: 48, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1, fontStyle: 'italic' }}>
              {a.title}
            </div>
            <div style={{ fontFamily: T.SERIF, fontSize: 20, lineHeight: 1.6, marginTop: 28, opacity: 0.85, maxWidth: 620 }}>
              {a.body}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // ─────────────── OUTCOMES — filterable table ───────────────
  window.Outcomes = function Outcomes() {
    const [filter, setFilter] = React.useState('all');
    const rows = [
      { year: '2026', name: 'A.M.', school: 'Harvard University', programme: 'Economics', city: 'New York, NY', cat: 'ug' },
      { year: '2026', name: 'P.R.', school: 'University of Pennsylvania', programme: 'Wharton, BS', city: 'Greenwich, CT', cat: 'ug' },
      { year: '2026', name: 'N.S.', school: 'Yale University', programme: 'Architecture', city: 'Chicago, IL', cat: 'ug' },
      { year: '2026', name: 'K.M.', school: 'Princeton University', programme: 'Computer Science', city: 'Palo Alto, CA', cat: 'ug' },
      { year: '2026', name: 'V.I.', school: 'Columbia Business School', programme: 'MBA', city: 'Boston, MA', cat: 'grad' },
      { year: '2026', name: 'S.D.', school: 'Stanford GSB', programme: 'MBA', city: 'Seattle, WA', cat: 'grad' },
      { year: '2026', name: 'R.A.', school: 'Brown University', programme: 'Literary Arts', city: 'Brooklyn, NY', cat: 'ug' },
      { year: '2026', name: 'I.G.', school: 'Dartmouth College', programme: 'Government', city: 'Washington, DC', cat: 'ug' },
      { year: '2025', name: 'A.B.', school: 'Harvard University', programme: 'History & Literature', city: 'Los Angeles, CA', cat: 'ug' },
      { year: '2025', name: 'M.K.', school: 'Cornell University', programme: 'Engineering', city: 'Austin, TX', cat: 'ug' },
      { year: '2025', name: 'T.N.', school: 'Yale University', programme: 'Economics', city: 'Scarsdale, NY', cat: 'ug' },
      { year: '2025', name: 'J.P.', school: 'Harvard Law School', programme: 'JD', city: 'Washington, DC', cat: 'grad' },
      { year: '2025', name: 'Z.H.', school: 'MIT Sloan', programme: 'MBA', city: 'San Francisco, CA', cat: 'grad' },
      { year: '2025', name: 'L.B.', school: 'Rhodes Scholarship', programme: '— Oxford', city: 'Boston, MA', cat: 'scholar' },
      { year: '2024', name: 'A.V.', school: 'Princeton University', programme: 'Physics', city: 'Cambridge, MA', cat: 'ug' },
      { year: '2024', name: 'E.F.', school: 'Columbia University', programme: 'English', city: 'Manhattan, NY', cat: 'ug' },
      { year: '2024', name: 'D.N.', school: 'Knight-Hennessy Scholars', programme: '— Stanford', city: 'Menlo Park, CA', cat: 'scholar' },
    ];
    const filtered = filter === 'all' ? rows : rows.filter(r => r.cat === filter);
    const filters = [
      { id: 'all', label: 'All · 17' },
      { id: 'ug', label: 'Undergraduate · 12' },
      { id: 'grad', label: 'Graduate · 3' },
      { id: 'scholar', label: 'Scholarships · 2' },
    ];
    return (
      <section id="outcomes" style={{ background: T.PAPER, padding: '140px 72px', color: T.INK }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <window.Eyebrow>§03 · Outcomes</window.Eyebrow>
            <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '28px 0 0' }}>
              A partial<br /><span style={{ fontStyle: 'italic' }}>ledger</span><span style={{ color: T.GOLD }}>.</span>
            </h2>
          </div>
          <div style={{ fontFamily: T.SERIF, fontSize: 17, fontStyle: 'italic', opacity: 0.75, lineHeight: 1.55 }}>
            We name schools, not students — names are always anonymised. A full list, with references, is shared after the initial reading.
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '10px 18px', border: `1px solid ${filter === f.id ? T.INK : T.RULE}`,
              background: filter === f.id ? T.INK : 'transparent',
              color: filter === f.id ? T.PAPER : T.INK,
              cursor: 'pointer', transition: 'all .15s',
            }}>{f.label}</button>
          ))}
        </div>

        {/* Ledger table */}
        <div style={{ borderTop: `1.5px solid ${T.INK}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 2fr 1.5fr 1fr', padding: '14px 0', fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55, borderBottom: `1px solid ${T.RULE}` }}>
            <div>Year</div><div>Candidate</div><div>Institution</div><div>Programme</div><div>From</div>
          </div>
          {filtered.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr 2fr 1.5fr 1fr',
              padding: '22px 0', borderBottom: `1px solid ${T.RULE}`,
              transition: 'background .12s, padding-left .15s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = T.PAPER_WARM; e.currentTarget.style.paddingLeft = '12px'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0'; }}
            >
              <div style={{ fontFamily: T.MONO, fontSize: 12, opacity: 0.6 }}>{r.year}</div>
              <div style={{ fontFamily: T.SERIF, fontSize: 16, fontStyle: 'italic', opacity: 0.85 }}>{r.name}</div>
              <div style={{ fontFamily: T.SERIF, fontSize: 18, fontWeight: 400 }}>{r.school}</div>
              <div style={{ fontFamily: T.SERIF, fontSize: 15, opacity: 0.7 }}>{r.programme}</div>
              <div style={{ fontFamily: T.MONO, fontSize: 11, opacity: 0.55, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{r.city}</div>
            </div>
          ))}
        </div>

        {/* Universities wall */}
        <div style={{ marginTop: 120 }}>
          <window.Eyebrow>Partner admits · 2019 — 2026</window.Eyebrow>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: '8px 28px', fontFamily: T.SERIF, fontSize: 28, fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.35, color: T.INK }}>
            {[
              'Harvard', 'Yale', 'Princeton', 'Columbia', 'Brown', 'Dartmouth', 'Cornell', 'Penn',
              'Stanford', 'MIT', 'Oxford', 'Cambridge', 'LSE', 'Imperial', 'UCL', 'Edinburgh',
              'Chicago', 'Northwestern', 'Duke', 'Johns Hopkins', 'Georgetown', 'NYU',
              'HBS', 'Wharton', 'GSB', 'Sloan', 'Booth', 'Kellogg', 'Saïd', 'Judge',
            ].map((u, i) => (
              <span key={u} style={{ fontStyle: i % 3 === 1 ? 'italic' : 'normal', opacity: 0.7 + (i % 3) * 0.1 }}>
                {u}<span style={{ color: T.GOLD, marginLeft: 2 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };

})();
