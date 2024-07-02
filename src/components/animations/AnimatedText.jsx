import { motion } from 'framer-motion';

const AnimatedText = ({ content, isHovered, duration = 0.3 }) => (
  <>
    <p style={{ opacity: 0 }}>{content}</p>
    <motion.p
      initial={{ top: 0 }}
      animate={{ top: isHovered ? '-100%' : 0 }}
      transition={{ duration }}
    >
      {content}
    </motion.p>
    <motion.p
      initial={{ top: '100%' }}
      animate={{ top: isHovered ? 0 : '100%' }}
      transition={{ duration }}
    >
      {content}
    </motion.p>
  </>
);

export default AnimatedText;
