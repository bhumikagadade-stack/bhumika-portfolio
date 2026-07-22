import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Reveal from '../components/Reveal';
import useInView from '../hooks/useInView';
import { profile, stats } from '../data/portfolioData';
import './About.css';

function Counter({ value, suffix }) {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
    return undefined;
  }, [inView, value, count]);

  return (
    <span ref={ref} className="stat-card__value">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="section-title">Building intelligent systems<br />that create real impact</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.1} className="about__text">
            <p>{profile.about}</p>
            <p className="about__text-secondary">
              I move comfortably across the full ML lifecycle — from cleaning messy data and
              engineering features, to training and evaluating models, to shipping them behind
              a usable interface. I'm especially drawn to problems at the intersection of
              language, vision and reasoning.
            </p>
          </Reveal>

          <div className="about__stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08} className="stat-card glass-card">
                <Counter value={s.value} suffix={s.suffix} />
                <span className="stat-card__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
