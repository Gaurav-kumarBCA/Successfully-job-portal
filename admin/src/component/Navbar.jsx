import React, { useState } from "react";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import {io} from "socket.io-client";
import {toast} from "react-toastify"
import { useEffect } from "react";
const Navbar = () => {
  const [open,setOpen]= useState(false);
  const [notificationCount, setNotificationCount] = useState(()=>{
    return Number(localStorage.getItem("notificationCount")) || 0;
  });
 useEffect(() => {

 const socket = io("http://localhost:5000");

 socket.on("newRecruiterApply",(data)=>{

   setNotificationCount((prev)=>{

      const newCount = prev + 1;

      localStorage.setItem(
        "notificationCount",
        newCount.toString()
      );

      return newCount;

   });

 toast(
  <div className="flex items-start gap-3 w-[280px]">

    <div className="
      w-12
      h-12
      rounded-full
      bg-blue-600
      flex
      items-center
      justify-center
      text-white
      text-lg
      shadow-lg
    ">
      🔔
    </div>

    <div className="flex-1">

      <div className="flex items-center justify-between">
        <h2 className="font-bold text-sm text-gray-800">
          New Recruiter
        </h2>

        <span className="text-xs text-gray-400">
          now
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-1">
        <span className="font-semibold">
          {data.name}
        </span>{" "}
        from{" "}
        <span className="font-semibold">
          {data.company}
        </span>{" "}
        applied for recruiter access.
      </p>

    </div>

  </div>,
{
 position:"top-center",
 autoClose:6000,
 closeButton:false,
 hideProgressBar:true
}
);

 });

 return ()=>{
   socket.disconnect();
 };

},[]);
const handleBellClick=()=>{

setNotificationCount(0);

localStorage.setItem(
"notificationCount","0"
);

}
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

        <button onClick={handleBellClick}
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
          <FiBell  className="text-white text-xl" />
        {
          notificationCount > 0 && (
              <span
            className="
            absolute
            -top-1
            -right-1
            w-5
            h-5 
            bg-red-500
            rounded-full
            flex 
            items-center 
            justify-center
            text-white
            text-sm
          "
          >{notificationCount}</span>
          )
        }
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