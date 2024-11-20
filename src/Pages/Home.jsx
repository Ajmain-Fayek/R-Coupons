import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthStateProvider";
import { Carousel } from "../Components/Carousel";
import TopBrands from "../Components/TopBrands";
import SectionTitle from "../Components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import SaleOnBrandCard from "../Components/SaleOnBrandCard";

const Home = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const initialyVisibleCards = 5;
    const data2 = data.filter((data) => {
        if (data.isSaleOn) return data;
    });
    const cardToShow = showAll ? data2 : data2.slice(0, initialyVisibleCards);
    console.log(data2);

    const cardBgColor = [
        "bg-sky-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
    ];

    const cardKeys = 111;
    return (
        <div>
            <Helmet>
                <title>Home | R Coupons</title>
            </Helmet>
            {user && Header("Welcome Back", user.displayName)}
            <div className="max-w-screen-2xl p-2 mx-auto">
                <Carousel />
            </div>
            <TopBrands />
            <div className="max-w-screen-2xl space-y-4 p-2 mx-auto mb-28">
                {SectionTitle("Brands On Sale")}
                {cardToShow.map(
                    (data, index) =>
                        data.isSaleOn && (
                            <SaleOnBrandCard
                                key={data._id}
                                img={data.brand_logo}
                                brandName={data.brand_name}
                                coupons={data.coupons.length}
                                category={data.category}
                                cardColor={
                                    cardBgColor[index % cardBgColor.length]
                                }
                            />
                        )
                )}
                {/* Show More / Show Less Button */}
                {data.length > initialyVisibleCards && (
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn btn-neutral rounded-lg transition"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
