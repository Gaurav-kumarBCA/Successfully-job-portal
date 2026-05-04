const { checkjobsave, saveJob } = require("../../models/saveJob")

const savejobDB=async(user_id,job_id)=>{
    const exist= await checkjobsave(user_id,job_id);
    if(exist.rows.length > 0){
        throw new Error("Already this job save");
    }
    const data = await saveJob(user_id , job_id);
    return  data.rows[0];
}

module.exports={savejobDB};