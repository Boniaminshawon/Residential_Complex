import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../pages/Error";
import PropertyDetails from "../components/PropertyDetails";
import Blog from "../components/Blog/Blog";
import BlogsContainer from "../components/Blog/BlogsContainer";
import BlogDetails from "../components/Blog/BlogDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import NewProjects from "../pages/NewProjects/NewProjects";



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
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
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
                path: '/blogs',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
                loader: () => fetch('/blogs.json')
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch('/blogs.json')
            },
            {
                path: '/profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,


            },
            {
                path: '/projects',
                element: <PrivateRoute><NewProjects></NewProjects></PrivateRoute>,
                loader: () => fetch('/newProject.json')
            }

        ]
    },
]);
export default router;