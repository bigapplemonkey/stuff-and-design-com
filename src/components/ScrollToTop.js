import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ delayInSeconds = 0 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const delayInMilliseconds = delayInSeconds * 1000;
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, delayInMilliseconds);

    return () => clearTimeout(timer);
  }, [pathname, delayInSeconds]);

  return null;
};

export default ScrollToTop;
