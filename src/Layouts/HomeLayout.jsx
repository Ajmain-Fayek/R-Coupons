import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthStateProvider";
import Warning from "../Components/Warning";

const HomeLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {/* Navbar */}
            <NavBar />
            {user &&
                !user.emailVerified &&
                Warning(
                    `${user.displayName} please verify your Email, otherwise your account will be deleted after 30 Minutes priode.`,
                    "emailWarning"
                )}
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
