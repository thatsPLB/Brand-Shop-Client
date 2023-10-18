import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import Root from "../Layout/Root";
import NotFound from "../pages/NotFound";
import Banner from "../Home/Banner";
import AddProducts from "../pages/AddProducts";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "addProducts",
          children: <AddProducts></AddProducts>
        }
      ]
    },
  ]);