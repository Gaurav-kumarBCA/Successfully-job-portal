import React, { useState } from "react";
import { FaEdit, FaTimes, FaBuilding } from "react-icons/fa";
import { toast } from "react-toastify";

const CompanyUpdate = ({ company, setCompany }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    company_name: "",
    description: "",
    website_url: "",
    location: "",
  });

  const handleOpen = () => {
    setFormData({
      company_name: company?.company_name || "",
      description: company?.description || "",
      website_url: company?.website_url || "",
      location: company?.location || "",
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
      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(
        `${url}/recruiter/companies/companies_data/${company.id}`,
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

      setCompany(data.data);

      toast.success("Company Updated Successfully 🚀");

      setOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-md"
      >
        <FaEdit />
        Update
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">

              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 hover:rotate-90 transition"
              >
                <FaTimes size={22} />
              </button>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <FaBuilding size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Update Company
                  </h2>

                  <p className="text-blue-100 text-sm mt-1">
                    Keep your company profile updated for better visibility.
                  </p>
                </div>

              </div>
            </div>

            <form
              onSubmit={handleUpdate}
              className="p-6 space-y-5"
            >
              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Website URL
                </label>

                <input
                  type="text"
                  name="website_url"
                  value={formData.website_url}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Noida, India"
                  className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your company..."
                  className="w-full border border-slate-200 rounded-xl p-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default CompanyUpdate;