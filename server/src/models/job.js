const pool = require("../config/db")

const createJob = async (job_name,description, salary,location,job_type,company_id ,posted_by)=>{
    return await pool.query(
        "INSERT INTO jobcreate (job_name,description, salary,location,job_type,company_id ,posted_by) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [job_name,description, salary,location,job_type,company_id ,posted_by]
    );
}

const findJobByName=async(job_name)=>{
 return await pool.query(
    "SELECT * FROM jobcreate WHERE job_name=$1",
    [job_name]
 );
}

const getAllJob=async()=>{
    return await pool.query(
        "SELECT * FROM jobcreate ORDER BY id DESC",
    );
}

const getAllJobById=async(id)=>{
    return await pool.query(
        "SELECT * FROM jobcreate WHERE id=$1",[id]
    );
}

const updateJobById=async(id,job_name,description, salary,location,job_type,company_id ,posted_by)=>{
    return await pool.query(
        "UPDATE jobcreate SET job_name=$1 ,description=$2, salary=$3 ,location=$4, job_type=$5, company_id=$6, posted_by=$7 WHERE id=$8 RETURNING *",
        [job_name,description, salary,location,job_type,company_id ,posted_by,id]
    )
}
const deleteJobById=async(id)=>{
    return await pool.query(
        "DELETE FROM jobcreate WHERE id=$1 RETURNING *",
        [id]
    );
}

module.exports={createJob , findJobByName,getAllJob,getAllJobById , updateJobById, deleteJobById}
