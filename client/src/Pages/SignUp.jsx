import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaGoogle,
  FaLinkedin
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [form,setForm]=useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:""
  })
  const onChange=(e)=>{
    setForm((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }

  const handleForm=async(e)=>{
    e.preventDefault()
    if(!form.name || !form.email || !form.password || !form.confirmPassword){
      return toast.error("All field are required")
    }
    if(form.password !== form.confirmPassword){
      return toast.error("Confirm password does not match")
    }
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/api/auth/signup`,{
       method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      })
      const data = await res.json();
      if(!data.success){
        return toast.error(data.message)
      }
      toast.success("SignUp Successfully")
      setTimeout(()=>{ 
        navigate("/login")
      },3000)
      console.log(data)
    } catch (error) {
      console.log(error)
      toast.error("Server not responding")

    }
  }
  return (
    <main className="min-h-screen bg-[#edf2ff] flex items-center justify-center px-4 py-6">

      <div className="w-full max-w-7xl bg-white rounded-[35px] shadow-2xl overflow-hidden">


        <div className="flex justify-between items-center px-6 md:px-10 py-6">

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

            Already have an account?

            <NavLink to="/login">
                <span className="text-blue-600 ml-2 font-semibold cursor-pointer">

              Login

            </span>
            </NavLink>

          </p>

        </div>


        <div className="grid lg:grid-cols-2">


          <div className="lg:hidden relative h-[250px] overflow-hidden">

            <img
              src="/signup.webp"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"/>

            <div className="absolute bottom-6 left-6 text-white">

              <p className="font-bold text-blue-300">
                CAREER STARTS HERE
              </p>

              <h1 className="text-3xl font-bold mt-2">

                Your Career
                <br/>

                Starts Here 

              </h1>

            </div>

          </div>



          <div className="flex items-center  justify-center p-5 md:p-10">
            <form onSubmit={handleForm}>

            <div className="w-full max-w-[500px] bg-white rounded-[35px] border shadow-xl p-8">

              <h1 className="text-4xl font-bold text-[#0e1747]">

                Create Account 

              </h1>

              <p className="text-gray-500 mt-4 leading-8">

                Join us today and take the next step towards your dream career.

              </p>




              <div className="mt-8">

                <label className="font-semibold">

                  Full Name

                </label>

                <div className="border rounded-2xl mt-3 flex items-center px-4 py-4">

                  <FaUser className="text-gray-400"/>

                  <input
                  required
                    value={form.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="ml-3 w-full outline-none"
                  />

                </div>

              </div>




              <div className="mt-6">

                <label className="font-semibold">

                  Email Address

                </label>

                <div className="border rounded-2xl mt-3 flex items-center px-4 py-4">

                  <FaEnvelope className="text-gray-400"/>

                  <input
                  required
                  value={form.email}
                   onChange={onChange}
                  name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="ml-3 w-full outline-none"
                  />

                </div>

              </div>




              <div className="mt-6">

                <label className="font-semibold">

                  Password

                </label>

                <div className="border rounded-2xl mt-3 flex items-center px-4 py-4">

                  <FaLock className="text-gray-400"/>

                  <input
                  required
                  value={form.password}
                   onChange={onChange}
                  name="password"
                    type="password"
                    placeholder="Create password"
                    className="ml-3 w-full outline-none"
                  />

                  {/* <FaEye className="text-gray-400"/> */}

                </div>

              </div>




              <div className="mt-6">

                <label className="font-semibold">

                  Confirm Password

                </label>

                <div className="border rounded-2xl mt-3 flex items-center px-4 py-4">

                  <FaLock className="text-gray-400"/>

                  <input
                  required
                  value={form.confirmPassword}
                  name="confirmPassword"
                  onChange={onChange}
                    type="password"
                    placeholder="Confirm password"
                    className="ml-3 w-full outline-none"
                  />

                  {/* <FaEye className="text-gray-400"/> */}

                </div>

              </div>



              <div className="mt-6 flex gap-2 text-sm">

                <input type="checkbox"/>

                <p>

                  I agree to the

                  <span className="text-blue-600 ml-1">

                    Terms & Conditions

                  </span>

                </p>

              </div>


              <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-700 duration-300 text-white py-4 rounded-2xl font-bold">

                Sign Up

              </button>


              <div className="flex items-center gap-4 my-8">

                <div className="h-[1px] bg-gray-300 flex-1"></div>

                <span className="text-gray-400">

                  or continue with

                </span>

                <div className="h-[1px] bg-gray-300 flex-1"></div>

              </div>


              <div className="grid grid-cols-2 gap-4">

                <button className="border rounded-2xl py-4 flex items-center justify-center gap-3">

                  <FaGoogle className="text-red-500"/>

                  Google

                </button>


                <button className="border rounded-2xl py-4 flex items-center justify-center gap-3">

                  <FaLinkedin className="text-blue-600"/>

                  LinkedIn

                </button>

              </div>

            </div>
</form>
          </div>




          <div className="hidden lg:flex relative bg-[#f8faff] overflow-hidden items-center justify-center">

            <div className="absolute w-[700px] h-[700px] bg-blue-100 rounded-full -right-52 -bottom-48"></div>

            <div className="relative z-10 px-10">

              <h1 className="text-6xl font-bold leading-tight text-[#0e1747]">

                Your Career
                <br/>

                <span className="text-blue-600">

                  Starts Here

                </span>

              </h1>

              <p className="mt-6 text-gray-500 text-lg max-w-md leading-8">

                Create your profile and get access to thousands of job opportunities.

              </p>


              <img
                src="/signup.webp"
                alt=""
                className="w-full max-w-[500px] mt-8 object-contain"
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default SignUp;