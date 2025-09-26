import { Outlet, Navigate } from "react-router-dom";
const isAuth = true;
export default function AuthMiddleware() {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
