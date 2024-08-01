const NavButton = ({ isNavExpanded, toggleNav, navToggleRef }) => (
  <button
    className="nav__toggle"
    aria-expanded={isNavExpanded}
    aria-controls="nav__menu"
    aria-label="menu"
    onClick={toggleNav}
    ref={navToggleRef}
  >
    <span className="nav__toggle-line" />
    <span className="nav__toggle-line" />
    <span className="nav__toggle-line" />
  </button>
);

export default NavButton;
