import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import {
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaLayerGroup,
  FaInfoCircle,
  FaUserCircle,
  FaSignOutAlt,
  FaUser,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const [mobileSettings, setMobileSettings] = useState(false);
  return (
    <>
      <nav className="w-full h-[75px] bg-gray-100 dark:bg-gray-900 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/job-portal.png"
              alt=""
              className="h-10 w-10 md:h-12 md:w-12 rounded-xl"
            />

            <div>
              <h1 className="font-bold text-lg md:text-2xl text-blue-900 dark:text-blue-500">
                Career Path
              </h1>
              <p className="hidden md:block text-xs text-gray-500 dark:text-white">
                Find your dream job
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden md:flex gap-8 dark:text-white font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all_jobs/applied">Jobs</NavLink>
            <NavLink to="/all_companies">Companies</NavLink>
            <NavLink to="/applied-recruiters">+ Add Recruiter</NavLink>
            <NavLink to="/save_jobs">Save Jobs</NavLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* LOGIN */}
            <NavLink to="/login">
              <button className="px-5 py-2 border rounded-xl dark:border-white dark:text-white">
                Login
              </button>
            </NavLink>

            {/* SIGNUP */}
            <NavLink to="/signup">
              <button className="px-5 py-2 bg-blue-900 dark:bg-blue-500 text-white rounded-xl">
                Sign Up
              </button>
            </NavLink>

            {/* PROFILE ICON */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-3xl text-blue-900 dark:text-blue-500 hover:scale-110 transition"
              >
                <FaUserCircle />
              </button>

              {/* DROPDOWN */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-2xl overflow-hidden border">

                  <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                  >
                    <FaUser />
                    My Profile
                  </NavLink>

                  <NavLink
  onClick={() => setDarkMode(prev => !prev)}
  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
>
  {darkMode ? <FaMoon /> : <FaSun />}
  Theme change
</NavLink>

                  <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-50 text-red-600">
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>
              )}
            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl dark:text-white"
          >
            <RiMenu3Line />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU (same as yours) */}
      <div
        className={`fixed top-0 left-0 w-full z-50 md:hidden duration-500
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-b-[30px] px-5 py-5">

          <div className="flex items-center justify-between dark:border-white border-b pb-4">

            <div>
              <h1 className="font-bold text-lg text-blue-900 dark:text-blue-500">
                Career Path
              </h1>
              <p className="text-xs text-gray-500 dark:text-white ">
                Find Your Dream Job
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-full  bg-gray-100 dark:bg-gray-400 flex items-center justify-center"
            >
              <IoClose className="dark:text-black " size={22} />
            </button>

          </div>

          <div className="flex flex-col gap-3 mt-5">

            <a href="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300 dark:text-white">
              <FaHome className="text-blue-600 " />
              Home
            </a>

            <a href="/all_jobs/applied" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300 dark:text-white">
              <FaBriefcase className="text-blue-600" />
              Jobs
            </a>

            <a href="/all_companies" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300 dark:text-white">
              <FaBuilding className="text-blue-600" />
              Companies
            </a>

            <a href="/applied-recruiters" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300 dark:text-white">
              <FaUser className="text-blue-600" />
             + Add Recruiter
            </a>

            <div>

  {/* SETTINGS BUTTON */}
  <div
    onClick={() => setMobileSettings(!mobileSettings)}
    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300 cursor-pointer dark:text-white"
  >
    <FiSettings className="text-blue-600" />
    Setting
  </div>

  {/* SETTINGS DROPDOWN */}
  {mobileSettings && (
    <div className="ml-6 mt-2 flex flex-col gap-2">

      {/* SAVE JOB */}
      <a href="/save_jobs" className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 dark:text-white">
        💾 Save Jobs
      </a>

      {/* THEME */}
      <div
        onClick={() => setDarkMode(prev => !prev)}
        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer dark:text-white"
      >
        {darkMode ? <FaMoon /> : <FaSun />}
        Theme
      </div>

    </div>
  )}

</div>

            <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300 dark:text-white">
              <FaUserCircle className="text-blue-600" />
              Profile
            </a>
            <div className="flex items-center justify-around">
              <NavLink to="/login"><button className="bg-blue-950 dark:bg-blue-500 px-5 py-3 text-white rounded-[10px] ">Login</button></NavLink>
              <NavLink to="/signup">
                <button className="bg-gray-300 dark:bg-white dark:border-white px-5 py-3 text-black rounded-[10px] border">Signup</button>
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;