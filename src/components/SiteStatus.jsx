import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CloseSVG from './svgs/CloseSVG';

const SiteStatus = ({ status }) => {
  const [isShown, setIsShown] = useState(true);

  const onClose = () => {
    setIsShown(false);
  };

  if (!status) return null;

  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          className="site-status site-status-type"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            overflow: 'hidden',
            transition: { duration: 0.4 },
          }}
        >
          <p>{status.message}</p>
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close site status message"
          >
            <CloseSVG />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SiteStatus;
