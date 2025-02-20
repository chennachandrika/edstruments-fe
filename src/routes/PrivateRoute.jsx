import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isAuthenticated && isLoginPage) {
    return <Navigate to="/" />;
  } else if (!isAuthenticated && !isLoginPage) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
