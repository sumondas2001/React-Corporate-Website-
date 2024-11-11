import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contacts/Contacts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BlogPages from "../Pages/BlogPages/BlogPages";


const router = createBrowserRouter([
     {
          path: '/',
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/about',
                    element: <About></About>
               },
               {
                    path: '/blog',
                    element: <BlogPages></BlogPages>
               },
               {
                    path: '/contacts',
                    element: <Contacts></Contacts>
               },

               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               },

          ]
     }
]);


export default router