import React from "react";

const SaleOnBrandCard = ({
    img,
    brandName = "Brand Name",
    coupons = 2,
    category = "Category",
    cardColor = "bg-yellow-100",
}) => {
    return (
        <div
            className={`${cardColor} flex sm:flex-row flex-col items-center sm:justify-between gap-2 max-w-screen-md mx-auto shadow-md p-4 rounded-lg`}
        >
            <div className="flex sm:flex-row flex-col items-center gap-3">
                <img
                    className="h-20 w-32 bg-base-300 rounded-md"
                    src={img}
                    alt={brandName}
                />
                <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-xl">{brandName}</h3>
                    <p className="text-gray-600">{category}</p>
                </div>
            </div>
            <p className="font-semibold text-lg">
                Coupons Available: {coupons}
            </p>
        </div>
    );
};

export default SaleOnBrandCard;
