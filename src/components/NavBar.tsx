"use client"

import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <>
  <header className="shadow-md py-5 px-5 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex  justify-around ">
        <Link href={"/"}>
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
        </Link>

          <div className="flex max-lg:ml-auto space-x-3">
            <button className="px-4 py-2 text-sm rounded font-bold  border-2 border-[#007bff]  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            <button className="px-4 py-2 text-sm rounded font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-black">
              Sign up
            </button>

        
          </div>
        </div>
      </header>
      
    </>
  );
}

export default NavBar;
