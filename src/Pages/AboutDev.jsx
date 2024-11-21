import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AboutDev = () => {
    return (
        <div className="flex border rounded-2xl shadow-xl mx-auto mt-2 max-w-[350px] flex-col items-center justify-center space-y-4 p-8 mb-32 md:mb-24">
            <Helmet>
                <title>About Developer of R Coupons</title>
            </Helmet>
            <div className="group relative">
                <img
                    width={110}
                    height={110}
                    className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
                    src="https://lh3.googleusercontent.com/a/ACg8ocK12Hn76KyZc5guUIxSGVgAf9FvTpSlSGHFKot79QZaYVEoLjCa=s96-c"
                    alt="Ajmain fayek's Profile photo"
                />
                <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-base-100 bg-green-500"></span>
            </div>
            {/* Name and Title */}
            <div className="space-y-1 text-center">
                <h1 className="text-2xl text-gray-700">Ajmain Fayek</h1>
                <p className="text-sm text-gray-400">Web Programmer</p>
            </div>

            {/* bio  */}
            <p className="pb-2 text-center text-sm text-gray-500">
                Skilled web programmer with a passion for creating dynamic,
                intuitive, and visually appealing websites. With expertise in
                modern web technologies, focused on delivering seamless digital
                experiences tailored to user needs.
            </p>

            {/* social icons  */}
            <div className="flex justify-between gap-4 py-2">
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
            </div>
        </div>
    );
};

export default AboutDev;
