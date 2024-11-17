import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Login";

const routes = new createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Navigate to={"/login"} />,
    },
]);

export default routes;
