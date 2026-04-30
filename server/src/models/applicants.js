const pool = require("../config/db");

const getAllApplicants = async () => {
    return await pool.query(`
        SELECT 
            a.id,
            a.resume,
            a.status,
            a.created_at,

            -- 👤 user details
            json_build_object(
                'id', u.id,
                'name', u.name,
                'email', u.email
            ) AS users,

            -- 💼 job details
            json_build_object(
                'id', j.id,
                'job_name', j.job_name
            ) AS job,

            -- 🏢 company details
            json_build_object(
                'id', c.id,
                'company_name', c.company_name
            ) AS company

        FROM allApplicants a
        JOIN users u ON a.user_id = u.id
        JOIN jobcreate j ON a.job_id = j.id
        JOIN companiesdata c ON j.company_id = c.id

        ORDER BY a.created_at DESC
    `);
};

module.exports = { getAllApplicants };