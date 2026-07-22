import Reveal from '../components/Reveal';
import { experience } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="timeline">
          <div className="timeline__line" />
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={0.1 * i} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__card glass-card">
                <div className="timeline__meta">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__org">{item.org}</p>
                <ul className="timeline__points">
                  {item.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
