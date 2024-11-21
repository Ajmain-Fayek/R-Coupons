import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthStateProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { signInWithGoogle, signInUser } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgGoogle, setErrorMsgGoogle] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Sign in with ** EMAIL & PASS **
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Clear Previous Error Message
        setErrorMsg("");

        // Sign in User
        signInUser(email, password)
            .then(() => navigate("/"))
            .catch((err) => {
                const msg = err.message.match(/\(([^)]+)\)/);
                if (msg) return setErrorMsg(msg[1]);
            });
    };

    //Sign in With **GOOGLE**
    const handleGoogleSignIn = () => {
        // Clear Previus Error Message
        setErrorMsgGoogle("");
        signInWithGoogle()
            .then(() => navigate("/"))
            .catch((err) => {
                const msg = err.message.match(/\(([^)]+)\)/);
                if (msg) return setErrorMsgGoogle(msg[1]);
            });
    };
    return (
        <div className="max-w-screen-lg mx-auto p-6 mt-6 sm:px-8 sm:py-10 lg:px-12 md:mb-24  mb-36">
            <Helmet>
                <title>Login | R Coupons</title>
            </Helmet>
            <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                    {/* Left side form */}
                    <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                        Sign In
                    </h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4 flex flex-col space-y-4 relative">
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                                placeholder="Username"
                                type="text"
                                name="email"
                            />
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="p-2 absolute top-11 bg-white hover:bg-white right-2"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                            <input
                                name="remember"
                                type="checkbox"
                                id="keep_signed_in"
                            />
                            <label
                                className="select-none text-sm font-medium"
                                htmlFor="keep_signed_in"
                            >
                                Keep me signed in
                            </label>
                        </div>
                        <button className="inline-flex h-10 w-full items-center justify-center rounded-md btn btn-neutral px-4 py-2 text-sm font-medium uppercase ">
                            Sign In
                        </button>
                    </form>
                    <p className="mt-6 flex gap-1 text-sm">
                        Did you
                        <a
                            className="text-blue-600 font-semibold underline"
                            href="#"
                        >
                            forget your password?
                        </a>
                    </p>
                    {/* Error */}
                    {errorMsg && (
                        <p className="text-red-700 mt-4 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                            {errorMsg}
                        </p>
                    )}
                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="mb-6  text-sm">
                        If you don&apos;t already have an account click the
                        button below to create your account.
                    </p>
                    <Link
                        to={"/user/register"}
                        className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md  px-4 py-2 text-sm font-medium uppercase btn btn-primary "
                    >
                        Create Account
                    </Link>
                    <p className="my-4 text-center">OR</p>
                    <button
                        onClick={handleGoogleSignIn}
                        className="mb-2 btn flex h-10 w-full items-center justify-center gap-1 rounded-md border border-gray-200 bg-base-200 px-4 py-2 text-sm font-medium"
                    >
                        <FcGoogle style={{ fontSize: "1.25rem" }} />
                        SIGN IN WITH GOOGLE
                    </button>
                    {/* Error */}
                    {errorMsgGoogle && (
                        <p className="text-red-700 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                            {errorMsgGoogle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
