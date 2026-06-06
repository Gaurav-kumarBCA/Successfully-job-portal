import React, { useEffect, useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GetAllJobbyUsers = () => {

const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/public/job`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setJobs(data.data);
      } catch (error) {
        toast.error(error.message || "Server Error");
      }
    };

    fetchJobs();
  }, []);

  const handleSave = async (job_id) => {
  try {
    const url = import.meta.env.VITE_SERVER_URL;

    const res = await fetch(`${url}/user/saveJob/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify({
        job_id: job_id,
      }),
    });

    const data = await res.json();

    if (!data.success) throw new Error(data.message);

    toast.success("Job Saved ❤️");
  } catch (error) {
    toast.error(error.message);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            Explore Latest Jobs 🚀
          </h1>

          <p className="text-slate-500 mt-2">
            Find your dream job from top companies and start your career journey today.
          </p>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center text-slate-500 mt-20">
            No jobs available right now 😔
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition p-6 border border-slate-100"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg uppercase">
                    {job.company?.company_name?.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-800">
                      {job.company?.company_name}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Hiring Now
                    </p>
                  </div>

                </div>

                <h3 className="text-xl font-bold text-slate-800">
                  {job.job_name}
                </h3>

                <p className="text-slate-500 text-sm mt-2 line-clamp-3">
                  {job.description}
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-600">

                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-600" />
                    ₹{job.salary}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-blue-600" />
                    {job.job_type}
                  </div>

                </div>

                <div className="mt-4 bg-slate-50 p-3 rounded-xl text-xs text-slate-600">
                  <p>
                    <span className="font-semibold">Company:</span>{" "}
                    {job.company?.company_name}
                  </p>

                  <p>
                    <span className="font-semibold">Website:</span>{" "}
                    {job.company?.website_url}
                  </p>
                </div>

                <div className="flex gap-3 mt-5">

                  <button onClick={()=>navigate(`/job-applied/${job.id}`)} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                    Apply Now
                  </button>

                  <button  onClick={() => handleSave(job.id)}
                    className="px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-100 transition rounded-xl bg-gray-400 font-bold"
                  >
                    Save
                  </button>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default GetAllJobbyUsers;