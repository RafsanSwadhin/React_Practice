import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import ShopNow from "./Page/ShopNow/ShopNow";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {index: true, element: <Home></Home>},
      {path: "/shop",element: <ShopNow></ShopNow>},
      {path: "/about",element: <About></About>,},
      {path: "/contact",element: <Contact></Contact>,},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
