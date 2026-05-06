const pool = require("../config/db");

const createJob = async (job_name, description, salary, location, job_type, company_id, posted_by) => {
    return await pool.query(
        `INSERT INTO jobcreate 
        (job_name, description, salary, location, job_type, company_id, posted_by) 
        VALUES ($1,$2,$3,$4,$5,$6,$7) 
        RETURNING *`,
        [job_name, description, salary, location, job_type, company_id, posted_by]
    );
};

const findJobByName = async (job_name) => {
    return await pool.query(
        "SELECT * FROM jobcreate WHERE job_name=$1",
        [job_name]
    );
};

const getAllJob = async () => {
    return await pool.query(`
        SELECT 
            j.id,
            j.job_name,
            j.description,
            j.salary,
            j.location,
            j.job_type,
            j.posted_by,

            json_build_object(
                'id', c.id,
                'company_name', c.company_name,
                'website_url', c.website_url,
                'location', c.location,
                'description',c.description
            ) AS company

        FROM jobcreate j
        JOIN companiesdata c ON j.company_id = c.id
        ORDER BY j.id DESC
    `);
};

const getAllJobById = async (id) => {
    return await pool.query(`
        SELECT 
            j.id,
            j.job_name,
            j.description,
            j.salary,
            j.location,
            j.job_type,
            j.posted_by,

            json_build_object(
                'id', c.id,
                'company_name', c.company_name,
                'website_url', c.website_url,
                'location', c.location,
                'description',c.description

            ) AS company

        FROM jobcreate j
        JOIN companiesdata c ON j.company_id = c.id
        WHERE j.status = 'approved' AND j.id = $1
    `, [id]);
};

const updateJobById = async (id, job_name, description, salary, location, job_type, company_id, posted_by) => {
    return await pool.query(
        `UPDATE jobcreate 
        SET job_name=$1, description=$2, salary=$3, location=$4, job_type=$5, company_id=$6, posted_by=$7 
        WHERE id=$8 
        RETURNING *`,
        [job_name, description, salary, location, job_type, company_id, posted_by, id]
    );
};

const deleteJobById = async (id) => {
    return await pool.query(
        "DELETE FROM jobcreate WHERE id=$1 RETURNING *",
        [id]
    );
};

const approveJobModel=async(id) =>{
    return await pool.query(
        "UPDATE jobcreate SET status='approved' WHERE id=$1 RETURNING * ",[id]
    )
}


const getAllApprovedJobs = async () => {
    return await pool.query(`
        SELECT 
            j.id,
            j.job_name,
            j.description,
            j.salary,
            j.location,
            j.job_type,
            j.posted_by,

            json_build_object(
                'id', c.id,
                'company_name', c.company_name,
                'website_url', c.website_url,
                'location', c.location,
                'description', c.description
            ) AS company

        FROM jobcreate j
        JOIN companiesdata c ON j.company_id = c.id

        WHERE j.status = 'approved' 

        ORDER BY j.id DESC
    `);
};

module.exports = {
    createJob,
    findJobByName,
    getAllJob,
    getAllJobById,
    updateJobById,
    deleteJobById,
    approveJobModel,
    getAllApprovedJobs
};