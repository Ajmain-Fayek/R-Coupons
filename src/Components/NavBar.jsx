import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";

const NavBar = () => {
    return (
        <div className="bg-pink-100">
            <nav className="flex max-w-screen-2xl items-center justify-between px-2 py-2 mx-auto">
                <div className="flex items-center gap-1.5">
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
                        <Link to="#">Services</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="#">About</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    <img
                        src=""
                        className=" h-8 w-8 bg-base-300 rounded-full"
                        alt=""
                    />
                    <Link to={"user/login"}>
                        <MdOutlineLogin />
                    </Link>
                    <Link>
                        <MdOutlineLogout />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
