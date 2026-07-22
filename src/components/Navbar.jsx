import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleClick('#home'); }}>
          <span className="navbar__logo-mark">BG</span>
          <span className="navbar__logo-text">Bhumika</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <motion.nav
          className="navbar__mobile"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
