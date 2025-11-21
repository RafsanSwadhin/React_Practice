import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },

  {
    path: "/about",
    element: <h1>This is Page</h1>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
