import React from "react";
import { IoClose } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const MobileLogout = ({
  openLogout,
  setOpenLogout,
}) => {

  const handleLogout = async () => {
    try {
      const url =
        import.meta.env.VITE_SERVER_URL;

      await fetch(
        `${url}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      window.location.href =
        "/login";

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() =>
          setOpenLogout(false)
        }
        className={`
          fixed
          inset-0
          bg-black/50
          backdrop-blur-md
          z-[90]
          transition-all
          duration-300
          ${
            openLogout
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Dialog */}
      <div
        className={`
          fixed
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-[100]
          w-[92%]
          max-w-[420px]

          rounded-3xl
          border
          border-white/10
          bg-white
          dark:bg-gradient-to-br
          dark:from-slate-950
          dark:via-blue-950
          dark:to-slate-900

          shadow-[0_0_60px_rgba(59,130,246,0.30)]

          p-7
          transition-all
          duration-500
          ${
            openLogout
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0 pointer-events-none"
          }
        `}
      >

        {/* Close */}
        <button
          onClick={() =>
            setOpenLogout(false)
          }
          className="
          absolute
          right-4
          top-4
          dark:text-gray-400
          text-black
          hover:text-white
          transition
        "
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Icon */}
        <div
          className="
          w-16
          h-16
          rounded-full
          dark:bg-red-500/20
          bg-red-500/40
          mx-auto
          flex
          items-center
          justify-center
        "
        >
          <FiLogOut
            className="
            dark:text-red-400
            text-red-600
            text-3xl
          "
          />
        </div>

        {/* Heading */}
        <h1
          className="
          text-center
          dark:text-white
          text-black
          text-2xl
          font-bold
          mt-5
        "
        >
          Logout Account
        </h1>

        <p
          className="
          text-center
          dark:text-gray-400
          text-gray-600
          text-sm
          mt-3
          leading-6
        "
        >
          Are you sure you want
          to logout from your
          admin panel account?
        </p>

        {/* Buttons */}
        <div
          className="
          flex
          gap-3
          mt-8
        "
        >
          <button
            onClick={() =>
              setOpenLogout(false)
            }
            className="
            flex-1
            h-12
            rounded-xl
            dark:bg-white/10
            bg-gray-400
            dark:text-white
            text-black
            hover:bg-white/20
            transition-all
          "
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="
            flex-1
            h-12
            rounded-xl
            bg-red-600
            text-white
            font-semibold
            hover:bg-red-500
            transition-all
          "
          >
            Logout
          </button>
        </div>

      </div>
    </>
  );
};

export default MobileLogout;