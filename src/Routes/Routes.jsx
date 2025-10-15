import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from './../pages/Home';
import Products from "../pages/Products";
import Login from './../pages/Login';
import Signup from './../pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
        {
        path: "/products",
        element: <Products />,
      },
        {
        path: "/login",
        element: <Login />,
      },
        {
        path: "/signup",
        element: <Signup />,
      },
    ],  
  },
]);


export default router;