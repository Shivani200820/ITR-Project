import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowedRoles, userRole }) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;
