import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="bg-[#654025] w-full flex shadow-xl items-center justify-between h-20 rounded-b-2xl sticky top-0 ">
        <h1 className="text-[#cbad89] text-4xl ml-4 mb-4 block">
          Anand Fashions
        </h1>
        <div className="flex gap-10 mr-6 items-center justify-center text-2xl text-[#cbad89]">
          <a href="#home">Home</a> {/* Smooth scroll    text-[#cbad89]  */}
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
