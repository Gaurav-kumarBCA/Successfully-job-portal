const { checkjobsave, saveJob, getAllSaveJob, deletesavejob } = require("../../models/saveJob")

const savejobDB=async(user_id,job_id)=>{
    const exist= await checkjobsave(user_id,job_id);
    if(exist.rows.length > 0){
        throw new Error("Already this job save");
    }
    const data = await saveJob(user_id , job_id);
    return  data.rows[0];
}

const getsavejobDB=async()=>{
    const data= await getAllSaveJob();
    return data.rows;
}

const deleteJobByIdDB=async(id)=>{
    const data= await deletesavejob(id);
    if(data.rows.length === 0){
        throw new Error("job not found");
    }
    return data.rows[0];
}

module.exports={savejobDB,getsavejobDB,deleteJobByIdDB};