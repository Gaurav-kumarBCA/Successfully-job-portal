import React, { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";
const UsersTable = () => {
  const [data,setData]=useState([]);
  console.log(data)
  useEffect(()=>{
    const AllUsersDashboard=async()=>{
      try {
        const url= import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/block/all_users`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
          credentials:"include",
        })
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.log(error)
      }
    }
    AllUsersDashboard();
  },[]);
  const latestUsers = [...data].slice(0, 9);
  return (
    <div className="w-full  min-h-screen  flex flex-col items-center  justify-center ">
      <div
        className="w-full overflow-hidden max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]
          h-[650px] sm:h-[950px] md:h-[500px] lg:h-[550px] rounded-2xl mt-2  shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 "
      >
        <div className="w-full h-[60px] md:h-[80px] bg-slate-900 rounded-tl-2xl rounded-tr-2xl  flex justify-between">
          <div className="h-full w-[150px] md:w-[180px]  flex items-center justify-between">
            <div className="h-full w-[80px] md:w-[60px]  flex items-center justify-center ">
              <FaUserSecret size={40} className="text-white" />
            </div>
            <div className="h-full w-[110px] md:w-[120px] flex items-center justify-center ">
              <h1 className="text-white font-bold text-2xl md:text-3xl">
                Users
              </h1>
            </div>
          </div>
          <div className="h-full w-[80px] md:w-[150px]   flex items-center justify-center ">
            <button className="bg-gradient-to-br h-[30px] w-[70px] md:h-[50px] md:w-[90px] rounded-[5px] md:rounded-2xl font-bold from-slate-900 via-slate-800 to-slate-900 text-amber-50 shadow-slate-500 cursor-pointer shadow-2xl md:text-[16px] text-[12px]">
              View All
            </button>
          </div>
        </div>

        <div className="w-full  overflow-hidden ">
          <table className="w-full table-fixed min-w-[100px]  border-collape">
            <thead>
              <tr className=" bg-slate-800">
                <th
                  style={{ width: "20%" }}
                  className="text-left text-white font-bold"
                >
                  Sr.
                </th>{" "}
                <th
                  style={{ width: "20%" }}
                  className="text-left text-white font-bold"
                >
                  name
                </th>{" "}
                <th
                  style={{ width: "20%" }}
                  className="text-left text-white font-bold"
                >
                  email
                </th>{" "}
                <th
                  style={{ width: "20%" }}
                  className="text-left text-white font-bold"
                >
                  status
                </th>{" "}
                <th
                  style={{ width: "20%" }}
                  className="text-left text-white font-bold"
                >
                  Action
                </th>{""}
              </tr>
            </thead>

            <tbody>
              {latestUsers.map((user, index) => (
                <tr key={user.id} className="border-b ">
                  <td className="px-1 py-3 md:text-[15px] text-[12px] text-white whitespace-normal">
                    {index + 1}
                  </td>
                  <td className="px-2 py-3 text-white md:text-[15px] text-[12px] whitespace-normal wrap-break-word">
                    {user.name}
                  </td>
                  <td className="px-2 py-3 text-white wrap-break-word md:text-[15px] text-[11px] whitespace-normal">
                    {user.email}
                  </td>
                  <td className={`px-2 py-3 font-bold wrap-break-word md:text-[15px] text-[12px] whitespace-normal ${user.is_blocked === true ? "text-red-500":"text-green-500"}`}>
                    {user.is_blocked === true ? "Blocked" : "Active"}
                  </td>
                  <td> <button className={`px-2 py-3  md:text-[15px] font-bold wrap-break-word text-[12px] whitespace-normal cursor-pointer underline underline-offset-4 decoration-blue-700 ${user.is_blocked ? "text-green-500" : "text-red-500"} relative w-fit  text-2xl cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[3px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full `}>
                    {user.is_blocked ? "UnBlock" : "Block"}
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {latestUsers.length < 9 && (
            <div className="text-center text-gray-400  border-t border-slate-700 py-4">
              No More Data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
