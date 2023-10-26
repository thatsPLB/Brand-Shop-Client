import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import Root from "../Layout/Root";
import NotFound from "../pages/NotFound";
import AddProducts from "../pages/AddProducts";
import AppleProducts from "../pages/AppleProducts";
import UpdateProducts from "../pages/UpdateProducts";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
    },
        {
          path: "/addProducts",
          element: <AddProducts></AddProducts>,
        },
        {
          path: "/updateProducts",
          element: <UpdateProducts></UpdateProducts>
        },
         
      
    
  ]);