import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
