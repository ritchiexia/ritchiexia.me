import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <ul class="navbar">
        <button className="navlink" onClick={() => {
          navigate("/")
        }}>Projects</button>

        <button className="navlink" onClick={() => {
          navigate("/about")
        }}>About</button>
      </ul>
    </nav>
  )
}

export default Navbar