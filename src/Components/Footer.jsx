import React from "react";
import logo from "../assets/favicon.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="flex flex-col text-black z-50 fixed bottom-0 left-0 right-0">
            <div className="flex flex-col items-center justify-around gap-5 bg-pink-100 py-2 md:flex-row md:gap-0">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-1.5 cursor-pointer"
                >
                    <img
                        src={logo}
                        className="h-7 w-7 rounded-lg shadow-lg"
                        alt="R Coupons logo"
                    />
                    <h2 className="text-xl font-bold">R Coupons</h2>
                </div>
                {/* social icons  */}
                <nav className="text-lg flex justify-between gap-4">
                    <Link
                        to="https://www.facebook.com/AjmainFayek733"
                        target="_blank"
                        className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150"
                    >
                        <FaFacebookSquare style={{ fontSize: "1.25rem" }} />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/ajmainfayek733"
                        target="_blank"
                        className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150"
                    >
                        <FaLinkedin style={{ fontSize: "1.25rem" }} />
                    </Link>
                    <Link
                        to="https://github.com/Ajmain-Fayek"
                        target="_blank"
                        className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150"
                    >
                        <FaGithubSquare style={{ fontSize: "1.25rem" }} />
                    </Link>
                </nav>
            </div>
            <aside className="bg-pink-200 py-2 text-center text-sm">
                <p>&copy; 2024 R-Coupons. All Rights Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;
