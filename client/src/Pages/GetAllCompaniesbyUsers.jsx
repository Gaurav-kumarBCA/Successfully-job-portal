import React, { useEffect, useState } from "react";
import { FaGlobe, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { toast } from "react-toastify";

const GetAllCompaniesbyUsers = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/public/companies`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setCompanies(data.data);
      } catch (error) {
        toast.error(error.message || "Server Error");
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
            Explore Top Companies 🏢
          </h1>

          <p className="text-slate-500 mt-2 dark:text-gray-300">
            Discover companies hiring and building amazing careers worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white dark:bg-gray-900  rounded-3xl shadow-sm hover:shadow-xl transition p-6 border border-slate-100"
            >

              <div className="flex items-center gap-4 mb-4">

                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg uppercase">
                  {company.company_name?.charAt(0)}
                </div>

                <div>
                  <h2 className="font-bold text-slate-800 dark:text-white">
                    {company.company_name}
                  </h2>

                  <p className="text-xs text-slate-500  dark:text-gray-400">
                    Hiring Company
                  </p>
                </div>

              </div>

              <p className="text-sm text-slate-600 leading-6 line-clamp-3  dark:text-gray-300 ">
                {company.description}
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-600">

                <div className="flex items-center gap-2 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-red-500" />
                  {company.location}
                </div>

                <div className="flex items-center gap-2 dark:text-gray-300">
                  <FaGlobe className="text-green-600" />
                  {company.website_url}
                </div>

              </div>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-xs bg-blue-50 dark:bg-blue-900/30  dark:text-blue-300 text-blue-600 px-3 py-1 rounded-full">
                  Active Company
                </span>

                <span className="text-xs text-slate-400">
                  #{company.id}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default GetAllCompaniesbyUsers;