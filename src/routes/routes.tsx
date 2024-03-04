import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "@pages/auth/signup/Signup";
import Signin from "@pages/auth/signin/Signin";

export const routes: RouteObject[] = [
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/signin",
    element: <Signin />,
  },
];

export default routes;
