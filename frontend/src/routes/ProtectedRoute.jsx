import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // User not logged in
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  // Role checking
  if (
    allowedRoles &&
    !allowedRoles.includes(userRole)
  ) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
}

export default PrivateRoute;