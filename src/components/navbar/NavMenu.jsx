import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useRef } from "react";

const NavMenu = ({ isNavExpanded, navMenuRef, handleFocusOut, toggleNav }) => {
  const closeNavButtonRef = useRef();

  return (
    <div
      className={`nav__menu ${isNavExpanded ? "expanded" : ""}`}
      id="nav__menu"
      ref={navMenuRef}
      onBlur={handleFocusOut}
    >
      <NavButton
        isNavExpanded={isNavExpanded}
        toggleNav={toggleNav}
        navToggleRef={closeNavButtonRef}
      />
      <ul className="nav__menu-list" role="list">
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/about">
            Collections
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/locations">
            Men
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/contact">
            Women
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/contact">
            About
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
