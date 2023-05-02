import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import ChefDetail from "../Layouts/ChefDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
