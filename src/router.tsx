import { createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import { RequireAuth, RequireGuest, RootRedirect } from "./middleware/authGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    element: <RequireGuest />,
    children: [
      {
        path: "/signin",
        element: <AuthPage />,
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);
