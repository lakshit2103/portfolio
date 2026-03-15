import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '../animations'
import styles from './Education.module.css'

const EDU = [
  { period: '2024 — 2027', status: 'Pursuing', active: true, degree: 'B.Sc. Data Science', school: 'Uttaranchal University', icon: 'fas fa-university', desc: 'Comprehensive data science programme covering ML, statistical analysis, AI applications & research methodologies.', metric: 'CGPA', score: '8.0 / 10' },
  { period: '2024', status: 'Class XII — CBSE', active: false, degree: 'Beverly Hill Shalini School', school: 'Science Stream', icon: 'fas fa-school', desc: 'Higher secondary education with strong performance in Mathematics and Sciences.', metric: 'Score', score: '80%' },
  { period: '2022', status: 'Class X — CBSE', active: false, degree: 'Beverly Hill Shalini School', school: 'Secondary Education', icon: 'fas fa-school', desc: 'Completed secondary education with distinction, building a strong foundation in core sciences.', metric: 'Score', score: '75%' },
]

export default function Education() {
  return (
    <section className={`${styles.edu} section-row`} id="education">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className="section-label">BACKGROUND</div>
          <h2 className={styles.heading}>Education</h2>
        </motion.div>
        <motion.div
          className={styles.timeline}
          initial="hidden" whileInView="visible"
          viewport={VIEWPORT} variants={staggerContainer}
        >
          {EDU.map((e, i) => (
            <motion.div key={i} className={`${styles.entry} ${e.active ? styles.active : ''}`} variants={staggerItem}>
              <div className={styles.yearCol}>
                <span className={styles.year}>{e.period}</span>
                <div className={styles.dotLine}>
                  <div className={styles.dot} />
                  {i < EDU.length - 1 && <div className={styles.line} />}
                </div>
              </div>
              <motion.div className={styles.card} whileHover={{ x: 4, transition: { duration: 0.15 } }}>
                <span className={styles.status}>{e.status}</span>
                <h3>{e.degree}</h3>
                <div className={styles.school}><i className={e.icon} /> {e.school}</div>
                <p>{e.desc}</p>
                <div className={styles.metric}>{e.metric} <strong>{e.score}</strong></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
