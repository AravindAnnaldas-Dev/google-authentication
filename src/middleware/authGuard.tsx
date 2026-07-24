import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_COOKIE } from "../constants/cookies";

const isAuthenticated = () => Boolean(Cookies.get(ACCESS_TOKEN_COOKIE));

export function RootRedirect() {
  return <Navigate to={isAuthenticated() ? "/dashboard" : "/signin"} replace />;
}

export function RequireGuest() {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export function RequireAuth() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" replace />;
}
