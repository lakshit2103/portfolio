import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '../animations'
import styles from './Projects.module.css'

interface Project {
  num: string
  icon: string
  title: string
  desc: string
  bullets: string[]
  stack?: string[]
  outcomes?: { label: string; value: string }[]
  ghLink: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    icon: 'fas fa-chalkboard-teacher',
    title: 'AI-Virtual Assistant',
    desc: 'An interactive teaching assistant powered by LLMs, enabling natural language Q&A and contextual answers from uploaded PDFs via FAISS vector search.',
    bullets: [
      'FAISS vector search for semantic PDF Q&A with LLMs',
      'Student mode with age-appropriate explanations & mnemonics',
      'Quiz/test generation with auto-evaluation & camera proctoring',
      'Voice I/O for hands-free multilingual interaction',
      'Real-time learning analytics dashboard',
    ],
    stack: ['LLMs', 'FAISS', 'RAG', 'Python', 'Voice AI', 'Streamlit'],
    ghLink: 'https://github.com/lakshit2103',
  },
  {
    num: '02',
    icon: 'fas fa-graduation-cap',
    title: 'Skill Forge — AI Course Generation Platform',
    desc: 'AI-powered course generation platform using LangGraph multi-agent orchestration, slashing curriculum design time by 75%.',
    bullets: [
      'LangGraph multi-agent for automated module planning & video curation',
      'YouTube MCP server + FastAPI — 10+ videos/topic, 50+ course topics',
      '85% relevance accuracy via LLM-based semantic filtering',
      'Production REST API compatible with Open WebUI',
      'Automated QA validation & structured content synthesis',
    ],
    outcomes: [
      { label: 'Design time reduced', value: '75%' },
      { label: 'LLM relevance accuracy', value: '85%' },
      { label: 'Course topics covered', value: '50+' },
    ],
    ghLink: 'https://github.com/lakshit2103',
  },
  {
    num: '03',
    icon: 'fas fa-briefcase',
    title: 'AI Job Application System',
    desc: 'End-to-end AI system that enhances resumes, interprets job queries, and auto-applies using multi-agent workflows powered by LangGraph & Gemini.',
    bullets: [
      'Multi-agent pipeline: extract → enhance → evaluate → format',
      'LangGraph + Gemini for ATS-friendly resume generation',
      'Automated job matching and relevance scoring',
      'Interface for resume uploads, job search & AI-powered auto-apply',
    ],
    stack: ['LangGraph', 'Gemini', 'Multi-Agent', 'FastAPI', 'Python'],
    ghLink: 'https://github.com/lakshit2103',
  },
  {
    num: '04',
    icon: 'fas fa-utensils',
    title: 'Budget Food Recommendation System',
    desc: 'AI-powered food recommendation engine combining real-time Swiggy & Zomato data with Sentence-BERT embeddings for semantic restaurant matching.',
    bullets: [
      'Sentence-BERT embeddings for semantic food & restaurant matching',
      'Cosine similarity ranking by budget, ratings, and distance',
      'Real-time restaurant data via web scraping (Swiggy & Zomato)',
      'Interactive Streamlit UI with visual charts & insights',
    ],
    stack: ['Sentence-BERT', 'Streamlit', 'Web Scraping', 'Python'],
    ghLink: 'https://github.com/lakshit2103',
  },
]

export default function Projects() {
  return (
    <section className={`${styles.projects} section-row`} id="projects">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className="section-label">SELECTED WORKS</div>
          <h2 className={styles.heading}>Projects</h2>
          <p className={styles.sub}>
            Production AI systems spanning LLM applications, multi-agent frameworks, and intelligent automation — built end-to-end.
          </p>
        </motion.div>

        <motion.div
          className={styles.list}
          initial="hidden" whileInView="visible"
          viewport={VIEWPORT} variants={staggerContainer}
        >
          {PROJECTS.map(p => (
            <motion.div
              key={p.num}
              className={styles.row}
              variants={staggerItem}
            >
              <div className={styles.num}>{p.num}</div>
              <div className={styles.body}>
                <div className={styles.topRow}>
                  <div className={styles.titleBlock}>
                    <motion.div className={styles.iconBox} whileHover={{ rotate: 5, scale: 1.1 }}>
                      <i className={p.icon} />
                    </motion.div>
                    <h3>{p.title}</h3>
                  </div>
                  <motion.a
                    href={p.ghLink}
                    target="_blank" rel="noopener"
                    className={styles.ghBtn}
                    whileHover={{ x: 4 }}
                  >
                    <i className="fab fa-github" /> View on GitHub <i className="fas fa-arrow-right fa-xs" />
                  </motion.a>
                </div>
                <div className={styles.content}>
                  <div className={styles.descCol}>
                    <p>{p.desc}</p>
                    <ul>
                      {p.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                  <div className={styles.sideCol}>
                    {p.outcomes ? (
                      <div className={`${styles.sideBox} ${styles.highlight}`}>
                        <div className={styles.boxLabel}>Outcomes</div>
                        {p.outcomes.map(o => (
                          <div key={o.label} className={styles.outcome}>
                            <span>{o.value}</span>
                            {o.label}
                          </div>
                        ))}
                      </div>
                    ) : p.stack ? (
                      <div className={styles.sideBox}>
                        <div className={styles.boxLabel}>Stack</div>
                        <div className={styles.stackTags}>
                          {p.stack.map(s => <span key={s}>{s}</span>)}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
