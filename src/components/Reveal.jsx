import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

/**
 * Wraps children in a fade/slide-up reveal that fires once when scrolled
 * into view. `delay` and `y` let callers stagger groups of elements.
 */
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const [ref, inView] = useInView();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
