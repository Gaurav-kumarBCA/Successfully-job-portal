import React, { useState } from "react";
import { FaTrash, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CompanyDeleted = ({ companyId }) => {
    const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(
        `${url}/recruiter/companies/companies_data/${companyId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Company Deleted Successfully 🚀");

      setTimeout(() => {
       navigate("/add-companies")
      }, 3000);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-3 rounded-xl bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition flex items-center gap-2"
      >
        <FaTrash />
        Delete
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4">

          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">

            <div className="flex justify-between items-center p-5 border-b">

              <h2 className="text-xl font-bold text-slate-800">
                Delete Company
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimes />
              </button>

            </div>

            <div className="p-6 text-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex justify-center items-center mx-auto mb-5">
                <FaExclamationTriangle
                  size={35}
                  className="text-red-600"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Are you sure?
              </h3>

              <p className="text-gray-500 mt-3">
                This action will permanently delete
                your company profile and cannot be
                undone.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 p-5 border-t">

              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-3 rounded-xl border font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={loading}
                className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Delete Company"}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default CompanyDeleted;