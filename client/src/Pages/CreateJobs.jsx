import React, { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaLayerGroup,
  FaBuilding,
  FaUser,
  FaClipboardList,
  FaLaptopCode
} from "react-icons/fa";
import { toast } from "react-toastify"
const CreateJobs = () => {

  const [jobData, setJobData] = useState({
    job_name: "",
    description: "",
    salary: "",
    location: "",
    job_type: "",
    category: "",   
  });

  const handleChange = (e) => {
    setJobData((prev)=>({
      ...prev,[e.target.name]: e.target.value
    }));

  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!jobData.job_name || !jobData.description || !jobData.salary || !jobData.job_type || !jobData.category){
      return toast.info("All Fields are required ")
    }
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/recruiter/jobs/job_data`,{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(jobData)
      })
      const data = await res.json();
      if(!data.success){
        return toast.error(data.message)
      }
      toast.success("Job Created Successfully")
    } catch (error) {
      toast.error("Server not responding")
    }
    

  };

  return (
    <div className="min-h-screen bg-[#f4f7ff] p-3 md:p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-[35px] shadow-md overflow-hidden">


        <div className="border-b p-6 flex items-center gap-4">

          <img
            src="/job-portal.png"
            className="w-12 h-12 object-contain"
          />

          <div>

            <h1 className="font-bold text-3xl">
              Career Path
            </h1>

            <p className="text-gray-500">
              Create New Job
            </p>

          </div>

        </div>


        <div className="grid lg:grid-cols-2 gap-8 p-5 md:p-8">


          <form onSubmit={handleSubmit}>
          <div className="border rounded-[30px] p-6">

            <h1 className="text-3xl font-bold">
              Job Information
            </h1>

            <p className="text-gray-500 mt-2">
              Fill all details to create a job
            </p>


            <div className="space-y-6 mt-8">



              <div>

                <label className="font-semibold">
                  Job Name
                </label>

                <div className="border rounded-xl p-4 mt-2 flex gap-3 items-center">

                  <FaBriefcase className="text-blue-600"/>

                  <input
                    type="text"
                    name="job_name"
                    value={jobData.job_name}
                    onChange={handleChange}
                    placeholder="Enter job name"
                    className="w-full outline-none"
                  />

                </div>

              </div>



              <div>

                <label className="font-semibold">
                  Description
                </label>

                <div className="border rounded-xl p-4 mt-2 flex gap-3">

                  <FaClipboardList
                    className="text-blue-600 mt-1"
                  />

                  <textarea
                    rows={5}
                    name="description"
                    value={jobData.description}
                    onChange={handleChange}
                    placeholder="Write job details..."
                    className="w-full outline-none"
                  />

                </div>

              </div>




              <div>

                <label className="font-semibold">
                  Salary
                </label>

                <div className="border rounded-xl p-4 mt-2 flex gap-3 items-center">

                  <FaMoneyBillWave className="text-green-600"/>

                  <input
                    type="number"
                    name="salary"
                    value={jobData.salary}
                    onChange={handleChange}
                    placeholder="Enter Salary"
                    className="w-full outline-none"
                  />

                </div>

              </div>



              <div>

                <label className="font-semibold">
                  Location
                </label>

                <div className="border rounded-xl p-4 mt-2 flex gap-3 items-center">

                  <FaMapMarkerAlt className="text-red-500"/>

                  <input
                    type="text"
                    name="location"
                    value={jobData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    className="w-full outline-none"
                  />

                </div>

              </div>




              <div>

                <label className="font-semibold">
                  Job Type
                </label>

                <div className="border rounded-xl p-4 mt-2 flex gap-3 items-center">

                  <FaLaptopCode className="text-purple-600"/>

                  <select
                    name="job_type"
                    value={jobData.job_type}
                    onChange={handleChange}
                    className="w-full outline-none"
                  >

                    <option>
                      Select Type
                    </option>

                    <option value="full-time">
                      Full Time
                    </option>

                    <option value="part-time">
                      Part Time
                    </option>

                    <option value="internship">
                      Internship
                    </option>

                    <option value="remote">
                      Remote
                    </option>

                  </select>

                </div>

              </div>


            <div>

                <label className="font-semibold">
                  Category
                </label>

                <div className="border rounded-xl p-4 mt-2 flex gap-3 items-center">

                  <FaLayerGroup className="text-orange-500"/>

                  <input
                    type="text"
                    name="category"
                    value={jobData.category}
                    onChange={handleChange}
                    placeholder="Creater"
                    className="w-full outline-none"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 duration-300"
              >

                Create Job

              </button>

            </div>

          </div>
          </form>



          <div className="bg-[#edf4ff] rounded-[30px] p-8 h-fit">

            <div className="bg-white rounded-[30px] p-8 shadow">

              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl mx-auto">

                <FaBriefcase/>

              </div>

              <h1 className="text-center text-3xl font-bold mt-6">

                {jobData.job_name || "Job Title"}

              </h1>

              <p className="text-center text-gray-500 mt-2">

                {jobData.location || "Location"}

              </p>


              <div className="space-y-5 mt-8">

                <div>
                  <h2 className="font-bold">
                    Description
                  </h2>

                  <p className="text-gray-500">
                    {jobData.description || "Job details"}
                  </p>
                </div>


                <div className="flex justify-between">

                  <span className="font-bold">
                    Salary
                  </span>

                  <span>
                    ₹ {jobData.salary || "0"}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="font-bold">
                    Type
                  </span>

                  <span>
                    {jobData.job_type || "--"}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="font-bold">
                    Category
                  </span>

                  <span>
                    {jobData.category || "--"}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateJobs;