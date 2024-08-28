"use client";
import React, { useEffect, useState } from "react";

import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaPoundSign } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { CiCalendar, CiClock1, CiLocationOn } from "react-icons/ci";
import PaymentSelects from "./PaymentSelects";

// ContactDetails Component
const ContactDetails = ({ formData, setFormData }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [people, setPeople] = useState(0);

  const handleIncrement = () => {
    setPeople(people + 1);
  };

  const handleDecrement = () => {
    setPeople(people - 1);
  };
  const router = useRouter();
  return (
    <>
      <h1 className="text-4xl text-center font-semibold mb-5">
        Parking <span className="text-[#F26922] font-semibold">Booking</span>{" "}
        Form
      </h1>
      <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg space-y-6">
        {/* Contact Details Section */}
        <h2 className="text-lg sm:text-xl md:text-[32px] font-bold mb-10">
          Contact Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Title Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              Title*
            </label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
            >
              <option value="">Select a Title</option>
              <option value="mr">Mr.</option>
              <option value="ms">Ms.</option>
              <option value="mrs">Mrs.</option>
            </select>
          </div>

          {/* First Name Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[18px] font-semibold">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className=" border-[1px] p-2 bg-[#ECE8E8] rounded-lg w-full border-gray-500 border-opacity-50"
            />
            {/* <label>Only letters, spaces, and hyphens</label> */}
          </div>

          {/* Last Name Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              Last Name*
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-[1px] p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            {/* <label>Only letters, spaces, and hyphens</label> */}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[1px] p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            {/* <label>Only valid email addresses</label> */}
          </div>

          {/* Contact Number Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              Contact Number*
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="border-[1px] p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
          </div>

          {/* People Field */}
          <div className="relative space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              People*
            </label>
            <div className="relative">
              <input
                type="text"
                value={people}
                readOnly
                className="border-[1px] p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
              />
              <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-2">
                <button
                  className="text-gray-600 hover:text-black text-xs"
                  onClick={handleIncrement}
                >
                  <FaChevronUp />
                </button>
                <button
                  className="text-gray-600 hover:text-black text-xs"
                  onClick={handleDecrement}
                >
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>

          {/* Address Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              Address*
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border-[1px] p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            {/* <label>Only letters, numbers, spaces, commas, periods, and hyphens</label> */}
          </div>

          {/* Post Code Field */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base md:text-[20px] font-semibold">
              Post Code*
            </label>
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className="border-[1px] p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            {/* <label>Only letters, numbers, spaces, and hyphens (3 to 10 characters)</label> */}
          </div>
        </div>

        <p className="md:mt-4 text-sm md:w-[45%]">
          You will receive booking confirmation, parking procedure, and car park
          details on the above-entered email address.
        </p>

        {/* Flight Details Section */}
        {/* <div className="mt-8">
    <h2 className="block mb-6 text-lg sm:text-xl md:text-[32px] font-bold">
      Do You Have Travel Details?
    </h2>
    <div className="flex items-center gap-4 mb-4">
      <p className="capitalize font-semibold text-sm sm:text-base">
        Do you have flight details?
      </p>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="flightDetailsConfirmation"
          value="yes"
          onChange={handleChange}
          className="mr-2"
        />
        <label className="mr-4 text-sm sm:text-base">Yes</label>
        <input
          type="radio"
          name="flightDetailsConfirmation"
          value="no"
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm sm:text-base">No</label>
      </div>
    </div>

    {formData?.flightDetailsConfirmation === "yes" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Departure Terminal 
        <div className="flex flex-col space-y-2">
          <label className="block text-sm sm:text-base md:text-[20px] font-bold">
            Departure Terminal*
          </label>
          <select
            name="departureTerminal"
            className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
            onChange={handleChange}
          >
            <option>Select Terminal</option>
            <option value="terminal2">Terminal 2</option>
            <option value="terminal3">Terminal 3</option>
            <option value="terminal4">Terminal 4</option>
            <option value="terminal5">Terminal 5</option>
          </select>
        </div>

        {/* Return Terminal
        <div className="flex flex-col space-y-2">
          <label className="block text-sm sm:text-base md:text-[20px] font-bold">
            Return Terminal*
          </label>
          <select
            name="returnTerminal"
            className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
            onChange={handleChange}
          >
            <option>Select Terminal</option>
            <option value="terminal2">Terminal 2</option>
            <option value="terminal3">Terminal 3</option>
            <option value="terminal4">Terminal 4</option>
            <option value="terminal5">Terminal 5</option>
          </select>
        </div>

        {/* Return Flight No 
        <div className="flex flex-col space-y-2">
          <label className="block text-sm sm:text-base md:text-[20px] font-bold">
            Return Flight No*
          </label>
          <input
            type="text"
            name="returnFlightNumber"
            value={formData.returnFlightNumber}
            onChange={handleChange}
            className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
          />
        </div>
      </div>
    )}
  </div> */}
      </div>

      <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg space-y-6">
  {/* Flight Details Section */}
  <div className="mt-8">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
      <h2 className="text-lg sm:text-xl md:text-[32px] font-bold">
        Do You Have Travel Details?
      </h2>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="flightDetailsConfirmation"
          value="yes"
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm sm:text-base">Yes</label>
        <input
          type="radio"
          name="flightDetailsConfirmation"
          value="no"
          onChange={handleChange}
          className="ml-2 mr-2"
        />
        <label className="text-sm sm:text-base">No</label>
      </div>
    </div>

    {formData?.flightDetailsConfirmation === "yes" && (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Departure Terminal */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm sm:text-base md:text-[20px] font-bold">
            Departure Terminal*
          </label>
          <select
            name="departureTerminal"
            className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
            onChange={handleChange}
          >
            <option>Select Terminal</option>
            <option value="terminal2">Terminal 2</option>
            <option value="terminal3">Terminal 3</option>
            <option value="terminal4">Terminal 4</option>
            <option value="terminal5">Terminal 5</option>
          </select>
        </div>

        {/* Return Terminal */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm sm:text-base md:text-[20px] font-bold">
            Return Terminal*
          </label>
          <select
            name="returnTerminal"
            className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
            onChange={handleChange}
          >
            <option>Select Terminal</option>
            <option value="terminal2">Terminal 2</option>
            <option value="terminal3">Terminal 3</option>
            <option value="terminal4">Terminal 4</option>
            <option value="terminal5">Terminal 5</option>
          </select>
        </div>

        {/* Return Flight No */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm sm:text-base md:text-[20px] font-bold">
            Return Flight No*
          </label>
          <input
            type="text"
            name="returnFlightNumber"
            value={formData.returnFlightNumber}
            onChange={handleChange}
            className="border-[1px] bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
          />
        </div>
      </div>
    )}
  </div>
</div>

    </>
  );
};

// VehicleDetails Component

// PaymentDetails Component
const PaymentDetails = ({ formData, setFormData }: any) => {
  const router = useRouter();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const addSmsService = (e: any) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        smsService: true,
        price: JSON.stringify(+parseFloat(formData.price).toFixed(2) + 0.9),
      });
    } else {
      setFormData({
        ...formData,
        smsService: false,
        price: JSON.stringify(+parseFloat(formData.price).toFixed(2) - 0.9),
      });
    }
  };
  return (
<>
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="p-4 shadow-[0_1px_10px_1px_rgba(0,0,0,0.2)] rounded-lg">
          <input
            type="checkbox"
            id="sms-service"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
          />
          <label htmlFor="sms-service" className="md:ml-2 md:mb-2 block mt-[-10%] ml-[15%]">
            Add SMS Service £0.99
          </label>
          <p className="mt-4 text-sm">
            You Will Receive Your Parking Booking Confirmation, To Your Mobile For Fast And Easy Check In.
          </p>
        </div>
        <div className="mt-4">
          <PaymentSelects />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
  <h2 className="text-lg sm:text-xl md:text-2xl text-center bg-[#F26922] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer">
    Booking Details
  </h2>
  <div className="flex flex-col space-y-4 text-xs sm:text-sm">
    <div className="flex items-center">
      <CiLocationOn className="text-lg" />
      <span className="ml-2">Traveling From:</span>
      <span className="ml-auto">Gatwick Airport</span>
    </div>
    <div className="flex items-center">
      <CiCalendar className="text-lg" />
      <span className="ml-2">Departure Date:</span>
      <span className="ml-auto">Wed, 14 Aug 2024</span>
    </div>
    <div className="flex items-center">
      <CiClock1 className="text-lg" />
      <span className="ml-2">Drop-Off Time:</span>
      <span className="ml-auto">12:00</span>
    </div>
    <div className="flex items-center">
      <CiCalendar className="text-lg" />
      <span className="ml-2">Return Date, Time:</span>
      <span className="ml-auto">Thu, 19 Sep 2024, 12:00</span>
    </div>
    <div className="flex items-center">
      <IoCarSportOutline className="text-lg" />
      <span className="ml-2">Quote Type:</span>
      <span className="ml-auto">240.98</span>
    </div>
    <div className="flex items-center">
      <FaPoundSign className="text-lg" />
      <span className="ml-2">Booking Fee:</span>
      <span className="ml-auto">1.95</span>
    </div>
  </div>
  <div className="mt-6">
    <h2 className="text-lg sm:text-xl md:text-2xl text-center bg-[#F26922] text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-orange-600">
      Total Price
    </h2>
  </div>
</div>

    </div>
  </div>
</>

  );
};

