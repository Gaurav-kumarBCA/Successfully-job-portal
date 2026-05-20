import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FiUser,
  FiUsers,
  FiBell,
  FiMoon,
} from "react-icons/fi";
import { MdAnimation } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Setting = ({ openSetting, setOpenSetting }) => {
  const {darkMode,setDarkMode}=useTheme();
  const [animation, setAnimation] = useState(true);

  return (
    <>
      {openSetting && (
        <div
          onClick={() => setOpenSetting(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      <div
        className={`
        fixed top-0 right-0 h-screen
        w-full sm:w-[350px]
        bg-white dark:bg-slate-900 z-50
        transform transition-transform duration-500
        ${
          openSetting
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        <div className="flex justify-between items-center p-5 border-b dark:border-gray-700 border-gray-400">
          <h1 className="text-black dark:text-white text-2xl font-bold">
            Settings
          </h1>

          <button onClick={() => setOpenSetting(false)}>
            <IoClose className="text-black dark:text-white text-3xl" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4">

          <NavLink to="/profile">
            <button className="flex items-center w-full cursor-pointer gap-4 p-4 rounded-xl  text-black dark:text-white bg-gray-200 dark:bg-slate-800">
            <FiUser />
            <span>Profile</span>
          </button>
          </NavLink>

         <NavLink to="/pending-recruiters">
           <button className="flex items-center w-full cursor-pointer gap-4 p-4 rounded-xl text-black dark:text-white bg-gray-200 dark:bg-slate-800">
            <FiUsers />
            <span>Applied Recruiters</span>
          </button>
         </NavLink>

         <NavLink to="/notification">
           <button className="flex w-full items-center gap-4 p-4 cursor-pointer rounded-xl text-black dark:text-white bg-gray-200 dark:bg-slate-800">
            <FiBell />
            <span>Notifications</span>
          </button>
         </NavLink>

          {/* Theme Switch */}
          <div className="flex justify-between items-center p-4 rounded-xl bg-gray-200 dark:bg-slate-800">
            <div className="flex items-center gap-3 text-black dark:text-white">
              <FiMoon />
              <span>Dark Theme</span>
            </div>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`
              w-12 h-6 rounded-full
              relative transition-all
              ${
                darkMode
                  ? "bg-blue-600"
                  : "bg-gray-500"
              }
            `}
            >
              <div
                className={`
                absolute top-1
                w-4 h-4 rounded-full
                dark:bg-white transition-all bg-black
                ${
                  darkMode
                    ? "left-7"
                    : "left-1"
                }
              `}
              />
            </button>
          </div>

          {/* Animation Switch */}
          <div className="flex justify-between items-center p-4 rounded-xl bg-gray-200 dark:bg-slate-800">
            <div className="flex items-center gap-3 text-black dark:text-white">
              <MdAnimation />
              <span>Animation</span>
            </div>

            <button
              onClick={() =>
                setAnimation(!animation)
              }
              className={`
              w-12 h-6 rounded-full
              relative transition-all
              ${
                animation
                  ? "bg-green-600"
                  : "bg-gray-500"
              }
            `}
            >
              <div
                className={`
                absolute top-1
                w-4 h-4 rounded-full
                dark:bg-white bg-black transition-all
                ${
                  animation
                    ? "left-7"
                    : "left-1"
                }
              `}
              />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Setting;