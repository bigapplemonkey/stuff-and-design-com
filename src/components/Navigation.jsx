import { useContext } from 'react';
import AvailabilityMarquee from './AvailabilityMarquee';
import LocalTime from './LocalTime';
import NavLinks from './NavLinks';
import { DataContext } from '../context/DataContext';
import SiteStatus from './SiteStatus';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '../config';

const Navigation = () => {
  const { data } = useContext(DataContext);

  return (
    <header className="nav">
      {data.site_status && <SiteStatus status={data.site_status} />}
      <div className="nav-content">
        <LocalTime />
        <AvailabilityMarquee />
        <NavLinks links={NAV_LINKS} isUnderline={false} />
        <MobileMenu text="Menu" />
      </div>
    </header>
  );
};

export default Navigation;
