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

    const cardBgColor = [
        "bg-sky-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
    ];

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
            <div className="max-w-screen-2xl space-y-4 p-2 mx-auto">
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
            {/* FAQ */}
            <div className="max-w-screen-2xl mx-auto p-2 mt-4 space-y-2">
                {SectionTitle("General FAQ")}
                <div className="collapse collapse-arrow bg-yellow-100">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is R Coupons for?
                    </div>
                    <div className="collapse-content">
                        <p>R Coupons is a one stop Coupon Collection website.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-yellow-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Is it legit?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, R coupons provides 100% legit coupon codes.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-yellow-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Does R Coupons have valuable Brands?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, R Coupon has a lot of well knows Brands.</p>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="mb-28 mx-auto text-center bg-green-50 py-10 mt-4">
                {SectionTitle("About Us")}
                <p className="max-w-screen-lg mx-auto px-6">
                    Welcome to <b>R Coupons</b> – your ultimate destination for
                    discovering the best deals and discounts! We understand the
                    thrill of saving money while shopping for your favorite
                    products and services. That’s why we’re here to connect you
                    with top-notch coupons, promo codes, and exclusive offers
                    from your favorite brands and stores. At
                    <b> R Coupons</b>, we strive to make savings simple and
                    accessible. Whether you’re hunting for discounts on gadgets,
                    fashion, dining, travel, or daily essentials, we’ve got you
                    covered. Our team works tirelessly to keep our database
                    up-to-date, ensuring you never miss out on a great deal. Why
                    pay full price when you can save with <b>R Coupons</b>?
                    Start exploring today and enjoy smart shopping at its
                    finest!
                </p>
            </div>
        </div>
    );
};

export default Home;
