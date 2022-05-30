import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const PublicRoutes = () => {
  const auth = useAuth();

  return auth ? <Navigate to="/orders" /> : <Outlet />;
};

export default PublicRoutes;
