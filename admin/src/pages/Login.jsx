import React, { useEffect, useState } from "react";
import { MdEmail, MdDarkMode, MdLightMode } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import {toast} from "react-toastify";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { useTheme } from "../hooks/useTheme";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {darkMode,setDarkMode}=useTheme();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return toast.error("Email & Password is required");
    }

    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(`${url}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        return toast.error(data.message);
      }

      toast.success("Login Successfully");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } catch (error) {
      console.log(error);
      toast.error("Server is not responding");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
  return (
    <div className='
      h-screen
      w-full
      bg-gray-100
    dark:bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-slate-900
      flex
      items-center
      justify-center
    '>

      <div className='flex flex-col items-center gap-3'>
        <ThreeDots
          height="70"
          width="70"
          color={darkMode ? "#ffffff" : "#000000"}
          visible={true}
        />

        <div className='flex items-center gap-2'>
          <p className=' text-black dark:text-white  text-sm md:text-lg'>
            Loading Login Page...
          </p>

          <TailSpin
            height="20"
            width="20"
            color={darkMode ? "#60A5FA" : "#000000"}
          />
        </div>

      </div>

    </div>
  );
}
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      p-4
      bg-gray-100
      dark:bg-gradient-to-br
      dark:from-slate-950
      dark:via-blue-950
      dark:to-slate-900
      transition-all
      duration-500
    "
    >
      {/* Login Card */}
      <div
        className="
        md:m-0
        mb-25
        relative
        w-full
        max-w-[420px]
        rounded-3xl
        border
        border-white/20
        bg-white
        dark:bg-white/10
        backdrop-blur-xl
        shadow-2xl
        p-8
        transition-all
        duration-500
      "
      >
        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            absolute
            top-5
            right-5
            p-3
            rounded-full
            bg-gray-200
            dark:bg-white/10
            border
            border-gray-300
            dark:border-white/20
            text-black
            dark:text-white
            transition-all
            duration-300
          "
        >
          {darkMode ? (
            <MdLightMode className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </button>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Admin Login
          </h1>

          <p className="mt-2 text-sm tracking-wide text-gray-600 dark:text-gray-300">
            Welcome back! Please login to your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-10" onSubmit={formSubmit}>

          {/* Email */}
          <div>
            <label className="text-black dark:text-white text-sm font-medium">
              Email Address
            </label>

            <div className="mt-2 h-12 rounded-xl bg-gray-200 dark:bg-black/40 border border-gray-300 dark:border-gray-700 flex items-center px-4">

              <MdEmail className="text-xl text-black dark:text-white mr-3" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Enter Email"
                autoComplete="off"
                className="w-full bg-transparent outline-none text-black dark:text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="text-black dark:text-white text-sm font-medium">
              Password
            </label>

            <div className="mt-2 h-12 rounded-xl bg-gray-200 dark:bg-black/40 border border-gray-300 dark:border-gray-700 flex items-center px-4">

              <FaLock className="text-lg text-black dark:text-white mr-3" />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Enter Password"
                autoComplete="new-password"
                className="w-full bg-transparent outline-none text-black dark:text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            type="submit"
            className={`
              w-full
              h-12
              mt-8
              rounded-xl
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              ${
                loading
                  ? "bg-blue-500 opacity-70 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-600"
              }
            `}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </>
            ) : (
              <>
                <FaLock />
                Login
              </>
            )}
          </button>
        </form>
         <div className="flex  mt-2 items-center justify-center gap-2 text-gray-400">
          <div className="h-[1px] w-45 bg-gray-500"></div>

          <span className="text-sm whitespace-nowrap">OR</span>

          <div className="h-[1px] w-45 bg-gray-500"></div>
        </div>

         <div className="flex mt-3 items-center justify-center">
          <button
            className="
          w-[90%]
          h-10
          rounded-lg
          border
          border-blue-500
          bg-transparent
          text-blue-400
          text-[18px]
          font-medium
          flex
          items-center
          justify-center
          gap-3
          transition-all
          duration-300
          hover:bg-blue-500/10
          hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
        "
          >
            <RiShieldCheckLine className="text-3xl" />
            Login with Admin ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

