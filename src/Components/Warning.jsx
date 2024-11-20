import React from "react";
import { RxCross2 } from "react-icons/rx";

const Warning = (waring = "Demo Warning", id = "_1") => {
    const handleCross = () => {
        document.getElementById(id).classList = "hidden";
    };
    return (
        <div id={id} className="max-w-screen-2xl mx-auto text-center relative">
            <p className=" m-2 py-2 px-7 bg-red-100 border border-red-200 text-red-800 rounded-lg">
                {waring}
            </p>
            <button
                onClick={handleCross}
                className="absolute p-1 right-2 top-1.5"
            >
                <RxCross2 style={{ color: "#bb0000", fontSize: "1.25rem" }} />
            </button>
        </div>
    );
};

export default Warning;
