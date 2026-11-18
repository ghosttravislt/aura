import "./header.css"
import Logo from "../../atoms/logos/Logo";
import NavText from "../../atoms/texts/navtexts/NavText";
import Icon from  "../../atoms/icons/cart/CartIcon"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mainHeader_container">
      <nav className=" navbar container">
        <Link to="/"><Logo logoText="Aura" /></Link>
        <div className="navLinks">
          <Link to="/">
            <NavText text="Home" />
          </Link>
          <Link to="/product">
            <NavText text="Product" />
          </Link>
          <Link to="/about">
            <NavText text="About Us" />
          </Link>
          <Link to="/contact">
            <NavText text="Contact Us" />
          </Link>
        </div>
        <Link to="/cart"><Icon icon="fa-cart-shopping"/></Link>
      </nav>
    </div>
  );
};

export default Header;
