import { Navigate } from "react-router";
import { globalContext } from "./globalContext";
import { useContext } from "react";


const ProtectedRoute = ({children}) => {

    const {auth} = useContext(globalContext);

    return auth ? children : <Navigate to={'/not-allowed'} />
}

export default ProtectedRoute