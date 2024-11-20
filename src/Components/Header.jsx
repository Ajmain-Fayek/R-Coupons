import React from "react";
import bg from "../assets/cool-background (1).png";
import bg2 from "../assets/Humaaans - Friend Meeting.png";
import bg3 from "../assets/Family Values-Shopping.png";

const Header = (subtile, name) => {
    return (
        <div className="mx-auto text-center max-w-screen-2xl px-2 py-2 relative">
            <img className="h-24 w-full rounded-lg object-cover" src={bg} />
            <img className="absolute top-0 right-4 h-28" src={bg2} />
            <img className="absolute top-4 left-4 h-20" src={bg3} />
            <p className="font-semibold text-2xl absolute left-0 right-0 top-10">
                {subtile} {name && <b>{name}</b>}
            </p>
        </div>
    );
};

export default Header;
