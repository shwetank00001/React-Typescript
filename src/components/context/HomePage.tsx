import { Routes, Route } from "react-router"
import PersonList from "./PersonList"
import Welcome from "./Welcome"

const HomePage = () => {
  return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/person" element={<PersonList />} />
        </Routes>
  )
}

export default HomePage