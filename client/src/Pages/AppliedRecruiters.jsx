import React, { useState } from "react";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLayerGroup
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const AppliedRecruiters = () => {
  const [showPopup,setShowPopup]=useState(false);
  const [form,setForm]=useState({
    name:"",
    company_name:"",
    company_email:"",
    company_description:"",
    phone:"",
    company_website:"",
    industry_type:""
  })

  const onChange=(e)=>{
    setForm((prev)=>({
        ...prev,[e.target.name]:e.target.value
    }))
  }
  const handleForm=async(e)=>{
    e.preventDefault();
    if(!form.name || !form.company_name || !form.company_email || !form.company_description || !form.phone || !form.company_website || !form.industry_type){
      return toast.info("All Fields are required")
    }
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/login/recruiter/create`,{
        method:"POST",
        credentials:"include",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(form)
      })
      const data = await res.json();
      if(!data.success){
        return toast.info(data.message)
      }
      toast.success("Applied Successfully")
      setTimeout(()=>{
        setShowPopup(true)
      },3000)
    } catch (error) {
      toast.error("Server not responding")
    }
  }
  return (
    <div className="min-h-screen bg-[#eef4ff] p-3 md:p-8">

      <div className="max-w-7xl mx-auto bg-white rounded-[35px] overflow-hidden shadow-lg">

        <div className="flex justify-between items-center p-6 border-b">

          <div className="flex items-center gap-3">

            <img
              src="/job-portal.png"
              className="w-12 h-12 object-cover rounded-xl"
            />

            <h1 className="text-3xl font-bold">
              Career Path
            </h1>

          </div>

          <p className="hidden md:block text-gray-500">
            Already have account?
            <NavLink to="/login-recruiters">
              <span className="text-blue-600 font-bold cursor-pointer ml-2">
              Login
            </span>
            </NavLink>
          </p>

        </div>

        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-8 p-6">

     

          <div>

            <h1 className="text-4xl font-bold leading-[55px]">

              Apply to Become a
              <span className="text-blue-600">
                {" "}Recruiter
              </span>

            </h1>

            <p className="text-gray-500 mt-4">
              Fill out the form below to apply as a recruiter.
              Our team will review your application.
            </p>


         

            <div className="lg:hidden mt-8 relative rounded-[30px] overflow-hidden">

              <img
                src="/recruiters.jpeg"
                className="w-full h-[260px] object-cover"
              />

              <div className="absolute inset-0 bg-black/45 flex flex-col justify-center px-6">

                <h1 className="text-white text-3xl font-bold leading-10">

                  Become Verified
                  <span className="text-blue-300">
                    {" "}Recruiter
                  </span>

                </h1>

                <p className="text-gray-200 text-sm mt-3">

                  Build your recruiter profile,
                  get verified and start hiring
                  top candidates.

                </p>

              </div>

            </div>

            <form onSubmit={handleForm}>
            <div className="bg-white border rounded-[30px] p-6 mt-8">

              <h1 className="font-bold text-2xl mb-8">
                Company Information
              </h1>

              <div className="space-y-6">

                <div>

                  <label className="font-semibold">
                    Full Name
                  </label>

                  <div className="border rounded-xl mt-2 p-4 flex items-center gap-3">

                    <FaUser className="text-gray-400" />

                    <input
                    onChange={onChange}
                      name="name"
                      value={form.name}
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full outline-none"
                    />

                  </div>

                </div>


                <div>

                  <label className="font-semibold">
                    Company Name
                  </label>

                  <div className="border rounded-xl mt-2 p-4 flex items-center gap-3">

                    <FaBuilding className="text-gray-400" />

                    <input
                    onChange={onChange}
                    name="company_name"
                    value={form.company_name}
                      type="text"
                      placeholder="Enter company name"
                      className="w-full outline-none"
                    />

                  </div>

                </div>


                <div>

                  <label className="font-semibold">
                    Company Email
                  </label>

                  <div className="border rounded-xl mt-2 p-4 flex items-center gap-3">

                    <FaEnvelope className="text-gray-400"/>

                    <input
                    onChange={onChange}
                    name="company_email"
                    value={form.company_email}
                      type="email"
                      placeholder="Enter email"
                      className="w-full outline-none"
                    />

                  </div>

                </div>


                <div>

                  <label className="font-semibold">
                    Company Description
                  </label>

                  <textarea
                  onChange={onChange}
                  name="company_description"
                  value={form.company_description}
                    rows="5"
                    placeholder="Describe your company..."
                    className="w-full border rounded-xl p-4 mt-2 outline-none"
                  />

                </div>


                <div>

                  <label className="font-semibold">
                    Phone Number
                  </label>

                  <div className="border rounded-xl mt-2 p-4 flex items-center gap-3">

                    <FaPhone className="text-gray-400"/>

                    <input
                    onChange={onChange}
                    name="phone"
                    value={form.phone}
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full outline-none"
                    />

                  </div>

                </div>


                <div>

                  <label className="font-semibold">
                    Company Website
                  </label>

                  <div className="border rounded-xl mt-2 p-4 flex items-center gap-3">

                    <FaGlobe className="text-gray-400"/>

                    <input
                    onChange={onChange}
                    name="company_website"
                    value={form.company_website}
                      type="text"
                      className="w-full outline-none"
                      placeholder="www.company.com"
                    />

                  </div>

                </div>


                <div>

                  <label className="font-semibold">
                    Company Type
                  </label>

                  <div className="border rounded-xl mt-2 p-4 flex items-center gap-3">

                    <FaLayerGroup className="text-gray-400"/>

                    <select onChange={onChange} name="industry_type" value={form.industry_type} className="w-full outline-none">

                      <option>Select company type</option>
                      <option>IT Company</option>
                      <option>Marketing</option>
                      <option>Digital Agency</option>

                    </select>

                  </div>

                </div>


                <div className="flex gap-5 mt-10">

                  <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-xl">
                    Submit Application
                  </button>

                </div>

              </div>

            </div>
            </form>

          </div>


          {/* RIGHT */}

          <div className="hidden lg:flex flex-col gap-6">

            <div className="bg-white border rounded-[30px] p-6">

              <img
                src="/recruiters.jpeg"
                className="w-full h-[220px] object-contain"
              />

              <h1 className="text-3xl font-bold mt-6">
                Why Become Recruiter?
              </h1>

              <div className="space-y-7 mt-8">

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    👥
                  </div>

                  <div>

                    <h1 className="font-bold">
                      Access Quality Talent
                    </h1>

                    <p className="text-gray-500 text-sm">
                      Connect with skilled professionals.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    💼
                  </div>

                  <div>

                    <h1 className="font-bold">
                      Post Unlimited Jobs
                    </h1>

                  </div>

                </div>

              </div>

            </div>


            <div className="bg-white rounded-[30px] p-6 border">

              <h1 className="font-bold text-2xl mb-6">
                Review Process
              </h1>

              <div className="space-y-8">

                {[
                  {
                    title:"Application Submitted",
                    desc:"Submit recruiter and company information."
                  },

                  {
                    title:"Admin Review",
                    desc:"Admin checks all company details."
                  },

                  {
                    title:"Profile Verification",
                    desc:"Company email and profile verification starts."
                  },

                  {
                    title:"Recruiter Access",
                    desc:"After approval login and manage recruiter account."
                  }

                ].map((item,index)=>(

                  <div key={index} className="flex gap-4">

                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {index+1}
                    </div>

                    <div>

                      <h1 className="font-bold">
                        {item.title}
                      </h1>

                      <p className="text-sm text-gray-500">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            <div className="bg-[#f5f9ff] p-6 rounded-[30px]">

              <h1 className="font-bold text-xl">
                Need Help?
              </h1>

              <p className="text-gray-500 mt-3">
                Contact our support team anytime.
              </p>

              <h1 className="text-blue-600 mt-5 font-bold">
                support@careerpath.com
              </h1>

            </div>

          </div>

        </div>

      </div>
      {
  showPopup && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
        <h2 className="text-xl font-bold text-center mb-4">
          Application Under Review
        </h2>

        <p className="text-gray-600 text-center">
          Thank you for applying as a Recruiter.
          <br /><br />
          Your application has been received successfully and is currently
          under review.
          <br /><br />
          Our admin team will verify your details within the next 24 hours.
          Once verification is completed, your recruiter account will be
          created and activated.
          <br /><br />
          Please check your application status regularly.
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowPopup(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

    </div>
  );
};

export default AppliedRecruiters;