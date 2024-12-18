import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-[#654025] w-full flex shadow-xl items-center justify-between h-20 rounded-b-2xl">
        <h1 className="text-[#cbad89] text-5xl ml-4 mb-4 block">
          Anand Fashions
        </h1>
        <div className="flex gap-10 mr-6 items-center justify-center text-2xl text-[#cbad89]">
          <a href="">Home</a> {/* Smooth scroll    text-[#cbad89]  */}
          <a href="">Collection</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
