import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '../animations'
import styles from './Certifications.module.css'

const CERTS = [
  { num: '01', issuer: 'Oracle University', title: 'OCI Generative AI Professional', desc: 'Building, deploying, and optimizing generative AI on Oracle Cloud — LLMs, prompt engineering, embeddings, RAG-based solutions.', badge: 'Professional' },
  { num: '02', issuer: 'Oracle University', title: 'OCI AI Foundation Associate', desc: 'AI/ML model lifecycle, cloud-based deployment, and Oracle Cloud AI services for scalable machine learning workflows.', badge: 'Associate' },
  { num: '03', issuer: 'Forage', title: 'Data Science Job Simulation', desc: 'Real-world data analysis, ML model development, and business-driven insights — end-to-end practical data science skills.', badge: 'Verified' },
  { num: '04', issuer: 'Udemy', title: 'Generative AI Course', desc: 'Comprehensive GenAI course covering LLMs, prompt engineering strategies, and building production AI-driven applications.', badge: 'Completed' },
]

export default function Certifications() {
  return (
    <section className={`${styles.certs} section-row`} id="certifications">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className="section-label">CREDENTIALS</div>
          <h2 className={styles.heading}>Certifications</h2>
        </motion.div>
        <motion.div
          className={styles.list}
          initial="hidden" whileInView="visible"
          viewport={VIEWPORT} variants={staggerContainer}
        >
          {CERTS.map(c => (
            <motion.div key={c.num} className={styles.row} variants={staggerItem}>
              <div className={styles.num}>{c.num}</div>
              <div className={styles.info}>
                <span className={styles.issuer}>{c.issuer}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <motion.span className={styles.badge} whileHover={{ scale: 1.06 }}>{c.badge}</motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
