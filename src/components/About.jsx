import { useEffect, useRef } from 'react';
import '../styles/about.css';

function StatCounter({ target, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || el.dataset.counted) return;
      el.dataset.counted = true;
      let count = 0;
      const step = Math.ceil(target / 60);
      const iv = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count;
        if (count >= target) clearInterval(iv);
      }, 22);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className="stat reveal">
      <div className="stat-num" ref={ref}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal-left">
            <p className="section-label">// about me</p>
            <h2 className="section-title">Who I Am</h2>
            <div className="section-line" />
            <div className="about-text">
              <p>I'm <span>Harsha Kumari</span>, an SDE Intern at <span>Skypoint</span> working on Sky Command, SkyMDM and SkyCare in <span>Bangalore, India</span>.</p>
              <p>I'm pursuing a B.Tech in <span>Electrical and Electronics Engineering</span> from Ramaiah Institute of Technology, Bengaluru (2022–2026). I've interned across <span>software development, UI/UX design,</span> and <span>machine learning</span> — giving me a well-rounded engineering perspective.</p>
              <p>Outside of work, I'm a competitive programmer — <span>Specialist on Codeforces</span> (max 1442), <span>3★ on CodeChef</span> (max 1712), and <span>Rank 10 in college on GFG</span>.</p>
            </div>
            <div className="about-info">
              <div className="info-item"><div className="label">Location</div><div className="value">Bangalore, India</div></div>
              <div className="info-item"><div className="label">Status</div><div className="value" style={{ color:'#22c55e' }}>● Open to Opportunities</div></div>
              <div className="info-item"><div className="label">Email</div><div className="value" style={{ fontSize:'0.73rem' }}>harshakumari1125@gmail.com</div></div>
              <div className="info-item"><div className="label">College</div><div className="value">RIT Bengaluru (2022–2026)</div></div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="edu-card">
              <div className="institute">Ramaiah Institute of Technology, Bengaluru</div>
              <div className="degree">B.Tech — Electrical and Electronics Engineering</div>
              <div className="date">📅 Nov 2022 – May 2026 &nbsp;|&nbsp; 📍 Bengaluru, India</div>
            </div>
            <div className="stats">
              <StatCounter target={1712} label="CodeChef Max Rating" />
              <StatCounter target={1442} label="Codeforces Rating" />
              <StatCounter target={3} label="Internships" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
