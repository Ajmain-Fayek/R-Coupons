import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthStateProvider";
import Warning from "../Components/Warning";

const HomeLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="font-sora">
            {/* Navbar */}
            <NavBar />
            {user &&
                !user.emailVerified &&
                Warning(
                    `${user.displayName}, for your Account Safty, please verify your Email.!!!`,
                    "emailWarning"
                )}
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
