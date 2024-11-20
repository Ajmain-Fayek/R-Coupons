import React, { useContext, useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/favicon.png";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import demo from "../assets/Humaaans - Standing (1).png";
import { AuthContext } from "../Context/AuthStateProvider";

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const close = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", close);
        return () => {
            document.removeEventListener("mousedown", close);
        };
    }, []);

    // Sign Out
    const handleSignOut = () => {
        logOutUser().then(() => navigate("/"));
    };
    return (
        <div className="bg-pink-100 z-[9999] sticky top-0 shadow-md">
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
                <ul className="sm:flex hidden items-center justify-between gap-4 text-slate-900 lg:gap-6">
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
                <div className="sm:flex hidden items-center gap-4">
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
                        <Link title="Sign In" to={"/user/login"}>
                            <MdOutlineLogin style={{ fontSize: "1.5rem" }} />
                        </Link>
                    )}
                </div>
                {/* Mobile menu */}
                <div className="relative flex sm:hidden items-center">
                    <div
                        ref={dropDownRef}
                        className="relative mx-auto w-fit text-black"
                    >
                        <button onClick={() => setOpen((prev) => !prev)}>
                            <img
                                src={
                                    user
                                        ? user.photoURL
                                            ? user.photoURL
                                            : demo
                                        : demo
                                }
                                className=" h-8 w-8 bg-base-300 rounded-full border border-red-300 shadow-md"
                            />
                        </button>
                        <ul
                            className={`${
                                open ? "visible duration-300" : "invisible"
                            } absolute right-0 top-12 z-50 w-36 text-center py-2 rounded-md bg-slate-100 shadow-md space-y-4`}
                        >
                            {user && (
                                <>
                                    <li>
                                        <Link
                                            to="/my-profile"
                                            className="hover:underline"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/my-coupons"
                                            className="hover:underline"
                                        >
                                            My Coupons
                                        </Link>
                                    </li>
                                </>
                            )}
                            <li className="hover:underline">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to="/brands">Brands</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to="/about-dev">About Dev</Link>
                            </li>
                            {user ? (
                                <li className="w-full flex justify-center">
                                    <Link
                                        onClick={handleSignOut}
                                        title="Sign Out"
                                    >
                                        <MdOutlineLogout
                                            style={{
                                                fontSize: "1.5rem",
                                            }}
                                        />
                                    </Link>
                                </li>
                            ) : (
                                <li className="w-full flex justify-center">
                                    <Link title="Sign In" to={"/user/login"}>
                                        <MdOutlineLogin
                                            style={{
                                                fontSize: "1.5rem",
                                            }}
                                        />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
