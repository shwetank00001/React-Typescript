import { themeContext } from "./themeContext"
import { useContext } from "react"

const Contact = () => {

  const {color} = useContext(themeContext)

  const styles = {
    backgroundColor: color,
    padding: "2%",
  }

  return (
    <div style={styles}>
      <h1>Contact me</h1>
    </div>
  )
}

export default Contact