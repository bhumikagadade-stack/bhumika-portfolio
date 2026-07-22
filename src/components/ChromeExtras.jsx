import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import './ChromeExtras.css';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return undefined;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setActive(true);
    };
    const onLeave = () => setActive(false);

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: active ? 1 : 0
      }}
      aria-hidden="true"
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -3 }}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
