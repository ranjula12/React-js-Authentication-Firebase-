import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashbord from "./Dashbord";
function PrivateRoute() {
    const location = useLocation();
    const {currentUser} = useAuth()

  return currentUser ? (<Outlet/>) : (
    <Navigate to="/login" state={{from: location}} replace/>
  );

};

export default PrivateRoute;