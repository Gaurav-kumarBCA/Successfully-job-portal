import React, { use, useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { IoArrowBack } from "react-icons/io5"
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import { FaUser } from 'react-icons/fa'
import BlockedUser from '../component/BlockedUser'
import UnBlockedUser from '../component/UnBlockedUser'
import { NavLink } from 'react-router-dom'
const Users = () => {
  const [user,setUser]=useState([]);
  const [loading,setLoading]=useState(false);
  const updateBlockedUser = (id) => {
  setUser((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, is_blocked: true }
        : item
    )
  );
};

 const updateUnBlockedUser = (id) => {
  setUser((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, is_blocked: false }
        : item
    )
  );
};
   useEffect(()=>{
      const AllUsersDashboard=async()=>{
        try {
          setLoading(true);
          const url= import.meta.env.VITE_SERVER_URL;
          const res = await fetch(`${url}/admin/block/all_users`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            },
            credentials:"include",
          })
          const data = await res.json();
          setUser(data.data);
        } catch (error) {
          console.log(error)
        } finally{
          setLoading(false)
        }
      }
      AllUsersDashboard();
    },[]);
    const filterUser=user.filter((item)=>item.role !== "admin");
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
                Loading Users Page...
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
     <div className='min-h-full  w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 '>
      <div className='w-full h-[50px] border-b border-slate-900  flex gap-4 '>
        <div className='h-full w-[50px] md:w-[50px]  flex items-center '>
        <NavLink to="/"><IoArrowBack size={23} className='text-white ml-2 mt-3 '/></NavLink>
        </div>
        <div className='h-full w-[200px]  flex items-end '>
          <h1 className='text-white font-semibold  text-2xl md:text-3xl '>Users Cards </h1>
        </div>
      </div>
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
    <h3 className='text-white text-[10px] ml-12'>Please Wait User Uploade</h3>
  <TailSpin
  visible={true}
  height="20"
  width="20"
  color="#60A5FA"
/>
  </div>
</div>
      ): filterUser.length == 0 ? (
         <div className='flex gap-2 items-center justify-center h-[70vh]' >
          <span className='text-white'><FaUser size={20}/></span>
          <h1 className='text-white text-sm md:text-2xl font-bold'>User not found</h1></div>
      ) :(
       <div className='
grid 
grid-cols-1 
sm:grid-cols-2
lg:grid-cols-3
gap-6 
p-5
w-full
pb-35
md:pb-10

'>

{filterUser.map((item,index)=>(
  <div
    key={index}
    className='bg-slate-800 rounded-2xl p-5 shadow-lg w-full min-h-[230px] overflow-hidden'
  >
    <div className='flex gap-3'>
      <img
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
        alt='avatar'
        className='h-14 w-14 rounded-full'
      />

      <div className='w-full flex flex-col items-center gap-2 justify-center'>
        <p className={`${!item.is_blocked
          ? "text-green-500 font-bold"
          : "text-red-500 font-bold"
        }`}>
          {!item.is_blocked
            ? "This account is active"
            : "This account is currently Blocked"}
        </p>

        <div className='text-white text-center break-words'>
          Email : {item.email}
        </div>
      </div>
    </div>

    <h2 className='text-white font-bold mt-3'>
      {item.name}
    </h2>

    <div className='flex gap-3 mt-5'>
      <BlockedUser id={item.id} name={item.name} updateBlockedUser={updateBlockedUser}/>
      <UnBlockedUser id={item.id} name={item.name}  updateUnBlockedUser={updateUnBlockedUser}/>
     
    </div>

  </div>
))}

</div>
      )}
    </div>
  
    </Layout> 
  )
}

export default Users