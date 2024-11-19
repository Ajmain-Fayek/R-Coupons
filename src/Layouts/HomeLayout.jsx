import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthStateProvider";
import { RxCross2 } from "react-icons/rx";

const HomeLayout = () => {
    const { user } = useContext(AuthContext);
    const handleCross = () => {
        document.getElementById("warning").classList = "hidden";
    };
    return (
        <div>
            {/* Navbar */}
            <NavBar />
            {user && !user.emailVerified && (
                <div
                    id="warning"
                    className="max-w-screen-2xl mx-auto text-center relative"
                >
                    <p className=" m-2 py-2 px-7 bg-red-100 border border-red-200 text-red-800 rounded-lg">
                        Please verify your Email, otherwise your account will be
                        deleted after 30 Minutes priode.
                    </p>
                    <button
                        onClick={handleCross}
                        className="absolute p-1 right-2 top-1.5"
                    >
                        <RxCross2
                            style={{ color: "#bb0000", fontSize: "1.25rem" }}
                        />
                    </button>
                </div>
            )}
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
