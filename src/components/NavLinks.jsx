import { useState } from 'react';
import AnimatedText from './animations/AnimatedText';
import { Link } from 'react-router-dom';

const NavLink = ({ name, to, openInNewTab = false, isUnderline = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleHoverExit = () => setIsHovered(false);

  const hoverClass = isUnderline ? 'link' : 'move-up';

  const ariaLabel = `Navigate to ${name}`;

  const LinkComponent = openInNewTab ? (
    <a
      className={hoverClass}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {isUnderline ? (
        name
      ) : (
        <AnimatedText content={name} isHovered={isHovered} />
      )}
    </a>
  ) : (
    <Link
      className={hoverClass}
      to={to}
      aria-label={ariaLabel}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {isUnderline ? (
        name
      ) : (
        <AnimatedText content={name} isHovered={isHovered} />
      )}
    </Link>
  );

  return LinkComponent;
};

const NavLinks = ({ links, isUnderline = true }) => (
  <nav>
    <ul className="nav-links">
      {links.map(link => (
        <li
          className={`nav-link nav-type${link.isDisabled ? ' disabled' : ''}`}
          key={link.name}
        >
          <NavLink
            name={link.name}
            to={link.to}
            openInNewTab={link.openInNewTab}
            isUnderline={isUnderline}
          />
        </li>
      ))}
    </ul>
  </nav>
);

export default NavLinks;
