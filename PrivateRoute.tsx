import { JSX } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
