import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaLinkedin,
  FaEye
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
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
  const handleForm=async(e)=>{
     e.preventDefault()
    if(!form.email || !form.password){
      return toast.info("All Field are required")
    }
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form),
      })
      const data = await res.json();
      console.log(data)
      if(!data.success){
        return toast.info(data.message)
      }
      toast.success("Login Successfully");
      setTimeout(()=>{
          navigate("/")
      },3000)
    } catch (error) {
      toast.error("Server not responding")
    }
  }
  return (
    <main className="min-h-screen bg-[#eef4ff] py-5 px-3">

      <div className="max-w-7xl mx-auto bg-white rounded-[35px] overflow-hidden shadow-2xl">


        <div className="flex justify-between items-center px-5 md:px-10 py-5">

          <div className="flex items-center gap-3">

            <img
              src="/job-portal.png"
              alt=""
              className="w-12 h-12 rounded-xl object-cover"
            />

            <div>

              <h1 className="font-bold text-xl md:text-2xl">
                Career Path
              </h1>

              <p className="text-gray-500 text-sm">
                Find Your Perfect Job
              </p>

            </div>

          </div>

          <p className="hidden md:block text-gray-500">

            New Here?

            <NavLink to="/signup">
                <span className="text-blue-600 ml-2 font-semibold cursor-pointer">
              Create Account
            </span>
            </NavLink>

          </p>

        </div>


        <div className="grid lg:grid-cols-2">


          <div className="lg:hidden relative h-[250px] overflow-hidden">

            <img
              src="/login-image.webp"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"/>

            <div className="absolute bottom-7 left-6 text-white">

              <p className="text-blue-300 font-bold">
                CAREER STARTS HERE
              </p>

              <h1 className="text-3xl font-bold mt-2">

                Unlock Your
                <br/>

                Dream Career 

              </h1>

            </div>

          </div>




          <div className="flex justify-center items-center p-5 md:p-10">

            <div className="w-full max-w-[500px]">


              <div className="hidden lg:block">

                <p className="text-blue-600 font-bold uppercase text-sm">

                  Career Starts Here

                </p>

                <h1 className="text-5xl font-bold mt-3 leading-tight">

                  Unlock Your
                  <br/>

                  Dream Career 

                </h1>

                <p className="text-gray-500 mt-5 leading-7">

                  Sign in and discover opportunities from top companies.

                </p>

              </div>

              <form onSubmit={handleForm}>
              <div className="bg-white shadow-xl rounded-[30px] p-7 mt-8 border">

                <div>

                  <label className="font-semibold">
                    Email Address
                  </label>

                  <div className="border rounded-2xl flex items-center px-4 py-4 mt-3">

                    <FaEnvelope className="text-gray-400"/>

                    <input
                    onChange={onChange}
                    name="email"
                    value={form.email}
                    autoComplete="off"
                      type="email"
                      placeholder="Enter your email"
                      className="ml-3 outline-none w-full"
                    />

                  </div>

                </div>


                <div className="mt-6">

                  <label className="font-semibold">
                    Password
                  </label>

                  <div className="border rounded-2xl flex items-center px-4 py-4 mt-3">

                    <FaLock className="text-gray-400"/>

                    <input
                     onChange={onChange}
                      name="password"
                      value={form.password}
                      autoComplete="new-password"
                      type="password"
                      placeholder="Enter password"
                      className="ml-3 outline-none w-full"
                    />


                  </div>

                </div>


                <div className="flex justify-between mt-5 text-sm">

                  <label className="flex gap-2">

                    <input type="checkbox"/>

                    Remember me

                  </label>

                  <button className="text-blue-600">

                    Forgot Password?

                  </button>

                </div>


                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 duration-300 text-white py-4 rounded-2xl mt-8 font-bold">

                  Login To Dashboard

                </button>


                <div className="flex items-center gap-3 my-7">

                  <div className="h-[1px] bg-gray-300 flex-1"></div>

                  <span className="text-gray-400 text-sm">
                    continue with
                  </span>

                  <div className="h-[1px] bg-gray-300 flex-1"></div>

                </div>


                <div className="grid grid-cols-2 gap-4">

                  <button className="border rounded-2xl py-4 flex justify-center items-center gap-2">

                    <FaGoogle className="text-red-500"/>

                    Google

                  </button>

                  <button className="border rounded-2xl py-4 flex justify-center items-center gap-2">

                    <FaLinkedin className="text-blue-600"/>

                    LinkedIn

                  </button>

                </div>

              </div>
              </form>

            </div>

          </div>




          <div className="hidden lg:flex bg-[#f8faff] relative items-center justify-center overflow-hidden">

            <div className="absolute w-[700px] h-[700px] bg-blue-100 rounded-full -bottom-52 -right-56"></div>

            <div className="relative z-10 text-center px-10">

              <p className="text-blue-600 font-bold">
                FIND YOUR CAREER
              </p>

              <h1 className="text-6xl font-bold mt-4">

                Start Your
                <span className="text-blue-600">

                  {" "}Journey

                </span>

              </h1>

              <p className="mt-5 text-gray-500 text-lg leading-8">

                Discover opportunities from top companies and build your future.

              </p>

              <img
                src="/login-image.webp"
                className="w-full max-w-[520px] mt-10 object-contain"
                alt=""
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Login;