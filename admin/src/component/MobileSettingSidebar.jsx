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

const MobileSettingSidebar = ({
  openSidebarSetting,
  setOpenSidebarSetting,
}) => {

  const [darkMode, setDarkMode] =
    useState(true);

  const [animation, setAnimation] =
    useState(true);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() =>
          setOpenSidebarSetting(false)
        }
        className={`
          md:hidden
          fixed
          inset-0
          bg-black/50
          backdrop-blur-md
          z-[90]
          transition-all
          duration-300
          ${
            openSidebarSetting
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          md:hidden
          fixed
          top-0
          right-0
          h-screen
          w-[290px]

          bg-gradient-to-br
          from-slate-950
          via-blue-950
          to-slate-900

          border-l
          border-white/10

          z-[100]

          transform
          transition-transform
          duration-500

          ${
            openSidebarSetting
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Header */}
        <div
          className="
          flex
          justify-between
          items-center
          p-5
          border-b
          border-white/10
        "
        >
          <h1
            className="
            text-white
            text-xl
            font-bold
          "
          >
            Settings
          </h1>

          <button
            onClick={() =>
              setOpenSidebarSetting(false)
            }
          >
            <IoClose
              className="
              text-white
              text-3xl
            "
            />
          </button>
        </div>

        {/* Content */}

        <div
          className="
          p-4
          flex
          flex-col
          gap-4
        "
        >

          {/* Profile */}

          <NavLink to="/profile">
          <button
            className="
            flex
            items-center
            gap-4
            p-4
            w-full
            rounded-xl
            text-white
            bg-slate-800
          "
          >
            <FiUser />

            <span>
              Profile
            </span>
          </button>
          </NavLink>


          {/* Recruiter */}

          <NavLink
            to="/pending-recruiters"
            onClick={() =>
              setOpenSidebarSetting(false)
            }
          >
            <button
              className="
              flex
              items-center
              gap-4
              p-4
              rounded-xl
              w-full
              text-white
              bg-slate-800
            "
            >
              <FiUsers />

              <span>
                Applied Recruiters
              </span>
            </button>
          </NavLink>


          {/* Notification */}

          <NavLink
            to="/notification"
            onClick={() =>
              setOpenSidebarSetting(false)
            }
          >
            <button
              className="
              flex
              items-center
              gap-4
              p-4
              rounded-xl
              w-full
              text-white
              bg-slate-800
            "
            >
              <FiBell />

              <span>
                Notifications
              </span>
            </button>
          </NavLink>


          {/* Theme */}

          <div
            className="
            flex
            justify-between
            items-center
            p-4
            rounded-xl
            bg-slate-800
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
              text-white
            "
            >
              <FiMoon />

              <span>
                Dark Theme
              </span>
            </div>

            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className={`
              w-12
              h-6
              rounded-full
              relative
              transition-all
              ${
                darkMode
                  ? "bg-blue-600"
                  : "bg-gray-500"
              }
            `}
            >

              <div
                className={`
                absolute
                top-1
                w-4
                h-4
                rounded-full
                bg-white
                transition-all
                ${
                  darkMode
                    ? "left-7"
                    : "left-1"
                }
              `}
              />

            </button>
          </div>


          {/* Animation */}

          <div
            className="
            flex
            justify-between
            items-center
            p-4
            rounded-xl
            bg-slate-800
          "
          >
            <div
              className="
              flex
              items-center
              gap-3
              text-white
            "
            >
              <MdAnimation />

              <span>
                Animation
              </span>
            </div>

            <button
              onClick={() =>
                setAnimation(
                  !animation
                )
              }
              className={`
              w-12
              h-6
              rounded-full
              relative
              transition-all
              ${
                animation
                  ? "bg-green-600"
                  : "bg-gray-500"
              }
            `}
            >

              <div
                className={`
                absolute
                top-1
                w-4
                h-4
                rounded-full
                bg-white
                transition-all
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

export default MobileSettingSidebar;