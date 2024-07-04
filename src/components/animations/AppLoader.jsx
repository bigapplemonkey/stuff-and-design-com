import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ANIMATION } from '../../config';

const AppLoader = ({ setLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const windowControls = useAnimation();
  const containerControls = useAnimation();
  const overlayControls = useAnimation();

  const { CUBIC_BEZIER } = ANIMATION;

  useEffect(() => {
    const animateLoading = async () => {
      await playAnimations(containerControls, windowControls, overlayControls);
      setLoadingComplete(true);
    };

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 1;
        if (nextProgress === 100) {
          clearInterval(interval);
          animateLoading();
        }
        return nextProgress;
      });
    }, 37);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => clearInterval(interval);
  }, []);

  const playAnimations = async (container, window, overlay) => {
    await container.start({
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 },
    });
    await window.start({
      width: '100vw',
      height: '100vh',
      transition: { duration: 0.3, ease: CUBIC_BEZIER },
    });
    await overlay.start({ opacity: 0, transition: { duration: 0.1 } });
    await window.start({
      opacity: 0,
      transition: { duration: 0.1, ease: CUBIC_BEZIER },
    });
  };

  return (
    <motion.div className="loading-overlay" animate={overlayControls}>
      <motion.div className="loading-window" animate={windowControls}>
        <motion.div className="loading-content" animate={containerControls}>
          <div className="loading-title-bar">
            <div className="loading-title loading-type">
              Loading...<span className="loading-pulsing">.</span>
              Stuff_and_Design
              <span className="loading-welcome"> (Welcome)</span>
            </div>
          </div>
          <div className="loading-container">
            <div className="loading-bar">
              <motion.div
                className="loading-progress"
                style={{ width: `${progress}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="loading-counter loading-type">{`${progress}%`}</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AppLoader;
