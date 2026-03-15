import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerItem, VIEWPORT } from '../animations'
import styles from './About.module.css'

const SPECS = [
  'Large Language Models', 'Retrieval-Augmented Generation',
  'Fine-Tuning (PEFT / LoRA)', 'Multi-Agent Systems',
  'NLP & Transformers', 'Diffusion Models',
  'MLOps & Deployment', 'Vector Databases',
]

export default function About() {
  return (
    <section className={`${styles.about} section-row`} id="about">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className="section-label">ABOUT ME</div>
          <h2 className={styles.heading}>Who I Am</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* LEFT */}
          <motion.div
            className={styles.left}
            initial="hidden" whileInView="visible"
            viewport={VIEWPORT} variants={slideLeft}
          >
            <div className={styles.initialsWrap}>
              <div className={styles.initials}>LS</div>
              <div className={styles.initialsGlow} />
            </div>
            <div className={styles.tags}>
              {['AI/ML Engineer', 'Python Developer', 'GenAI Builder', 'Open to Work'].map(t => (
                <motion.span key={t} whileHover={{ scale: 1.05 }}>{t}</motion.span>
              ))}
            </div>
            <div className={styles.links}>
              {[
                { href: 'https://github.com/lakshit2103', icon: 'fab fa-github', label: 'github.com/lakshit2103', external: true },
                { href: 'https://www.linkedin.com/in/lakshit-sehdev/', icon: 'fab fa-linkedin', label: 'linkedin.com/in/lakshit-sehdev', external: true },
                { href: 'mailto:lakshitsehdev21@gmail.com', icon: 'fas fa-envelope', label: 'lakshitsehdev21@gmail.com' },
                { href: 'tel:+918595574267', icon: 'fas fa-phone', label: '+91 8595574267' },
              ].map(l => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener' : undefined}
                  className={styles.linkItem}
                  whileHover={{ x: 5, transition: { duration: 0.15 } }}
                >
                  <i className={l.icon} />
                  <span>{l.label}</span>
                  {l.external && <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.62rem', color: '#4b5563' }} />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className={styles.right}
            initial="hidden" whileInView="visible"
            viewport={VIEWPORT} variants={slideRight}
          >
            <p className={styles.lead}>
              Dynamic AI/ML Engineer currently pursuing <strong>B.Sc. Data Science</strong> at Uttaranchal University, with a sharp focus on building production-ready intelligent systems.
            </p>
            <p>
              My work spans the full AI stack — from training and fine-tuning LLMs with PEFT/LoRA, building RAG-powered assistants, to orchestrating multi-agent workflows with LangGraph and deploying production REST APIs with FastAPI & Docker.
            </p>
            <p>
              I believe great AI isn't just about accuracy — it's about reliability, scalability, and genuinely solving human problems. Every project I build is designed to delight users and deliver measurable outcomes.
            </p>
            <div className={styles.specs}>
              <div className={styles.specsLabel}>Core Specializations</div>
              <motion.div
                className={styles.specTags}
                initial="hidden" whileInView="visible"
                viewport={VIEWPORT} variants={staggerContainer}
              >
                {SPECS.map(s => (
                  <motion.span key={s} variants={staggerItem} whileHover={{ scale: 1.05 }}>{s}</motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
