"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FaqPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">FAQ</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          How Are You And ..
        </h2>
        <div className="mb-4 border-b border-gray-300">
          <button
            onClick={toggleFaq}
            className="flex justify-between items-center w-full p-4 bg-gradient-to-r from-[#24246C] to-[#5A43AF] text-white font-semibold text-left text-lg focus:outline-none"
          >
            <span>Select The DropDown</span>
            <span>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen p-4 bg-gray-100" : "max-h-0"
            }`}
          >
            <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos animi deserunt vero rerum magnam nulla, aliquid molestiae unde magni dolor. In, nulla? Excepturi animi fugit corrupti ratione temporibus hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
