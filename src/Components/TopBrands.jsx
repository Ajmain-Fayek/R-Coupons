import React from "react";
import Marquee from "react-fast-marquee";
import PhoneHub_SVG from "../Logos/PhoneHub_SVG";
import SmartHealth_SVG from "../Logos/SmartHealth_SVG";
import EcoTech from "../assets/BrandsLogo/EcoTechBD.png";
import FashionTech from "../assets/BrandsLogo/fashiontechlogoblack_small.png";
import GadgetZone from "../assets/BrandsLogo/GadgetZone_watermark_1660887393.webp";
import GameStore from "../assets/BrandsLogo/GameStorelogo.png";
import HT_Head from "../assets/BrandsLogo/HT-HeadLogo.png";
import Logo_PNG_95 from "../assets/BrandsLogo/Logo_PNG_95_190x@2x.avif";
import Techwear from "../assets/BrandsLogo/techwear-logo-shadxw_1.avif";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const TopBrands = () => {
    const navigate = useNavigate();
    const handleMarqueeClick = () => {
        navigate("/brands");
    };
    return (
        <div className="bg-pink-50">
            <div className="max-w-screen-2xl mx-auto my-10 text-center">
                {SectionTitle("Top Brands")}
                <div className="rounded-xl">
                    <Marquee pauseOnHover={true} speed={125}>
                        <div
                            onClick={handleMarqueeClick}
                            className="flex gap-28 items-center bg-pink-50 py-4"
                        >
                            <PhoneHub_SVG />
                            <SmartHealth_SVG />
                            <img className="h-16" src={EcoTech} />
                            <img className="h-16" src={FashionTech} />
                            <img className="h-16" src={GadgetZone} />
                            <img className="h-16" src={GameStore} />
                            <img className="h-16" src={HT_Head} />
                            <img className="h-16" src={Logo_PNG_95} />
                            <img className="h-16" src={Techwear} />
                            <div></div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default TopBrands;
