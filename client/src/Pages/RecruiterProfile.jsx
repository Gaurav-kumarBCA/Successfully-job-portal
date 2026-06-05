import React, { useEffect, useState } from "react";
import { useRecruiter } from "../store/recruiter.store";
import { FaGlobe, FaEnvelope, FaBuilding, FaUserTie, FaCheckCircle } from "react-icons/fa";

const RecruiterProfile = () => {
  const { recruiter } = useRecruiter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (recruiter) setLoading(false);
  }, [recruiter]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-10 text-white flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl font-bold shadow-md">
            {recruiter?.name?.charAt(0)?.toUpperCase() || "R"}
          </div>

          <div>
            <h1 className="text-3xl font-bold">{recruiter?.name}</h1>
            <p className="text-blue-100">{recruiter?.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">Verified Recruiter</span>
            </div>
          </div>

        </div>

        <div className="p-6 md:p-10 grid md:grid-cols-2 gap-6">

          <div className="space-y-4">

            <h2 className="text-xl font-bold text-gray-700">Personal Info</h2>

            <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <p>{recruiter?.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
              <FaBuilding className="text-blue-600" />
              <p>{recruiter?.company_name}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
              <FaGlobe className="text-blue-600" />
              <p>{recruiter?.company_website}</p>
            </div>

          </div>

          <div className="space-y-4">

            <h2 className="text-xl font-bold text-gray-700">Company Insights</h2>

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Industry</p>
              <p className="font-bold">Information Technology</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Recruiter Level</p>
              <p className="font-bold">Senior Hiring Manager</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-bold">India (Remote Hiring)</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Active Status</p>
              <p className="font-bold text-green-600">Active Hiring</p>
            </div>

          </div>

        </div>

        {/* FOOTER STATS
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">

          <div className="bg-white p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">12</p>
            <p className="text-gray-500 text-sm">Jobs Posted</p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">45</p>
            <p className="text-gray-500 text-sm">Applicants</p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">8</p>
            <p className="text-gray-500 text-sm">Active Jobs</p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">3</p>
            <p className="text-gray-500 text-sm">Companies</p>
          </div>

        </div> */}

      </div>
    </div>
  );
};

export default RecruiterProfile;