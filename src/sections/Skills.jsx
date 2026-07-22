import Reveal from '../components/Reveal';
import { skillGroups } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Toolkit &amp; technologies</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-lede">A working set of languages, frameworks and platforms I use to take an idea from raw data to a deployed model.</p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.06 * i} className="skill-card glass-card">
              <h3 className="skill-card__title">{group.title}</h3>
              <div className="skill-card__tags">
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
