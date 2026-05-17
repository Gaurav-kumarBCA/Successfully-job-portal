import React, { useState } from 'react'
import { FaUserSlash } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const UnBlockedUser = ({id,name,updateUnBlockedUser}) => {
    const [open,setOpen] = useState(false);
    const onClose=()=>{
        setOpen(false)
    }
  return (
    <>
         <button onClick={()=>setOpen(true)} className='flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium cursor-pointer'>
        Unblock
      </button>
      {open && <UnBlockedUserData id={id} name={name} onClose={onClose}  updateUnBlockedUser={updateUnBlockedUser}/>}
    </>
  )
}

const UnBlockedUserData=({id,name,onClose, updateUnBlockedUser})=>{
  const [loading,setLoading]=useState(false);
    const unblockedhandle=async()=>{
    try {
      setLoading(true);
    const url = import.meta.env.VITE_SERVER_URL;
    const res = await fetch(`${url}/admin/block/unblocked-user/${id}`,{
    method:"PATCH",
    credentials:"include",
    headers:{
    "Content-Type":"application/json"
      }
    }) 
    const data =await res.json();    
    if(!data.success){
      toast.info(data.message);
      return;
    }
    toast.success(data.message);
     updateUnBlockedUser(id)
    onClose(); 
    } catch (error) {
      toast.info("Server not responding")
    } finally{
      setLoading(false);
    }
  }
    return (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center px-4">
              <div
                className="w-full max-w-sm sm:max-w-md
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        border border-slate-700
        rounded-2xl shadow-2xl p-5 flex flex-col gap-4 md:m-0 mb-20"
              >
                <div className="flex justify-center">
                  <div
                    className="h-16 w-16 rounded-full
              bg-red-500/20
              flex items-center justify-center"
                  >
                    <FaUserSlash className="text-3xl text-red-500" />
                  </div>
                </div>
        
                <h1 className="text-center text-lg font-bold text-white">
                  UnBlock User Account
                </h1>
        
                <div className="w-full h-[1px] bg-slate-700"></div>
        
                <p className="text-center text-sm text-slate-300 leading-6">
                  Are you sure you want to unblock
                  <span className="text-green-700 font-bold "> {name}</span> ?
                  <br />
                  This user will temporarily lose access to the platform.
                </p>
        
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button onClick={onClose}
                    className="w-full sm:w-1/2
              border border-slate-600
              text-slate-300
              py-2 rounded-lg
              hover:bg-slate-700
              transition cursor-pointer"
                  >
                    Cancel
                  </button>
        
                  <button onClick={unblockedhandle}
                    className="w-full sm:w-1/2
              bg-green-700
              hover:bg-green-800
              cursor-pointer
              text-white py-2
              rounded-lg
              shadow-lg
              active:scale-95
              transition"
                  >
                    {loading ? ( <div className='flex items-center justify-center gap-2'>
                        <h1>Please Wait </h1>
                        <TailSpin
                      visible={true}
                      height="20"
                      width="20"
                      color="#60A5FA"
                    />
                    </div>) :( "UnBlock User")}
                  </button>
                </div>
              </div>
            </div>
    )
}

export default UnBlockedUser