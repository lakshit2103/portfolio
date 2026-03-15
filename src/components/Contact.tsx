import { motion } from 'framer-motion'
import { fadeUp, VIEWPORT } from '../animations'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={`${styles.contact} section-row`} id="contact">
      <div className="container">
        <motion.div
          className={styles.inner}
          initial="hidden" whileInView="visible"
          viewport={VIEWPORT} variants={fadeUp}
        >
          <div className="section-label">GET IN TOUCH</div>
          <h2 className={styles.heading}>
            Looking for new<br /><span className="grad">Opportunities</span>
          </h2>
          <p className={styles.sub}>
            Whether you have an exciting AI project, a collaboration idea, or just want to talk about intelligent systems — my inbox is always open.
          </p>
          <div className={styles.actions}>
            <motion.a
              href="mailto:lakshitsehdev21@gmail.com"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fas fa-envelope" /> Say Hello
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lakshit-sehdev/"
              target="_blank" rel="noopener"
              className="btn btn-outline btn-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/lakshit2103"
              target="_blank" rel="noopener"
              className="btn btn-outline btn-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fab fa-github" /> GitHub
            </motion.a>
          </div>
          <div className={styles.contactInfo}>
            <a href="tel:+918595574267" className={styles.infoItem}>
              <i className="fas fa-phone" /> +91 8595574267
            </a>
            <a href="mailto:lakshitsehdev21@gmail.com" className={styles.infoItem}>
              <i className="fas fa-envelope" /> lakshitsehdev21@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
