import React, { useState } from "react";
import {
  FaBriefcase,
  FaUser,
  FaPen,
  FaUpload,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaFolder,
  FaShieldAlt
} from "react-icons/fa";

const AppliedJob = () => {

  const [formData, setFormData] = useState({
    job_id: "4",
    user_id: "1",
    cover_letter:
      "I am very interested in this opportunity and believe I am a great fit for this role.",
    resume: null
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  return (
    <div className="min-h-screen bg-[#edf2fa] p-3 md:p-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-7">


          <div className="bg-white border rounded-[30px] p-6 shadow-sm">

            <div className="flex items-center gap-3 text-blue-600">

              <FaArrowLeft />

              <h1>
                Back to Job Details
              </h1>

            </div>


            <h1 className="font-bold text-3xl md:text-4xl mt-8">

              Apply for this Job

            </h1>

            <p className="text-gray-500 mt-3">

              Fill in your details and submit application

            </p>



            <div className="space-y-8 mt-10">


              <div>

                <label className="font-bold">
                  Job ID
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex justify-center items-center">

                    <FaBriefcase className="text-blue-600"/>

                  </div>

                  <input
                    name="job_id"
                    value={formData.job_id}
                    onChange={handleChange}
                    className="flex-1 border rounded-xl p-4 outline-none"
                  />

                </div>

              </div>




              <div>

                <label className="font-bold">
                  User ID
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex justify-center items-center">

                    <FaUser className="text-blue-600"/>

                  </div>

                  <input
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleChange}
                    className="flex-1 border rounded-xl p-4 outline-none"
                  />

                </div>

              </div>




              <div>

                <label className="font-bold">
                  Cover Letter
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-32 rounded-xl bg-blue-50 flex justify-center pt-6">

                    <FaPen className="text-blue-600"/>

                  </div>

                  <textarea
                    rows={5}
                    name="cover_letter"
                    value={formData.cover_letter}
                    onChange={handleChange}
                    className="flex-1 border rounded-xl p-4 outline-none"
                  />

                </div>

              </div>




              <div>

                <label className="font-bold">


                </label>

                <div className="border-2 border-dashed rounded-2xl p-6 mt-3">

                  <div className="flex flex-col md:flex-row justify-between items-center gap-5">

                    <div className="flex gap-4 items-center">

                      <div className="w-20 h-20 rounded-xl bg-blue-50 flex justify-center items-center">

                        <FaUpload className="text-blue-600 text-3xl"/>

                      </div>

                      <div>

                        <h1>
                          Upload your resume
                        </h1>

                        <p className="text-gray-500">

                          PDF or DOC (Max 5MB)

                        </p>

                      </div>

                    </div>


                    <label className="bg-blue-700 text-white px-8 py-4 rounded-xl cursor-pointer">

                      Choose File

                      <input
                        type="file"
                        hidden
                      />

                    </label>

                  </div>

                </div>

              </div>



              <button className="bg-blue-700 hover:bg-blue-800 duration-300 text-white w-full py-4 rounded-xl">

                Submit Application

              </button>

            </div>

          </div>




          <div className="bg-[#f3f7ff] rounded-[30px] p-5 h-fit">

            <div className="bg-white rounded-[30px] shadow overflow-hidden">

              <div className="bg-[#eef4ff] p-7">

                <div className="flex justify-between items-start">

                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow">

                    <FaBriefcase className="text-blue-600 text-5xl"/>

                  </div>

                  <span className="bg-green-100 text-green-600 px-5 py-2 rounded-full">

                    Full-time

                  </span>

                </div>


                <h1 className="font-bold text-3xl mt-7">

                  Python Developer

                </h1>

                <p className="text-gray-600 mt-3">

                  Tech Solutions Inc ✔

                </p>

              </div>



              <div className="p-7 space-y-6">

                <div className="flex justify-between">

                  <span className="flex gap-3">
                    <FaMapMarkerAlt />
                    Location
                  </span>

                  <span>
                    Delhi
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="flex gap-3">
                    <FaMoneyBillWave />
                    Salary
                  </span>

                  <span>
                    ₹50,000
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="flex gap-3">
                    <FaClock />
                    Type
                  </span>

                  <span>
                    Full-Time
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="flex gap-3">
                    <FaFolder />
                    Category
                  </span>

                  <span>
                    Creator
                  </span>

                </div>

              </div>



              <div className="bg-[#eef4ff] p-5 rounded-2xl m-5">

                <div className="flex gap-3">

                  <FaShieldAlt
                  className="text-blue-600 mt-1"/>

                  <div>

                    <h1 className="font-bold">
                      Your information is safe
                    </h1>

                    <p className="text-sm text-gray-500">
                      We never share your data
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AppliedJob;