import React from "react";
import { IoClose } from "react-icons/io5";
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";

const MobileSettingSidebar = ({
  openSidebarSetting,setOpenSidebarSetting
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpenSidebarSetting(false)}
        className={`
          fixed inset-0 bg-black/50 z-40 md:hidden
          transition-all duration-300
          ${
            openSidebarSetting
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Mobile Sidebar */}
      <div
        className={`
          md:hidden
          fixed
          top-0
          right-0
          h-screen
          w-[280px]
          bg-slate-950
          border-l border-white/10
          z-50
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
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h1 className="text-white text-xl font-bold">
            Settings
          </h1>

          <button
            onClick={() =>
              setOpenSidebarSetting(false)
            }
          >
            <IoClose className="text-white text-3xl" />
          </button>
        </div>

        {/* Menu */}
        <div className="p-4 flex flex-col gap-3">

          <button className="flex items-center gap-3 text-white p-3 rounded-lg hover:bg-slate-800">
            <FiHome />
            Profile
          </button>

          <button className="flex items-center gap-3 text-white p-3 rounded-lg hover:bg-slate-800">
            <FiUsers />
            Account
          </button>

          <button className="flex items-center gap-3 text-white p-3 rounded-lg hover:bg-slate-800">
            <FiBriefcase />
            Notifications
          </button>

          <button className="flex items-center gap-3 text-white p-3 rounded-lg hover:bg-slate-800">
            <FiSettings />
            Privacy
          </button>

        </div>
      </div>
    </>
  );
};

export default MobileSettingSidebar;