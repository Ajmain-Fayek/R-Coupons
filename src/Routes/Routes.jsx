import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import HomeLayout from "../Layouts/HomeLayout";
import PrivateRoutes from "./PrivateRoutes";

const routes = new createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                ),
            },
        ],
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
        path: "*",
        element: <Navigate to={"/user/login"} />,
    },
]);

export default routes;
