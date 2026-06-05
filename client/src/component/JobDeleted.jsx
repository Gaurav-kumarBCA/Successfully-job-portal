import React, { useState } from "react";
import {
  FaTrash,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const JobDeleted = ({ job, setJobs }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(
        `${url}/recruiter/jobs/job_data/${job.id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setJobs((prev) =>
        prev.filter((item) => item.id !== job.id)
      );

      toast.success("Job Deleted Successfully");

      setOpen(false);
    } catch (error) {
      toast.error(error.message || "Delete Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 transition"
      >
        <FaTrash />
        Delete
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

            <div className="bg-gradient-to-r from-red-600 to-rose-600 p-5 text-white relative">

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <FaExclamationTriangle size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Delete Job
                  </h2>

                  <p className="text-red-100 text-sm">
                    This action cannot be undone
                  </p>
                </div>

              </div>

            </div>

            <div className="p-6">

              <div className="bg-red-50 border border-red-100 rounded-2xl p-4">

                <h3 className="font-bold text-red-700">
                  Warning
                </h3>

                <p className="text-sm text-slate-600 mt-2 leading-6">
                  This job posting will be permanently removed
                  from your recruiter dashboard and candidates
                  will no longer be able to apply.
                </p>

              </div>

              <div className="mt-5 p-4 rounded-2xl bg-slate-50 border">

                <p className="text-xs text-slate-500 uppercase">
                  Selected Job
                </p>

                <h3 className="font-bold text-lg mt-1">
                  {job?.job_name}
                </h3>

                <p className="text-slate-500 text-sm">
                  {job?.location}
                </p>

              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">

                <button
                  onClick={() => setOpen(false)}
                  disabled={loading}
                  className="py-3 border rounded-xl font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDelete}
                  disabled={loading}
                  className="py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-semibold hover:opacity-90"
                >
                  {loading ? "Deleting..." : "Delete Job"}
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default JobDeleted;