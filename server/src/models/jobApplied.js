const pool = require("../config/db");

// 🔥 Insert application
const createApplication = async (job_id, user_id, resume, cover_letter) => {
    return await pool.query(
        `INSERT INTO allapplicants (job_id, user_id, resume, cover_letter)
         VALUES ($1,$2,$3,$4) RETURNING *`,
        [job_id, user_id, resume, cover_letter]
    );
};

// 🔥 Check duplicate
const checkApplication = async (job_id, user_id) => {
    return await pool.query(
        "SELECT * FROM allapplicants WHERE job_id=$1 AND user_id=$2",
        [job_id, user_id]
    );
};

module.exports = { createApplication, checkApplication };