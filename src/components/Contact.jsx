import '../styles/contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact-heading reveal">Get In <span>Touch</span></h2>
        <p className="contact-subtitle reveal">
          Looking to collaborate or discuss opportunities? I'd love to hear from you!
        </p>

        <div className="contact-body">
          <div className="contact-left reveal-left">
            <h3>Let's Connect</h3>
            <p>
              I'm always excited to work on new projects and connect with passionate people.
              Whether it's about tech, Android dev, ML, or just a friendly chat — feel free to reach out!
            </p>
            <div className="contact-info-cards">
              <a href="mailto:harshakumari1125@gmail.com" className="contact-info-card">
                <div className="cic-icon purple"><i className="fas fa-envelope" /></div>
                <div>
                  <div className="cic-label">Email</div>
                  <div className="cic-sub">Send me an email</div>
                  <div className="cic-value">harshakumari1125@gmail.com</div>
                </div>
              </a>
              <a href="tel:+917250465929" className="contact-info-card">
                <div className="cic-icon green"><i className="fas fa-phone" /></div>
                <div>
                  <div className="cic-label">Phone</div>
                  <div className="cic-sub">Give me a call</div>
                  <div className="cic-value">+91 7250465929</div>
                </div>
              </a>
              <a href="https://wa.me/917250465929" target="_blank" rel="noreferrer" className="contact-info-card">
                <div className="cic-icon cyan"><i className="fab fa-whatsapp" /></div>
                <div>
                  <div className="cic-label">WhatsApp</div>
                  <div className="cic-sub">Message on WhatsApp</div>
                  <div className="cic-value">Let's Chat</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-right reveal-right">
            <div className="contact-panel">
              <div className="panel-header">
                <div className="panel-icon"><i className="fas fa-share-alt" /></div>
                <div className="panel-title">Follow Me</div>
              </div>
              <p className="panel-desc">Connect on social platforms for updates and behind-the-scenes content.</p>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/harsha-kumari" target="_blank" rel="noreferrer" className="social-item"><i className="fab fa-linkedin" /> LinkedIn</a>
                <a href="https://github.com/harsha2511kumari" target="_blank" rel="noreferrer" className="social-item"><i className="fab fa-github" /> GitHub</a>
                <a href="https://leetcode.com/u/harsha2511/" target="_blank" rel="noreferrer" className="social-item"><img src="https://cdn.simpleicons.org/leetcode" className="si" alt="" /> LeetCode</a>
                <a href="https://codeforces.com/" target="_blank" rel="noreferrer" className="social-item"><img src="https://cdn.simpleicons.org/codeforces" className="si" alt="" /> Codeforces</a>
                <a href="https://www.codechef.com/users/harsha_2511" target="_blank" rel="noreferrer" className="social-item"><img src="https://cdn.simpleicons.org/codechef" className="si" alt="" /> CodeChef</a>
                <a href="https://www.geeksforgeeks.org/user/harsha2511" target="_blank" rel="noreferrer" className="social-item"><img src="https://cdn.simpleicons.org/geeksforgeeks" className="si" alt="" /> GFG</a>
                <a href="https://www.instagram.com/harsha__a_/" target="_blank" rel="noreferrer" className="social-item"><i className="fab fa-instagram" /> Instagram</a>
              </div>
            </div>

            <div className="contact-panel">
              <div className="avail-header">
                <span className="avail-dot" />
                <span className="avail-title">Open to Opportunities</span>
              </div>
              <p className="avail-desc">I'm currently open to full-time roles, internships, and exciting projects. Let's build something great together!</p>
            </div>

            <div className="contact-panel">
              <div className="panel-header">
                <span className="qr-emoji">⚡</span>
                <div className="panel-title">Quick Response</div>
              </div>
              <p className="avail-desc">I check my emails regularly. For urgent matters, WhatsApp is the fastest way to reach me!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
