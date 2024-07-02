import { useEffect, useState } from 'react';

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getNYCTime = () => {
    const offset = -4; // Eastern Daylight Time (EDT) UTC offset
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const nycTime = new Date(utc + 3600000 * offset);
    return nycTime.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <div className="time">
      <p className="time-type">NYC {getNYCTime()}</p>
      <div className="ellipse"></div>
    </div>
  );
};

export default LocalTime;
