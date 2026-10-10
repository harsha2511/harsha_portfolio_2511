import '../styles/hero.css';

const STATS = [
  { num: '10+', label: 'Projects Built' },
  { num: '3', label: 'Internships' },
  { num: '8+', label: 'Awards & Honors' },
  { num: '1712', label: 'Peak Rating' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-photo-wrap">
          <div className="hero-photo" role="img" aria-label="Harsha Kumari" />
          <span className="hero-status-dot" title="Open to opportunities" />
        </div>

        <h1 className="hero-name">Harsha Kumari</h1>
        <p className="hero-title">Software Engineer · SDE Intern @ Skypoint</p>
        <p className="hero-tagline">
          Building scalable software, ML systems, and clean user experiences —
          backed by competitive programming and a strong engineering foundation.
        </p>

        <div className="hero-contact">
          <a href="mailto:harshakumari1125@gmail.com" className="hero-contact-item">
            <i className="fas fa-envelope" /> harshakumari1125@gmail.com
          </a>
          <a href="tel:+917250465929" className="hero-contact-item">
            <i className="fas fa-phone" /> +91 7250465929
          </a>
          <span className="hero-contact-item">
            <i className="fas fa-map-marker-alt" /> Bangalore, India
          </span>
        </div>

        <div className="hero-actions">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            <i className="fas fa-file-arrow-down" /> Download Resume
          </a>
          <a href="https://github.com/harsha2511" target="_blank" rel="noreferrer" className="brand-github btn btn-outline">
            <i className="fab fa-github" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/harsha-kumari" target="_blank" rel="noreferrer" className="brand-linkedin btn btn-outline">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
        </div>

        <div className="hero-stats">
          {STATS.map(s => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
