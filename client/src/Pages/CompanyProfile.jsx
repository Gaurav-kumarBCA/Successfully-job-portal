import React, { useEffect, useState } from "react";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaBuilding,
} from "react-icons/fa";
import { toast } from "react-toastify"
import CompanyUpdate from "../component/CompanyUpdate";
import CompanyDeleted from "../component/CompanyDeleted";

const CompanyProfile = () => {
  const [company,setCompany]=useState([]);
  useEffect(()=>{
    const profile=async()=>{
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/recruiter/company-profile`,{
          method:"GET",
          credentials:"include",
          headers:{
            "Centent-Type":"application/json"
          }
        })
        const data = await res.json();
        setCompany(data.data)
      } catch (error) {
        toast.error("Server not responding")
      }
    }
      profile()
  },[])


  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/companyprofile.jpeg"
            alt="company"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-black/55 flex items-center">
            <div className="max-w-2xl px-8 md:px-14 text-white">
              <span className="bg-blue-500/20 border border-blue-300 px-4 py-2 rounded-full text-sm">
                Trusted • Innovative • Growing
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                Building Better
                <span className="text-blue-400 block">
                  Future Together
                </span>
              </h1>

              <p className="mt-5 text-gray-200 leading-7">
                We are committed to delivering innovative solutions,
                empowering businesses, and creating opportunities
                for growth through technology and excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-16 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

            <div className="flex flex-col lg:flex-row justify-between gap-6">

              <div className="flex items-center gap-5">
                <div className="h-24 w-24 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FaBuilding className="text-4xl text-blue-600" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    {company.company_name}
                  </h2>

                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Company Profile
                  </span>

                  <p className="mt-3 text-slate-600">
                    {company.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <CompanyUpdate company={company} setCompany={setCompany}/>

                <CompanyDeleted  companyId={company.id} />

              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaGlobe className="text-blue-600" />
            </div>

            <h3 className="font-semibold text-slate-800">
              Website
            </h3>

            <a
              href={company.website_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 break-all hover:underline mt-2 block"
            >
              {company.website_url}
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-green-600" />
            </div>

            <h3 className="font-semibold text-slate-800">
              Location
            </h3>

            <p className="text-slate-600 mt-2">
              {company.location}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <FaCalendarAlt className="text-orange-600" />
            </div>

            <h3 className="font-semibold text-slate-800">
              Created Date
            </h3>

            <p className="text-slate-600 mt-2">
              {new Date(company.created_at).toLocaleDateString()}
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-sm mt-8 p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            About Our Company
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>

          <p className="text-slate-600 leading-8">
            {company.description}
          </p>

          <p className="text-slate-600 leading-8 mt-4">
            Our company focuses on delivering quality services,
            innovation, and long-term business growth. We believe
            in creating value through technology, teamwork, and
            customer satisfaction.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CompanyProfile;