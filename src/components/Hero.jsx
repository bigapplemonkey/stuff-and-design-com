import { Children } from 'react';
import Marquee from 'react-marquee-slider';

const Hero = () => {
  const marqueeChildren = Children.toArray(
    <h1 className="hero-header hero-type">
      <span className="hero-asterisk hero-asterisk-type">*</span>
      <span>Front-End</span>
      <span className="hero-asterisk hero-asterisk-type">*</span>
      <span>Creative Development</span>
      <span className="hero-asterisk hero-asterisk-type">*</span>
      <span>Design</span>
    </h1>
  );
  return (
    <section className="hero">
      <div className="hero-main centered">
        <img
          className="hero-animation"
          src="/hero-animation-min-4M.gif"
          alt="Logo Animation"
          loading="lazy"
        />
        <h1 className="hero-header hero-type non-marquee">
          <span>Front-End</span>
          <span className="hero-asterisk hero-asterisk-type">*</span>
          <span>Creative Development</span>
          <span className="hero-asterisk hero-asterisk-type">*</span>
          <span>Design</span>
        </h1>

        <div className="header-container">
          <Marquee speed={300}>{marqueeChildren}</Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
