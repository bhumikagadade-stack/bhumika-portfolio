import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="loading-screen__mark"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading portfolio…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
