import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginRegisterLayout = () => {
    return (
        <div>
            <Navigate to={"/user/login"}/>
            <Outlet />
        </div>
    );
};

export default LoginRegisterLayout;
