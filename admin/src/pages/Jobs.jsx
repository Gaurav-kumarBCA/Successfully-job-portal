import React from "react";
import Layout from "../component/Layout";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import ApprovedJob from "../component/ApprovedJob";
import withAuth from "../component/withAuth";
import { useTheme } from "../hooks/useTheme";
const Jobs = () => {
  const { darkMode } = useTheme();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const approvedData = (id) => {
    setJobs((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "approved" } : item,
      ),
    );
  };
  useEffect(() => {
    const AllJobsDashboard = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/approved/alljob`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        setJobs(data.data);
        if(data.success){
          setJobs(data.data || [])
        } 
        else{
          setJobs([])
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    AllJobsDashboard();
  }, []);

  if (loading) {
    return (
      <div
        className="
        h-screen
        w-full
        bg-gray-100
        dark:bg-gradient-to-br
        dark:from-slate-950
       dark:via-blue-950
        dark:to-slate-900
        flex
        items-center
        justify-center
      "
      >
        <div className="flex flex-col items-center gap-3">
          <ThreeDots height="70" width="70" color={darkMode ? "#ffffff" : "#000000"} visible={true} />

          <div className="flex items-center gap-2">
            <p className="text-black   dark:text-white text-sm md:text-lg">
              Loading Jobs page...
            </p>

            <TailSpin height="20" width="20" color={darkMode ? "#60A5FA" : "#2563EB"} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <Layout>
      <div className="min-h-full  w-full bg-gray-100 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 ">
        <div className="w-full h-[50px] border-b border-gray-300 dark:border-slate-900  flex gap-4 ">
          <div className="h-full w-[50px] md:w-[50px]  flex items-center ">
            <NavLink to="/">
              <IoArrowBack size={23} className="text-black dark:text-white ml-2 mt-3 " />
            </NavLink>
          </div>
          <div className="h-full w-[200px]  flex items-end ">
            <h1 className="text-black dark:text-white font-semibold  text-2xl md:text-3xl ">
              Jobs Cards{" "}
            </h1>
          </div>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <div>
              <ThreeDots
                height="50"
                width="50"
                radius="9"
          color={darkMode ? "#ffffff" : "#000000"}
                visible={true}
              />
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <h3 className="text-black dark:text-white text-[10px] ml-12">
                Please Wait Job Uploade
              </h3>
              <TailSpin visible={true} height="20" width="20" color={darkMode ? "#60A5FA" : "#2563EB"} />
            </div>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex gap-2 items-center justify-center h-[70vh]">
            <span className="text-black dark:text-white">
              <MdWork size={20} />
            </span>
            <h1 className="text-black dark:text-white text-sm md:text-2xl font-bold">
              job not found
            </h1>
          </div>
        ) : (
          <div
            className="
grid 
grid-cols-1 
sm:grid-cols-2
lg:grid-cols-3
gap-6 
p-5
w-full
pb-35
md:pb-10

"
          >
            {jobs.map((item, index) => (
              <div
                key={item.id}
                className="
relative
rounded-3xl
bg-white
dark:bg-gradient-to-br
dark:from-slate-900
dark:via-slate-800
dark:to-slate-900
border
border-gray-300
dark:border-slate-700
shadow-2xl
p-5
hover:scale-[1.02]
duration-300
transition-all
group
"
              >
                {/* top glow */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

                <div className="flex items-center gap-4">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
                    alt=""
                    className="
h-16
w-16
rounded-full
border-2
border-cyan-500
bg-slate-700
"
                  />

                  <div>
                    <h1 className="text-blue-700 dark:text-cyan-400 text-xl font-bold">
                      {item.job_name}
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.job_type}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-400">Salary</p>

                    <p className="text-black dark:text-white font-semibold">₹ {item.salary}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-400">Location</p>

                    <p className="text-black dark:text-white">{item.location}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-400">Recruiter</p>

                    <p className="text-cyan-400">{item.posted_by.name}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-400">Company</p>

                    <p className="text-black dark:text-white">{item.company.company_name}</p>
                  </div>

                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Description</p>

                    <p className="text-black dark:text-white text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <div
                    className={`
px-4
py-1
rounded-full
text-sm
font-bold
${
  item.status === "approved"
    ? "bg-green-500/20 text-green-400"
    : "bg-yellow-500/20 text-yellow-400"
}
`}
                  >
                    {item.status}
                  </div>

                  <ApprovedJob
                    status={item.status}
                    id={item.id}
                    approvedData={approvedData}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Jobs);
