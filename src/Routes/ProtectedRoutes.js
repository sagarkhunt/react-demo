import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { authToken } = useSelector((state) => state.auth);

  if (authToken) {
    return children;
  }

  return <Navigate to={`/login`} />;
};
