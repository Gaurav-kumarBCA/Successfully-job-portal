const { createJob, findJobByName, getAllJob, getAllJobById, updateJobById, deleteJobById } = require("../../models/job");

const AddjobDB=async(job_name,description, salary,location,job_type,company_id ,posted_by)=>{
    if(!job_name || !description || !salary,!location || !job_type || !company_id || !posted_by){
        throw new Error("All Field required");
    }
    const existsJob=await findJobByName(job_name);
    if(existsJob.rows.length > 0){
        throw new Error("This Job Already exists");        
    }
    const jobdata  = await createJob(job_name,description, salary,location,job_type,company_id ,posted_by)
    return jobdata.rows[0]
}

const getAlJobDB=async()=>{
    const data=await getAllJob();
    return data.rows;
}

const getAllJobByIdDB=async(id)=>{
    const data=await getAllJobById(id);
    if(data.rows.length === 0 ){
        throw new Error("Job not found");        
    }
    return data.rows[0]
} 

const updateJobByIdDB=async(id,job_name,description, salary,location,job_type,company_id ,posted_by)=>{
    const data= await updateJobById(id,job_name,description, salary,location,job_type,company_id ,posted_by)
    if(data.rows.length === 0){
        throw new Error("job not found");        
    }
    return data.rows[0]
}

const deleteJobByIdDB=async(id)=>{
    const data=await deleteJobById(id);
    if(data.rows.length === 0){
        throw new Error("Job not found");
    }
    return data.rows[0];
}

module.exports={AddjobDB ,getAlJobDB , getAllJobByIdDB , updateJobByIdDB , deleteJobByIdDB}
