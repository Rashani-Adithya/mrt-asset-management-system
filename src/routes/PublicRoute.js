import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PublicRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/" /> : children;
}

export default PublicRoute;