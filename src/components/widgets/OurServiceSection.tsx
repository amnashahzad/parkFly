import React, { useState } from 'react';
import OurServiceCard from '../shared/OurServiceCard';

const OurServiceSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Define the number of cards per slide based on screen size
    const cardsPerSlide = 1; // Default to 1 for mobile
    const cardsPerSlideDesktop = 3; // 3 cards per slide on desktop

    const data = [
        {
            title: "Airport Parking",
            desc: "Convenient and secure parking options at Heathrow.",
            image: "/airport parking.png"
        },
        {
            title: "Meet and Greet Parking",
            desc: "Hassle-free valet service right at the terminal.",
            image: "/Meet and greet parking.png"
        },
        {
            title: "Airport Transfer",
            desc: "Reliable transport to and from the airport.",
            image: "/Airport transfer.png"
        },
        {
            title: "Park and Ride",
            desc: "Economical parking with quick shuttle service.",
            image: "/park and ride.png"
        },
        {
            title: "Onsite Parking",
            desc: "Prime parking spots within the airport premises.",
            image: "/onsite parking.png"
        },
        {
            title: "Long & Short Stay",
            desc: "Flexible parking options for any trip duration.",
            image: "/Long and short stay.png"
        },
        {
            title: "Premium & Valet Parking",
            desc: "Luxury and convenience with our valet service.",
            image: "/premium parking.png"
        },
        {
            title: "Hotel & Parking",
            desc: "Combine your stay and parking for added convenience.",
            image: "/hotel and parking.png"
        },
        {
            title: "Airport Lounges",
            desc: "Relax in comfort before your flight with exclusive lounge access.",
            image: "/loungue icon.png"
        }
    ];

    const numSlides = Math.ceil(data.length / (window.innerWidth >= 640 ? cardsPerSlideDesktop : cardsPerSlide));

    const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-[-55px]'>
            <div>
                <h2 className='font-bold mb-2 text-2xl sm:text-4xl lg:text-[60px] text-center'>
                    Our Service
                </h2>
            </div>
            <div className='relative mt-[30px]'>
                <div className='overflow-hidden'>
                    <div className='flex' style={{ transform: `translateX(-${currentSlide * (100 / (window.innerWidth >= 640 ? cardsPerSlideDesktop : cardsPerSlide))}%)`, transition: 'transform 0.5s ease-in-out' }}>
                        {Array.from({ length: numSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className='flex'>
                                {data.slice(slideIndex * (window.innerWidth >= 640 ? cardsPerSlideDesktop : cardsPerSlide), (slideIndex + 1) * (window.innerWidth >= 640 ? cardsPerSlideDesktop : cardsPerSlide)).map((item, index) => (
                                    <OurServiceCard key={index} data={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Slide Indicators */}
                <div className='flex justify-center space-x-2 mt-6'>
                    {Array.from({ length: numSlides }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-[#F26922]' : 'bg-gray-200'}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServiceSection;
