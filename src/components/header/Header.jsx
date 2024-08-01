import { Link } from "react-router-dom";
import Logo from "/images/logo.svg";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header>
      <div>
        <Navbar />
        <Link to="/" aria-label="Snearkers - Home">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <p>Cart</p>
      <p>Avatar</p>
    </header>
  );
}

export default Header;
