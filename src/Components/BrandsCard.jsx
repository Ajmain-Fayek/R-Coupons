import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const BrandsCard = ({
    img,
    brandName = "Brand Name",
    rating = 2,
    category = "Category",
    description = "High-end tech accessories for fashion enthusiasts.",
    isSaleOn = false,
    _id = 0,
    cardColor = "bg-yellow-100",
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/brand/${_id}`);
    };
    return (
        <div
            className={`${cardColor} text-center relative cursor-pointer max-w-screen-md mx-auto shadow-md p-4 rounded-lg`}
        >
            <div className="flex sm:flex-row flex-col items-center sm:justify-between gap-2">
                <div className="flex sm:flex-row flex-col items-center gap-3">
                    <img
                        className="h-20 w-32 bg-base-300 rounded-md"
                        src={img}
                        alt={brandName}
                    />
                    <div className="text-center space-y-2 sm:text-left">
                        <h3 className="font-semibold text-xl">{brandName}</h3>
                        <p className="text-gray-600">{category}</p>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <FaRegStarHalfStroke />
                    {rating}
                </div>
            </div>
            <button
                onClick={handleClick}
                className="btn btn-neutral btn-sm text-white mt-4"
            >
                View Coupons
            </button>
            {isSaleOn && (
                <p className="absolute right-0 top-0 bg-red-300 py-1 px-2 text-sm sm:text-base rounded-lg animate__animated animate__tada animate__infinite animate__slow">
                    Sales On
                </p>
            )}
        </div>
    );
};

export default BrandsCard;
