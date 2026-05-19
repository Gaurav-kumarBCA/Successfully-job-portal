import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { HiUsers } from "react-icons/hi2";
import { FaBuilding, FaUser, FaUserSlash, FaUserTie } from "react-icons/fa";
import {MdPendingActions, MdWork } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { toast } from 'react-toastify';
import UsersTable from '../component/UsersTable';
import AllJob from '../component/AllJob';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import withAuth from '../component/withAuth';

const Deshboard = () => {
  const [data,Setdata]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    const getDashboard =async() =>{
      try {
        setLoading(true)
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/deshboard/stats`,{
          method:"GET",
          credentials:"include",
          headers:{
            "Content-Type":"application/json"
          },
        })
        const data = await res.json();
        if(!data.success){
          return toast.error(data.message || "Somthing went Wrong")
        }
        Setdata(data.data)
        if(data.success){
          Setdata(data.data || [])
        } 
        else{
          Setdata([])
        }
      } catch (error) {
        return toast.error(error.message);
      } finally{
        setLoading(false)
      }
    }
    getDashboard();
  },[]);

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
            Loading Dashboard...
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
    <div className='w-full h-[636px] no-scrollbar border-3 border-slate-900 md:h-[614px]  lg:min-h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-y-scroll '> 

      {loading ? (
        <div className='flex flex-col items-center justify-center h-[70vh]'>
  <div>
     <ThreeDots
    height="50"
    width="50"
    radius="9"
    color="#ffffff"
    visible={true}
  />
  </div>
  <div className='flex items-center justify-center gap-2.5'>
    <h3 className='text-white text-[10px] ml-12'>Please Wait Data Uploade</h3>
  <TailSpin
  visible={true}
  height="20"
  width="20"
  color="#60A5FA"
/>
  </div>
</div>

      ) : data.filter === 0 ? (
        <div className='flex gap-2 items-center justify-center h-[70vh] ' >
                  <span className='text-white'><RxDashboard size={20}/></span>
                  <h1 className='text-white text-sm md:text-2xl font-bold'>Data not found</h1></div>
      ) : (
         <div className='w-full h-[310px] md:h-[490px]  no-scrollbar md:overflow-visible overflow-y-scroll flex flex-col md:flex-row items-center md:items-start justify-around md:p-0 p-2  md:gap-0 gap-2 md:flex-wrap
           '>
        <div className='  h-35 w-85 md:w-90 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4 flex items-center justify-between hover:scale-105 transition-all duration-300'>
  <div>
    <h1 className='text-white text-xl md:text-[15px] font-bold'>Total Users</h1>
    <p className='text-gray-400 text-sm md:text-[10px]'>All Registered users</p>

    <h2 className='text-3xl font-bold text-cyan-400 mt-2'>
      {data.totalUsers || "0"}
    </h2>
  </div>
  <div className='h-14 w-14 rounded-full  bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl shadow-lg'>
    <HiUsers/>
  </div>

</div> 

<div className='  h-35 w-85 md:w-90 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4 flex items-center justify-between hover:scale-105 transition-all duration-300'>
  <div>
    <h1 className='text-white text-xl md:text-[15px] font-bold'>Blocked Users</h1>
    <p className='text-gray-400 text-sm md:text-[10px]'>Total blocked Users</p>

    <h2 className='text-3xl font-bold text-red-600 mt-2'>
      {data.blockedUsers || "0"}
    </h2>
  </div>
  <div className='h-14 w-14 rounded-full  bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl shadow-lg'>
    <FaUserSlash/>
  </div>

</div> 

<div className='  h-35 w-85 md:w-90 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4 flex items-center justify-between hover:scale-105 transition-all duration-300'>
  <div>
    <h1 className='text-white text-xl md:text-[15px] font-bold'>Total Companies</h1>
    <p className='text-gray-400 text-sm md:text-[10px]'>All Registered Companies</p>

    <h2 className='text-3xl font-bold text-cyan-400 mt-2'>
      {data.totalCompanies || "0"}
    </h2>
  </div>
  <div className='h-14 w-14 rounded-full  bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl shadow-lg'>
    <FaBuilding/>
  </div>

</div> 

<div className='  h-35 w-85 md:w-90 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4 md:flex-wrap flex items-center justify-between hover:scale-105 transition-all duration-300'>
  <div>
    <h1 className='text-white text-xl md:text-[15px] font-bold'>Total Jobs</h1>
    <p className='text-gray-400 text-sm md:text-[10px]'>All Posted Job</p>

    <h2 className='text-3xl font-bold text-cyan-400 mt-2'>
      {data.totalJobs || "0"}
    </h2>
  </div>
  <div className='h-14 w-14 rounded-full  bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl shadow-lg'>
    <MdWork/>
  </div>

</div> 
<div className='  h-35 w-85 md:w-90 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4 flex items-center justify-between hover:scale-105 transition-all duration-300'>
  <div>
    <h1 className='text-white text-xl md:text-[15px] font-bold'>Pending Jobs</h1>
    <p className='text-gray-400 text-sm md:text-[10px]'>Job Awaiting Approvel</p>

    <h2 className='text-3xl font-bold text-red-600 mt-2'>
      {data.pendingJobs || "0"}
    </h2>
  </div>
  <div className='h-14 w-14 rounded-full  bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl shadow-lg'>
    <MdPendingActions/>
  </div>

</div> 

<div className='  h-35 w-85 md:w-90 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-4 flex items-center justify-between hover:scale-105 transition-all duration-300'>
  <div>
    <h1 className='text-white text-xl md:text-[15px] font-bold'>Total Recruiter</h1>
    <p className='text-gray-400 text-sm md:text-[10px]'>All Recruiters</p>

    <h2 className='text-3xl font-bold text-cyan-400 mt-2'>
      {data.totalRecruiters || "0"}
    </h2>
  </div>
  <div className='h-14 w-14 rounded-full  bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl shadow-lg'>
    <FaUserTie/>
  </div>
</div> 
      </div>
      )}
      <UsersTable/>
      <AllJob/>
    </div>
    </Layout>
  )
}

export default withAuth(Deshboard)
