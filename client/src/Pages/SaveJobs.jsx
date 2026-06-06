import React, { useEffect, useState } from "react";
import { FaTrash, FaMapMarkerAlt, FaMoneyBillWave, FaBuilding } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSavedJobs = async () => {
    try {
      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(`${url}/user/saveJob/job`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      setJobs(data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(`${url}/user/saveJob/job/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      toast.success("Job removed from saved list");

      setJobs((prev) => prev.filter((job) => job.id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading saved jobs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ❤️ Saved Jobs
        </h1>

        {jobs.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            No saved jobs found 😔
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-xl transition relative"
              >

                <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  Saved
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold">
                    {job.company?.company_name?.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {job.company?.company_name}
                    </h2>
                    <p className="text-xs text-gray-500">Company</p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  {job.job_name}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {job.description}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-600" />
                    ₹{job.salary}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBuilding className="text-blue-600" />
                    {job.job_type}
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(job.id)}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
                >
                  <FaTrash />
                  Remove
                </button>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SaveJobs;