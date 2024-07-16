import { useEffect, useState } from 'react';

const UpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="14"
    viewBox="0 0 23 14"
    fill="none"
  >
    <g clipPath="url(#clip0_304_101)">
      <path d="M11.6673 0.853821L0.353577 12.1675" stroke="black" />
      <path d="M22.2739 12.1673L10.9602 0.853577" stroke="black" />
    </g>
    <defs>
      <clipPath id="clip0_304_101">
        <rect
          width="23"
          height="13"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ScrollToTopButton = ({ offset = 70 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={handleScrollToTop}
    >
      <div className="button-to-top filter-type">Scroll to Top</div>
      <div className="to-top-arrow">
        <UpIcon />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
