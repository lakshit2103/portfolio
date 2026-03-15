import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp, scaleIn, VIEWPORT } from '../animations'
import styles from './Skills.module.css'

const SKILLS = [
  {
    title: 'Programming & Core',
    icon: 'fas fa-code',
    items: ['Python (Expert)', 'SQL & Data Analysis', 'EDA & Feature Engineering', 'Statistical Modelling'],
  },
  {
    title: 'Machine Learning',
    icon: 'fas fa-brain',
    items: ['Classical ML Algorithms', 'Scikit-learn · XGBoost', 'Model Selection & Tuning', 'Feature Pipelines'],
  },
  {
    title: 'Deep Learning',
    icon: 'fas fa-network-wired',
    items: ['Neural Networks (CNN, RNN)', 'PyTorch · TensorFlow', 'Diffusion Models', 'Attention & Transformers'],
  },
  {
    title: 'NLP & LLMs',
    icon: 'fas fa-comment-dots',
    items: ['Large Language Models', 'Hugging Face Transformers', 'Fine-Tuning (PEFT / LoRA)', 'Prompt Engineering'],
  },
  {
    title: 'GenAI & Agents',
    icon: 'fas fa-robot',
    items: ['LangChain · LangGraph', 'RAG Pipelines (FAISS)', 'Multi-Agent Orchestration', 'Model Context Protocol'],
  },
  {
    title: 'Tools & Deployment',
    icon: 'fas fa-rocket',
    items: ['FastAPI · Docker', 'Vector Databases', 'Pandas · NumPy', 'MLOps Workflows'],
  },
]

export default function Skills() {
  return (
    <section className={`${styles.skills} section-row`} id="skills">
      <div className="container">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={VIEWPORT} variants={fadeUp}
        >
          <div className="section-label">TECHNICAL SKILLS</div>
          <h2 className={styles.heading}>
            Depth in production AI,<br />breadth across the stack
          </h2>
          <p className={styles.sub}>
            A comprehensive toolkit covering machine learning, deep learning, NLP, GenAI, and deployment infrastructure.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden" whileInView="visible"
          viewport={VIEWPORT} variants={staggerContainer}
        >
          {SKILLS.map(card => (
            <motion.div
              key={card.title}
              className={styles.card}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}><i className={card.icon} /></div>
                <h3>{card.title}</h3>
              </div>
              <ul>
                {card.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

void scaleIn
