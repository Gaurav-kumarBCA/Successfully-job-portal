import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { FaBuilding } from "react-icons/fa";
import withAuth from "../component/withAuth";

const Companies = () => {
  const [companiesData, setCompaniedData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const companieshandles = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/companies/get_companies`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setCompaniedData(data.data);
        if (data.success) {
          setCompaniedData(data.data || []);
        } else {
          setCompaniedData([]);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    companieshandles();
  }, []);
  if (loading) {
    return (
      <div
        className="
          h-screen
          w-full
          bg-gradient-to-br
          from-slate-950
          via-blue-950
          to-slate-900
          flex
          items-center
          justify-center
        "
      >
        <div className="flex flex-col items-center gap-3">
          <ThreeDots height="70" width="70" color="#fff" visible={true} />

          <div className="flex items-center gap-2">
            <p className="text-white text-sm md:text-lg">
              Loading Companies page...
            </p>

            <TailSpin height="20" width="20" color="#60A5FA" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <Layout>
      <div className="min-h-full  w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 ">
        <div className="w-full h-[50px] border-b border-slate-900  flex gap-4 ">
          <div className="h-full w-[50px] md:w-[50px]  flex items-center ">
            <NavLink to="/">
              <IoArrowBack size={23} className="text-white ml-2 mt-3 " />
            </NavLink>
          </div>
          <div className="h-full   flex items-end ">
            <h1 className="text-white font-semibold  text-2xl md:text-3xl ">
              Companies Cards{" "}
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
                color="#ffffff"
                visible={true}
              />
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <h3 className="text-white text-[10px] ml-12">
                Please Wait Companies Uploade
              </h3>
              <TailSpin visible={true} height="20" width="20" color="#60A5FA" />
            </div>
          </div>
        ) : companiesData.length === 0 ? (
          <div className="flex gap-2 items-center justify-center h-[70vh]">
            <span className="text-white">
              <FaBuilding size={20} />
            </span>
            <h1 className="text-white text-sm md:text-2xl font-bold">
              Companies not found
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
pb-35
md:pb-10
"
          >
            {companiesData.map((item, index) => (
              <div
                key={item.id}
                className="
relative
rounded-3xl
bg-gradient-to-br
from-slate-900
via-slate-800
to-slate-900
border
border-slate-700
shadow-2xl
p-5
hover:scale-[1.02]
duration-300
transition-all
group
overflow-hidden
"
              >
                <div
                  className="
absolute
top-0
left-0
w-full
h-[3px]
bg-gradient-to-r
from-cyan-500
via-blue-500
to-purple-500
"
                ></div>

                <div className="flex items-center gap-4">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.company_name}`}
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
                    <h1
                      className="
text-cyan-400
text-xl
font-bold
"
                    >
                      {item.company_name}
                    </h1>

                    <p
                      className="
text-gray-400
text-sm
"
                    >
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between">
                    <p className="text-gray-400">Website</p>

                    <a
                      href={item.website_url}
                      target="_blank"
                      className="
text-cyan-400
text-sm
truncate
max-w-[150px]
"
                    >
                      Visit
                    </a>
                  </div>

                  <div>
                    <p
                      className="
text-gray-400
text-sm
"
                    >
                      Description
                    </p>

                    <p
                      className="
text-white
text-sm
mt-1
line-clamp-3
"
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="
flex
justify-between
"
                  >
                    <p className="text-gray-400">Created</p>

                    <p className="text-white text-sm">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div
                  className="
mt-5
pt-3
border-t
border-slate-700
flex
justify-between
items-center
"
                >
                  <div
                    className="
px-4
py-1
rounded-full
text-sm
font-bold
bg-green-500/20
text-green-400
"
                  >
                    Active
                  </div>

                  <a
                    href={item.website_url}
                    target="_blank"
                    className="
bg-cyan-500
hover:bg-cyan-600
px-4
py-2
rounded-xl
text-sm
text-white
duration-300
"
                  >
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Companies);
