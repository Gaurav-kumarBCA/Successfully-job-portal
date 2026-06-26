

import React, { useEffect, useRef } from "react";
import Layout from "../component/Layout";
import Footer from "../component/Footer";
import {
  FaStar,
  FaSearch,
  FaMapMarkerAlt,
  FaUser,
  FaBriefcase,
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaDatabase,
  FaTrophy
} from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const categories = [
  { title:"Development", jobs:"12,450 Jobs", icon:<FaCode/> },
  { title:"UI/UX", jobs:"8,200 Jobs", icon:<FaPaintBrush/> },
  { title:"Marketing", jobs:"6,900 Jobs", icon:<FaBullhorn/> },
  { title:"Data Science", jobs:"4,300 Jobs", icon:<FaDatabase/> }
];

const jobs = [
{
title:"Senior React Developer",
company:"Google",
location:"Lucknow",
salary:"₹12L - ₹18L"
},
{
title:"UI/UX Designer",
company:"Adobe",
location:"Delhi",
salary:"₹8L - ₹14L"
},
{
title:"Backend Developer",
company:"Amazon",
location:"Bangalore",
salary:"₹15L - ₹22L"
},
{
title:"Product Manager",
company:"Microsoft",
location:"Chhattisgarh",
salary:"₹20L - ₹28L"
}
];