// Main Page Component
const PaymentWrapper = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    people: "",
    flightDetailsConfirmation: "",
    vehicles: [{ make: "", model: "", color: "", regNo: "" }],
    paymentOption1: false,
    paymentOption2: false,
  });

  useEffect(() => {
    const localStorageData: any | null = (() => {
      const data = localStorage.getItem("userdata");
      return data ? JSON.parse(data) : null;
    })();

    setFormData((prevData) => ({
      ...prevData,
      ...localStorageData,
    }));
  }, []);

  const handleVehicleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newVehicles = [...formData.vehicles];
    newVehicles[index] = { ...newVehicles[index], [name]: value };
    setFormData({ ...formData, vehicles: newVehicles });
  };
  const VehicleDetails = ({
    vehicle,
    index,
    setFormData,
  }: {
    vehicle: any;
    index: number;
    setFormData: Function;
  }) => {
    const [inputValues, setInputValues] = useState({
      make: vehicle.make || "",
      model: vehicle.model || "",
      color: vehicle.color || "",
      regNo: vehicle.regNo || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      // Validate input to allow only alphabets, numbers, spaces, and hyphens
      const allowedChars = /^[a-zA-Z0-9\- ]*$/;
      if (!allowedChars.test(value)) {
        return; // Prevent invalid characters from being set
      }

      // Update local input values state
      setInputValues({
        ...inputValues,
        [name]: value,
      });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      // Update formData on blur (when user leaves the input field)
      handleVehicleChange(e, index, setFormData);
    };

    return (
<div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
      Vehicle Details {index + 1}
    </h2>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
      <button
        onClick={() => {
          /* Add vehicle functionality here */
        }}
        className="bg-[#F26922] flex items-center justify-between text-sm sm:text-base gap-2 text-white h-[40px] rounded-lg px-4 py-2"
      >
        <span className="flex-grow">Add Extra Car</span>
        <FaPlusCircle className="ml-2 sm:ml-4" />
      </button>

      {index > 0 && (
        <button
          onClick={() => {
            /* Remove vehicle functionality here */
          }}
          className="bg-red-500 flex items-center text-sm sm:text-base gap-2 text-white py-2 px-3 rounded-lg mt-2 sm:mt-0"
        >
          <FaTrashAlt />
          Remove
        </button>
      )}
    </div>
  </div>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <label className="block mb-2 text-sm sm:text-base md:text-lg font-bold">Make*</label>
      <input
        type="text"
        name="make"
        value={inputValues.make}
        placeholder="TBC"
        onChange={handleChange}
        onBlur={handleBlur}
        className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
      />
    </div>
    <div>
      <label className="block mb-2 text-sm sm:text-base md:text-lg font-bold">Model*</label>
      <input
        type="text"
        name="model"
        value={inputValues.model}
        placeholder="TBC"
        onChange={handleChange}
        onBlur={handleBlur}
        className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
      />
    </div>
    <div>
      <label className="block mb-2 text-sm sm:text-base md:text-lg font-bold">Color*</label>
      <input
        type="text"
        name="color"
        value={inputValues.color}
        placeholder="TBC"
        onChange={handleChange}
        onBlur={handleBlur}
        className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
      />
    </div>
    <div>
      <label className="block mb-2 text-sm sm:text-base md:text-lg font-bold">Reg No*</label>
      <input
        type="text"
        name="regNo"
        value={inputValues.regNo}
        placeholder="TBC"
        onChange={handleChange}
        onBlur={handleBlur}
        className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
      />
    </div>
  </div>
</div>

    );
  };
  return (
    <div className="sm:container p-2 sm:p-10 flex flex-col gap-4">
      <ContactDetails
        key="step1"
        formData={formData}
        setFormData={setFormData}
      />
      {formData.vehicles.map((vehicle, index) => (
        <VehicleDetails
          key={index}
          vehicle={vehicle}
          index={index}
          handleVehicleChange={handleVehicleChange}
        />
      ))}

      <PaymentDetails
        key="step3"
        formData={formData}
        setFormData={setFormData}
      />
      {/* <Confirmation key="step4" formData={formData} /> */}
    </div>
  );
};

export default PaymentWrapper;
