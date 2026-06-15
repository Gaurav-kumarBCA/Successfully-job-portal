import React, { useState } from "react";
import {
  FaBriefcase,
  FaPen,
  FaUpload,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaFolder,
  FaShieldAlt,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import withAuth from "../component/withAuth";

const AppliedJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cover_letter:
      "I am very interested in this opportunity and believe I am a great fit.",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    try {
      if (!formData.resume) {
        return toast.error("Please upload resume");
      }

      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const form = new FormData();
      form.append("job_id", id);
      form.append("cover_letter", formData.cover_letter);
      form.append("resume", formData.resume);

      const res = await fetch(`${url}/user/job/apply`, {
        method: "POST",
        credentials: "include", 
        body: form,
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Application submitted successfully 🚀");

      navigate("/all_jobs/applied");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.7fr_1fr] gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 dark:bg-gray-950">

          <div
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-blue-600 cursor-pointer"
          >
            <FaArrowLeft />
            <span>Back</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mt-6 dark:text-gray-300">
            Apply for this Job
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your application and submit
          </p>

          <div className="mt-8">
            <label className="font-semibold dark:text-gray-200">Cover Letter</label>

            <div className="flex gap-4 mt-3">
              <div className="w-14 h-32 bg-blue-50 rounded-xl dark:bg-gray-950 flex items-start justify-center pt-4">
                <FaPen className="text-blue-600" />
              </div>

              <textarea
                name="cover_letter"
                value={formData.cover_letter}
                onChange={handleChange}
                rows={6}
                className="w-full border rounded-xl p-4 outline-none dark:border-white dark:text-white focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="font-semibold dark:text-white">Upload Resume</label>

            <div className="border-2 border-dashed rounded-2xl p-6 mt-3 flex dark:border-white flex-col md:flex-row justify-between items-center gap-5">

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-50 rounded-xl dark:bg-gray-800 flex items-center justify-center">
                  <FaUpload className="text-blue-600 text-2xl" />
                </div>

                <div>
                  <h1 className="font-semibold">Upload Resume</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    PDF / DOC (Max 5MB)
                  </p>
                </div>
              </div>

              <label className="bg-blue-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-700">
                Choose File
                <input type="file" hidden onChange={handleFile} />
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl dark:bg-gray-900 overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h2 className="text-2xl font-bold">Job Overview</h2>
            <p className="text-sm opacity-80">
              Review before applying
            </p>
          </div>

          <div className="p-6 space-y-5">

            <div className="flex justify-between">
              <span className="flex items-center gap-2 dark:text-gray-200">
                <FaMapMarkerAlt /> Location
              </span>
              <span className="dark:text-gray-300">Delhi</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2 dark:text-gray-200">
                <FaMoneyBillWave /> Salary
              </span>
              <span className="dark:text-gray-300">₹50,000</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2 dark:text-gray-200">
                <FaClock /> Type
              </span>
              <span className="dark:text-gray-300">Full Time</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2 dark:text-gray-200">
                <FaFolder /> Category
              </span>
              <span className="dark:text-gray-300">IT</span>
            </div>

          </div>

          <div className="m-6 p-4 bg-green-50 rounded-2xl dark:bg-gray-800 flex gap-3">
            <FaShieldAlt className="text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold dark:text-gray-200">Secure Application</h3>
              <p className="text-sm text-gray-500">
                Your data is protected
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default withAuth(AppliedJob);