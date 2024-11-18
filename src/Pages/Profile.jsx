import React from "react";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

const Profile = () => {
    return (
        <div className="flex mx-auto sm:mt-10 max-w-[350px] flex-col items-center justify-center space-y-4 p-8">
            <div className="group relative">
                <img
                    width={110}
                    height={110}
                    className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="card navigate ui"
                />
                <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-base-100 bg-green-500"></span>
            </div>
            {/* Name and Title */}
            <div className="space-y-1 text-center">
                <h1 className="text-2xl text-gray-700">Nullify</h1>
                <p className="text-sm text-gray-400">UI/UX Designer</p>
            </div>

            {/* bio  */}
            <p className="pb-2 text-center text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                error ipsum officiis debitis quo odio?
            </p>

            {/* social icons  */}
            <div className="flex justify-between gap-4 py-2">
                <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                    <FaInstagramSquare style={{ fontSize: "1.25rem" }} />
                </div>
                <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                    <FaFacebookSquare style={{ fontSize: "1.25rem" }} />
                </div>
                <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                    <FaLinkedin style={{ fontSize: "1.25rem" }} />
                </div>
                <div className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                    <FaGithubSquare style={{ fontSize: "1.25rem" }} />
                </div>
            </div>
            <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">
                Update Profile
            </button>
        </div>
    );
};

export default Profile;
