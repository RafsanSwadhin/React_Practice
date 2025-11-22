import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {index: true, element: <h1>Home page</h1>},
      {path: "/about",element: <h1>This is about Page</h1>,},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
