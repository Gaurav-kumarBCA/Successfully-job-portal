import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Layout from "../component/Layout";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { BsPeopleFill } from "react-icons/bs";

const AllpandingRecruiter = () => {
  const [recruiter, setRecruiter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const appliedRecruiters = async () => {
      try {
        setLoading(true);

        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/admin/recruiter/all_applied`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        console.log(data);

        if (data.success) {
          const pendingRecruiters = (data.data || []).filter(
            (item) => (item.status === "pending"),
          );
          setRecruiter(pendingRecruiters);
        } else {
          setRecruiter([]);
        }
      } catch (error) {
        console.log(error);

        setRecruiter([]);
      } finally {
        setLoading(false);
      }
    };

    appliedRecruiters();
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
              Loading Recruiters Data page...
            </p>

            <TailSpin height="20" width="20" color="#60A5FA" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div
        className="
min-h-full
w-full
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
"
      >
        <div
          className="
w-full
h-[50px]
border-b
border-slate-900
flex
gap-4
"
        >
          <div
            className="
h-full
w-[50px]
flex
items-center
"
          >
            <NavLink to="/">
              <IoArrowBack
                size={23}
                className="
text-white
ml-2
mt-3
"
              />
            </NavLink>
          </div>

          <div
            className="
h-full
flex
items-end
"
          >
            <h1
              className="
text-white
font-semibold
text-2xl
md:text-3xl
"
            >
              Applied Recruiters Cards
            </h1>
          </div>
        </div>

        {loading ? (
          <div
            className="
flex
flex-col
items-center
justify-center
h-[70vh]
"
          >
            <ThreeDots height="70" width="70" color="#fff" />

            <div
              className="
flex
items-center
gap-2
"
            >
              <p
                className="
text-white
"
              >
                Loading Recruiters...
              </p>

              <TailSpin height="20" width="20" color="#60A5FA" />
            </div>
          </div>
        ) : recruiter.length === 0 ? (
          <div
            className="
flex
gap-2
items-center
justify-center
h-[70vh]
"
          >
            <BsPeopleFill
              size={22}
              className="
text-white
"
            />

            <h1
              className="
text-white
text-sm
md:text-2xl
font-bold
"
            >
              Applied Recruiters Not Found
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
            {recruiter.map((item) => (
                 <NavLink to="/create-recruiter" state={{id:item.id}}>
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
                />

                <div
                  className="
flex
items-center
gap-4
"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`}
                    className="
h-16
w-16
rounded-full
border-2
border-cyan-500
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
                      {item.name}
                    </h1>

                    <p
                      className="
text-gray-400
text-sm
"
                    >
                      {item.industry_type}
                    </p>
                  </div>
                </div>

                <div
                  className="
mt-5
space-y-3
"
                >
                  <p className="text-white">
                    Company:
                    <span
                      className="
text-cyan-400
ml-2
"
                    >
                      {item.company_name}
                    </span>
                  </p>

                  <p
                    className="
text-gray-300
truncate
"
                  >
                    {item.company_email}
                  </p>

                  <p
                    className="
text-gray-300
"
                  >
                    {item.phone}
                  </p>

                  <p
                    className="
text-white
text-sm
line-clamp-3
"
                  >
                    {item.company_description}
                  </p>
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
bg-yellow-500/20
text-yellow-400
text-sm
"
                  >
                    {item.status}
                  </div>

                  <a
                    href={`https://${item.company_website}`}
                    target="_blank"
                    className="
bg-cyan-500
hover:bg-cyan-600
px-4
py-2
rounded-xl
text-white
"
                  >
                    Visit
                  </a>
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllpandingRecruiter;
