import useAuth from "../hooks/useAuth";
import {Navigate, Route} from "react-router-dom";

export default function PrivateRoute({children, ...rest}) {
    const auth = useAuth();
    return auth? children : <Navigate to="/login"/>;
}