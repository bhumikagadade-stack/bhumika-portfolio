import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { profile } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{profile.name}</p>
          <p className="footer__made">Made with React · Designed with <FiHeart className="footer__heart" /> for AI</p>
        </div>

        <div className="footer__socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={profile.socials.email} aria-label="Email"><FiMail /></a>
        </div>

        <p className="footer__copyright">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
