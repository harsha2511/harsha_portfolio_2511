import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import '../styles/projects.css';

const PROJECTS = [
  {
    icon: '🩺',
    name: 'MediScribe — AI Medical Scribe',
    year: '2026',
    status: 'In progress',
    desc: 'AI scribe that listens to a doctor–patient visit, drafts a SOAP note, codes it to ICD-10/RxNorm/LOINC and writes it into the EHR.',
    shortTech: ['React', 'TypeScript', 'FastAPI', 'Gemini', 'FHIR R4'],
    comingSoon: true,
  },
  {
    icon: '💬',
    name: 'Converse AI — Chat Assistant',
    year: '2026',
    status: 'In progress',
    desc: 'ChatGPT-style AI assistant with streaming answers, projects, and video/audio summaries — no accounts and nothing stored.',
    shortTech: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini'],
    comingSoon: true,
  },
  {
    icon: '🔬',
    name: 'Automated Nucleus Segmentation',
    year: '2024',
    desc: 'Deep-learning model for nucleus segmentation in histopathology using an enhanced UNet (SE blocks + ASPP).',
    shortTech: ['Python', 'PyTorch', 'UNet'],
    tech: ['Python', 'PyTorch', 'Deep Learning', 'UNet', 'Squeeze-and-Excitation', 'ASPP', 'NumPy'],
    points: [
      'Engineered a deep-learning model for automated nucleus segmentation using an enhanced UNet architecture with Squeeze-and-Excitation (SE) blocks and ASPP.',
      'Implemented advanced loss functions — Jaccard Distance, Dice Loss, and Focal Loss — to mitigate class imbalance in histopathological datasets.',
      'Achieved strong metrics: F1 Score 0.7613, Accuracy 90.80%, and Dice Coefficient 0.6357.',
      'Developed during a research internship at NIT Rourkela.',
    ],
    href: 'https://github.com/harsha2511',
  },
  {
    icon: '🎮',
    name: 'Tic Tac Toe AI',
    year: '2024–25',
    desc: 'Android Tic Tac Toe with unbeatable AI using Minimax + Alpha-Beta Pruning.',
    shortTech: ['Kotlin', 'XML', 'Minimax'],
    tech: ['Kotlin', 'XML', 'Android Studio', 'Minimax Algorithm', 'Alpha-Beta Pruning'],
    points: [
      'Conceptualized and developed a fully functional Tic Tac Toe game for Android using Kotlin and XML layouts.',
      'Implemented the Minimax Algorithm with Alpha-Beta Pruning for optimal AI decision-making — the AI is provably unbeatable in every scenario.',
      'Enhanced AI decision-making capabilities resulting in smarter, faster gameplay with a 70% improvement in game performance and efficiency.',
      'Designed a clean, interactive UI with smooth game state transitions and real-time board rendering.',
    ],
    href: 'https://github.com/harsha2511/Tic-Tac-Toe',
  },
  {
    icon: '🍔',
    name: 'Delicious Point',
    year: '2023–24',
    desc: 'Android food delivery app with real-time Firebase database and order tracking.',
    shortTech: ['Kotlin', 'Firebase', 'XML'],
    tech: ['Kotlin', 'Firebase Realtime Database', 'XML', 'Android Studio'],
    points: [
      'Designed and implemented a user-friendly food delivery application for Android with a polished, intuitive UI.',
      'Developed key features including menu browsing, cart management, order placement, and streamlined real-time order tracking.',
      'Integrated Firebase Realtime Database for live menu and order status updates across all sessions.',
      'Built clean navigation flows between restaurant listings, cart, and order confirmation screens.',
    ],
    href: 'https://github.com/harsha2511/Delicious-Point',
  },
  {
    icon: '📚',
    name: 'RITNotebook',
    year: '2023',
    desc: 'Academic resource website for RIT students with notes and PYQs across all 4 years.',
    shortTech: ['HTML', 'CSS', 'JavaScript'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Animation', 'Google Drive'],
    points: [
      'Developed a student-centric academic resource website tailored for Ramaiah Institute of Technology.',
      'Contains organized notes and Previous Year Questions (PYQs) covering Years 1–4 across all major subjects.',
      'Integrated Google Drive links for easy access to downloadable study materials and resources.',
      'Implemented 30-day web analytics to track usage patterns and identify the most accessed content.',
      'Built with responsive Bootstrap design and subtle animations for a clean, engaging experience.',
    ],
    href: 'https://github.com/harsha2511/RIT-Notebook',
  },
  {
    icon: '📖',
    name: 'Library Management System',
    year: '2024',
    desc: 'Full-stack library platform for inventory, members, and loan tracking with both a CLI and a web dashboard.',
    shortTech: ['Python', 'Flask', 'SQLite'],
    tech: ['Python', 'Flask', 'SQLite', 'Bootstrap 5', 'Jinja2', 'HTML'],
    points: [
      'Developed a comprehensive system handling book inventory, member registration, and loan tracking.',
      'Implemented a loan engine with automatic 14-day periods and overdue penalty calculation (Rs 2/day).',
      'Shipped both a command-line interface and a Flask + Bootstrap web dashboard backed by SQLite.',
    ],
    href: 'https://github.com/harsha2511/Library-Management-system',
  },
  {
    icon: '🍿',
    name: 'Movie Recommendation',
    year: '2024',
    desc: 'A movie recommendation project that suggests films based on user preferences.',
    shortTech: ['Python', 'ML', 'Pandas'],
    tech: ['Python', 'Machine Learning', 'Pandas'],
    points: [
      'A movie recommendation project that suggests films tailored to a user’s preferences.',
    ],
    href: 'https://github.com/harsha2511/Movie-recommendation',
  },
  {
    icon: '🎬',
    name: 'Recommendation System',
    year: '2024',
    desc: 'Content-based recommender that suggests 5 similar movies with live posters from the TMDB API.',
    shortTech: ['Python', 'Streamlit', 'Pandas'],
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'TMDB API', 'Pickle'],
    points: [
      'Built a content-based recommendation engine returning the top 5 most similar movies for any selected title.',
      'Used precomputed cosine-similarity matrices serialized with pickle for instant lookups — no heavy runtime computation.',
      'Integrated the TMDB API to dynamically fetch and display movie posters in a clean Streamlit grid UI.',
    ],
    href: 'https://github.com/harsha2511/Recommendationsystem',
  },
  {
    icon: '💻',
    name: 'RIT Code',
    year: '2023–24',
    desc: 'A front-end web project built from scratch with vanilla HTML, CSS, and JavaScript.',
    shortTech: ['HTML', 'CSS', 'JavaScript'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    points: [
      'Built a responsive front-end web project using only vanilla HTML, CSS, and JavaScript.',
      'Structured with a clean separation of markup, styling, and interactive scripts.',
    ],
    href: 'https://github.com/harsha2511/code',
  },
  {
    icon: '🚗',
    name: 'Motors — Dealership Platform',
    year: '2024',
    desc: 'Modern, responsive car-dealership management web app with a clean component-based architecture.',
    shortTech: ['Vue', 'TypeScript', 'Vite'],
    tech: ['Vue.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest', 'ESLint'],
    points: [
      'Developed a responsive automotive dealership management interface (96%+ TypeScript).',
      'Architected reusable, modular Vue components for a scalable and maintainable UI.',
      'Set up a professional toolchain with Vite, Tailwind CSS, Vitest testing, and ESLint.',
    ],
    href: 'https://github.com/harsha2511/Motors',
  },
  {
    icon: '💰',
    name: 'WalletWiseWeb',
    year: '2024',
    desc: 'Personal finance web app for expense tracking, budgeting & spending insights — 🏆 Rank 9th at BMSCE Hackathon.',
    shortTech: ['Node.js', 'Express', 'MongoDB'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    points: [
      'Secured Rank 9th among 90+ teams at the BMSCE Hackathon with this financial management platform.',
      'Built expense tracking with interactive charts to help users visualize daily spending at a glance.',
      'Added category-wise budget management with limits and progress monitoring.',
      'Generated spending-pattern insights and money-saving suggestions, backed by a Node/Express + MongoDB API.',
    ],
    href: 'https://github.com/harsha2511/WalletWiseWeb',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const close = () => setSelected(null);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, [selected]);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">// projects</p>
        <h2 className="section-title reveal">Things I've Built</h2>
        <div className="section-line reveal" />
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="project-card reveal" key={i} onClick={() => setSelected(p)}>
              <div className="proj-top">
                <span className="project-icon">{p.icon}</span>
                <span className="proj-year-txt">
                  {p.status && <span className="proj-status">{p.status}</span>}
                  {p.year}
                </span>
              </div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.shortTech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="proj-hover-overlay">
                <button className="proj-view-btn" onClick={() => setSelected(p)}>
                  <i className="fas fa-eye" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && createPortal(
        <div className="proj-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>
            <button className="proj-modal-close" onClick={() => setSelected(null)}>
              <i className="fas fa-times" />
            </button>
            <div className="proj-modal-header">
              <span className="proj-modal-icon">{selected.icon}</span>
              <div className="proj-modal-title">
                <div className="proj-modal-name">{selected.name}</div>
                <div className="proj-modal-year">
                  {selected.year}
                  {selected.status && <span className="proj-status">{selected.status}</span>}
                </div>
              </div>
              {selected.href && (
                <a href={selected.href} target="_blank" rel="noreferrer" className="proj-modal-gh">
                  <i className="fab fa-github" /> GitHub
                </a>
              )}
            </div>
            {selected.comingSoon ? (
              <div className="proj-coming-soon">
                <div className="cs-orb">
                  <span className="cs-ring" />
                  <span className="cs-ring cs-ring-2" />
                  <i className="fas fa-rocket" />
                </div>
                <div className="cs-title">Coming Soon</div>
                <p className="cs-text">
                  This project is being built right now. A full breakdown of the
                  architecture, features and a live demo is on its way.
                </p>
                <div className="cs-progress">
                  <div className="cs-progress-label">
                    <span><span className="cs-dot" /> In development</span>
                  </div>
                  <div className="cs-bar"><span /></div>
                </div>
                <div className="cs-tech">
                  <span className="cs-tech-label">Built with</span>
                  {selected.shortTech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>
            ) : (
              <>
                <div className="proj-modal-tech">
                  {selected.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <ul className="proj-modal-points">
                  {selected.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
