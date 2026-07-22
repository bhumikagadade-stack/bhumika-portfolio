import Reveal from '../components/Reveal';
import { researchInterests } from '../data/portfolioData';
import './ResearchInterests.css';

export default function ResearchInterests() {
  return (
    <section id="research">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Research Interests</span>
          <h2 className="section-title">What I'm curious about</h2>
        </Reveal>

        <div className="research__grid">
          {researchInterests.map((r, i) => (
            <Reveal key={r.title} delay={0.06 * i} className="research-card glass-card">
              <span className="research-card__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
