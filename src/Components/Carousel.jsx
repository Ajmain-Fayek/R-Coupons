import { useCallback, useEffect, useState } from "react";

export const Carousel = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = [
        "https://i.ibb.co.com/Bj1CGKL/new-look-sales.jpg",
        "https://i.ibb.co.com/prvv6N0/9742750.jpg",
        "https://i.ibb.co.com/K0HGNvd/326405194-2192196537656427-4084860210684442555-n.jpg",
        "https://i.ibb.co.com/fvdDfGT/52001192-2314812988796758-2112098460420276224-n.jpg",
        "https://i.ibb.co.com/1ZpsQcx/65964147-2404718443139545-3562286540052758528-n.png",
    ];
    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
        );
    const nextSlider = useCallback(
        () =>
            setCurrentSlider((currentSlider) =>
                currentSlider === carouselImages.length - 1
                    ? 0
                    : currentSlider + 1
            ),
        [carouselImages.length]
    );

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden rounded-xl">
            {/* arrow left */}
            <button
                onClick={prevSlider}
                className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-pink-50 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
                <svg
                    className="icon h-4 w-4 fill-black md:h-6 md:w-6"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                </svg>
            </button>
            {/* arrow right */}
            <button
                onClick={nextSlider}
                className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-pink-50 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
                <svg
                    className="icon h-4 w-4 fill-black md:h-6 md:w-6"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                >
                    <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                </svg>
            </button>
            {/* dots */}
            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                {carouselImages.map((img, idx) => (
                    <button
                        key={`${img}_${idx}`}
                        onClick={() => setCurrentSlider(idx)}
                        className={`rounded-full duration-500 bg-pink-300 ${
                            currentSlider === idx ? "w-8" : "w-2"
                        } h-2`}
                    ></button>
                ))}
            </div>
            {/* Carousel container */}
            <div
                className="ease-linear duration-500 flex transform-gpu rounded-xl"
                style={{ transform: `translateX(-${currentSlider * 100}%)` }}
            >
                {/* sliders */}
                {carouselImages.map((slide, idx) => (
                    <img
                        key={slide}
                        src={slide}
                        className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover rounded-xl"
                        alt={`Slider - ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
