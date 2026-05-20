import React from "react";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useAuth } from "../hooks/useAuth";

const UserProfile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen dark:bg-slate-950 bg-gray-200 flex justify-center items-center">
        <div className="w-10 h-10 border-4 dark:border-blue-500 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen
      bg-gray-100
      dark:bg-gradient-to-br
      dark:from-slate-950
      dark:via-blue-950
      dark:to-slate-900
      p-4
      overflow-y-auto
      "
    >

      {/* ---------------- DESKTOP ---------------- */}

      <div className="hidden md:flex justify-center items-center min-h-[90vh]">

        <div
          className="
          w-[650px]
          lg:w-[780px]
          rounded-[35px]
          dark:bg-white/10
          backdrop-blur-xl
          border
          dark:border-white/10
          border-black/20
          overflow-hidden
          shadow-[0_0_50px_rgba(59,130,246,0.30)]
          "
        >

          {/* Banner */}
          <div
            className="
            h-44
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            relative
            "
          >
            {/* Avatar */}
            <div
              className="
              absolute
              left-1/2
              -bottom-16
              -translate-x-1/2
              w-32
              h-32
              rounded-full
              bg-slate-900
              border-[6px]
              border-slate-950
              flex
              items-center
              justify-center
              text-white
              text-5xl
              font-bold
              shadow-xl
              "
            >
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>
          </div>

          <div className="pt-24 px-10 pb-10">

            <div className="flex justify-center items-center gap-2">

              <h1 className="dark:text-white text-black text-4xl font-bold">
                {user?.name}
              </h1>

              <MdVerified className="dark:text-blue-400 text-blue-800 text-3xl" />

            </div>

            <p className="text-center dark:text-gray-400 text-gray-600 text-lg mt-2">
              Administrator Account
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              {/* Name */}
              <div
                className="
                dark:bg-white/5
                bg-black/10
                p-6
                rounded-3xl
                flex
                items-center
                gap-5
                "
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  dark:bg-blue-500/20
                  bg-blue-950
                  flex
                  justify-center
                  items-center
                  "
                >
                  <FaUserAlt className="text-blue-400 text-2xl" />
                </div>

                <div>

                  <p className="dark:text-gray-400 text-black">
                    Full Name
                  </p>

                  <h2 className="dark:text-white text-black text-xl font-semibold">
                    {user?.name}
                  </h2>

                </div>
              </div>

              {/* Email */}
              <div
                className="
                dark:bg-white/5
                bg-black/10
                p-6
                rounded-3xl
                flex
                items-center
                gap-5
                "
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  dark:bg-purple-500/20
                  bg-purple-950
                  flex
                  justify-center
                  items-center
                  "
                >
                  <FaEnvelope className="text-purple-400 text-2xl" />
                </div>

                <div>

                  <p className="dark:text-gray-400 text-black">
                    Email
                  </p>

                  <h2 className="dark:text-white text-black text-lg break-all">
                    {user?.email}
                  </h2>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ---------------- MOBILE ---------------- */}

      <div className="md:hidden">

        <div
          className="
          mt-5
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          dark:border-white/10
           border-black/20
          p-5
          shadow-xl
          "
        >

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div
              className="
              w-16
              h-16
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              text-2xl
              font-bold
              "
            >
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h1 className="dark:text-white text-black text-lg font-bold">
                  {user?.name}
                </h1>

                <MdVerified className="dark:text-blue-400 text-blue-800" />

              </div>

              <p className="dark:text-gray-400 text-gray-600 text-xs">
                Administrator
              </p>

            </div>

          </div>

          <div
            className="
            mt-5
            dark:bg-white/5
            bg-black/10
            rounded-2xl
            p-4
            "
          >

            <div className="flex items-center gap-3">

              <FaEnvelope className="dark:text-purple-400 text-purple-600 text-lg" />

              <div>

                <p className="dark:text-gray-400 text-black text-xs">
                  Email
                </p>

                <p className="dark:text-white text-black text-sm break-all">
                  {user?.email}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default UserProfile;