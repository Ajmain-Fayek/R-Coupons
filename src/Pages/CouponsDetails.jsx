import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Helmet } from "react-helmet-async";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useLoaderData, Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const CouponsDetails = () => {
    const {
        category,
        brand_name,
        description,
        rating,
        brand_logo,
        coupons,
        shop_Link,
        _id,
    } = useLoaderData();
    const cardBgColor = [
        "bg-sky-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
    ];
    const handleCopy = () => {
        toast.success("Text Coppied", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    return (
        <div className="mx-auto max-w-screen-2xl p-2 mb-36 md:mb-24">
            <Helmet>
                <title>{brand_name} | R Coupons</title>
            </Helmet>
            <div className="bg-purple-50 px-4 py-6 shadow-md rounded-xl">
                <div className="flex sm:flex-row flex-col items-center sm:justify-between gap-2 ">
                    <div className="flex sm:flex-row flex-col items-center gap-3">
                        <img
                            className="h-28 w-48 bg-base-300 rounded-md"
                            src={brand_logo}
                            alt={brand_name}
                        />
                        <div className="text-center space-y-2 sm:text-left">
                            <h3 className="font-semibold text-xl">
                                {brand_name}
                            </h3>
                            <p className="text-gray-600">{category}</p>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        Ratting:
                        <FaRegStarHalfStroke />
                        {rating}
                    </div>
                </div>
                {/* Coupons Card */}
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center gap-2 mt-4">
                    {coupons.map((coupon, index) => (
                        <div
                            key={_id + coupon.coupon_code}
                            className={`${
                                cardBgColor[index % cardBgColor.length]
                            } p-4 rounded-xl shadow-md space-y-2 border border-slate-200`}
                        >
                            <p>{coupon.condition}</p>
                            <p className="text-sm border-2 border-green-300 w-fit mx-auto px-2 bg-green-200 rounded-full">
                                {coupon.coupon_type}
                            </p>
                            <p>{coupon.description}</p>
                            <p>Ex: {coupon.expiry_date}</p>
                            <p className="bg-orange-300 shadow-md border-white border w-fit mx-auto px-4 py-2 rounded-md">
                                {coupon.coupon_code}
                            </p>
                            <div className="flex justify-center items-center gap-4">
                                <CopyToClipboard text={coupon.coupon_code}>
                                    <button
                                        onClick={handleCopy}
                                        className="btn bg-neutral text-white btn-sm hover:text-blue-500"
                                    >
                                        Copy Code
                                    </button>
                                </CopyToClipboard>
                                <Link
                                    target="_blank"
                                    to={shop_Link}
                                    className="btn btn-sm btn-primary text-gray-700"
                                >
                                    Use Now
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default CouponsDetails;
