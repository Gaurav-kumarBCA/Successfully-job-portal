import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FaCheckCircle } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

const ApprovedJob = ({ status , id , approvedData}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={status === "approved"}
        className={`
          px-5 py-2 rounded-xl font-semibold
          ${
            status === "approved"
              ? "bg-green-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }
        `}
      >
        {status === "approved" ? "Approved" : "Approve Job"}
      </button>

      {open &&
        createPortal(
          <ApprovedJobhandle onClose={() => setOpen(false)} id={id} approvedData={approvedData} />,
          document.body
        )}
    </>
  );
};

const ApprovedJobhandle = ({ onClose,id,approvedData }) => {
  const [loading,setLoading]=useState(false);
  const approvedJobhandle=async()=>{
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/admin/approved/job-approved/${id}`,{
        method:"PATCH",
        credentials:"include",
         headers:{
        "Content-Type":"application/json"
      }
    }) 
    const data =await res.json();
    if(!data.success){
      toast.info(data.message);
      return
    }
    toast.success(data.message);
    approvedData(id)
    onClose()
    } catch (error) {
      toast.info("Server not responding")
    }
  }
  return (
    <div
      className="
      fixed inset-0
      z-[99999]
      bg-black/70
      backdrop-blur-md
      flex items-center justify-center
      "
    >
      <div
        className="
        w-[350px]
        md:w-[400px]
        bg-white
        dark:bg-slate-900
        rounded-2xl
        p-6
        border border-slate-700
        "
      >
        <div className="flex justify-center">
          <FaCheckCircle
            className="text-green-500"
            size={50}
          />
        </div>

        <h1 className="dark:text-white text-black text-center text-xl font-bold mt-3">
          Approve Job
        </h1>

        <p className="dark:text-gray-300 text-black text-center mt-3">
          Are you sure you want to approve this job?
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-gray-700 rounded-lg text-white"
          >
            Cancel
          </button>

          <button onClick={approvedJobhandle}
            className="flex-1 py-2 bg-green-600 rounded-lg text-white"
          >
             {loading ? ( <div className='flex items-center justify-center gap-2'>
                        <h1>Please Wait </h1>
                        <TailSpin
                      visible={true}
                      height="20"
                      width="20"
                      color="#60A5FA"
                    />
                    </div>) :( "Approve")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedJob;