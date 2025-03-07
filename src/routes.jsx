import {createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "/movie/:id", element: <Movie /> },
   { path: "/directors", element: <Directors /> },
   { path: "/actors", element: <Actors /> },
   { path: "*", element: <ErrorPage /> },
  ]);

export default routes;

// /:id