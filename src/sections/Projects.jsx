import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { projects } from '../data/portfolioData';
import './Projects.css';

const FILTERS = ['All', 'NLP', 'Deep Learning', 'Machine Learning', 'LLM'];

function matchesFilter(project, filter) {
  if (filter === 'All') return true;
  if (filter === 'NLP') return project.stack.some((s) => ['NLP', 'BERT', 'Transformers'].includes(s));
  if (filter === 'Deep Learning') return project.stack.some((s) => ['TensorFlow', 'CNN', 'Keras', 'LSTM'].includes(s));
  if (filter === 'Machine Learning') return project.stack.some((s) => ['Random Forest', 'XGBoost', 'Scikit-learn'].includes(s));
  if (filter === 'LLM') return project.stack.some((s) => ['LLM', 'LangChain', 'RAG'].includes(s));
  return true;
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => projects.filter((p) => matchesFilter(p, filter)), [filter]);

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Selected work</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-lede">A mix of applied ML, deep learning and LLM-powered systems — each shipped as a working prototype.</p>
        </Reveal>

        <Reveal delay={0.08} className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="projects__grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                className="project-card glass-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="project-card__media">
                  <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="project-card__metric">{project.metric}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__features">
                  {project.features.map((f) => <li key={f}>{f}</li>)}
                </ul>

                <div className="project-card__stack">
                  {project.stack.map((s) => <span key={s}>{s}</span>)}
                </div>

                <div className="project-card__links">
                  <a href={project.github} className="btn btn-ghost btn-sm"><FiGithub /> Code</a>
                  <a href={project.demo} className="btn btn-primary btn-sm"><FiExternalLink /> Live Demo</a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
