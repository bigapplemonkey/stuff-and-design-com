import { useContext } from 'react';
import EmailCTA from './EmailCTA';
import NavLinks from './NavLinks';
import BarcodeSVG from './svgs/BarcodeSVG';
import GlobeSVG from './svgs/GlobeSVG';
import TargetSVG from './svgs/TargetSVG';
import { DataContext } from '../context/DataContext';
import HoverImageAnimation from './animations/HoverImageAnimation';
import '../components/web-components/FooterLogo.js';

const LandingFooter = ({ showFooterLogo = false, isDark = false }) => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <footer className={`landing-footer${isDark ? ' is-dark' : ''}`}>
      {showFooterLogo && (
        <div className="landing-footer-top">
          <footer-logo is-dark={isDark ? '' : undefined}></footer-logo>
        </div>
      )}

      <div className="landing-footer-bottom">
        <div className="landing-footer-content">
          <NavLinks links={data.medias} isUnderline={false} />
          <HoverImageAnimation src="/hi-emoji-min.png" alt="Hello emoji">
            <EmailCTA email={data.personal.email} isDark={isDark} />
          </HoverImageAnimation>
        </div>
        <div className="graphic-elements centered">
          <div className="barcode">
            <BarcodeSVG isDark={isDark} />
          </div>
          <div className="target">
            <TargetSVG isDark={isDark} />
          </div>
          <div className="globe">
            <GlobeSVG isDark={isDark} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
