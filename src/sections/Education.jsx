import { FiBookOpen } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { education } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic background</h2>
        </Reveal>

        <Reveal delay={0.1} className="education-card glass-card">
          <div className="education-card__icon"><FiBookOpen /></div>
          <div className="education-card__body">
            <div className="education-card__top">
              <h3>{education.degree}</h3>
              <span className="education-card__period">{education.period}</span>
            </div>
            <p className="education-card__university">{education.university} · CGPA {education.cgpa}</p>
            <div className="education-card__courses">
              {education.coursework.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
