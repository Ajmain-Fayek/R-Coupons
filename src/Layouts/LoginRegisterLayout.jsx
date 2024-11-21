import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const LoginRegisterLayout = () => {
    return (
        <div className="font-sora">
            <Navigate to={"/user/login"} />
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default LoginRegisterLayout;
