import { motion, useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { STYLES } from '../../config';

const HoverImageAnimation = ({
  children,
  src,
  alt = '',
  offSet = -80,
  easeIn = [0.1, 0.9, 0.2, 1], // Ease for hover in
  easeOut = [0.25, 0.1, 0.3, 1], // Ease for hover out
  duration = 0.3, // Duration for both in and out animations
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const isMobile = useMediaQuery({
    query: `(max-width: ${STYLES.DESKTOP_BREAK_POINT}px)`,
  });

  const handleMouseMove = event => {
    if (!isMobile) {
      cursorX.set(event.clientX + offSet);
      cursorY.set(event.clientY + offSet);
    }
  };

  const handleHoverStart = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
    <div className="hoverable-image-container">
      {!isMobile && (
        <motion.img
          className="hoverable-image"
          alt={alt}
          src={src}
          style={{
            x: cursorX,
            y: cursorY,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
            transition: { duration, ease: isHovered ? easeIn : easeOut },
          }}
        />
      )}
      <div
        className="hoverable-image-content"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {children}
      </div>
    </div>
  );
};

export default HoverImageAnimation;
