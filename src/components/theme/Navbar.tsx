import { Link } from "react-router"
import ThemeButton from "./ThemeButton"
import { themeContext } from "./themeContext"
import { useContext } from "react"

const Navbar = () => {

  const {color} = useContext(themeContext);

  const styleO = {
    background: color,
    padding: "2%",
    display: "flex",
    justifyContent: "space-between"
  }
  return (
    <div>
      <div>
             <ThemeButton />
      </div>
      <div style={styleO}>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/history'}>History</Link>
          <Link to={'/users'}>Total Users</Link>

      </div>
    </div>
  )
}

export default Navbar