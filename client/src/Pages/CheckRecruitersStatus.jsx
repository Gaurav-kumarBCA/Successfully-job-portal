import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaSearch,
  FaBuilding,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaShieldAlt,
  FaQuestionCircle
} from "react-icons/fa";
import { toast } from "react-toastify";

const CheckRecruitersStatus = () => {
 const statusIcons = {
  pending: <FaClock className="text-yellow-500" />,
  approved: <FaCheckCircle className="text-green-500" />,
  rejected: <FaInfoCircle className="text-red-500" />,
};
  const [data,setData]=useState("");
  const [form,setForm]=useState({
    company_email:""
  });
  const handleForm=async(e)=>{
    e.preventDefault();
    if(!form.company_email){
      return toast.info("Please enter the company email")
    }
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/login/check_status`,{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      })
      const data = await res.json();
      console.log(data)
      if(!data.success){
        return toast.info(data.message)
      }
      toast.success("Applied data")
      setData(data.data)
    } catch (error) {
      toast.error("Server not responding")
    }
  }
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-3 md:p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-md overflow-hidden border">


        <div className="border-b px-5 md:px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src="/job-portal.png"
              className="w-12 h-12 object-contain"
              alt=""
            />

            <div className="flex items-center gap-4">

              <h1 className="text-2xl font-bold">
                Career Path
              </h1>

              <div className="hidden md:block w-[1px] h-7 bg-gray-300"></div>

              <p className="hidden md:block text-gray-500">
                Recruiter Verification Status
              </p>

            </div>

          </div>


          <div className="flex gap-7">

            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <FaHome />
              <span className="hidden md:block">
                Home
              </span>
            </div>

            <FaUser
              size={22}
              className="text-gray-600 cursor-pointer"
            />

          </div>

        </div>



        <div className="m-4 md:m-8 rounded-[30px] bg-[#edf3ff] p-6 md:p-10">

          <div className="grid lg:grid-cols-2 items-center gap-10">

            <div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">

                Check Your Recruiter
                <br />

                Verification
                <span className="text-blue-600">
                  {" "}Status ✔
                </span>

              </h1>

              <p className="text-gray-600 mt-6 text-lg">

                Enter your registered company email
                to check your recruiter account
                verification status.

              </p>

            </div>


            <div>

              <img
                src="/check-recruiters.webp"
                className="w-full object-contain"
                alt=""
              />

            </div>

          </div>

        </div>



        <form onSubmit={handleForm}>
        <div className="mx-4 md:mx-8 rounded-[30px] border p-5 md:p-8 shadow-sm">

          <div className="flex flex-col lg:flex-row gap-5 items-center">

            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">

              <FaEnvelope
                className="text-blue-600"
                size={35}
              />

            </div>


            <div className="flex-1 w-full">

              <h1 className="font-bold text-xl mb-3">
                Registered Company Email
              </h1>

              <input
              name="company_email"
              value={form.company_email}
              onChange={(e)=>{
                setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
              }}
                type="email"
                placeholder="Enter your company email"
                className="border w-full p-4 rounded-xl outline-none"
              />

              <div className="flex gap-2 mt-3 text-gray-500 text-sm">

                <FaInfoCircle />

                <p>
                  Use same email used while applying.
                </p>

              </div>

            </div>


            <button type="submit" className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl flex items-center justify-center gap-3">

              <FaSearch />

              Check Status

            </button>

          </div>

        </div>
        </form>




        <div className="mx-4 md:mx-8 mt-6 border rounded-[30px] p-6">

          <div className="flex items-center gap-3">

            <FaBuilding className="text-blue-600" />

            <h1 className="text-2xl font-bold">
              Verification Details
            </h1>

          </div>


          <div className="overflow-auto mt-8">

            <div className="min-w-[900px]">

              <div className="grid grid-cols-5 font-semibold text-gray-500 border-b pb-5">

                <p>Owner Name</p>
                <p>Company Name</p>
                <p>Email</p>
                <p>Status</p>
                <p>Applied On</p>

              </div>


              <div className="grid grid-cols-5 py-6 items-center">

                <div className="flex items-center gap-3">

                  <FaUser className="text-blue-600" />

                  {data.name || "-"}

                </div>


                <div className="flex items-center gap-3">

                  <FaBuilding className="text-blue-600" />

                  {data.company_name || "-"}

                </div>


                <div className="flex items-center gap-3">

                  <FaEnvelope className="text-blue-600" />

                  {data.company_email || "-"}

                </div>


                <div>

                  <span className={` ${data.status === "pending" ? "bg-orange-100 text-orange-500" : data.status === "approved" ? "bg-green-100 text-green-500" : data.status === "rejected" ? "bg-red-100 text-red-500":""} px-4 py-2 rounded-full flex items-center gap-2 w-fit`}>

                    {statusIcons[data.status]}

                    {data.status || "-"}

                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <FaCalendarAlt />

                 {new Date(data.created_at).toLocaleString("en-IN") }

                </div>

              </div>

            </div>

          </div>

        </div>




        <div className="m-4 md:m-8 bg-[#f7f8fc] rounded-[30px] p-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="flex gap-4">

              <FaClock
                className="text-yellow-500"
                size={28}
              />

              <div>

                <h1 className="font-bold">
                  Pending
                </h1>

                <p className="text-sm text-gray-500">
                  Application under review.
                </p>

              </div>

            </div>


            <div className="flex gap-4">

              <FaCheckCircle
                className="text-green-500"
                size={28}
              />

              <div>

                <h1 className="font-bold">
                  Approved
                </h1>

                <p className="text-sm text-gray-500">
                  Account verified and active.
                </p>

              </div>

            </div>



            <div className="flex gap-4">

              <FaTimesCircle
                className="text-red-500"
                size={28}
              />

              <div>

                <h1 className="font-bold">
                  Rejected
                </h1>

                <p className="text-sm text-gray-500">
                  Application not approved.
                </p>

              </div>

            </div>

          </div>

        </div>



        <div className="mx-4 md:mx-8 mb-8 bg-[#edf3ff] rounded-xl p-5 flex gap-3">

          <FaShieldAlt className="text-blue-600 mt-1" />

          <p className="text-gray-600">

            If you face any issue contact:
            <span className="font-bold text-blue-600 ml-2">

              support@careerpath.com

            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default CheckRecruitersStatus;