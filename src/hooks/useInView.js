import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean that flips to true once the element
 * has scrolled into the viewport. Used to drive scroll-reveal animations
 * without re-triggering on every scroll.
 */
export default function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) observer.unobserve(node);
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, { threshold: options.threshold ?? 0.15 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView];
}
