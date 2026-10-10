import { useEffect, useState } from 'react';
import '../styles/sidebar.css';

const ROLES = ['SDE Intern', 'Android Developer', 'ML Engineer', 'UI/UX Designer', 'Competitive Programmer'];

function useTypewriter(words) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting ? 55 : 105;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, charIdx + 1));
        if (charIdx + 1 === word.length) setTimeout(() => setDeleting(true), 1400);
        else setCharIdx(c => c + 1);
      } else {
        setText(word.substring(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setWordIdx(i => (i + 1) % words.length); setCharIdx(0); }
        else setCharIdx(c => c - 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, charIdx, wordIdx, words]);

  return text;
}

export default function Sidebar({ isOpen, onClose }) {
  const typed = useTypewriter(ROLES);

  return (
    <>
      <div className={`sidebar-overlay${isOpen ? '' : ' hidden'}`} onClick={onClose} />
      <aside className={`sidebar${isOpen ? ' open' : ''}`}>
        <div className="sb-avatar"><img src="/avatar.jpg" className="sb-avatar-img" alt="Harsha Kumari" /></div>
        <div className="sb-name">Harsha Kumari</div>
        <div className="sb-typewriter-wrap">
          <span className="typewriter-text">{typed}</span>
          <span className="cursor" />
        </div>
        <div className="sb-status"><span className="dot" /> Open to Opportunities</div>

        <div className="sb-desc">
          SDE Intern at Skypoint building scalable platforms. RIT Bengaluru student passionate about Android development, ML, and competitive programming.
        </div>

        <div className="sb-btns">
          <a href="#projects" className="btn btn-primary" onClick={onClose}><i className="fas fa-rocket" /> View Projects</a>
          <a href="#contact" className="btn btn-outline" onClick={onClose}><i className="fas fa-paper-plane" /> Get In Touch</a>
          <a href="/resume.pdf" download className="btn btn-resume"><i className="fas fa-download" /> Download Resume</a>
        </div>

        <div className="sb-divider" />

        <div className="sb-info">
          <div className="sb-info-item"><i className="fas fa-map-marker-alt" /><span>Bangalore, India</span></div>
          <div className="sb-info-item"><i className="fas fa-envelope" /><a href="mailto:harshakumari1125@gmail.com">harshakumari1125@gmail.com</a></div>
          <div className="sb-info-item"><i className="fas fa-phone" /><span>+91-7250465929</span></div>
          <div className="sb-info-item"><i className="fas fa-graduation-cap" /><span>B.Tech EEE · RIT Bengaluru</span></div>
        </div>

        <div className="sb-divider" />

        <div className="sb-socials">
          <a href="mailto:harshakumari1125@gmail.com" title="Email"><i className="fas fa-envelope" /></a>
          <a href="https://www.linkedin.com/in/harsha-kumari" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin" /></a>
          <a href="https://github.com/harsha2511" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github" /></a>
          <a href="https://leetcode.com/u/harsha2511/" target="_blank" rel="noreferrer" title="LeetCode"><img src="https://cdn.simpleicons.org/leetcode" className="si" alt="LeetCode" /></a>
          <a href="https://codeforces.com/profile/harsha2511" target="_blank" rel="noreferrer" title="Codeforces"><img src="https://cdn.simpleicons.org/codeforces" className="si" alt="Codeforces" /></a>
          <a href="https://www.codechef.com/users/harsha_2511" target="_blank" rel="noreferrer" title="CodeChef"><img src="https://cdn.simpleicons.org/codechef" className="si" alt="CodeChef" /></a>
          <a href="https://www.geeksforgeeks.org/user/harsha2511" target="_blank" rel="noreferrer" title="GFG"><img src="https://cdn.simpleicons.org/geeksforgeeks" className="si" alt="GFG" /></a>
          <a href="https://www.instagram.com/harsha__a_/" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram" /></a>
        </div>

        <div className="sb-divider" />

        <nav className="sb-nav">
          {[['#about','fa-user','About'],['#experience','fa-briefcase','Experience'],['#projects','fa-folder-open','Projects'],['#skills','fa-code','Skills'],['#achievements','fa-trophy','Achievements'],['#education','fa-graduation-cap','Education'],['#contact','fa-paper-plane','Contact']].map(([href, icon, label]) => (
            <a key={href} href={href} onClick={onClose}><i className={`fas ${icon}`} /> {label}</a>
          ))}
        </nav>
      </aside>
    </>
  );
}
