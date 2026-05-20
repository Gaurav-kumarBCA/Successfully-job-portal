import React, { useState } from 'react'
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiSettings,
  FiLogOut,
  FiUserPlus,
} from "react-icons/fi";

import { LuBuilding2 } from "react-icons/lu";
import { NavLink, useSearchParams } from 'react-router-dom';
import MobileSettingSidebar from './MobileSettingSidebar';
import MobileLogout from './MobileLogout';
const MobileSidebar = ({open,setOpen}) => {
  const [openSidebarSetting,setOpenSidebarSetting]=useState(false);
  const [openLogout,setOpenLogout] = useState(false);
     const navLinkStyle = ({ isActive }) =>
    `
    flex items-center gap-4
    px-4 py-3
    rounded-xl
    transition-all duration-300
    dark:text-white/90
    text-black
    hover:bg-blue-700/30
    ${
      isActive
        ? ""
        : ""
    }
  `;
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      ></div>

      <div
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[200px]
          bg-white
          dark:bg-gradient-to-br
          dark:from-slate-950
          dark:via-blue-950
          dark:to-slate-900
          border-r border-white/10
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e)=>e.stopPropagation()}
      >
        <div className="h-[85px] flex items-center px-5 border-b dark:border-white/10
        border-gray-300">
          <img
            src="/job-portal.png"
            alt="logo"
            className="w-[45px] h-[45px] rounded-xl object-cover"
          />

          <div className="ml-3">
            <h1 className="text-black dark:text-white text-2xl font-bold">
              JobPortal
            </h1>

            <p className="text-gray-400 text-xs mt-1">
              ADMIN PANEL
            </p>
          </div>
        </div>

        <div className="mt-5 px-2 flex flex-col gap-2">

          <NavLink
            to="/"
            className={navLinkStyle}
            onClick={() => setOpen(false)}
          >
            <FiHome className="text-xl" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/users"
            className={navLinkStyle}
            onClick={() => setOpen(false)}
          >
            <FiUsers className="text-xl" />
            <span>Users</span>
          </NavLink>

          <NavLink
            to="/jobs"
            className={navLinkStyle}
            onClick={() => setOpen(false)}
          >
            <FiBriefcase className="text-xl" />
            <span>Jobs</span>
          </NavLink>

          <NavLink
            to="/companies"
            className={navLinkStyle}
            onClick={() => setOpen(false)}
          >
            <LuBuilding2 className="text-xl" />
            <span>Companies</span>
          </NavLink>

          <NavLink
            to="/recruiters"
            className={navLinkStyle}
            onClick={() => setOpen(false)}
          >
            <FiUsers className="text-xl" />
            <span>Recruiters</span>
          </NavLink>

          <NavLink
            to="/create-recruiter"
            className={navLinkStyle}
            onClick={() => setOpen(false)}
          >
            <FiUserPlus className="text-xl" />
            <span>Create Recruiter</span>
          </NavLink>

           <button
            onClick={() => {setOpen(false);setOpenSidebarSetting(true);}}
            className={navLinkStyle({ isActive: false })}
          >
            <FiSettings className="text-xl" />
            <span className="text-[15px] font-medium">
              Settings
            </span>
          </button>

         <div
           onClick={() => setOpenLogout(true)}
           className="
             flex items-center
             gap-3
             px-4
             py-3
             mx-2
             rounded-xl
             dark:text-red-300
             text-red-600
             cursor-pointer
             hover:bg-red-500/20
             transition-all
             duration-300
           "
         >
           <FiLogOut className="text-xl" />
         
           <span className="text-[15px] font-medium">
             Logout
           </span>
         </div>

        </div>
      </div>
        {<MobileSettingSidebar openSidebarSetting={openSidebarSetting} setOpenSidebarSetting={setOpenSidebarSetting} />}
        {<MobileLogout openLogout={openLogout} setOpenLogout={setOpenLogout}/>}

    </>
  )
}

export default MobileSidebar