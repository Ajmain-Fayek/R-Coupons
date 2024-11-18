import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthStateProvider";

const Register = () => {
    const { signUpWithEmailAndPassword, updateUserInfo } =
        useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useLocation();

    // Register user
    const handleRegister = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const LastName = e.target.lastName.value;
        const name = firstName + " " + LastName;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const photoURL = e.target.photoUrl.value;

        // Clear Previous Error messages
        setErrorMsg("");

        // Password validation
        const regexUpperCase = /(?=.*[A-Z])/;
        const regexLowerCase = /(?=.*[a-z])/;
        const regexLength = /.{6,}/;
        if (!regexUpperCase.test(password)) {
            return setErrorMsg("Password Must Contain an UpperCase letter A-Z");
        }
        if (!regexLowerCase.test(password)) {
            return setErrorMsg("Password Must Contain an LowerCase letter a-z");
        }
        if (!regexLength.test(password)) {
            return setErrorMsg("Password Must be at least 6 Character long");
        }
        if (!terms) return setErrorMsg("Accept Terms And Conditions!");
            // Create User
            signUpWithEmailAndPassword(email, password)
                .then(() => {
                    if (photoURL) {
                        updateUserInfo({ displayName: name, photoURL });
                    }
                    return navigate("/user/login");
                })
                .catch((err) => {
                    const msg = err.message.match(/\(([^)]+)\)/);
                    if (msg) return setErrorMsg(msg[1]);
                });
    };
    return (
        <div className="max-w-md mx-auto mt-6 space-y-6 rounded-lg p-10">
            <div className="flex flex-col space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                <p className="text-sm text-zinc-500 400">
                    Please fill in the form to create an account.
                </p>
            </div>
            <div>
                <form onSubmit={handleRegister} className="space-y-6">
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
                                name="firstName"
                                type="text"
                                required
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
                                name="lastName"
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
                            placeholder="Enter a Photo URL"
                            name="photoUrl"
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
                            required
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
                            required
                        />
                    </div>
                    <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                        <input
                            name="terms"
                            type="checkbox"
                            id="termsAndConditons"
                        />
                        <label
                            className="select-none text-sm font-medium"
                            htmlFor="termsAndConditons"
                        >
                            I accept all terms and conditions.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="rounded-md btn btn-neutral "
                    >
                        Register
                    </button>
                </form>
            </div>
            {errorMsg && (
                <p className="text-red-700 bg-red-50 border border-red-100 px-4 py-1 w-fit rounded-md">
                    {errorMsg}
                </p>
            )}
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
