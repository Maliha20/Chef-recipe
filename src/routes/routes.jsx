import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import ChefDetail from "../Layouts/ChefDetail";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";




const router = createBrowserRouter([
    
  {
    path: '/',
    element:<LoginLayout></LoginLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      } ,
       {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
  {
    path: "/home",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      }
    
      
    ],
  },
  {
    path: "details",
    element: <ChefDetail></ChefDetail>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: ':id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://chef-recipe-server-maliha20.vercel.app/chef/${params.id}`)
      }
    ]
  }
  
  
  
]);

export default router;
