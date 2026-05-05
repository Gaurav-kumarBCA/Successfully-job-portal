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

const getAllSaveJob = async () => {
    return await pool.query(`
        SELECT 
            s.id,

            j.id AS job_id,
            j.job_name,
            j.description,
            j.salary,
            j.location,
            j.job_type,

            json_build_object(
                'id', c.id,
                'company_name', c.company_name,
                'website_url', c.website_url,
                'location', c.location
            ) AS company,

            json_build_object(
                'id', u.id,
                'name', u.name,
                'email', u.email
            ) AS user

        FROM save_jobs s
        JOIN jobcreate j ON s.job_id = j.id
        JOIN users u ON s.user_id = u.id
        JOIN companiesdata c ON j.company_id = c.id

        ORDER BY s.id DESC
    `);
}; 


const deletesavejob=async(id)=>{
    return await pool.query(
        "DELETE FROM save_jobs WHERE id=$1 RETURNING *",[id]
        );
}
module.exports={saveJob,checkjobsave,getAllSaveJob,deletesavejob}