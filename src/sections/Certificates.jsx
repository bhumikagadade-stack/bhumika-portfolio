import { FiCheckCircle } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { certificates } from '../data/portfolioData';
import './Certificates.css';

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title">Continuous learning</h2>
        </Reveal>

        <div className="certs__grid">
          {certificates.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * i} className="cert-card glass-card">
              <FiCheckCircle className="cert-card__icon" />
              <div>
                <h4>{c.name}</h4>
                <p>{c.issuer} · {c.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
