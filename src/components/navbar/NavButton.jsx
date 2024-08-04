const NavButton = ({ isNavExpanded, toggleNav, navToggleRef }) => (
  <button
    className={`nav-button ${isNavExpanded ? "close" : "open"}`}
    aria-expanded={isNavExpanded}
    aria-controls="nav__menu"
    aria-label="menu"
    onClick={toggleNav}
    ref={navToggleRef}
  >
    <span className="nav-button__line" />
    <span className="nav-button__line" />
    <span className="nav-button__line" />
  </button>
);

export default NavButton;
