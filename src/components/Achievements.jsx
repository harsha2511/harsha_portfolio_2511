import '../styles/achievements.css';

const ACHIEVEMENTS = [
  { color: 'gold',   icon: 'fa-trophy',      text: <><strong>Ranked 1st</strong> — Junior Category, CodeRush Coding Challenge</>, platform: 'AlgoUniversity', href: 'https://drive.google.com/file/d/1Qn1WWM1abcNbAq6dBpJvlltLVvvk2ABC/view?usp=sharing' },
  { color: 'gold',   icon: 'fa-medal',       text: <><strong>Rank 4th</strong> in Algotsav among <strong>166 teams</strong></>, platform: 'NIT Rourkela', href: 'https://drive.google.com/file/d/1GLN9NZ2TYCrg5JvH8vGIRghEgER-MQD1/view?usp=sharing' },
  { color: 'blue',   icon: 'fa-rocket',      text: <><strong>Rank 9th</strong> in BMSCE Hackathon among <strong>90+ teams</strong></>, platform: 'BMSCE Hackathon', href: 'https://drive.google.com/file/d/1V2i6YMnf4P-48XUMcErmAswP7K7sEaRq/view?usp=sharing' },
  { color: 'purple', icon: 'fa-globe',       text: <><strong>Global Rank 1498</strong> — Google Kickstart Farewell Round</>, platform: 'Google Kickstart', href: null },
  { color: 'cyan',   icon: 'fa-fire',        text: <><strong>Hall of Fame</strong> — solved 3 problems in Graph Camp Contest</>, platform: 'Competitive Programming', href: 'https://drive.google.com/file/d/1TIjGjevCcQgyPJBcA2cauzJ3yLkEGJkc/view?usp=sharing' },
  { color: 'green',  icon: 'fa-chart-line',  text: <><strong>GFG Rank 10</strong> in college · CodeChef <strong>3★ (max 1712)</strong> · Codeforces <strong>Specialist (max 1442)</strong></>, platform: 'Competitive Programming', href: null },
  { color: 'amber',  icon: 'fa-certificate', text: <><strong>MathWorks Certified</strong> — Image Processing & Machine Learning</>, platform: 'MathWorks', links: [
    { label: 'Image Processing', href: 'https://drive.google.com/file/d/1Ee0Aclt3wNzbJpqcldY0k4eXtnTvV3kP/view?usp=sharing' },
    { label: 'Machine Learning', href: 'https://drive.google.com/file/d/1uZDqNG_6uxOLN_Lm9CEKcBAjJAsaJ9we/view?usp=sharing' },
  ] },
  { color: 'blue',   icon: 'fa-database',    text: <><strong>Data Analytics</strong> using Matlab — completed certification</>, platform: 'MathWorks', href: null },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <p className="section-label reveal">// achievements</p>
        <h2 className="section-title reveal">Highlights & Awards</h2>
        <div className="section-line reveal" />
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => {
            const Tag = a.href ? 'a' : 'div';
            const props = a.href ? { href: a.href, target: '_blank', rel: 'noreferrer' } : {};
            return (
              <Tag key={i} className={`achievement-card reveal ${a.color}`} {...props}>
                <div className="ach-icon"><i className={`fas ${a.icon}`} /></div>
                <div className="ach-body">
                  <div className="ach-text">{a.text}</div>
                  <div className="ach-platform">{a.platform}</div>
                  {a.links && (
                    <div className="ach-touch-links">
                      {a.links.map(l => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                          {l.label} <i className="fas fa-external-link-alt" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {a.href && (
                  <div className="ach-hover-overlay">
                    <span className="ach-view-btn"><i className="fas fa-external-link-alt" /> View Certificate</span>
                  </div>
                )}
                {a.links && (
                  <div className="ach-hover-overlay">
                    {a.links.map(l => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="ach-view-btn">
                        <i className="fas fa-external-link-alt" /> {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
