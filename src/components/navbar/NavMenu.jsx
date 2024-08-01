import { Link } from "react-router-dom";

const NavMenu = ({ isNavExpanded, navMenuRef, handleFocusOut }) => (
  <ul
    className={`nav__menu ${isNavExpanded ? "expanded" : ""}`}
    id="nav__menu"
    role="list"
    ref={navMenuRef}
    onBlur={handleFocusOut}
  >
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
);

export default NavMenu;
