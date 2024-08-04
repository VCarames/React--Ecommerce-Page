import { Link } from "react-router-dom";
import Logo from "/images/logo.svg";
import Navbar from "../navbar/Navbar";
import CartButton from "../../cart/CartButton";
import User from "/images/image-avatar.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__container header__container--one">
          <Navbar />
          <Link className="header__logo" to="/" aria-label="Snearkers - Home">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="header__container header__container--two">
          <CartButton />
          <img className="header__user" src={User} alt="User" />
        </div>
      </div>
    </header>
  );
}

export default Header;
