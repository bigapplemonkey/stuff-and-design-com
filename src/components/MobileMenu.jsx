import { useState } from 'react';
import CloseSVG from './svgs/CloseSVG';
import { NAV_LINKS } from '../config';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = ({ text, selected = false }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const location = useLocation(); // Get the current location

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <nav className={`mobile-menu${isSelected ? ' selected' : ''}`}>
      <button className="menu-button menu-link-type" onClick={toggleSelected}>
        {text}
        <div className="menu-button-close">
          <CloseSVG />
        </div>
      </button>
      <ul className="mobile-menu-links menu-link-type">
        {NAV_LINKS.map(link => (
          <li
            key={link.name}
            className={`mobile-menu-link${location.pathname === link.to && !link.isDisabled ? ' in-view' : ''}`}
          >
            {link.isDisabled ? (
              <div className="disabled-link">
                <span className="link-title disabled">{link.name}</span>
              </div>
            ) : (
              <Link to={link.to} aria-label={`Navigate to ${link.name}`}>
                <span className="link-title">{link.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
