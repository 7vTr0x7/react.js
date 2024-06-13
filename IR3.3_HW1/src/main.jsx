import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import RestaurantDetails from "./pages/RestaurantDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Restaurants",
    element: <Restaurants />,
  },
  {
    path: "/Restaurants/:resId",
    element: <RestaurantDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
