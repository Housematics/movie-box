import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "@pages/auth/signup/Signup";
import Signin from "@pages/auth/signin/Signin";
import Celebrities from "@pages/app/Celebrities/Celebrities";
import Celebrity from "@pages/app/Celebrity/Celebrity";
import Home from "@pages/app/Home/Home";
import Movie from "@pages/app/Movie/Movie";
import Movies from "@pages/app/Movies/Movies";
import Profile from "@pages/app/Profile/Profile";
import Saved from "@pages/app/Saved/Saved";

export const routes: RouteObject[] = [
  {
    path: "/saved",
    element: (
      <ProtectedRoute>
        <Saved />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/:id",
    element: <Movie />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/celebrities",
    element: <Celebrities />,
  },
  {
    path: "/celebrities/:id",
    element: <Celebrity />,
  },
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
