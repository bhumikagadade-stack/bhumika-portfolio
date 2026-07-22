import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { profile } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is wired up yet — this opens the visitor's mail client
    // pre-filled with their message so it reaches gadadebhumika@gmail.com.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something together</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-lede">Open to internships, research collaborations and full-time AI/ML roles. Reach out and I'll get back to you soon.</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={0.1} className="contact__card glass-card">
            <h3>Get in touch</h3>
            <a className="contact__email" href={profile.socials.email}>
              <FiMail /> {profile.email}
            </a>
            <div className="contact__socials">
              <a href={profile.socials.github} className="btn btn-ghost btn-sm" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href={profile.socials.linkedin} className="btn btn-ghost btn-sm" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="contact__form-wrap glass-card">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} placeholder="What would you like to talk about?" />
              </div>
              <button type="submit" className="btn btn-primary">
                <FiSend /> Send Message
              </button>
              {status === 'sent' && <p className="contact__status">Opening your mail client…</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
