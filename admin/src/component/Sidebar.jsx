import React from "react";
import { NavLink } from "react-router-dom";
import Setting from "./Setting";

import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiUserPlus,
  FiSettings,
  FiLogOut,

} from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { useState } from "react";
const Sidebar = () => {
const [openSetting, setOpenSetting] = useState(false);
console.log(openSetting,"hihih")
  const navLinkStyle = ({ isActive }) =>
    `
    flex items-center gap-3
    px-4 py-3 mx-2
    rounded-xl
    text-white/90
    transition-all duration-300
    hover:bg-blue-700/40
    hover:text-white
    ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg text-white"
        : ""
    }
  `;

  return (
    
    <div
      className="
      no-scrollbar
      min-h-full
      w-[200px]
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-slate-900
      border-r border-white/10
    "
    >
      <div className="h-[90px] flex items-center px-5 border-b border-white/10">
        <img
          src="/admin.png"
          alt="logo"
          className="w-[45px] h-[45px] rounded-lg"
        />

        <div className="ml-3">
          <h1 className="text-white text-lg font-bold">
            Carrier Path
          </h1>

          <p className="text-gray-400 text-xs mt-1">
            ADMIN PANEL
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-6 flex flex-col gap-2">

        <NavLink to="/" className={navLinkStyle}>
          <FiHome className="text-xl" />
          <span className="text-[15px] font-medium">
            Dashboard
          </span>
        </NavLink>

        <NavLink to="/users" className={navLinkStyle}>
          <FiUsers className="text-xl" />
          <span className="text-[15px] font-medium">
            Users
          </span>
        </NavLink>

        <NavLink to="/jobs" className={navLinkStyle}>
          <FiBriefcase className="text-xl" />
          <span className="text-[15px] font-medium">
            Jobs
          </span>
        </NavLink>

        <NavLink to="/companies" className={navLinkStyle}>
          <FaBuilding className="text-xl" />
          <span className="text-[15px] font-medium">
            Companies
          </span>
        </NavLink>

        <NavLink to="/recruiters" className={navLinkStyle}>
          <FiUsers className="text-xl" />
          <span className="text-[15px] font-medium">
            Recruiters
          </span>
        </NavLink>

        <NavLink to="/create-recruiter" className={navLinkStyle}>
          <FiUserPlus className="text-xl" />
          <span className="text-[15px] font-medium">
            Create Recruiter
          </span>
        </NavLink>

       <button
  onClick={() => setOpenSetting(true)}
  className={navLinkStyle({isActive:false})}
>
  <FiSettings className="text-xl" />
  <span className="text-[15px] font-medium">
    Settings
  </span>
</button>



        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `
            flex items-center gap-3
            px-4 py-3 mx-2
            rounded-xl
            text-red-300
            hover:bg-red-500/20
            transition-all duration-300
            ${isActive ? "bg-red-500/20" : ""}
          `
          }
        >
          <FiLogOut className="text-xl" />
          <span className="text-[15px] font-medium">
            Logout
          </span>
        </NavLink>

      </div>
      <Setting openSetting={openSetting} setOpenSetting={setOpenSetting}  />
    </div>
    
  );
};

export default Sidebar;