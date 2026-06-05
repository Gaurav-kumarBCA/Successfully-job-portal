import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaHome,
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaUsers,
  FaChartBar,
  FaEnvelope,
  FaCog,
  FaMoon,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {toast} from "react-toastify"
import {useRecruiter} from "../store/recruiter.store"
const RecruitersHome = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard-recruiters" },
    { name: "My Profile", icon: <FaUser />, path: "/recruiter/profile" },
    { name: "Companies", icon: <FaBuilding />, path: "/company-profile" },
    { name: "Jobs", icon: <FaBriefcase />, path: "/create-all-job" },
    { name: "Applicants", icon: <FaUsers />, path: "/applicants" },
    { name: "Analytics", icon: <FaChartBar />, path: "/analytics" },
    { name: "Messages", icon: <FaEnvelope />, path: "/messages" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];
  const {recruiter} = useRecruiter();
  const [open, setOpen] = useState(false);
  const [data,setData] = useState();
  console.log(data);
  useEffect(()=>{
    const handledata = async() =>{
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/recruiter/dashboard`,{
          method:"GET",
          credentials:"include",
          headers:{
            "Content-Type" :  "application/json"
          }
        })
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        toast.error("Server not responding")
      }
    }
    handledata()
  },[])

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">


      <div
        className={`fixed lg:relative z-50 min-h-screen bg-white shadow-lg transition-all duration-300
        ${open ? "w-[260px]" : "w-0 lg:w-[85px] overflow-hidden"}
        `}
      >
        <div className="p-5">

          <div className="flex items-center gap-3">

            <img
              src="/job-portal.png"
              className="w-12 h-12"
            />

            {open && (
              <div>
                <h1 className="font-bold text-2xl">
                  Career Path
                </h1>

                <p className="text-gray-500 text-sm">
                  Recruiter Portal
                </p>
              </div>
            )}

          </div>


         <div className="mt-10 space-y-2">
  {menuItems.map((item, i) => (
    <NavLink
      key={i}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
        ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "hover:bg-blue-50"
        }`
      }
    >
      <div className="text-xl text-blue-600">
        {item.icon}
      </div>

      {open && (
        <p className="font-medium">
          {item.name}
        </p>
      )}
    </NavLink>
  ))}
</div>


          <div className="mt-10 p-4 border rounded-xl flex items-center justify-between">

            <FaMoon />

            {open && (
              <span>
                Dark
              </span>
            )}

          </div>

        </div>

      </div>




      <div className="flex-1">


        <div className="bg-white h-[80px] shadow-sm px-5 flex items-center justify-between">

          <div className="flex items-center gap-5">

            <FaBars
              onClick={() => setOpen(!open)}
              className="text-2xl cursor-pointer"
            />

            <div className="hidden md:flex items-center bg-[#f1f5f9] rounded-xl px-4 py-3 w-[350px]">

              <FaSearch className="text-gray-500"/>

              <input
                placeholder="Search..."
                className="bg-transparent outline-none px-3 w-full"
              />

            </div>

          </div>



          <div className="flex gap-6 items-center">

            <div className="relative">

              <FaBell className="text-xl"/>

              <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] flex justify-center items-center">
                5
              </div>

            </div>


            <div className="flex gap-3 items-center">

           <NavLink to="/recruiter/profile"> <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
  {recruiter?.name?.charAt(0)?.toUpperCase() }
</div></NavLink>

              <div className="hidden md:block">

                <h1 className="font-bold">
                {recruiter?.name }
                </h1>

                <p className="text-gray-500 text-sm">
                  Recruiter
                </p>

              </div>

            </div>

          </div>

        </div>




        <div className="p-5">


          <div className="bg-[#edf4ff] rounded-[30px] p-8 flex flex-col lg:flex-row justify-between items-center">

            <div>

              <h2 className="text-xl">
                Welcome Back,
              </h2>

              <h1 className="text-5xl font-bold mt-2">
                {recruiter?.name} 👋
              </h1>

              <p className="text-gray-500 mt-4">

                Manage companies, jobs and applicants
                all in one place.

              </p>


              <div className="flex gap-4 mt-8 flex-wrap">

               <NavLink to="/add-jobs"> <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
                  + Post New Job
                </button></NavLink>

               <NavLink to="/add-companies"> <button className="bg-white px-8 py-4 rounded-xl">
                  + Add Company
                </button></NavLink>

              </div>

            </div>


            <img
              src="/check-recruiters.webp"
              className="w-[350px] mt-10 lg:mt-0"
            />

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">

            {[
  [data?.activeJobs ?? 0, "Active Jobs"],
  [data?.totalJobs ?? 0, "Total Jobs"],
  [data?.totalApplications ?? 0, "Applications"],
  [data?.totalUsers ?? 0, "Users"],
  [data?.pendingJobs ?? 0, "Pending Jobs"],
  [data?.appliedUsers?.length ?? 0, "Applied Users"],
  [data?.uniqueApplicants ?? 0, "Unique Applicants"]
].map((card, i) => (
  <div key={i} className="bg-white rounded-3xl p-6 shadow-sm">
    <h1 className="text-4xl font-bold">{card[0]}</h1>
    <p className="text-gray-500 mt-2">{card[1]}</p>
  </div>
))}

          </div>




          <h1 className="font-bold text-2xl mt-8">

            Quick Actions

          </h1>


          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5">

            {[
              "Add Company",
              "Post Job",
              "View Applicants",
              "Messages"
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >

                <h1 className="font-bold">

                  {item}

                </h1>

                <p className="text-gray-500 mt-3">

                  Manage quickly

                </p>

              </div>

            ))}

          </div>




          <div className="grid lg:grid-cols-2 gap-5 mt-8">

            <div className="bg-white rounded-3xl p-6">

              <h1 className="font-bold text-xl">
                Recent Job Posting
              </h1>

              <div className="mt-6 space-y-5">

                {data?.recentJobs?.map((job) => (
  <div key={job.id} className="flex justify-between border-b pb-4">
    <div>
      <h1 className="font-semibold">{job.job_name}</h1>
      <p className="text-gray-500">
        {job.location}
      </p>
    </div>

    <span className={job.status === "approved" ? "text-green-700 font-bold" : job.status === "pending" ? "text-yellow-500 font-bold" : ""}>
      {job.status}
    </span>
  </div>
))}

              </div>

            </div>



            <div className="bg-white rounded-3xl p-6">

              <h1 className="font-bold text-xl">
                Recent Applicants
              </h1>

              <div className="mt-6 space-y-5">

               {data?.recentApplicants?.map((user, i) => (
  <div key={i} className="flex justify-between border-b pb-4">

    <div className="flex gap-3">
      <img
        src="https://i.pravatar.cc/50"
        className="w-10 h-10 rounded-full"
      />

      <div>
        <h1>{user.name}</h1>
        <p className="text-gray-500">
          {user.job_name}
        </p>
      </div>
    </div>

    <span className="text-blue-600 font-bold">
      {new Date(user.created_at).toLocaleDateString()}
    </span>

  </div>
))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RecruitersHome;