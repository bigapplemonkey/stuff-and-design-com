import { Children, useContext, useState } from 'react';
import Marquee from 'react-marquee-slider';
import { DataContext } from '../context/DataContext';

const AvailabilityMarquee = () => {
  const { data, loading, error } = useContext(DataContext);
  const [isPaused, setIsPaused] = useState(false);

  const marqueeChildren = Children.toArray(
    <div className="availability-message">
      <div className="availability-type">
        {data ? data.personal.status : ''}
      </div>
      <div
        className="availability-ellipse"
        style={{ background: data ? `#${data.personal.status_color}` : '' }}
      ></div>
    </div>
  );

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause marquee on mouse enter
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume marquee on mouse leave
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const ariaLabel = `Send email to ${data.personal.email}`;

  return (
    <a
      href={`mailto:${data.personal.email}`}
      className="availability-container centered"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      <Marquee velocity={isPaused ? 0 : 47} spacing={0}>
        {marqueeChildren}
      </Marquee>
    </a>
  );
};

export default AvailabilityMarquee;
