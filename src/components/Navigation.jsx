import { useContext } from 'react';
import AvailabilityMarquee from './AvailabilityMarquee';
import LocalTime from './LocalTime';
import NavLinks from './NavLinks';
import { DataContext } from '../context/DataContext';
import SiteStatus from './SiteStatus';

const Navigation = () => {
  const { data } = useContext(DataContext);

  const navLinks = [
    { name: 'Home', to: '/', openInNewTab: false, isDisabled: false },
    { name: 'Work', to: '/', openInNewTab: false, isDisabled: true },
    { name: 'About', to: '/', openInNewTab: false, isDisabled: true },
    { name: 'Contact', to: '/', openInNewTab: false, isDisabled: true },
  ];
  return (
    <header className="nav">
      {data.site_status && <SiteStatus status={data.site_status} />}
      <div className="nav-content">
        <LocalTime />
        <AvailabilityMarquee />
        <NavLinks links={navLinks} isUnderline={false} />
        <button className="nav-menu nav-type" aria-label="Toggle menu">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Navigation;
