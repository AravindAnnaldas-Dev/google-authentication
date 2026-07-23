import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const isAuthenticated = () => Boolean(Cookies.get("accessToken"));

export function RootRedirect() {
  return <Navigate to={isAuthenticated() ? "/dashboard" : "/signin"} replace />;
}

export function RequireGuest() {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export function RequireAuth() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" replace />;
}
