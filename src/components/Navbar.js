import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul class="navbar">
        <button
          className="navlink"
          activeClassName="active"
          onClick={() => {
            navigate("/");
          }}
        >
          Projects
        </button>

        <button
          className="navlink"
          activeClassName="active"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
