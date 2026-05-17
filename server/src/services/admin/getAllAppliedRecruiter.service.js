const { getAllAppliedRecruiter, approveRecruiterModel } = require("../../models/appliedformRecruiter")

const getAllAppliedRecruiterDB=async()=>{
    const data=await getAllAppliedRecruiter();
    if(data.rows.length === 0){
        throw new Error("No applied from Recruiter");
    }
    return data.rows;
}

const approveRecruiterDB=async(id)=>{
    if(!id) throw new Error("Recruiter id is required");
    const data= await approveRecruiterModel(id)
    return await data.rows[0];
    
}


module.exports={getAllAppliedRecruiterDB,approveRecruiterDB}