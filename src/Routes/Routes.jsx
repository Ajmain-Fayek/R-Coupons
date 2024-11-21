import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import HomeLayout from "../Layouts/HomeLayout";
import PrivateRoutes from "./PrivateRoutes";
import Brands from "../Pages/Brands";
import UpdateProfile from "../Pages/UpdateProfile";
import AboutDev from "../Pages/AboutDev";
import ErrorPage from "../Pages/ErrorPage";
import CouponsDetails from "../Pages/CouponsDetails";
import ForgetPassword from "../Pages/ForgetPassword";

const routes = new createBrowserRouter([
    {
        path: "/error-occured",
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/CouponsData.json"),
            },
            {
                path: "/brands",
                element: <Brands />,
                loader: () => fetch("/CouponsData.json"),
            },
            {
                path: "/about-dev",
                element: <AboutDev />,
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
                path: "/forget-password",
                element: <ForgetPassword />,
            },
            {
                path: "/brand/:id",
                loader: async ({ params }) => {
                    const res = await fetch("/CouponsData.json");
                    const data = await res.json();
                    const dataId = data.find((d) => d._id == params.id);
                    return dataId;
                },
                element: (
                    <PrivateRoutes>
                        <CouponsDetails />
                    </PrivateRoutes>
                ),
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
]);

export default routes;
