const { approveJobModel, getAllJob } = require("../../models/job");

const approvedJobDB=async(id)=>{
    if(!id)throw new Error("Job id ir required");
    const data = await approveJobModel(id);
    return data.rows[0];
}

const getAllJobDB=async()=>{
    const data= await getAllJob();
    if(data.rows.length === 0){
        throw new Error("Job data not found");
    }
    return data.rows;
}

module.exports={approvedJobDB,getAllJobDB}