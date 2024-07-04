import { useContext } from 'react';
import EmailCTA from './EmailCTA';
import NavLinks from './NavLinks';
import BarcodeSVG from './svgs/BarcodeSVG';
import GlobeSVG from './svgs/GlobeSVG';
import TargetSVG from './svgs/TargetSVG';
import { DataContext } from '../context/DataContext';
import HoverImageAnimation from './animations/HoverImageAnimation';

const LandingFooter = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <footer className="landing-footer">
      <div className="landing-footer-content">
        <NavLinks links={data.medias} isUnderline={false} />
        <HoverImageAnimation src="/hi-emoji-min.png" alt="Hello emoji">
          <EmailCTA email={data.personal.email} />
        </HoverImageAnimation>
      </div>
      <div className="graphic-elements centered">
        <div className="barcode">
          <BarcodeSVG />
        </div>
        <div className="target">
          <TargetSVG />
        </div>
        <div className="globe">
          <GlobeSVG />
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
