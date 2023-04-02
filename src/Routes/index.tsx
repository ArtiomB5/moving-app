import { RouteObject } from "react-router-dom";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

export const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];