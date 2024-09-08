import { motion } from 'framer-motion';
import { useState } from 'react';

const TransitionWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAnimationComplete = () => {
    setIsVisible(true); // Set children visible after slide-in/out is complete
  };

  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.div
        initial={{ opacity: 0, width: '100%' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default TransitionWrapper;
