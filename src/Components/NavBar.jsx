import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/favicon.png";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import demo from "../assets/Humaaans - Standing (1).png";
import { AuthContext } from "../Context/AuthStateProvider";

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // Sign Out
    const handleSignOut = () => {
        logOutUser().then(() => navigate("/"));
    };
    return (
        <div className="bg-pink-100 z-50 sticky top-0">
            <nav className="flex max-w-screen-2xl items-center justify-between px-2 py-2 mx-auto">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-1.5 cursor-pointer"
                >
                    <img
                        src={logo}
                        className="h-10 w-10 rounded-lg shadow-lg"
                        alt="R Coupons logo"
                    />
                    <h2 className="text-2xl font-bold">R Coupons</h2>
                </div>
                <ul className="flex items-center justify-between gap-4 text-slate-900 lg:gap-6">
                    <li className="hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/brands">Brands</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/about-dev">About Dev</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    {user && (
                        <Link to="/my-coupons" className="link-hover">
                            My Coupons
                        </Link>
                    )}
                    <Link
                        className="border rounded-full border-red-300 shadow-md"
                        to={user ? "/my-profile" : "/user/login"}
                    >
                        <img
                            src={
                                user
                                    ? user.photoURL
                                        ? user.photoURL
                                        : demo
                                    : demo
                            }
                            className=" h-8 w-8 bg-base-300 rounded-full"
                        />
                    </Link>
                    {user ? (
                        <Link onClick={handleSignOut} title="Sign Out">
                            <MdOutlineLogout style={{ fontSize: "1.5rem" }} />
                        </Link>
                    ) : (
                        <Link title="Sign In" to={"user/login"}>
                            <MdOutlineLogin style={{ fontSize: "1.5rem" }} />
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