const Home = () => {

return(
<Layout>

<main className="bg-[#f5f7ff] dark:bg-gray-900  overflow-hidden">

<div className="
max-w-7xl
mx-auto
px-4
py-8
bg-[url('/bg.webp')]
dark:bg-none
bg-cover
bg-center
bg-no-repeat
rounded-[40px]
relative
overflow-hidden
">



<div className="bg-white dark:bg-gray-950 rounded-[35px] border-1 border-red-900 dark:border-white p-6 md:p-10 shadow-lg">

<div className="flex flex-col lg:flex-row gap-10 items-center">

<div className="w-full lg:w-1/2">

<div className="w-fit bg-yellow-50  px-4 py-2 rounded-full flex items-center gap-2">

<FaStar className="text-yellow-500"/>

<p className="font-semibold text-blue-800">
Your Future Starts Here
</p>

</div>

<h1 className="text-4xl md:text-6xl dark:text-white lg:text-7xl font-bold mt-6 leading-tight">

Find Jobs <br/>

Build Your
<span className="text-blue-600">
 Future.
</span>

</h1>

<p className="mt-5 text-gray-500 dark:text-white">

Discover thousands of opportunities from top companies and build your dream career.

</p>


{/* <div className="bg-white dark:bg-gray-600 shadow-xl rounded-2xl mt-8 p-4 flex flex-col gap-4">

  <div className="flex items-center border dark:border-gray-500 rounded-xl p-3">

    <FaSearch className="text-gray-400 dark:text-white" />

    <input
      placeholder="Search jobs..."
      className="ml-3 w-full outline-none bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
    />

  </div>

  <div className="flex items-center border dark:border-gray-500 rounded-xl p-3">

    <FaMapMarkerAlt className="text-gray-400 dark:text-white" />

    <input
      placeholder="City..."
      className="ml-3 w-full outline-none bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
    />

  </div>

  <button className="bg-blue-600 dark:bg-blue-950 py-3 rounded-xl text-white dark:font-bold">

    Search Jobs

  </button>

</div> */}
</div>


<div className="w-full lg:w-1/2 relative">

<img

src="/hero.jpeg"
className="rounded-[30px] w-full h-[300px] md:h-[550px] object-cover"
/>

<div  className="absolute top-5 right-4 bg-white p-4 rounded-xl shadow-lg">

<h1 className="font-bold text-xl">
15K+
</h1>

<p className="text-gray-500">
Active Jobs
</p>

</div>

<div  className="absolute bottom-5 left-4 bg-white p-4 rounded-xl shadow-lg">

<h1 className="font-bold text-xl">
50K+
</h1>

<p className="text-gray-500">
Job Seekers
</p>

</div>

</div>

</div>

</div>




<div className="mt-14">

<h1 className="text-3xl font-bold mb-6 dark:text-white">

Popular Categories

</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{categories.map((item,index)=>(

<div
key={index}
className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:-translate-y-2 duration-300">

<div className="text-4xl text-blue-600">

{item.icon}

</div>

<h1 className="font-bold mt-4 dark:text-white">
{item.title}
</h1>

<p className="text-gray-500 dark:text-gray-300">
{item.jobs}
</p>

</div>

))}

</div>

</div>




<div className="mt-14">

<h1 className="text-3xl font-bold mb-6 dark:text-white">

Featured Jobs

</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{jobs.map((job,index)=>(

<div
key={index}
className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">

<h1 className="font-bold text-xl dark:text-white">

{job.title}

</h1>

<p className="text-gray-500 mt-2 dark:text-gray-300">

{job.company}

</p>

<p className="text-gray-500 dark:text-gray-300">

{job.location}

</p>

<p className="mt-4 font-bold text-blue-600">

{job.salary}

</p>
<NavLink to="/all_jobs/applied">
<button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl">

See More

</button>
</NavLink>
</div>

))}

</div>

</div>



<div className="bg-white dark:bg-gray-950 rounded-[30px] mt-14 p-8 md:p-12 shadow-lg">

  <div className="text-center">

    <p className="text-blue-600 font-semibold">
      SIMPLE PROCESS
    </p>

    <h1 className="text-3xl dark:text-white md:text-5xl font-bold mt-3">
      How It Works
    </h1>

    <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
      Follow a few simple steps to discover your dream job and connect with top companies around the world.
    </p>

  </div>


 

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-14">

   

    <div className="bg-[#f8faff] dark:bg-gray-800 rounded-3xl p-6 text-center hover:-translate-y-2 duration-300 shadow-sm">

      <div className="h-20 w-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center">

        <FaUser className="text-4xl text-blue-600"/>

      </div>

      <h1 className="font-bold text-xl mt-5 dark:text-white">
        Create Account
      </h1>

      <p className="text-gray-500 text-sm mt-3 leading-6 dark:text-gray-300">
        Sign up and build your professional profile in minutes.
      </p>

    </div>


    

    <div className="bg-[#fff7fb] dark:bg-gray-800 rounded-3xl p-6 text-center hover:-translate-y-2 duration-300 shadow-sm">

      <div className="h-20 w-20 bg-pink-100 rounded-full mx-auto flex items-center justify-center">

        <FaSearch className="text-4xl text-pink-600"/>

      </div>

      <h1 className="font-bold text-xl mt-5 dark:text-white">
        Search Jobs
      </h1>

      <p className="text-gray-500 text-sm mt-3 leading-6 dark:text-gray-300">
        Explore thousands of jobs based on your skills and interests.
      </p>

    </div>


   

    <div className="bg-[#fffdf5] dark:bg-gray-800 rounded-3xl p-6 text-center hover:-translate-y-2 duration-300 shadow-sm">

      <div className="h-20 w-20 bg-yellow-100 rounded-full mx-auto flex items-center justify-center">

        <IoPaperPlane className="text-4xl text-yellow-500"/>

      </div>

      <h1 className="font-bold text-xl mt-5 dark:text-white">
        Apply Easily
      </h1>

      <p className="text-gray-500 text-sm mt-3 leading-6 dark:text-gray-300">
        Send applications quickly with a smooth one-click process.
      </p>

    </div>


    

    <div className="bg-[#f5fff8] dark:bg-gray-800 rounded-3xl p-6 text-center hover:-translate-y-2 duration-300 shadow-sm">

      <div className="h-20 w-20 bg-green-100 rounded-full mx-auto flex items-center justify-center">

        <FaBriefcase className="text-4xl text-green-600"/>

      </div>

      <h1 className="font-bold text-xl mt-5 dark:text-white">
        Get Hired
      </h1>

      <p className="text-gray-500 text-sm mt-3 leading-6 dark:text-gray-300">
        Connect with recruiters and start your professional journey.
      </p>

    </div>




    <div className="hidden lg:block relative overflow-hidden rounded-3xl">

      <img
        src="/nav.jpeg"
        alt=""
        className="w-full h-full object-cover rounded-3xl"
      />

      <div className="absolute inset-0 bg-black/30 flex items-end p-5">

        <div>

          <h1 className="text-white text-2xl font-bold">
            100% Trusted Platform
          </h1>

          <p className="text-gray-200 text-sm mt-2">
            Helping thousands of people find jobs daily.
          </p>

        </div>

      </div>

    </div>

  </div>





  <div className="grid md:grid-cols-3 gap-6 mt-14">

    {/* BOX 1 */}

    <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-7 text-white shadow-lg">

      <h1 className="text-4xl font-bold">
        15K+
      </h1>

      <p className="mt-2 text-blue-100">
        Active jobs available from top companies worldwide.
      </p>

    </div>


 

    <div className="bg-white border dark:bg-gray-800 dark:border-gray-700 border-gray-100 rounded-3xl p-7 shadow-sm">

      <h1 className="text-2xl font-bold dark:text-white">
        Fast Hiring Process
      </h1>

      <p className="text-gray-500 mt-3 leading-7 dark:text-gray-300">
        Apply to jobs instantly and connect with recruiters without complicated steps.
      </p>

    </div>


  

    <div className="bg-[#101828] dark:border-gray-700 dark:border rounded-3xl p-7 text-white shadow-lg">

      <h1 className="text-2xl font-bold">
        Career Growth
      </h1>

      <p className="text-gray-300 mt-3 leading-7 ">
        Discover opportunities that help you grow your skills and future career.
      </p>

    </div>

  </div>

</div>



<div className="mt-14 bg-gradient-to-r from-[#141e70] to-[#3456ff] rounded-[30px] p-10 text-white">

<div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">

<div className="text-8xl text-yellow-400">
   <FaTrophy />
</div>

<div>
<h1 className="text-5xl font-bold">15K+</h1>
<p>Jobs</p>
</div>

<div>
<h1 className="text-5xl font-bold">8K+</h1>
<p>Companies</p>
</div>

<div>
<h1 className="text-5xl font-bold">50K+</h1>
<p>Seekers</p>
</div>

<button className="bg-white text-blue-700 rounded-xl px-6 py-3 font-bold h-fit my-auto">

Get Started

</button>

</div>

</div>

</div>

<Footer/>

</main>

</Layout>
)

}

export default Home