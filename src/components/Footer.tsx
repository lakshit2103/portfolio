import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoBox}>LS</span>
            <span>Lakshit Sehdev</span>
          </div>
          <p className={styles.tagline}>AI/ML Engineer — Building intelligent systems that scale.</p>
        </div>
        <div className={styles.socials}>
          <a href="mailto:lakshitsehdev21@gmail.com" title="Email" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
          <a href="https://github.com/lakshit2103" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/lakshit-sehdev/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a href="tel:+918595574267" title="Phone" aria-label="Phone">
            <i className="fas fa-phone" />
          </a>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© 2025 Lakshit Sehdev. All rights reserved.</p>
        <p>AI/ML Engineer · lakshitsehdev21@gmail.com</p>
      </div>
    </footer>
  )
}
