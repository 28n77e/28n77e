// About — practice founding story, as provided by the client.
// "28E 77N" in the original text normalized to "28N 77E" to match the
// brand order used everywhere else on the site (logo, nav, footer, title).

window.About = function About() {
  const T = window.THE_TOKENS;

  return (
    <section id="about" style={{ background: T.PAPER, padding: '140px 72px', color: T.INK }}>
      <window.Eyebrow>§ · About</window.Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 100, marginTop: 28, alignItems: 'flex-start' }}>
        <h1 style={{ fontFamily: T.SERIF, fontSize: 72, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, margin: 0 }}>
          Clear guidance,<br />
          not <span style={{ fontStyle: 'italic' }}>guesswork</span><span style={{ color: T.GOLD }}>.</span>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <p style={{ fontFamily: T.SERIF, fontSize: 20, fontStyle: 'italic', lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
            28N 77E – The Higher Education Consultants is an independent education consulting firm dedicated to helping students confidently navigate their academic journey at the school, undergraduate, and postgraduate levels — with far less confusion, stress, and late-night <span style={{ fontStyle: 'normal', color: T.OXBLOOD }}>&ldquo;What do I even do next?&rdquo;</span> moments.
          </p>
          <p style={{ fontFamily: T.SERIF, fontSize: 20, fontStyle: 'italic', lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
            Our founders saw how differences in global education systems, application processes, and cultural expectations often left students overwhelmed by information, conflicting advice, and enough acronyms to fill an entire dictionary. That inspired them to create 28N 77E — a place where students and families could find clear, reliable, and personalized guidance for global education opportunities. The name 28N 77E refers to the coordinates of New Delhi — where our founding team grew up, studied, and dreamed of universities on the other side of the world.
          </p>
          <p style={{ fontFamily: T.SERIF, fontSize: 20, fontStyle: 'italic', lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
            With a holistic and student-focused approach, we help applicants make informed choices, discover the right-fit institutions, and successfully navigate complex admissions processes with clarity, confidence, and maybe even a little excitement along the way. Because planning your future should feel inspiring — not like solving a <span style={{ fontStyle: 'normal', color: T.GOLD }}>500-piece puzzle</span> without the picture on the box.
          </p>
        </div>
      </div>
    </section>
  );
};
