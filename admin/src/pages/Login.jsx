// import React, { useState, useEffect } from "react";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import toast from "react-hot-toast";

// const Login = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setloading] = useState(false);
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const formSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.email || !form.password) {
//       return toast.error("Email & Password is required");
//     }

//     try {
//       setloading(true);
//       const url = import.meta.env.VITE_SERVER_URL;
//       console.log(url);
//       const res = await fetch(`${url}/api/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       console.log(data);
//       if (!data.success) {
//         return toast.error(data.message);
//       }
//       if (data.data.loginUser.role !== "admin") {
//         return toast.error("You are not admin");
//       }
//       window.location.href = "/";
//     } catch (error) {
//       console.log(error);
//       toast.error("Server is not responding");
//     } finally {
//       setloading(false);
//     }
//   };

//   return (
//     <div
//       className="
// min-h-screen
// flex
// items-center
// justify-center
// p-4
// bg-gray-100
// dark:bg-gradient-to-br
// dark:from-slate-950
// dark:via-blue-950
// dark:to-slate-900
// transition-all
// duration-500
// "
//     >
//       <div className="h-[500px] md:m-0 mb-30 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[450px] rounded-2xl border border-white/20 backdrop-blur-md bg-white dark:bg-white/10 shadow-2xl">
//         <div className="h-15 w-full flex items-end justify-center">
//           <h1 className="text-3xl md:text-4xl text-black dark:text-white">Admin Login</h1>
//         </div>

//         <div className="w-full h-5 flex items-end justify-center">
//           <p className=" text-black dark:text-white text-[10px] tracking-widest">
//             Welcome back! Please login to your account
//           </p>
//         </div>

//         <form action="" autoComplete="off" onSubmit={formSubmit}>
//           <div className="w-full h-60 mt-5 ">
//             <div className="h-10 w-full flex items-end">
//               <span className="ml-5  text-black dark:text-white text-[18px]">Email Address</span>
//             </div>

//             <div className="w-full flex justify-center mt-2">
//               <div className="w-[90%] h-11 bg-gray-200 dark:bg-black rounded-lg flex items-center px-3 border border-gray-700">
//                 <MdEmail className=" text-black dark:text-white text-xl mr-2" />

//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((prev) => ({
//                       ...prev,
//                       [e.target.name]: e.target.value,
//                     }))
//                   }
//                   autoComplete="off"
//                   placeholder="Enter Email"
//                   className="bg-transparent outline-none text-black dark:text-white w-full"
//                 />
//               </div>
//             </div>

//             <div className="h-10 w-full flex items-end mt-4">
//               <span className="ml-5  text-black dark:text-white text-[18px]">Password</span>
//             </div>

//             <div className="w-full flex justify-center mt-2">
//               <div className="w-[90%] h-11 bg-gray-200 dark:bg-black rounded-lg flex items-center px-3 border border-gray-700">
//                 <FaLock className=" text-black dark:text-white text-lg mr-2" />

//                 <input
//                   type="password"
//                   name="password"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((prev) => ({
//                       ...prev,
//                       [e.target.name]: e.target.value,
//                     }))
//                   }
//                   autoComplete="new-password"
//                   placeholder="Enter Password"
//                   className="bg-transparent outline-none  text-black dark:text-white w-full"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="h-13 w-full flex items-center justify-center">
//             <button
//               disabled={loading}
//               className={`
//     h-10 w-[90%] rounded-lg  text-white text-[18px]
//     flex items-center justify-center gap-3
//     transition-all duration-300
//     ${
//       loading
//         ? "bg-blue-500 cursor-not-allowed opacity-70"
//         : "bg-blue-800 hover:bg-blue-700 cursor-pointer"
//     }
//   `}
//               type="submit"
//             >
//               <FaLock className="text-white text-lg" />
//               {loading ? "Login..." : "Login"}
//             </button>
//           </div>
//         </form>
//         <div className="flex  mt-2 items-center justify-center gap-2 text-gray-400">
//           <div className="h-[1px] w-45 bg-gray-500"></div>

//           <span className="text-sm whitespace-nowrap">OR</span>

//           <div className="h-[1px] w-45 bg-gray-500"></div>
//         </div>
//         <div className="flex mt-3 items-center justify-center">
//           <button
//             className="
//           w-[90%]
//           h-10
//           rounded-lg
//           border
//           border-blue-500
//           bg-transparent
//           text-blue-400
//           text-[18px]
//           font-medium
//           flex
//           items-center
//           justify-center
//           gap-3
//           transition-all
//           duration-300
//           hover:bg-blue-500/10
//           hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
//         "
//           >
//             <RiShieldCheckLine className="text-3xl" />
//             Login with Admin ID
//           </button>
//         </div>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="
//     absolute
//     top-5
//     right-5
//     p-3
//     rounded-full
//     bg-white/10
//     border
//     border-white/20
//     text-white
//     backdrop-blur-md
//     z-50
//   "
//         >
//           {darkMode ? (
//             <MdLightMode className="text-2xl" />
//           ) : (
//             <MdDarkMode className="text-2xl" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useState } from "react";
import { MdEmail, MdDarkMode, MdLightMode } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);

  // const [darkMode, setDarkMode] = useState(true);
  const [darkMode , setDarkMode] = useState(()=>{
    return localStorage.getItem("theme") === "dark";
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      return localStorage.setItem("theme","dark");
    } else {
      document.documentElement.classList.remove("dark");
      return localStorage.setItem("theme","light");

    }
  }, [darkMode]);

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
      }, 1500);

    } catch (error) {
      console.log(error);
      toast.error("Server is not responding");
    } finally {
      setLoading(false);
    }
  };

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

