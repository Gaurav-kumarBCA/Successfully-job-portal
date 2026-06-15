import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import JobUpdated from "../component/JobUpdated";
import JobDeleted from "../component/JobDeleted";

const GetAllJobs = () => {
  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
    const jobhandle = async() =>{
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/recruiter/jobs/job_data`,{
          method:"GET",
          credentials:"include",
          headers:{
            "Content-Type": "application/json"
          }
        })
        const data = await res.json();
        if(!data.success){
          return toast.error(data.message)
        }
        setJobs(data.data)
      } catch (error) {
        toast.error("Server not responding")
      }
    }
    jobhandle();
  },[])

  const handleUpdate = (id) => {
    console.log("Update Job:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Job:", id);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-sm p-6 dark:bg-gray-950 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">

            <div>
              <NavLink to="/dashboard-recruiters">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-gray-300">
                My Jobs
              </h1>
              </NavLink>
              <p className="text-slate-500 mt-1 dark:text-gray-400">
                Manage and track all jobs you have posted.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-900 px-6 py-4 rounded-2xl">
              <p className="text-sm text-slate-500 dark:text-gray-200">
                Total Jobs
              </p>
              <h2 className="text-3xl font-bold text-blue-600">
                {jobs.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 dark:bg-gray-950">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:placeholder-gray-200"
          />
        </div>

        <div className="space-y-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl shadow-sm p-6 dark:bg-gray-950 hover:shadow-lg transition"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">

                <div className="flex-1">

                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-200">
                      {job.job_name}
                    </h2>

                    <span className={`px-3 py-1 ${job.status === "approved" ? "bg-green-100 text-green-500" : job.status === "pending" ? "bg-yellow-100 text-yellow-700" : job.status === "reject" ? "bg-red-100 text-red-500" : ""}  rounded-full text-sm`}>
                      {job.status}
                    </span>
                  </div>

                  <p className="text-slate-600 mt-3 leading-7 dark:text-gray-300">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-5">

                    <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                      <FaMoneyBillWave className="text-green-600" />
                      ₹{job.salary.toLocaleString()}
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                      <FaMapMarkerAlt className="text-red-500" />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                      <FaBriefcase className="text-blue-600" />
                      {job.job_type}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-5">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {job.category}
                    </span>

                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                      {new Date(
                        job.created_at
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3">
                 
                 <JobUpdated job={job}
  setJobs={setJobs}/>

                  <JobDeleted    job={job}
  setJobs={setJobs}/>      
                 
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GetAllJobs;