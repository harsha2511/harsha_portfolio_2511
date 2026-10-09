import '../styles/profile-sidebar.css';

const NAV = [
  ['#about', 'fa-user', 'About'],
  ['#experience', 'fa-briefcase', 'Experience'],
  ['#projects', 'fa-folder-open', 'Projects'],
  ['#skills', 'fa-code', 'Skills'],
  ['#achievements', 'fa-trophy', 'Awards'],
  ['#education', 'fa-graduation-cap', 'Education'],
  ['#contact', 'fa-paper-plane', 'Contact'],
];

export default function ProfileSidebar({ visible }) {
  return (
    <aside className={`profile-sidebar${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <div className="ps-avatar-wrap">
        <div className="ps-avatar" role="img" aria-label="Harsha Kumari" />
        <span className="ps-status-dot" />
      </div>
      <div className="ps-name">Harsha Kumari</div>
      <div className="ps-title">Software Engineer</div>
      <div className="ps-status"><span className="dot" /> Open to Opportunities</div>

      <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary ps-resume">
        <i className="fas fa-file-arrow-down" /> Resume
      </a>

      <div className="ps-divider" />

      <div className="ps-info">
        <div className="ps-info-item"><i className="fas fa-map-marker-alt" /><span>Bangalore, India</span></div>
        <a className="ps-info-item" href="mailto:harshakumari1125@gmail.com"><i className="fas fa-envelope" /><span>harshakumari1125@gmail.com</span></a>
        <a className="ps-info-item" href="tel:+917250465929"><i className="fas fa-phone" /><span>+91 7250465929</span></a>
        <div className="ps-info-item"><i className="fas fa-graduation-cap" /><span>B.Tech EEE · RIT Bengaluru</span></div>
      </div>

      <div className="ps-divider" />

      <div className="ps-socials">
        <a href="https://github.com/harsha2511kumari" target="_blank" rel="noreferrer" aria-label="GitHub" data-tip="GitHub"><i className="fab fa-github" /></a>
        <a href="https://www.linkedin.com/in/harsha-kumari" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tip="LinkedIn"><i className="fab fa-linkedin" /></a>
        <a href="https://leetcode.com/u/harsha2511/" target="_blank" rel="noreferrer" aria-label="LeetCode" data-tip="LeetCode"><img src="https://cdn.simpleicons.org/leetcode" className="si" alt="LeetCode" /></a>
        <a href="https://www.geeksforgeeks.org/user/harsha2511" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks" data-tip="GeeksforGeeks"><img src="https://cdn.simpleicons.org/geeksforgeeks" className="si" alt="GeeksforGeeks" /></a>
        <a href="https://www.codechef.com/users/harsha_2511" target="_blank" rel="noreferrer" aria-label="CodeChef" data-tip="CodeChef"><img src="https://cdn.simpleicons.org/codechef" className="si" alt="CodeChef" /></a>
        <a href="https://www.instagram.com/harsha__a_/" target="_blank" rel="noreferrer" aria-label="Instagram" data-tip="Instagram"><i className="fab fa-instagram" /></a>
      </div>

      <div className="ps-divider" />

      <nav className="ps-nav">
        {NAV.map(([href, icon, label]) => (
          <a key={href} href={href}><i className={`fas ${icon}`} /> {label}</a>
        ))}
      </nav>
    </aside>
  );
}
