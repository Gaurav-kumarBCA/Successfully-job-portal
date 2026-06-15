import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaLinkedin,
  FaHeadset,
} from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecruitersLogin = () => {
  const navigate = useNavigate();
  const [form,setForm]=useState({
    email:"",
    password:""
  })
  const onChange = (e)=>{
    setForm((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  const handleform=async(e)=>{
    e.preventDefault();
    if(!form.email || !form.password){
      return toast.info("All Field are required")
    }
      try {
        const url= import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/login/recruiter`,{
          method:"POST",
          credentials:"include",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(form)
        })
        const data = await res.json();
        if(!data.success){
          return toast.info(data.message)
        }
        toast.success("Login Successfully")
        setTimeout(()=>{
          navigate("/dashboard-recruiters")
        },3000)
      } catch (error) {
        toast.error("Server not responding")
      }
    }
  return (
    <div className="min-h-screen bg-[#edf3ff] dark:bg-gray-900 flex items-center justify-center p-4">

      <div className="w-full max-w-7xl bg-white rounded-[35px] dark:bg-gray-950 overflow-hidden shadow-2xl">

        <div className="flex flex-col lg:flex-row">

          <div className="hidden lg:flex lg:w-[42%] relative min-h-[950px]">

            <img
              src="/recruiterlogin.jpeg"
              alt=""
              className="
              absolute inset-0
              w-full h-full
              object-cover object-top
              scale-100
              "
              style={{
                imageRendering: "auto"
              }}
            />

            <div className="absolute inset-0 bg-[#001847]/75"></div>

            <div className="relative z-10 p-10 flex flex-col justify-between text-white w-full">


              <div className="flex items-center gap-3">

                <img
                  src="/job-portal.png"
                  className="w-12 h-12 bg-white rounded-xl p-1 object-contain"
                />

                <div>

                  <h1 className="font-bold text-3xl">
                    Career Path
                  </h1>

                  <p className="text-gray-300 text-sm">
                    Connecting Talent, Building Futures
                  </p>

                </div>

              </div>



              <div>

                <h1 className="text-5xl font-bold leading-tight">

                  Welcome Back,

                  <br/>

                  <span className="text-blue-400">
                    Recruiter!
                  </span>

                </h1>

                <p className="mt-6 text-lg text-gray-200 leading-8">

                  Login to continue hiring top talent and manage your organization.

                </p>

              </div>



              <div className="space-y-7">

                <div className="flex gap-4">

                  <div className="bg-blue-500/20 h-14 w-14 rounded-full flex items-center justify-center">
                    👥
                  </div>

                  <div>

                    <h1 className="font-bold">
                      Access Quality Talent
                    </h1>

                    <p className="text-sm text-gray-300">
                      Connect with professionals.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="bg-blue-500/20 h-14 w-14 rounded-full flex items-center justify-center">
                    💼
                  </div>

                  <div>

                    <h1 className="font-bold">
                      Post & Manage Jobs
                    </h1>

                    <p className="text-sm text-gray-300">
                      Manage applications easily.
                    </p>

                  </div>

                </div>


                <div className="bg-white text-black rounded-3xl p-6 mt-6 dark:bg-gray-900">

                  <h1 className="font-bold text-xl dark:text-gray-200">
                    Secure Platform
                  </h1>

                  <p className="text-gray-500 mt-2 dark:text-gray-400">
                    Your data is secure with us.
                  </p>

                </div>

              </div>

            </div>

          </div>



          <div className="w-full lg:w-[58%] p-6 md:p-12">

            <div className="lg:hidden relative rounded-[30px] overflow-hidden h-[260px] mb-8">

              <img
                src="/recruiterlogin.jpeg"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">

                <div className="flex items-center gap-3">

                  <img
                    src="/job-portal.png"
                    className="w-10 h-10 bg-white rounded-lg p-1"
                  />

                  <h1 className="text-2xl font-bold">
                    Career Path
                  </h1>

                </div>

                <h1 className="text-3xl font-bold mt-4 dark:text-white">
                  Recruiter Login
                </h1>

              </div>

            </div>


            <div className="flex justify-end">

              <p className="text-gray-500">

                Don't have account?

                <NavLink to="/applied-recruiters">
                    <span className="ml-2 text-blue-600 font-bold">
                  Register
                </span>
                </NavLink>

              </p>

            </div>


            <div className="text-center mt-10">

              <img
                src="/job-portal.png"
                className="w-20 mx-auto"
              />

              <h1 className="text-5xl font-bold mt-5 dark:text-white">
                Recruiter Login
              </h1>

              <p className="text-gray-500 mt-4">
                Login to access recruiter dashboard
              </p>

            </div>


            <form onSubmit={handleform}>
            <div className="space-y-6 mt-10">

              <div>

                <label className="font-semibold dark:text-gray-200">
                  Email Address
                </label>

                <div className="h-16 border rounded-xl dark:border-white mt-2 flex items-center px-5">

                  <FaEnvelope className="text-gray-400 dark:text-gray-300"/>

                  <input
                  autoComplete="off"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Enter email"
                  className="ml-4 w-full outline-none placeholder-gray-400 dark:placeholder-gray-300 dark:text-white"
                  />

                </div>

              </div>


              <div>

                <label className="font-semibold dark:text-gray-200">
                  Password
                </label>

                <div className="h-16 border rounded-xl mt-2 flex dark:border-white items-center px-5">

                  <FaLock className="text-gray-400 dark:text-gray-300"/>

                  <input
                  autoComplete="new-password"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  type="password"
                  placeholder="Password"
                  className="ml-4 w-full outline-none placeholder-gray-400 dark:placeholder-gray-300 dark:text-white"
                  />


                </div>

              </div>


              <div className="flex justify-between">

                <label className="flex gap-2 dark:text-gray-200">
                  <input type="checkbox"/>
                  Remember me
                </label>

                <span className="text-blue-600">
                  Forgot Password?
                </span>

              </div>


              <button type="submit" className="w-full h-16 rounded-xl bg-blue-600 text-white font-bold text-lg">

                Login to Account

              </button>


              <button className="w-full border h-16 rounded-xl dark:border-white flex items-center justify-center gap-4 dark:text-gray-200">

                <FaGoogle className="text-red-500"/>

                Continue with Google

              </button>


              <button className="w-full border h-16 rounded-xl flex items-center justify-center gap-4 dark:border-white dark:text-gray-200">

                <FaLinkedin className="text-blue-600"/>

                Continue with LinkedIn

              </button>


              <div className="bg-[#f4f8ff] dark:bg-gray-900 p-6 rounded-3xl">

                <div className="flex gap-4">

                  <FaHeadset className="text-blue-600 text-2xl"/>

                  <div>

                    <h1 className="font-bold dark:text-gray-200" >
                      Need Help?
                    </h1>

                    <p className="text-gray-500">
                      support@careerpath.com
                    </p>

                  </div>
                  <NavLink to="/Check-status-recruiters">
                    <span className="md:text-sm text-[10px] md:ml-50 text-blue-700 font-bold">Check-Status
                  </span>
                  </NavLink>
                  

                </div>

              </div>

            </div>
              </form>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RecruitersLogin;