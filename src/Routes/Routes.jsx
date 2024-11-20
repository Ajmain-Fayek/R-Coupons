import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import HomeLayout from "../Layouts/HomeLayout";
import PrivateRoutes from "./PrivateRoutes";
import Brands from "../Pages/Brands";
import MyCoupons from "../Pages/MyCoupons";
import UpdateProfile from "../Pages/UpdateProfile";
import AboutDev from "../Pages/AboutDev";
import ErrorPage from "../Pages/ErrorPage";

const routes = new createBrowserRouter([
    {
        path: "/error-occured",
        errorElement: <ErrorPage/>
    },
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/CouponsData.json"),
            },
            {
                path: "/brands",
                element: <Brands />,
            },
            {
                path: "/about-dev",
                element: <AboutDev />,
            },
            {
                path: "/my-coupons",
                element: (
                    <PrivateRoutes>
                        <MyCoupons />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoutes>
                        <UpdateProfile />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/brand",
                element: <PrivateRoutes></PrivateRoutes>,
            },
            {
                path: "/brand/:id",
                element: <PrivateRoutes></PrivateRoutes>,
            },
        ],
    },
    {
        path: "/user",
        element: <LoginRegisterLayout />,
        // errorElement: <ErrorPage/>,
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
    // {
    //     path: "*",
    //     element: <Navigate to={"/user/login"} />,
    // },
]);

export default routes;
