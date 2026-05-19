import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const [notificationCount, setNotificationCount] = useState(
    Number(localStorage.getItem("notificationCount")) || 0,
  );

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("newRecruiterApply", (data) => {
      const oldNotifications =
        JSON.parse(localStorage.getItem("notifications")) || [];

      const updatedNotifications = [
        {
          ...data,
          id: Date.now(),
        },
        ...oldNotifications,
      ];

      localStorage.setItem(
        "notifications",
        JSON.stringify(updatedNotifications),
      );

      localStorage.setItem("notificationCount", updatedNotifications.length);

      setNotificationCount(updatedNotifications.length);

      window.dispatchEvent(new Event("storage"));

      toast(
        <div
          className="
flex gap-3 items-start
"
        >
          <div
            className="
w-10 h-10
rounded-full
bg-blue-600
flex items-center
justify-center
text-white
"
          >
            🔔
          </div>

          <div>
            <h2
              className="
font-bold
"
            >
              New Recruiter
            </h2>

            <p>
              <b>{data.name}</b>
              from
              <b> {data.company}</b>
              applied
            </p>
          </div>
        </div>,
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const sync = () => {
      setNotificationCount(
        Number(localStorage.getItem("notificationCount")) || 0,
      );
    };

    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <>
      <div
        className="
w-full
h-[60px]
md:h-[80px]
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
flex
items-center
justify-between
px-3
md:px-6
"
      >
        <div onClick={() => setOpen(true)} className="md:hidden">
          <FiMenu
            className="
text-white
"
          />
        </div>

        <div
          className="
flex
items-center
w-[50%]
md:w-[350px]
h-[42px]
bg-white/10
rounded-xl
px-3
"
        >
          <FiSearch
            className="
text-white
"
          />

          <input
            placeholder="Search"
            className="
w-full
ml-2
bg-transparent
outline-none
text-white
"
          />
        </div>

        <div
          className="
flex
items-center
gap-4
"
        >
          <NavLink to="/notification">
            <button
              className="
relative
w-[42px]
h-[42px]
rounded-full
bg-white/10
flex
items-center
justify-center
"
            >
              <FiBell
                className="
text-white
"
              />

              {notificationCount > 0 && (
                <span
                  className="
absolute
-top-1
-right-1
w-5
h-5
rounded-full
bg-red-500
flex
items-center
justify-center
text-xs
text-white
"
                >
                  {notificationCount}
                </span>
              )}
            </button>
          </NavLink>

         <div className="flex items-center gap-3">

  <div
    className="
    w-10
    h-10
    rounded-full
    bg-blue-600
    flex
    items-center
    justify-center
    text-white
    font-bold
    text-lg
    "
  >
    {user?.name?.charAt(0).toUpperCase() || "A"}
  </div>

  <div className="hidden sm:flex flex-col">
    <p
      className="
      text-white
      text-sm
      font-semibold
      "
    >
      {user?.name || "Admin"}
    </p>

    <span
      className="
      text-gray-400
      text-xs
      "
    >
      Administrator
    </span>
  </div>

</div>
        </div>

        <MobileSidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Navbar;
