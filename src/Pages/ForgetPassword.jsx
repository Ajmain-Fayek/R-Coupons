import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthStateProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ForgetPassword = () => {
    const { forgetPassword, getEmail, setEmail } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState("");
    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        // Clear Previous Error message
        setErrorMsg("");

        forgetPassword(email)
            .then((res) => {
                console.log("res", res?.message);
                // const msg = res.message.match(/\(([^)]+)\)/)
                if (res?.message)
                    return setErrorMsg(res.message.match(/\(([^)]+)\)/)[1]);
                else {
                    setErrorMsg("Reset email Send");
                    return window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
                }
            })
            .catch((err) => {
                console.log("err", err?.message);
                // const msg = err.message.match(/\(([^)]+)\)/)
                if (err?.message)
                    return setErrorMsg(err.message.match(/\(([^)]+)\)/)[1]);
            });
    };
    return (
        <div className="max-w-screen-sm mx-auto mb-36 md:mb-24 mt-10">
            <Helmet>
                <title>Reset Password | R Coupons</title>
            </Helmet>
            <p className="text-sm text-zinc-500 400 mb-6">
                Please Enter Your Account Linked email to reset your password.
            </p>
            <form onSubmit={handleForgetPassword} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label
                        className="text-sm font-medium leading-none text-zinc-700"
                        htmlFor="first_name"
                    >
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                        id="email"
                        placeholder="Enter your Account Email"
                        name="email"
                        type="email"
                        value={getEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="rounded-md btn btn-neutral ">
                    Reset
                </button>
            </form>
            <Link
                to="/my-profile"
                className="text-blue-600 font-semibold underline mt-3 block w-fit"
            >
                Back to Profile
            </Link>
            {/* Error */}
            {errorMsg && (
                <p className="text-red-700 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                    {errorMsg}
                </p>
            )}
        </div>
    );
};

export default ForgetPassword;
