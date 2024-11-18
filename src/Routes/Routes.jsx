import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

const routes = new createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user",
        element: <LoginRegisterLayout />,
        children: [
            {
                path: "/user/login",
                element: <Login />,
            },
            {
                path: "/user/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "*",
        element: <Navigate to={"/user/login"} />,
    },
]);

export default routes;
