import { Link } from "react-router-dom";
import Logo from "/images/logo.svg";
import Navbar from "../navbar/Navbar";
import User from "/images/image-avatar.png";
import Cart from "../../cart/Cart";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__group header__group--primary">
          <Navbar />
          <Link className="header__logo" to="/" aria-label="Sneakers - Home">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="header__group header__group--secondary">
          <Cart />
          <img className="header__user-avatar" src={User} alt="User" />
        </div>
      </div>
    </header>
  );
}

export default Header;
