import { Route, Routes } from "react-router"

import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import './hero.css'


import { themeContext } from "./themeContext"
import { useState } from "react"

const MainTheme = () => {

  const [color, setColor] = useState("#6d6b6b")
  return (
    <themeContext.Provider value={{color, setColor}}>
      <div>
        <Hero />
      </div>

 

      <div className="hero">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </themeContext.Provider>
  )
}

export default MainTheme