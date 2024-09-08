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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animateOnce, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: scale ? 0 : 50, // Don't move vertically if scaling
        scale: scale ? 0.8 : 1, // Scale transformation if `scale` prop is provided
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
              : 50, // Apply vertical movement only if no scale
        scale: scale
          ? animateOnce
            ? hasAnimated
              ? 1
              : 0.8
            : isVisible
              ? 1
              : 0.8
          : 1, // Apply scale transformation if `scale` prop is provided
      }}
      transition={{
        duration: 0.5,
        delay: delay, // Apply the delay from the `delay` prop
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
