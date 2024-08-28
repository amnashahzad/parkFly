import React, { useState } from "react";

const PaymentSelects: React.FC = () => {
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCardSelected(e.target.checked);
  };

  return (
    <div className="p-4 shadow-md rounded-lg" style={{ marginTop: "6%" }}>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="pay-by-card"
          name="payment-method"
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
          onChange={handleRadioChange}
          checked={isCardSelected}
        />
        <label htmlFor="pay-by-card" className="ml-2 text-sm md:text-base">
          Pay By Card
        </label>
      </div>
      {isCardSelected && (
        <div>
          {/* Card details section */}
          <div className="mb-4">
            <label htmlFor="card-holder-name" className="block text-gray-700 font-bold mb-2 text-sm md:text-base">
              Card Holder Name
            </label>
            <input
              type="text"
              id="card-holder-name"
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="card-name" className="block text-gray-700 font-bold mb-2 text-sm md:text-base">
              Card Name
            </label>
            <input
              type="text"
              id="card-name"
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
              placeholder="1234 1234 1234"
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 mb-2 md:mb-0 md:mr-2">
              <label htmlFor="expiry-date" className="block text-gray-700 font-bold mb-2 text-sm md:text-base">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry-date"
                className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block text-gray-700 font-bold mb-2 text-sm md:text-base">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agree-to-terms"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
            />
            <label htmlFor="agree-to-terms" className="ml-2 text-sm md:text-base">
              By Continuing, You Agree To Compare The Parking{" "}
              <a href="#" className="text-blue-500">
                Terms And Conditions
              </a>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSelects;
