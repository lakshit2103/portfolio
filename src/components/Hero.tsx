import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerItem, scaleIn, VIEWPORT } from '../animations'
import styles from './Hero.module.css'

const ROLES = ['AI/ML', 'GenAI', 'LLM', 'RAG']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [fade,    setFade]    = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setFade(true)
      }, 280)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="home">
      {/* Ambient glow blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.left}>
        <motion.div
          initial="hidden" animate="visible"
          variants={fadeUp} custom={0}
          className={styles.greeting}
        >
          Hey!!! 👋
        </motion.div>

        <motion.h1
          className={styles.name}
          initial="hidden" animate="visible"
          variants={fadeUp} custom={0.08}
        >
          I am Lakshit
        </motion.h1>

        <motion.div
          className={styles.roleBlock}
          initial="hidden" animate="visible"
          variants={fadeUp} custom={0.16}
        >
          <span className={`${styles.roleWord} ${fade ? styles.roleIn : styles.roleOut}`}>
            {ROLES[roleIdx]}
          </span>
          <span className={`${styles.roleWord} grad`}>Engineer</span>
        </motion.div>

        <motion.p
          className={styles.desc}
          initial="hidden" animate="visible"
          variants={fadeUp} custom={0.24}
        >
          Building intelligent, scalable, production-ready AI systems — from LLM fine-tuning and RAG pipelines to multi-agent frameworks and GenAI applications.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial="hidden" animate="visible"
          variants={fadeUp} custom={0.32}
        >
          <a href="#projects" className="btn btn-primary" onClick={scrollTo('#projects')}>
            View My Work &nbsp;<i className="fas fa-arrow-right" />
          </a>
          <a href="https://github.com/lakshit2103" target="_blank" rel="noopener" className="btn btn-outline">
            <i className="fab fa-github" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/lakshit-sehdev/" target="_blank" rel="noopener" className="btn btn-outline">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
        </motion.div>
      </div>

      <div className={styles.right}>
        <motion.div
          className={styles.terminal}
          initial="hidden" animate="visible"
          variants={scaleIn} custom={0.2}
        >
          <div className={styles.termBar}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
            <span className={styles.termTitle}>lakshit@ai ~ zsh</span>
          </div>
          <div className={styles.termBody}>
            <TypedLine delay={400}  prompt="$" cmd="whoami" />
            <OutLine    delay={700}  text="Lakshit Sehdev — AI/ML Engineer" />
            <TypedLine  delay={1000} prompt="$" cmd="cat specialization.txt" />
            <OutLine    delay={1300} text="LLMs · RAG · Fine-Tuning · GenAI" />
            <OutLine    delay={1450} text="LangChain · LangGraph · PyTorch" />
            <OutLine    delay={1600} text="Hugging Face · FastAPI · Docker" />
            <TypedLine  delay={1900} prompt="$" cmd="cat mission.txt" />
            <OutLine    delay={2200} text="Turning AI research into real products." accent />
            <TypedLine  delay={2500} prompt="$" />
          </div>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial="hidden" animate="visible"
          variants={staggerContainer}
          custom={0.5}
        >
          {[
            { n: '4+', l: 'AI Projects' },
            { n: '4+', l: 'Certifications' },
            { n: '8.0', l: 'CGPA' },
          ].map(s => (
            <motion.div key={s.l} className={styles.statPill} variants={staggerItem}>
              <span className={styles.statN}>{s.n}</span>
              <span className={styles.statL}>{s.l}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Helper: animated terminal line ── */
function TypedLine({ delay, prompt, cmd }: { delay: number; prompt: string; cmd?: string }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return visible ? (
    <p style={{ opacity: 1 }}><span style={{ color: '#a855f7', marginRight: 8 }}>{prompt}</span><span style={{ color: '#e2e8f0' }}>{cmd}</span></p>
  ) : null
}

function OutLine({ delay, text, accent }: { delay: number; text: string; accent?: boolean }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return visible ? (
    <p style={{ color: accent ? '#34d399' : '#9ca3af', paddingLeft: 22 }}>{text}</p>
  ) : null
}

// keep viewport usage satisfied
void fadeUp; void slideLeft; void slideRight; void VIEWPORT
