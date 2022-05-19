import {useSelector} from "react-redux";
import {Navigate, Route} from "react-router-dom";

const ProtectedRoute = (props) => {
    const {path, redirectTo, element} = props
    const {isAuth} = useSelector((state) => state.auth);
    return isAuth ?
        element: <Navigate to={redirectTo}/>

}
export default ProtectedRoute;