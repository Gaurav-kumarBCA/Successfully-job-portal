const pool = require("../config/db");

const saveJob=async(user_id,job_id)=>{
return await pool.query(
    "INSERT INTO save_jobs (user_id , job_id ) VALUES ($1,$2) RETURNING *",
    [user_id, job_id]
);
};

const checkjobsave=async(user_id,job_id)=>{
    return await pool.query(
        "SELECT  * FROM save_jobs WHERE user_id=$1 AND job_id=$2",
        [user_id, job_id]
    )

}
 
module.exports={saveJob,checkjobsave}