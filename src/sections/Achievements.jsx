import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import useInView from '../hooks/useInView';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

function AchievementCounter({ value, suffix }) {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.3, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
    return undefined;
  }, [inView, value, count]);

  return <span ref={ref} className="achievement-card__value"><motion.span>{rounded}</motion.span>{suffix}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title">Hackathons, research &amp; recognition</h2>
        </Reveal>

        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={0.08 * i} className="achievement-card glass-card">
              <FiAward className="achievement-card__icon" />
              <AchievementCounter value={a.value} suffix={a.suffix} />
              <h3 className="achievement-card__label">{a.label}</h3>
              <p className="achievement-card__desc">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
