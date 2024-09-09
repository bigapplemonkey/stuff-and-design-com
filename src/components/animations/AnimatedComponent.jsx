import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = ({
  children,
  animateOnce = true,
  scale = null,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
          if (animateOnce && !hasAnimated) {
            setHasAnimated(true);
          }
        } else if (!animateOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = ref.current; // Capture ref.current in a stable variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stable ref value in cleanup
      }
    };
  }, [animateOnce, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: scale ? 0 : 50,
        scale: scale ? 0.8 : 1,
      }}
      animate={{
        opacity: animateOnce ? (hasAnimated ? 1 : 0) : isVisible ? 1 : 0,
        y: scale
          ? 0
          : animateOnce
            ? hasAnimated
              ? 0
              : 50
            : isVisible
              ? 0
              : 50,
        scale: scale
          ? animateOnce
            ? hasAnimated
              ? 1
              : 0.8
            : isVisible
              ? 1
              : 0.8
          : 1,
      }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
