import { useNavigate } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => {
        navigate("/")
      }} text="Projects" />
      <Button onClick={() => {
        navigate("/about")
      }} text="About" />
    </div>
  )
}

export default Navbar