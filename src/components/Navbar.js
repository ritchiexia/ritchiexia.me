import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active" className="navlink">
        Projects
      </NavLink>
      <NavLink to="/about" activeClassName="active" className="navlink">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
