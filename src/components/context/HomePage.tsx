import { Routes, Route } from "react-router"
import PersonList from "./PersonList"
import Welcome from "./Welcome"
import {globalContext} from './globalContext'
import { useState } from "react"
import Privacy from "./Privacy"
import ProtectedRoute from './ProtectedRoute'

const HomePage = () => {

  const [auth, setAuth] = useState(false);

  return (
    <globalContext.Provider value={{auth, setAuth}}>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/not-allowed" element={<Privacy />} />
            <Route path="/person" element={
              <ProtectedRoute>
                <PersonList />
              </ProtectedRoute>
              } />
        </Routes>
    </globalContext.Provider>
  )
}

export default HomePage