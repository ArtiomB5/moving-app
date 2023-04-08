import { RouteObject } from "react-router-dom";
import { RouteSelectorPage } from "../Pages/RouteSelector";
import { HomePage } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

export const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },
        { path: "route", element: <RouteSelectorPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];