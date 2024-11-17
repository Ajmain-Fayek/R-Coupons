import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="max-w-md mx-auto mt-6 space-y-6 rounded-lg p-10">
            <div className="flex flex-col space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                <p className="text-sm text-zinc-500 400">
                    Please fill in the form to create an account.
                </p>
            </div>
            <div>
                <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
                        <div className="space-y-2 text-sm">
                            <label
                                className="text-sm font-medium leading-none text-zinc-700"
                                htmlFor="first_name"
                            >
                                First Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                id="first_name"
                                placeholder="Enter first name"
                                name="first_name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label
                                className="text-sm font-medium leading-none text-zinc-700 "
                                htmlFor="last_name"
                            >
                                Last Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                                id="last_name"
                                placeholder="Enter last name"
                                name="last_name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <label
                            className="text-sm font-medium leading-none text-zinc-700 300"
                            htmlFor="profile_pic"
                        >
                            Photo URL
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                            id="profile_pic"
                            placeholder="Enter your email"
                            name="profile_pic"
                            type="url"
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label
                            className="text-sm font-medium leading-none text-zinc-700 300"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label
                            className="text-sm font-medium leading-none text-zinc-700"
                            htmlFor="password_"
                        >
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none"
                            id="password_"
                            placeholder="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <button className="rounded-md btn btn-neutral ">
                        Register
                    </button>
                </form>
            </div>
            <p>
                Already have an account?{" "}
                <Link
                    to={"/user/login"}
                    className="link-hover text-blue-600 underline font-semibold"
                >
                    Signin
                </Link>
            </p>
        </div>
    );
};

export default Register;
