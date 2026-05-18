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
          if(data.success){
setUser(
data.data || []
);

}else{

setUser([]);

}

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

<img
src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
alt=""
className="
h-16
w-16
rounded-full
border-2
border-cyan-500
bg-slate-700
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

<p className="text-gray-400 text-sm">
{item.role}
</p>

</div>

</div>


<div className="mt-5 space-y-3">

<div className="flex justify-between">

<p className="text-gray-400">
Email
</p>

<p className="
text-white
text-sm
truncate
max-w-[150px]
">
{item.email}
</p>

</div>


<div className="flex justify-between">

<p className="text-gray-400">
Status
</p>

<p
className={`
font-bold
${!item.is_blocked
? "text-green-400"
: "text-red-400"}
`}
>

{!item.is_blocked
? "Active"
: "Blocked"}

</p>

</div>

</div>


<div
className="
mt-5
pt-4
border-t
border-slate-700
flex
gap-3
"
>

<BlockedUser
id={item.id}
name={item.name}
updateBlockedUser={updateBlockedUser}
/>

<UnBlockedUser
id={item.id}
name={item.name}
updateUnBlockedUser={updateUnBlockedUser}
/>

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