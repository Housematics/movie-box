import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "@pages/auth/signup/Signup";
import Signin from "@pages/auth/signin/Signin";
import Celebrities from "@/pages/app/celebrities/Celebrities";
import Celebrity from "@/pages/app/celebrity/Celebrity";
import Home from "@/pages/app/home/Home";
import Movie from "@/pages/app/movie/Movie";
import Movies from "@/pages/app/movies/Movies";
import TrendingMovies from "@/pages/app/movies/TrendingMovies";
import Profile from "@/pages/app/profile/Profile";
import Saved from "@/pages/app/saved/Saved";

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
    path: "/trending",
    element: <TrendingMovies />,
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
