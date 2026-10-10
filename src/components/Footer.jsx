import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">Harsha Kumari</div>
        <div className="footer-socials">
          <a className="brand-github" href="https://github.com/harsha2511" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
          <a className="brand-linkedin" href="https://www.linkedin.com/in/harsha-kumari" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
          <a className="brand-email" href="mailto:harshakumari1125@gmail.com" aria-label="Email"><i className="fas fa-envelope" /></a>
          <a className="brand-codeforces" href="https://codeforces.com/profile/harsha2511" target="_blank" rel="noreferrer" aria-label="Codeforces"><i className="fas fa-code" /></a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Harsha Kumari. All rights reserved.</div>
      </div>
    </footer>
  );
}
