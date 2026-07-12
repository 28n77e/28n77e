// Journal, FAQ, Testimonial, Begin (intake form)

(function() {
  const T = window.THE_TOKENS;

  // ─────────────── PULL QUOTE ───────────────
  window.PullQuote = function PullQuote() {
    return (
      <section style={{ background: T.OXBLOOD, color: T.PAPER, padding: '140px 72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 40, left: 72, fontFamily: T.SERIF, fontSize: 240, color: T.GOLD, opacity: 0.25, lineHeight: 0.8, fontStyle: 'italic' }}>“</div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 40, right: 72, fontFamily: T.SERIF, fontSize: 240, color: T.GOLD, opacity: 0.25, lineHeight: 0.8, fontStyle: 'italic' }}>”</div>
        <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: T.GOLD, marginBottom: 32, position: 'relative' }}>
          ✦ &nbsp; A note from the shelf &nbsp; ✦
        </div>
        <div style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          &ldquo;They did not teach me how to apply.<br />
          They taught me how to be <span style={{ color: T.GOLD, fontStyle: 'normal' }}>read</span>.&rdquo;
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 48, position: 'relative' }}>
          <div style={{ width: 40, height: 1, background: T.GOLD }} />
          <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
            N·S &nbsp;·&nbsp; Yale '29 &nbsp;·&nbsp; Architecture
          </div>
          <div style={{ width: 40, height: 1, background: T.GOLD }} />
        </div>
      </section>
    );
  };

  // ─────────────── JOURNAL ───────────────
  window.Journal = function Journal() {
    const [hover, setHover] = React.useState(null);
    const entries = [
      { n: '№ 014', date: 'Mar 2026', title: 'On the essay that does not try to charm', read: '8 min', tag: 'Essays' },
      { n: '№ 013', date: 'Feb 2026', title: 'What a Yale reader actually sees in a transcript', read: '12 min', tag: 'Applications' },
      { n: '№ 012', date: 'Jan 2026', title: 'A defence of the uninteresting extracurricular', read: '6 min', tag: 'Portfolio' },
      { n: '№ 011', date: 'Dec 2025', title: 'Waitlists, and what to do in March', read: '5 min', tag: 'Decisions' },
      { n: '№ 010', date: 'Nov 2025', title: 'The slow approach to Oxbridge interviews', read: '10 min', tag: 'Interviews' },
    ];
    return (
      <section id="journal" style={{ background: T.PAPER, padding: '140px 72px', color: T.INK }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <window.Eyebrow>§05 · Journal</window.Eyebrow>
            <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '28px 0 0' }}>
              Essays, <span style={{ fontStyle: 'italic' }}>in public</span><span style={{ color: T.GOLD }}>.</span>
            </h2>
          </div>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: T.SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.INK, textDecoration: 'none', borderBottom: `1px solid ${T.GOLD}`, paddingBottom: 4 }}>
            All entries &nbsp;→
          </a>
        </div>
        <div style={{ borderTop: `1.5px solid ${T.INK}` }}>
          {entries.map((e, i) => (
            <a key={i} href="#" onClick={ev => ev.preventDefault()}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
                display: 'grid', gridTemplateColumns: '120px 160px 1fr 160px 60px',
                padding: '34px 24px 34px 0',
                borderBottom: `1px solid ${T.RULE}`,
                textDecoration: 'none', color: T.INK, alignItems: 'baseline',
                background: hover === i ? T.PAPER_WARM : 'transparent',
                paddingLeft: hover === i ? 24 : 0, transition: 'all .18s',
              }}>
              <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.18em', opacity: 0.55 }}>{e.n}</div>
              <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.55 }}>{e.date}</div>
              <div style={{ fontFamily: T.SERIF, fontSize: 28, fontWeight: 400, letterSpacing: '-0.01em', fontStyle: hover === i ? 'italic' : 'normal', transition: 'font-style .18s' }}>
                {e.title}
              </div>
              <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.OXBLOOD }}>· {e.tag}</div>
              <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.18em', opacity: 0.55, textAlign: 'right' }}>{e.read}</div>
            </a>
          ))}
        </div>
      </section>
    );
  };

  // ─────────────── FAQ — accordion ───────────────
  window.FAQ = function FAQ() {
    const [open, setOpen] = React.useState(0);
    const qs = [
      { q: 'When should we begin?', a: 'For undergraduate candidates, ideally eighteen months before the first application deadline — Year 11 for most systems. Earlier is fine; later is possible but narrows the Portfolio stage. Graduate candidates we take on with nine months of runway.' },
      { q: 'How many students do you accept each year?', a: 'Twenty-four. Across all four tracks — undergraduate, transfer, graduate, scholarship. We decline more candidates than we take on. Capacity is the constraint, not revenue.' },
      { q: 'Do you guarantee admission?', a: 'No, and we are wary of anyone who does. Admissions is a reading — not a formula. What we guarantee is the quality of preparation: a stronger application than the student would have produced alone.' },
      { q: 'Do you work with students outside India?', a: 'Yes. Roughly a third of our cohort is based abroad — London, Singapore, Dubai, New York, Kenya. Video-first, with in-person intensives at our two offices each quarter.' },
      { q: 'What are your fees?', a: 'Engagement begins at ₹6 lakh (undergraduate, full-cycle) and scales with track, number of programmes, and test preparation. A detailed letter of engagement follows the initial reading. We offer a limited number of pro bono seats; mention it in your Begin letter.' },
      { q: 'Can I speak to past candidates?', a: 'After the Reading, yes. We will introduce you to two alumni, matched to your track and profile. They speak to us frankly; we ask them to speak to you the same way.' },
    ];
    return (
      <section id="faq" style={{ background: T.PAPER_WARM, padding: '140px 72px', color: T.INK }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 100, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <window.Eyebrow>§06 · Questions</window.Eyebrow>
            <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '28px 0 24px' }}>
              Six that come up<br /><span style={{ fontStyle: 'italic' }}>often</span><span style={{ color: T.GOLD }}>.</span>
            </h2>
            <div style={{ fontFamily: T.SERIF, fontSize: 17, fontStyle: 'italic', opacity: 0.75, lineHeight: 1.55, maxWidth: 360 }}>
              If yours isn't here, write — we read everything that arrives in the Monday pouch.
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${T.RULE}` }}>
            {qs.map((item, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${T.RULE}` }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: '100%', padding: '28px 0', background: 'transparent', border: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24,
                  cursor: 'pointer', textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, flex: 1 }}>
                    <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, minWidth: 32 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ fontFamily: T.SERIF, fontSize: 26, fontWeight: 400, letterSpacing: '-0.01em', color: T.INK }}>
                      {item.q}
                    </div>
                  </div>
                  <div style={{ fontFamily: T.SERIF, fontSize: 28, fontWeight: 300, color: T.GOLD, transition: 'transform .2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</div>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0, overflow: 'hidden',
                  transition: 'max-height .35s cubic-bezier(.2,.7,.3,1)',
                }}>
                  <div style={{ padding: '0 0 28px 56px', fontFamily: T.SERIF, fontSize: 17, fontStyle: 'italic', lineHeight: 1.65, opacity: 0.8, maxWidth: 620 }}>
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ─────────────── BEGIN — multi-step intake form ───────────────
  window.Begin = function Begin() {
    const [step, setStep] = React.useState(0);
    const [data, setData] = React.useState({
      firstName: '', lastName: '', email: '', phone: '',
      track: '', year: '', schools: [], gpa: '', test: '',
      background: '', goal: '',
    });
    const [submitted, setSubmitted] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const steps = ['Introduction', 'Candidate', 'Ambition', 'Send'];
    const tracks = ['Undergraduate (US)', 'Undergraduate (UK / Oxbridge)', 'Transfer', 'MBA', 'Graduate (MS / PhD)', 'Scholarship (Rhodes / Marshall / Schwarzman)'];
    const schoolOptions = ['Harvard', 'Yale', 'Princeton', 'Columbia', 'Brown', 'Dartmouth', 'Cornell', 'Penn', 'Stanford', 'MIT', 'Oxford', 'Cambridge'];

    const set = (k, v) => setData(d => ({ ...d, [k]: v }));
    const toggleSchool = s => setData(d => ({ ...d, schools: d.schools.includes(s) ? d.schools.filter(x => x !== s) : [...d.schools, s] }));

    const validate = () => {
      const e = {};
      if (step === 0) {
        if (!data.firstName) e.firstName = 'Required';
        if (!data.lastName) e.lastName = 'Required';
        if (!data.email) e.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = 'Check the address';
      }
      if (step === 1) {
        if (!data.track) e.track = 'Pick one';
        if (!data.year) e.year = 'Required';
      }
      if (step === 2) {
        if (data.schools.length === 0) e.schools = 'Choose at least one';
        if (!data.goal) e.goal = 'A sentence or two is enough';
      }
      setErrors(e);
      return Object.keys(e).length === 0;
    };

    const next = () => { if (validate()) setStep(s => s + 1); };
    const back = () => setStep(s => Math.max(0, s - 1));
    const send = () => { if (validate()) setSubmitted(true); };

    if (submitted) {
      return (
        <section id="begin" style={{ background: T.INK, color: T.PAPER, padding: '180px 72px', textAlign: 'center' }}>
          <div style={{ fontFamily: T.SERIF, fontSize: 96, fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Received<span style={{ color: T.GOLD }}>.</span>
          </div>
          <div style={{ fontFamily: T.SERIF, fontSize: 22, fontStyle: 'italic', opacity: 0.85, maxWidth: 560, margin: '40px auto 0', lineHeight: 1.6 }}>
            Thank you, {data.firstName}. A partner will read your letter and reply within five working days — from <span style={{ borderBottom: `1px solid ${T.GOLD}` }}>connect@28n77e.in</span>.
          </div>
          <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', marginTop: 48, opacity: 0.55 }}>
            Reference · {Date.now().toString(36).toUpperCase().slice(-6)}
          </div>
        </section>
      );
    }

    return (
      <section id="begin" style={{ background: T.INK, color: T.PAPER, padding: '140px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 100, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <window.Eyebrow color={T.PAPER}>§07 · Begin</window.Eyebrow>
            <h2 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '28px 0 32px' }}>
              Write us<br />a <span style={{ fontStyle: 'italic' }}>letter</span><span style={{ color: T.GOLD }}>.</span>
            </h2>
            <div style={{ fontFamily: T.SERIF, fontSize: 17, fontStyle: 'italic', opacity: 0.8, lineHeight: 1.6, maxWidth: 380 }}>
              A partner reads every intake within five working days. If we're the right practice for you, we'll write back with a reading date. If not, we'll refer you thoughtfully.
            </div>
            {/* Stepper */}
            <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: step === i ? 1 : 0.45 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: step > i ? T.GOLD : 'transparent',
                    border: `1px solid ${step >= i ? T.GOLD : T.PAPER}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: T.MONO, fontSize: 10, color: step > i ? T.INK : T.PAPER,
                  }}>{step > i ? '✓' : i + 1}</div>
                  <div style={{ fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderLeft: `1px solid ${T.RULE_DARK}`, paddingLeft: 60 }}>
            {/* STEP 0 — introduction */}
            {step === 0 && (
              <Fieldset title="First, the basics." sub="Name, and how we should write back to you.">
                <Grid2>
                  <Field label="First name" err={errors.firstName}>
                    <Input value={data.firstName} onChange={v => set('firstName', v)} />
                  </Field>
                  <Field label="Family name" err={errors.lastName}>
                    <Input value={data.lastName} onChange={v => set('lastName', v)} />
                  </Field>
                </Grid2>
                <Field label="Email" err={errors.email}>
                  <Input type="email" value={data.email} onChange={v => set('email', v)} />
                </Field>
                <Field label="Telephone · optional">
                  <Input value={data.phone} onChange={v => set('phone', v)} placeholder="+91 98 210 00 000" />
                </Field>
              </Fieldset>
            )}
            {/* STEP 1 — candidate */}
            {step === 1 && (
              <Fieldset title="Tell us about you." sub="Which track, and where you are in the calendar.">
                <Field label="Track" err={errors.track}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {tracks.map(tr => (
                      <button key={tr} type="button" onClick={() => set('track', tr)} style={{
                        fontFamily: T.SANS, fontSize: 12, letterSpacing: '0.08em',
                        padding: '12px 16px', border: `1px solid ${data.track === tr ? T.GOLD : 'rgba(245,239,228,0.3)'}`,
                        background: data.track === tr ? 'rgba(184,147,90,0.15)' : 'transparent',
                        color: T.PAPER, cursor: 'pointer',
                      }}>{tr}</button>
                    ))}
                  </div>
                </Field>
                <Grid2>
                  <Field label="Year / Class" err={errors.year}>
                    <Input value={data.year} onChange={v => set('year', v)} placeholder="e.g. Year 11, or MBA ’28" />
                  </Field>
                  <Field label="GPA / Score · optional">
                    <Input value={data.gpa} onChange={v => set('gpa', v)} placeholder="e.g. 3.9 / 4.0 or 92%" />
                  </Field>
                </Grid2>
                <Field label="Standardised tests so far · optional">
                  <Input value={data.test} onChange={v => set('test', v)} placeholder="SAT 1520 · ACT 34 · GRE 335 · GMAT 740" />
                </Field>
              </Fieldset>
            )}
            {/* STEP 2 — ambition */}
            {step === 2 && (
              <Fieldset title="What are you reaching for?" sub="Shortlisted institutions, and a short note on why.">
                <Field label="Institutions of interest" err={errors.schools} hint="Tap to select. You can add more in the letter below.">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {schoolOptions.map(s => (
                      <button key={s} type="button" onClick={() => toggleSchool(s)} style={{
                        fontFamily: T.SERIF, fontSize: 15, fontStyle: data.schools.includes(s) ? 'italic' : 'normal',
                        padding: '10px 16px', border: `1px solid ${data.schools.includes(s) ? T.GOLD : 'rgba(245,239,228,0.3)'}`,
                        background: data.schools.includes(s) ? 'rgba(184,147,90,0.15)' : 'transparent',
                        color: T.PAPER, cursor: 'pointer', letterSpacing: '-0.005em',
                      }}>
                        {s}{data.schools.includes(s) && <span style={{ color: T.GOLD, marginLeft: 6 }}>·</span>}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="A short letter" err={errors.goal} hint="Two or three sentences on what you're after, and why now.">
                  <Textarea value={data.goal} onChange={v => set('goal', v)} rows={5} />
                </Field>
              </Fieldset>
            )}
            {/* STEP 3 — send */}
            {step === 3 && (
              <Fieldset title="Before you send." sub="A last look at what reaches our pouch.">
                <Summary data={data} />
              </Fieldset>
            )}

            {/* Nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, paddingTop: 32, borderTop: `1px solid ${T.RULE_DARK}` }}>
              <button onClick={back} disabled={step === 0} style={{
                fontFamily: T.MONO, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
                background: 'transparent', border: 'none', color: T.PAPER, opacity: step === 0 ? 0.3 : 0.7,
                cursor: step === 0 ? 'default' : 'pointer', padding: '12px 0',
              }}>← Back</button>
              {step < steps.length - 1 ? (
                <button onClick={next} style={{
                  fontFamily: T.SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                  background: T.PAPER, color: T.INK, border: 'none', padding: '16px 32px', cursor: 'pointer',
                }}>Continue &nbsp;→</button>
              ) : (
                <button onClick={send} style={{
                  fontFamily: T.SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                  background: T.GOLD, color: T.INK, border: 'none', padding: '16px 32px', cursor: 'pointer',
                }}>Send the letter &nbsp;✍</button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // ─────────────── Form primitives ───────────────
  function Fieldset({ title, sub, children }) {
    return (
      <div>
        <div style={{ fontFamily: T.SERIF, fontSize: 36, fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ fontFamily: T.SERIF, fontSize: 16, fontStyle: 'italic', opacity: 0.7, marginTop: 10, marginBottom: 40 }}>
          {sub}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>{children}</div>
      </div>
    );
  }
  function Grid2({ children }) {
    return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>{children}</div>;
  }
  function Field({ label, err, hint, children }) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <label style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.65, color: T.PAPER }}>{label}</label>
          {err && <span style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.1em', color: T.GOLD }}>· {err}</span>}
        </div>
        {children}
        {hint && <div style={{ fontFamily: T.SERIF, fontSize: 13, fontStyle: 'italic', opacity: 0.55, marginTop: 8 }}>{hint}</div>}
      </div>
    );
  }
  function Input({ value, onChange, type = 'text', placeholder }) {
    return (
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
        width: '100%', background: 'transparent', border: 'none',
        borderBottom: `1px solid rgba(245,239,228,0.3)`,
        fontFamily: T.SERIF, fontSize: 22, color: T.PAPER,
        padding: '8px 0', outline: 'none',
        transition: 'border-color .15s',
      }}
        onFocus={e => e.currentTarget.style.borderColor = T.GOLD}
        onBlur={e => e.currentTarget.style.borderColor = 'rgba(245,239,228,0.3)'}
      />
    );
  }
  function Textarea({ value, onChange, rows = 4 }) {
    return (
      <textarea value={value} onChange={e => onChange(e.target.value)} rows={rows} style={{
        width: '100%', background: 'transparent', border: `1px solid rgba(245,239,228,0.3)`,
        fontFamily: T.SERIF, fontSize: 17, color: T.PAPER, lineHeight: 1.6,
        padding: 20, outline: 'none', resize: 'vertical', fontStyle: 'italic',
        transition: 'border-color .15s',
      }}
        onFocus={e => e.currentTarget.style.borderColor = T.GOLD}
        onBlur={e => e.currentTarget.style.borderColor = 'rgba(245,239,228,0.3)'}
      />
    );
  }
  function Summary({ data }) {
    const rows = [
      ['Name', `${data.firstName} ${data.lastName}`],
      ['Email', data.email],
      ['Telephone', data.phone || '—'],
      ['Track', data.track],
      ['Year', data.year],
      ['Tests', data.test || '—'],
      ['Institutions', data.schools.join(' · ') || '—'],
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', padding: '16px 0', borderBottom: `1px solid ${T.RULE_DARK}` }}>
            <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}>{k}</div>
            <div style={{ fontFamily: T.SERIF, fontSize: 18 }}>{v}</div>
          </div>
        ))}
        <div style={{ padding: '24px 0 0' }}>
          <div style={{ fontFamily: T.MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 14 }}>Letter</div>
          <div style={{ fontFamily: T.SERIF, fontSize: 18, fontStyle: 'italic', lineHeight: 1.65, opacity: 0.9, padding: 24, background: 'rgba(245,239,228,0.04)', border: `1px solid ${T.RULE_DARK}` }}>
            {data.goal || '—'}
          </div>
        </div>
      </div>
    );
  }
})();
