import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';
import NeuralField from '../components/NeuralField';
import { profile } from '../data/portfolioData';
import './Hero.css';

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <NeuralField className="hero__field" density={70} />
      <div className="hero__glow hero__glow--cyan" />
      <div className="hero__glow hero__glow--violet" />

      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Portfolio · AI &amp; Machine Learning</span>

          <h1 className="hero__title">
            Hello, I'm<br />
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero__typed">
            <span className="hero__typed-text">{typed}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </p>

          <p className="hero__desc">{profile.about}</p>

          <div className="hero__cta">
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <FiDownload /> Download Resume
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('#contact')}>
              <FiMail /> Contact Me
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('#projects')}>
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__orb">
            <div className="hero__orb-ring hero__orb-ring--1" />
            <div className="hero__orb-ring hero__orb-ring--2" />
            <div className="hero__orb-core">
              <span>AI</span>
            </div>
            {['ML', 'CV', 'NLP', 'LLM', 'DL'].map((tag, i) => (
              <span key={tag} className={`hero__orb-tag hero__orb-tag--${i + 1}`}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll-hint"
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
      >
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
