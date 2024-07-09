import { useState } from 'react';
import CloseSVG from './svgs/CloseSVG';
import { NAV_LINKS } from '../config';
import { Link } from 'react-router-dom';

const MobileMenu = ({ text, selected = false }) => {
  const [isSelected, setIsSelected] = useState(selected);

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
            className={`mobile-menu-link${link.name == 'Home' ? ' in-view' : ''}`}
          >
            <Link to={link.to} aria-label={`Navigate to ${link.name}`}>
              <span
                className={`link-title${link.isDisabled ? ' disabled' : ''}`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
