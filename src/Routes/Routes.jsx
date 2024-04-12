import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../pages/Error";
import PropertyDetails from "../components/PropertyDetails";
import Blog from "../components/Blog/Blog";
import BlogsContainer from "../components/Blog/BlogsContainer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details',
                element: <PropertyDetails></PropertyDetails>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch('/blogs.json')
            },
            {
                path: '/blogs/:id',
                element: <BlogsContainer></BlogsContainer>,
              
            }

        ]
    },
]);
export default router;