import React, { useState } from "react";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [open,setOpen]= useState(false);
  return (
    <>
    <div
      className="
      w-full
      h-[60px] md:h-[80px]
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-slate-900
      flex
      items-center
      justify-between
      px-3 md:px-6
      border-b
      border-white/10
    "
    >
     <div onClick={()=>setOpen(true)} className="md:hidden flex items-center"><FiMenu size={20} className="text-white " /></div> 
      <div
        className="
        flex
        items-center
        w-[50%] md:w-[350px]
        h-[42px]
        bg-white/10
        border
        border-white/20
        rounded-xl
        px-3
        backdrop-blur-lg
      "
      >
        <FiSearch className="text-gray-300 text-lg" />

        <input
          type="text"
          placeholder="Search here..."
          className="
          w-full
          ml-2
          bg-transparent
          outline-none
          text-white
          placeholder:text-gray-400
          text-sm
          
        "
        />
      </div>

      <div className="flex items-center gap-3 md:gap-5">

        <button
          className="
          relative
          w-[42px]
          h-[42px]
          rounded-full
          bg-white/10
          border
          border-white/20
          flex
          items-center
          justify-center
          hover:bg-blue-600/30
          transition-all
          duration-300
        "
        >
          <FiBell className="text-white text-xl" />

          {/* Notification Dot */}
          <span
            className="
            absolute
            top-2
            right-2
            w-2
            h-2
            bg-red-500
            rounded-full
          "
          ></span>
        </button>

        <div
          className="
          flex
          items-center
          gap-2
          cursor-pointer
        "
        >
          <FaUserCircle className="text-white text-3xl md:text-4xl" />

          <div className="">
            <h1 className="text-white text-sm font-semibold">
              Admin
            </h1>
          </div>
        </div>

      </div>
      <MobileSidebar open={open} setOpen={setOpen} />
    </div>
    </>
  );
};

export default Navbar;