import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaIndustry,
  FaLock,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import withAuth from "../component/withAuth";

const CreateRecruiters = () => {
  const location = useLocation();
  const id = location.state?.id;
  console.log(id);
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    password: "",
    role: "recruiter",
    phone: "",
    company_description: "",
    company_website: "",
    industry_type: "",
  });

  const handleChange=(e)=>{
    setFormData((prev)=>({
      ...prev,[e.target.name]:e.target.value,
    }))

  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const {
    name,
    company_name,
    email,
    password,
    phone,
    company_description,
    company_website,
    industry_type
  } = formData;

  if (
    !name ||
    !company_name ||
    !email ||
    !password ||
    !phone ||
    !company_description ||
    !company_website ||
    !industry_type
  ) {
    return toast.error("All Fields are required");
  }

  try {
    const url = import.meta.env.VITE_SERVER_URL;

    const res = await fetch(
      `${url}/admin/recruiter/registration/recruiter`,
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!data.success) {
      return toast.error(data.message);
    }
if(id){
const approveRes = await fetch(
`${url}/admin/recruiter/status_update/${id}`,
{
method:"PATCH",
credentials:"include",
headers:{
"Content-Type":"application/json"
}
}
);

const approveData =
await approveRes.json();

if(!approveData.success){
return toast.error(
approveData.message
)
}
else{
  toast.success("Recruiter Created Successfully")
}
}
    toast.success("Recruiter Created Successfully & Approved");

    setTimeout(() => {
      window.location.href="/";
    },1000);

  } catch (error) {
    toast.error("Server is not responding");
  }
};

  return (
    <div
      className="
min-h-screen
w-full
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
pb-10
"
    >
      <div
        className="
w-full
h-[60px]
border-b
border-white/10
flex
items-center
gap-4
px-2
"
      >
        <NavLink to="/pending-recruiters">
          <IoArrowBack size={24} className="text-white" />
        </NavLink>

        <h1
          className="
text-white
font-bold
text-2xl
"
        >
          Create Recruiter
        </h1>
      </div>

      <div
        className="
flex
justify-center
items-center
px-4
mt-10
pb-25
lg:pb-0
md:pb-0
"
      >
        <form
          onSubmit={handleSubmit}
          className="
w-full
max-w-4xl
bg-slate-900/60
backdrop-blur-lg
border
border-white/10
rounded-3xl
p-6
md:p-10
shadow-2xl
"
        >
          <h2
            className="
text-center
text-3xl
font-bold
text-cyan-400
mb-8
"
          >
            Recruiter Signup
          </h2>

          <div
            className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"
          >
            <div className="relative">
              <FaUser
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Full Name"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div className="relative">
              <FaBuilding
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                placeholder="Company Name"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div className="relative">
              <FaEnvelope
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="email"
                autoComplete="off"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div className="relative">
              <FaLock
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div className="relative">
              <FaPhone
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div className="relative">
              <FaIndustry
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="text"
                name="industry_type"
                value={formData.industry_type}
                placeholder="Industry Type"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div
              className="
relative
md:col-span-2
"
            >
              <FaGlobe
                className="
absolute
left-4
top-4
text-cyan-400
"
              />

              <input
                type="text"
                name="company_website"
                value={formData.company_website}
                placeholder="Company Website"
                onChange={handleChange}
                className="
w-full
pl-12
bg-slate-800
text-white
p-3
rounded-xl
outline-none
"
              />
            </div>

            <div
              className="
md:col-span-2
"
            >
              <textarea
                name="company_description"
                placeholder="Company Description..."
                value={formData.company_description}
                rows="5"
                onChange={handleChange}
                className="
w-full
bg-slate-800
text-white
p-4
rounded-xl
outline-none
resize-none
"
              />
            </div>
          </div>

          <button type="submit"
            className="
w-full
mt-8
bg-cyan-500
hover:bg-cyan-600
text-white
font-bold
py-3
rounded-xl
duration-300
"
          >
            Create Recruiter
          </button>
        </form>
      </div>
    </div>
  );
};

export default withAuth(CreateRecruiters);
