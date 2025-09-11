import { themeContext } from "./themeContext"
import { useContext } from "react"


const About = () => {

  
  const {color} = useContext(themeContext)

  const styles = {
    backgroundColor: color,
    padding: "2%",
  }
  return (
    <div style={styles}>
      <h1>Welcome to the about page</h1>
      <p>Hello this is about me!!</p>
    </div>
  )
}

export default About