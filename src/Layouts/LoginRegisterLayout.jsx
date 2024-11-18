import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const LoginRegisterLayout = () => {
    return (
        <div>
            <Navigate to={"/user/login"} />
            <NavBar/>
            <Outlet />
        </div>
    );
};

export default LoginRegisterLayout;
