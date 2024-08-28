import React from "react";

const ServiceSection = () => {
  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between">
      {/* <!-- Left Section --> */}
      <div className="w-full md:w-[40%] px-4 mb-6 md:mb-0 md:ml-[3%]">
        <h2 className="text-[24px] md:text-[32px] font-bold text-black mb-4 md:mb-6 leading-tight">
          Why Choose Park Fly Heathrow
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Experience unbeatable rates, seamless booking, and comprehensive
          parking solutions at Heathrow. Whether it's airport or hotel parking,
          our 24/7 customer service is always here to assist you.
        </p>
      </div>

      {/* <!-- Right Section --> */}
      <div className="relative w-full md:w-[50%] lg:w-[45%] mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center">
        {/* <!-- Left Arrow Button with new icon and shadow --> */}
        <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3 mb-4 md:mb-0 focus:outline-none shadow-xl">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 16l-4-4 4-4m-4 4h7"
            />
          </svg>
        </button>

        {/* <!-- Card with enhanced shadow --> */}
        <div className="bg-white rounded-lg shadow-xl p-6 text-center w-[90%] md:w-[80%] lg:w-[70%]">
          {/* <!-- Best Price Guarantee Icon with new design and shadow --> */}
          <div className="text-black rounded-full h-12 w-12 flex justify-center items-center mx-auto mb-4 shadow-xl">
            {/* Updated SVG for a better "Best Price Guarantee" icon */}
            <svg
              className="h-8 w-8 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.464a1 1 0 0 0-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.388-2.464a1 1 0 0 0-1.176 0l-3.388 2.464c-.784.57-1.84-.197-1.54-1.118l1.286-3.967a1 1 0 0 0-.364-1.118L2.343 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 0 0 .95-.69L9.049 2.927z" />
            </svg>
          </div>

          {/* <!-- Title and Description --> */}
          <h2 className="text-xl font-bold mb-4">Best Price Guarantee</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Experience unbeatable rates, seamless booking, and comprehensive
            parking solutions at Park Fly Heathrow.
          </p>
        </div>

        {/* <!-- Right Arrow Button with new icon and shadow --> */}
        <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3 mt-4 md:mt-0 focus:outline-none shadow-xl">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 8l4 4-4 4m4-4H7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
