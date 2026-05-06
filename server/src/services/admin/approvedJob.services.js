const { approveJobModel } = require("../../models/job");

const approvedJobDB=async(id)=>{
    if(!id)throw new Error("Job id ir required");
    const data = await approveJobModel(id);
    return data.rows[0];
}

module.exports={approvedJobDB}