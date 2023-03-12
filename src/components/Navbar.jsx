import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Website Logo" />
        </Link>
        <ul className="nav__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collections"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Collections
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
