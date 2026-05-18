import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaBuilding, FaUserTie } from "react-icons/fa";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { FiUser } from "react-icons/fi";

const Recruiters = () => {
  const [recruitersData, setRecruiters] = useState([]);
  const [loading,setLoading]= useState(false);
  useEffect(() => {
    const recruitershandle = async () => {
      try {
        setLoading(true)
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/recruiter/all_fetch`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if(data.success){
setRecruiters(
data.data || []
);

}else{

setRecruiters([]);

}

      } catch (error) {
        console.log(error);
        setLoading(false)
      } finally{
        setLoading(false)
      }
    };
    recruitershandle();
  }, []);
  if (loading) {
        return (
          <div className='
            h-screen
            w-full
            bg-gradient-to-br
            from-slate-950
            via-blue-950
            to-slate-900
            flex
            items-center
            justify-center
          '>
      
            <div className='flex flex-col items-center gap-3'>
              <ThreeDots
                height="70"
                width="70"
                color="#fff"
                visible={true}
              />
      
              <div className='flex items-center gap-2'>
                <p className='text-white text-sm md:text-lg'>
                  Loading Recruiters page...
                </p>
      
                <TailSpin
                  height="20"
                  width="20"
                  color="#60A5FA"
                />
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
              Recruiter Cards{" "}
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
                                      Please Wait Recruiters Uploade
                                    </h3>
                                    <TailSpin visible={true} height="20" width="20" color="#60A5FA" />
                                  </div>
                                </div>
        ) : recruitersData.length === 0 ? (
           <div className="flex gap-2 items-center justify-center h-[70vh]">
                                  <span className="text-white">
                                    <FiUser size={20} />
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
          {recruitersData.map((item) => (
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

              <div className="flex items-center gap-4">
                <div
                  className="
h-16
w-16
rounded-full
border-2
border-cyan-500
bg-slate-700
flex
items-center
justify-center
"
                >
                  <FaUserTie size={28} className="text-cyan-400" />
                </div>

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

                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-400">Company</p>

                  <p className="text-white">{item.company_name}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Industry</p>

                  <p className="text-cyan-400">{item.industry_type}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Phone</p>

                  <p className="text-white">{item.phone}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Email</p>

                  <p
                    className="
text-white
text-sm
truncate
max-w-[150px]
"
                  >
                    {item.email}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Description</p>

                  <p
                    className="
text-white
text-sm
mt-1
line-clamp-3
"
                  >
                    {item.company_description}
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
                  href={`https://${item.company_website}`}
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
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
        )

        }

       
      </div>
    </Layout>
  );
};

export default Recruiters;
