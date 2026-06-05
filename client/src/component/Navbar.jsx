import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import {
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaLayerGroup,
  FaInfoCircle
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[75px] bg-gray-100 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <img
              src="/job-portal.png"
              alt=""
              className="h-10 w-10 md:h-12 md:w-12 rounded-xl"
            />

            <div>

              <h1 className="font-bold text-lg md:text-2xl text-blue-900">
                Career Path
              </h1>

              <p className="hidden md:block text-xs text-gray-500">
                Find your dream job
              </p>

            </div>

          </div>

          <div className="hidden md:flex gap-8 font-semibold">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/all_jobs/applied">Jobs</NavLink>
            <NavLink to="/all_companies">Companies</NavLink>
            <NavLink to="/applied-recruiters">+ Add Recruiter</NavLink>
            <NavLink to="/">About</NavLink>

          </div>

          <div className="hidden md:flex gap-3">

            <NavLink to="/login">
              <button className="px-5 py-2 border rounded-xl">
              Login
            </button>
            </NavLink>

            <NavLink to="/signup">
              <button className="px-5 py-2 bg-blue-900 text-white rounded-xl">
              Sign Up
            </button>
            </NavLink>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
          >
            <RiMenu3Line />
          </button>

        </div>

      </nav>



<div
className={`fixed top-0 left-0 w-full z-50 md:hidden duration-500
${open ? "translate-y-0" : "-translate-y-full"}`}
>

  <div className="bg-white shadow-2xl rounded-b-[30px] px-5 py-5">

  

    <div className="flex items-center justify-between border-b pb-4">

      <div>
        <h1 className="font-bold text-lg text-blue-900">
          Career Path
        </h1>

        <p className="text-xs text-gray-500">
          Find Your Dream Job
        </p>
      </div>

      <button
      onClick={()=>setOpen(false)}
      className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">

        <IoClose size={22}/>

      </button>

    </div>



    

    <div className="flex flex-col gap-3 mt-5">

      <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300">
        <FaHome className="text-blue-600"/>
        Home
      </a>

      <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300">
        <FaBriefcase className="text-blue-600"/>
        Jobs
      </a>

      <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300">
        <FaBuilding className="text-blue-600"/>
        Companies
      </a>

      <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300">
        <FaLayerGroup className="text-blue-600"/>
        Categories
      </a>

      <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 duration-300">
        <FaInfoCircle className="text-blue-600"/>
        About
      </a>

    </div>


   

    <div className="flex gap-3 mt-6">

      <NavLink to="/login">
        <button className="w-[150px] border-2 border-blue-700 py-2 rounded-xl text-blue-700 font-semibold">
        Login
      </button>
      </NavLink>

      <NavLink to="/signup">
        <button className="w-[150px] bg-blue-700 text-white py-2 rounded-xl font-semibold">
        Sign Up
      </button>
      </NavLink>

    </div>

  </div>

</div>
    </>
  );
};

export default Navbar;