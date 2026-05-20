import React, { useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";

import { FaUserPlus, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";
import withAuth from "../component/withAuth";

const Notification = () => {
  const [notification, setNotification] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notifications")) || [];

    console.log("Notification", data);

    setNotification(data);
  }, []);

  useEffect(() => {
    
    return () => {
      if (location.pathname === "/notification") {
        setTimeout(() => {
          localStorage.removeItem("notifications");

          localStorage.setItem("notificationCount", "0");

          window.dispatchEvent(new Event("storage"));
        }, 100);
      }
    };
  }, [location.pathname]);

  return (
    <div
      className="
min-h-screen
bg-white
dark:bg-gradient-to-br
dark:from-slate-950
dark:via-blue-950
dark:to-slate-900
p-5
"
    >
      <h1
        className="
text-black
dark:text-cyan-400
text-3xl
font-bold
mb-8
flex 
gap-3
"
      >
        <IoNotifications /> Notifications
      </h1>

      {notification.length === 0 ? (
        <div
          className="
text-center
text-gray-500
dark:text-gray-400
mt-20
"
        >
          No New Notification
        </div>
      ) : (
        <div
          className="
space-y-5
"
        >
          {notification.map((item) => (
            <NavLink to="/pending-recruiters">
              <div
                key={item.id}
                className="
dark:bg-slate-900
bg-gray-200
rounded-3xl
p-5
border
dark:border-cyan-500/20
border-gray-600
"
              >
                <div
                  className="
flex
gap-4
"
                >
                  <div
                    className="
w-16
h-16
rounded-full
bg-pink-500/20
flex
items-center
justify-center
text-pink-400
text-2xl
"
                  >
                    <FaUserPlus />
                  </div>

                  <div>
                    <h2
                      className="
text-pink-400
font-bold
text-xl
"
                    >
                      New Recruiter Request
                    </h2>

                    <p
                      className="
dark:text-gray-300
text-black
"
                    >
                      {item.name}
                       applied to become recruiter
                    </p>

                    <div
                      className="
mt-4
space-y-2
dark:text-gray-400
text-black
"
                    >
                      <p>
                        Company:
                        <span
                          className="
text-cyan-400
"
                        >
                          {item.company}
                        </span>
                      </p>

                      <p
                        className="
flex
items-center
gap-2
"
                      >
                        <FaEnvelope />

                        {item.email}
                      </p>

                      <p
                        className="
flex
items-center
gap-2
"
                      >
                        <FaPhone />

                        {item.phone}
                      </p>

                      <p
                        className="
flex
items-center
gap-2
"
                      >
                        <FaGlobe />

                        {item.website}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default withAuth(Notification);
