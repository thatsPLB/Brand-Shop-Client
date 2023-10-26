import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProducts from './pages/AddProducts.jsx';
import AppleProducts from './pages/AppleProducts.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Brand from './pages/Brand.jsx'
import Cart from './pages/Cart.jsx';
import Detail from './pages/Detail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
  },
  {
    path: "/addproducts",
    element: <AddProducts></AddProducts>
  },
  {
    path:"/appleproducts",
    element: <AppleProducts></AppleProducts>
  },
  {
    path: "/login",
    element : <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }, 
  {
    path: "/:brandname",
    element: <Brand></Brand>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
  {
    path: "/detail",
    element: <Detail></Detail>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <RouterProvider router={router} />
  // </React.StrictMode>,
)
