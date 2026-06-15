import React, { useState } from "react";
import {
  FaBuilding,
  FaGlobe,
  FaMapMarkerAlt,
  FaClipboardList,
  FaHome,
  FaUser,
  FaInfoCircle
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify'
const AddCompanies = () => {

  const [formData, setFormData] = useState({
    company_name:"",
    description:"",
    website_url:"",
    location:""
  });
  const [data,setData] = useState();
  const handleform=async(e)=>{
    e.preventDefault();
    if(!formData.company_name || !formData.description || !formData.website_url || !formData.location){
      return toast.info("All Field are required")
    }
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/recruiter/companies/companies_data`,{
        method:"POST",
        credentials:'include',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json();
      if(!data.success){
        return toast.error(data.message)
      }
      console.log(data)  
    toast.success("Company Add Successfully")
    setData(data.data);
    } catch (error) {
      console.log(error)
      toast.error("Server not responding")
    }
  }

  const handleChange = (e) => {
    setFormData((prev)=>({
      ...prev,[e.target.name]: e.target.value
    }));

  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-3 md:p-6 dark:bg-gray-950">

      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-[30px] overflow-hidden shadow-md border">

      

        <div className="flex items-center justify-between dark:border-white px-5 md:px-8 py-5 border-b">

          <div className="flex items-center gap-4">

            <img
              src="/job-portal.png"
              className="w-12 h-12"
            />

            <div className="flex items-center gap-4">

              <h1 className="font-bold text-2xl dark:text-gray-300">
                Career Path
              </h1>

              <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

              <p className="hidden md:block text-gray-500 dark:text-gray-400">
                Add Company
              </p>

            </div>

          </div>

          <div className="flex gap-6 dark:text-gray-200">

           <NavLink to="/dashboard-recruiters"><FaHome size={20}/></NavLink>
            <FaUser size={20}/>

          </div>

        </div>



        <div className="grid lg:grid-cols-2 gap-6 p-5 md:p-8">

          <form onSubmit={handleform}>
          <div className="border rounded-[30px] p-6 dark:border-white">

            <h1 className="font-bold text-3xl dark:text-gray-200">
              Company Information
            </h1>

            <p className="text-gray-500 mt-2">
              Enter your company details below
            </p>


            <div className="space-y-8 mt-10">


              <div>

                <label className="font-bold dark:text-gray-300 ">
                  Company Name
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-14 bg-blue-50 dark:bg-gray-950 rounded-xl flex items-center justify-center">

                    <FaBuilding className="text-blue-600"/>

                  </div>

                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="flex-1 border rounded-xl p-4 outline-none dark:border-white dark:placeholder-gray-200 dark:text-white"
                  />

                </div>

              </div>



              <div>

                <label className="font-bold dark:text-gray-300">
                  Description
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-14 bg-blue-50 dark:bg-gray-950 rounded-xl flex items-center justify-center">

                    <FaClipboardList className="text-blue-600"/>

                  </div>

                  <textarea
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="flex-1 border rounded-xl p-4 outline-none dark:border-white dark:text-white"
                  />

                </div>

              </div>



              <div>

                <label className="font-bold dark:text-gray-300">
                  Website
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-14 bg-blue-50 dark:bg-gray-950  rounded-xl flex items-center justify-center">

                    <FaGlobe className="text-blue-600"/>

                  </div>

                  <input
                    type="text"
                    name="website_url"
                    placeholder="Enter website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    className="flex-1 border rounded-xl p-4 outline-none dark:border-white dark:placeholder-gray-200 dark:text-white"
                  />

                </div>

              </div>



              <div>

                <label className="font-bold dark:text-gray-300">
                  Location
                </label>

                <div className="flex gap-4 mt-3">

                  <div className="w-14 h-14 bg-blue-50 dark:bg-gray-950  rounded-xl flex items-center justify-center">

                    <FaMapMarkerAlt className="text-blue-600"/>

                  </div>

                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location..."
                    value={formData.location}
                    onChange={handleChange}
                    className="flex-1 border rounded-xl p-4 outline-none dark:border-white dark:placeholder-gray-200 dark:text-white"
                  />

                </div>

              </div>


              <button type="submit" className="bg-blue-600 text-white w-full py-4 rounded-xl">

                Save Company

              </button>

            </div>

          </div>
          </form>



          <div className="border dark:border-white rounded-[30px] p-6">

            <h1 className="font-bold text-3xl dark:text-gray-200">
              Company Preview
            </h1>

            <div className="rounded-[30px] overflow-hidden border mt-8 dark:border-white">

              <div className="bg-[#edf3ff] dark:bg-gray-700 h-[130px]"></div>

              <div className="px-6 pb-8">

                <div className="w-28 h-28 rounded-full bg-[#162447] text-white border-[8px] border-white dark:border-gray-800  flex justify-center items-center text-5xl font-bold mx-auto -mt-14">

                  {!data?.company_name ? "" : (<div>{data.company_name.charAt(0).toUpperCase()}</div>)}

                </div>


                <h1 className="text-center text-3xl font-bold mt-5 dark:text-gray-300">

                  {!data?.company_name ? (<p>No company created yet</p>):(<h1>{data.company_name}</h1>)}

                </h1>

                <p className="text-center text-gray-500">

                  {!data?.location ? "location" : (<p>{data.location}</p>)  }

                </p>


                <div className="space-y-6 mt-8">

                  <div>

                    <h1 className="font-bold dark:text-gray-100">
                      Description
                    </h1>

                    <p className="text-gray-500">
                      {!data?.description ? "description " : (<p>{data.description}</p>)}
                    </p>

                  </div>


                  <div>

                    <h1 className="font-bold dark:text-gray-100">
                      Website
                    </h1>

                    <p className="text-blue-600">
  <a
    href={
      data?.website_url?.startsWith("http")
        ? data.website_url
        : `https://${data?.website_url || ""}`
    }
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {data?.website_url || "No Website"}
  </a>
</p>

                  </div>

                </div>

              </div>

            </div>


            <div className="bg-blue-50 dark:bg-gray-950 rounded-2xl p-5 flex gap-4 mt-5">

              <FaInfoCircle className="text-blue-600 mt-1"/>

              <p className="text-sm text-gray-500 dark:text-gray-400">

                Review information before saving

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddCompanies;