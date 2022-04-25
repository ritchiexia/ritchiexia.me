import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const fadeUp = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(100%)" },
  });

  return (
    <animated.nav style={fadeUp} className="navbar">
      <NavLink to="/" activeClassName="active" className="navlink">
        Projects
      </NavLink>
      <NavLink to="/about" activeClassName="active" className="navlink">
        About
      </NavLink>
    </animated.nav>
  );
};

export default Navbar;
