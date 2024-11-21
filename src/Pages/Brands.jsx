import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import BrandsCard from "../Components/BrandsCard";
import { Helmet } from "react-helmet-async";

const Brands = () => {
    const data = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const initialVisibleCards = 10;

    const cardBgColor = [
        "bg-sky-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
    ];

    // Filtered data based on search query
    const filteredData = searchQuery
        ? data.filter((d) =>
              d.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : data;

    // Data to display based on "Show All" state
    const cardToShow = showAll
        ? filteredData
        : filteredData.slice(0, initialVisibleCards);

    // Handle search query input
    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="mb-36 md:mb-24">
            <Helmet>
                <title>Brands | R Coupons</title>
            </Helmet>
            {SectionTitle("Brands")}
            <div className="mb-4 flex items-center p-2 max-w-screen-xl rounded-md mx-auto">
                <input
                    className="flex w-3/4 h-12 rounded-l-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                    placeholder="Search"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInput}
                />
                <button
                    onClick={() => setSearchQuery("")}
                    className="btn w-1/4 rounded-none rounded-r-lg border-gray-200 bg-purple-100"
                >
                    Clear
                </button>
            </div>
            <div className="max-w-screen-2xl space-y-4 p-2 mx-auto">
                {cardToShow.length > 0 ? (
                    cardToShow.map((data, index) => (
                        <BrandsCard
                            key={data._id}
                            img={data.brand_logo}
                            brandName={data.brand_name}
                            rating={data.rating}
                            category={data.category}
                            description={data.description}
                            isSaleOn={data.isSaleOn}
                            _id={data._id}
                            cardColor={cardBgColor[index % cardBgColor.length]}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No brands match your search query.
                    </p>
                )}
                {/* Show More / Show Less Button */}
                {filteredData.length > initialVisibleCards && (
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

export default Brands;
