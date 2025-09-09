import { useNavigate } from "react-router"
import { globalContext } from "./globalContext";
import { useContext } from "react";

const Welcome = () => {

  const {auth, setAuth} = useContext(globalContext) ;

  const nav = useNavigate();

  const loginButton =() =>{
    alert('User Logged In!');
    setAuth(true);
    console.log(auth)
    setTimeout(() => {
      nav('/person')
    }, 1000)
  }


  return (
    <div>
      <h1>Click at the login button to login and navigate to people list</h1>
      <button onClick={() => nav('/person')}>List</button>
      <button onClick={loginButton}>Login</button>
    </div>
  )
}

export default Welcome