import React, { useState } from "react";
import {
  FaEdit,
  FaTimes,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const JobUpdated = ({ job, setJobs }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    job_name: job?.job_name || "",
    description: job?.description || "",
    salary: job?.salary || "",
    location: job?.location || "",
    category: job?.category || "",
    job_type: job?.job_type || "",
  });

  const handleOpen = () => {
    setFormData({
      job_name: job?.job_name || "",
      description: job?.description || "",
      salary: job?.salary || "",
      location: job?.location || "",
      category: job?.category || "",
      job_type: job?.job_type || "",
    });

    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(
        `${url}/recruiter/jobs/job_data/${job.id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setJobs((prev) =>
        prev.map((item) =>
          item.id === job.id ? data.data : item
        )
      );

      toast.success("Job Updated Successfully 🚀");
      setOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <FaEdit />
        Update
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3">

          <div className="bg-white w-full max-w-lg md:max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

            {/* HEADER */}
            <div className="relative bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 p-6 text-white">

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <FaBriefcase className="text-2xl" />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Update Job
                  </h2>

                  <p className="text-blue-100 text-sm mt-1">
                    Edit your job details and keep listings updated.
                  </p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleUpdate}
              className="p-5 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="font-semibold block mb-2">
                    Job Title
                  </label>

                  <input
                    type="text"
                    name="job_name"
                    value={formData.job_name}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Salary
                  </label>

                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Category
                  </label>

                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-semibold block mb-2">
                    Job Type
                  </label>

                  <select
                    name="job_type"
                    value={formData.job_type}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Full Time">
                      Full Time
                    </option>

                    <option value="Part Time">
                      Part Time
                    </option>

                    <option value="Remote">
                      Remote
                    </option>

                    <option value="Internship">
                      Internship
                    </option>
                  </select>
                </div>

              </div>

              <div className="mt-5">
                <label className="font-semibold block mb-2">
                  Job Description
                </label>

                <textarea
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* STATIC CARD */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mt-6">

                <h3 className="font-semibold text-blue-700">
                  💡 Hiring Tips
                </h3>

                <p className="text-sm text-slate-600 mt-2 leading-6">
                  Detailed job descriptions, clear salary ranges,
                  and accurate locations usually attract more
                  qualified candidates and increase application rates.
                </p>

                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
                  <FaMapMarkerAlt />
                  Keep information updated regularly.
                </div>

              </div>

              {/* BUTTONS */}
              <div className="grid sm:grid-cols-2 gap-3 mt-7">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="py-3 border rounded-xl font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90"
                >
                  {loading
                    ? "Updating..."
                    : "Update Job"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default JobUpdated;