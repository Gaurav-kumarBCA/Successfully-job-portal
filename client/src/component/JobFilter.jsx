import React, { useEffect } from "react";
import { FaSearch, FaTags } from "react-icons/fa";

const JobFilter = ({
  search,
  setSearch,
  category,
  setCategory,
  setJobs,
}) => {

  useEffect(() => {

    const timer = setTimeout(async () => {
      try {

        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(
          `${url}/public/job/search?search=${encodeURIComponent(
            search
          )}&category=${encodeURIComponent(category)}`
        );

        const data = await res.json();
        console.log(data)

        if (data.success) {
          setJobs(data.data);
        }

      } catch (error) {
        console.log(error);
      }
    }, 500);

    return () => clearTimeout(timer);

  }, [search, category, setJobs]);

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Search */}

        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search Job, Company, Location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Category */}

        <div className="relative">

          <FaTags className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search Category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

    </div>
  );
};

export default JobFilter;