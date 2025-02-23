import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import BrandsCard from "../Components/BrandsCard";
import { Helmet } from "react-helmet-async";

const Brands = () => {
    const data = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [search, setSearch] = useState(false);
    const [showData, setShowData] = useState([]);
    const initialyVisibleCards = 10;
    const cardToShow = showAll ? data : data.slice(0, initialyVisibleCards);

    const cardBgColor = [
        "bg-sky-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
    ];

    // Handle Search
    const handleSearch = () => {
        const search = document.getElementById("search1234").value;
        if (search == 0) return setSearch(false);

        // clear data array
        showData.splice(0, showData.length);

        setShowData(
            showData.push(
                data.filter((d) =>
                    d.brand_name.toLowerCase().includes(search.toLowerCase())
                )
            )
        );
        setSearch(true);
        console.log(showData);
    };
    return (
        <div className="mb-36 md:mb-24">
            <Helmet>
                <title>Brands | R Coupons</title>
            </Helmet>
            {SectionTitle("Brands")}
            <div className="mb-4 flex items-center p-2 max-w-screen-xl rounded-md mx-auto">
                <input
                    className="flex w-3/4 h-12 rounded-l-lg  border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                    placeholder="Search"
                    type="text"
                    name="search"
                    id="search1234"
                />
                <button
                    onClick={handleSearch}
                    className="btn w-1/4 rounded-none rounded-r-lg border-gray-200 bg-purple-100"
                >
                    Search
                </button>
            </div>
            <div className="max-w-screen-2xl space-y-4 p-2 mx-auto">
                {search
                    ? showData &&
                      showData.map(
                          (data, index) =>
                              data && (
                                  <BrandsCard
                                      key={data._id}
                                      img={data.brand_logo}
                                      brandName={data.brand_name}
                                      rating={data.rating}
                                      category={data.category}
                                      description={data.description}
                                      isSaleOn={data.isSaleOn}
                                      _id={data._id}
                                      cardColor={
                                          cardBgColor[
                                              index % cardBgColor.length
                                          ]
                                      }
                                  />
                              )
                      )
                    : cardToShow.map(
                          (data, index) =>
                              data && (
                                  <BrandsCard
                                      key={data._id}
                                      img={data.brand_logo}
                                      brandName={data.brand_name}
                                      rating={data.rating}
                                      category={data.category}
                                      description={data.description}
                                      isSaleOn={data.isSaleOn}
                                      _id={data._id}
                                      cardColor={
                                          cardBgColor[
                                              index % cardBgColor.length
                                          ]
                                      }
                                  />
                              )
                      )}
                {}
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

export default Brands;
