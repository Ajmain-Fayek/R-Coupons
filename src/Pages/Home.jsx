import React, { useContext } from "react";
import Header from "../Components/Header";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthStateProvider";
import { Carousel } from "../Components/Carousel";

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Home | R Coupons</title>
            </Helmet>
            {user && Header("Welcome Back", user.displayName)}
            <div className="max-w-screen-2xl p-2 mx-auto">
                <Carousel />
            </div>
        </div>
    );
};

export default Home;
