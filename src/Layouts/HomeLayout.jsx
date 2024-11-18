import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";

const HomeLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <NavBar />
            <Outlet/>
        </div>
    );
};

export default HomeLayout;
