import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navMenuRef = useRef();
  const navToggleRef = useRef();
  const location = useLocation();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeNav();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    closeNav();
  }, [location]);

  const toggleNav = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
    if (!isNavExpanded) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  const closeNav = () => {
    setIsNavExpanded(false);
    document.body.classList.remove("disable-scroll");
  };

  const handleFocusOut = (event) => {
    if (!navMenuRef.current.contains(event.relatedTarget)) {
      closeNav();
    }
  };

  return (
    <nav className="nav" aria-label="main">
      <NavButton
        isNavExpanded={isNavExpanded}
        toggleNav={toggleNav}
        navToggleRef={navToggleRef}
      />
      <NavMenu
        isNavExpanded={isNavExpanded}
        navMenuRef={navMenuRef}
        handleFocusOut={handleFocusOut}
        toggleNav={toggleNav}
      />
    </nav>
  );
}

export default Navbar;
