import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import ChefDetail from "../Layouts/ChefDetail";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
    
  {
    path: '/',
    element:<LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/home",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/home/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/home/about",
        element: <About></About>
      }
      
    ],
  },
  {
    path: "details",
    element: <ChefDetail></ChefDetail>,
    children:[
      {
        path: ':id',
        element: <ChefDetails></ChefDetails>,
        loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
  
  
  
]);

export default router;
