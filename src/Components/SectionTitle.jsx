import React from "react";
import Family from "../assets/Family Values-Shopping.png";

const SectionTitle = (setTitle = "Set Title") => {
    return (
        <div className="flex justify-center mx-auto items-center gap-2 py-4 drop-shadow-lg">
            <img className="sm:h-20 h-14" src={Family} />
            <h3 className="sm:text-4xl text-xl font-bold">{setTitle}</h3>
            <img className="sm:h-20 h-14" src={Family} />
        </div>
    );
};

export default SectionTitle;
