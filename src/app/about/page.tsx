import { Button } from "@/components/ui/button";
import ContactSection from "@/components/widgets/ContactSection";
import Image from "next/image";
import React from "react";
import AeroPlane from "@/app/Images/Group 48096157.png";
import SmileFace from "@/app/Images/smileys.png";
import Car from "@/app/Images/smart-car.png";
import Reactangular from "@/app/Images/Rectangle 1828.png";
import { useState } from "react";
import ParkingOptions from "@/app/about/ParkingOptions";

const page = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 text-start">
      <section className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-5 md:p-10 flex flex-col justify-between">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ letterSpacing: "1px", lineHeight: "1.2", width: "100%" }}
            >
              Your Reliable Choice for Convenient, Secure Parking at Heathrow
            </h2>

            <div className="mt-6 md:mt-8 mb-6 md:mb-12 items-center">
              <Button className="bg-[#F26922] px-6 md:px-10 font-semibold w-fit mb-4 mt-1">
                Learn More
              </Button>
              <div className="mt-4 md:mt-6">
                <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-8">
                  <div className="flex flex-col items-center space-y-2">
                    <Image src={SmileFace} alt="smileface" className="w-16 h-16"/>
                    <span className="text-gray-600 text-sm font-medium">
                      96% Satisfaction Rate
                    </span>
                  </div>
                  <div className="w-full md:w-[15%] mt-4 md:mt-[15%] border-t border-gray-400"></div>{" "}
                  {/* Horizontal line */}
                  <div className="flex flex-col items-center space-y-2 mt-4 md:mt-0">
                    <Image src={Car} alt="car" className="w-16 h-16" />
                    <span className="text-gray-600 text-sm font-medium">
                      4212+ Vehicles Parked
                    </span>
                  </div>
                </div>
                <div className="w-full h-1 bg-[#F26922] mt-2"></div>{" "}
                {/* Single orange line below all text */}
              </div>
            </div>
          </div>
          <div className="relative md:ml-[100px]">
            <div className="p-4 h-[300px] md:h-[430px] w-full md:w-[390px] rounded-[20px] bg-[#F26922]">
              <div className="relative p-4 h-full w-full md:w-[400px] rounded-[20px] ml-[-20px] md:ml-[-50px] mt-[-20px] md:mt-[5px]">
                <Image
                  src="/airplane_1.png"
                  alt="Parking Lot with Airplane"
                  className="rounded-[20px]"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-9">
        <div className="container mx-auto mt-6 md:mt-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="relative p-2 md:ml-9 w-full md:w-[70%] h-[200px] md:h-[110%] ml-[0px] md:ml-[120px]">
                <Image
                  src="/Reactangular_1.png"
                  alt="Airport"
                  className="rounded-[30px]"
                  layout="fill"
                  objectFit="cover" // This ensures the image covers the container without distortion
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center md:ml-[-25px]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 w-full md:w-[70%]">
                Your Trusted Partner For Hassle-Free Airport Parking
              </h2>
              <p className="text-black text-sm md:text-base mb-4 md:mb-6 w-full md:w-[80%]">
                At Budget Parking Heathrow, We're Committed To Making Your Travel
                Experience As Smooth As Possible. Founded On The Principle Of
                Providing Secure, Affordable, And Convenient Parking, We've Become A
                Trusted Choice For Travelers. Our Mission is simple: To Offer Reliable
                Parking Solutions That Give You Peace Of Mind While You're Away. We
                Continuously Strive To Enhance Our Services, Making Airport Parking A
                Seamless Part Of Your Journey. Trust Us To Take The Stress Out Of
                Parking So You Can Focus On What Really Matters - Your Trip.
              </p>
              <button className="bg-[#F26922] text-white font-bold py-2 px-4 rounded w-full md:w-[30%]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <ParkingOptions />

      <section className="py-8 md:py-16 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full z-0">
          {/* <img
            src="/Ellipse 18.png"
            alt="Decorative"
            className="object-cover h-[850px]"
          /> */}
        </div>
        <div className="relative z-10 container mx-auto py-6 md:py-12">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">Why Choose Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-white rounded-lg shadow-md p-4 md:p-6"
              style={{ width: "100%", height: "auto", minHeight: "200px" }}
            >
              <h2 className="text-lg md:text-xl font-bold mb-4 mt-4 md:mt-8">Affordable Rates</h2>
              <p className="text-black">
                Save Money With Our Budget-Friendly Parking Options.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-4 md:p-6"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "200px",
                backgroundColor: "#F26922",
              }}
            >
              <h2 className="text-lg md:text-xl font-bold mb-4 text-white">
                Secure Facilities
              </h2>
              <p className="text-white">
                Rest Easy Knowing Your Vehicle Is Protected By Advanced Security
                Measures.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-4 md:p-6"
              style={{ width: "100%", height: "auto", minHeight: "200px" }}
            >
              <h2 className="text-lg md:text-xl font-bold mb-4 mt-4 md:mt-8">Convenient Locations</h2>
              <p className="text-gray-600">
                Access Easily Reachable Parking Close To Heathrow Terminals.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-4 md:p-6"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "200px",
                backgroundColor: "#F26922",
              }}
            >
              <h2 className="text-lg md:text-xl font-bold mb-4 text-white">
                Customer Satisfaction
              </h2>
              <p className="text-white">
                Join Countless Travelers Who Trust Us For A Hassle-Free Parking
                Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default page;
