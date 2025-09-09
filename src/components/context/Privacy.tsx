import { useNavigate } from "react-router"
const Privacy = () => {

    const nav = useNavigate();

    function goToHomepage(){
        nav('/')
    }
  return (
    <div>
        <h1>You can not access this content since you aren't logged in! Please go to homepage and <span onClick={goToHomepage}><button>Login</button></span> first.</h1>
    </div>
  )
}

export default Privacy