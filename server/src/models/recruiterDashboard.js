const pool = require("../config/db");

// Total jobs by recruiter
const getTotalJobsByRecruiter = async (recruiterId) => {
  const result = await pool.query(
    `SELECT COUNT(*) FROM jobcreate WHERE posted_by = $1`,
    [recruiterId]
  );
  return result.rows[0].count;
};

// Active jobs
const getActiveJobs = async (recruiterId) => {
  const result = await pool.query(
    `SELECT COUNT(*) FROM jobcreate WHERE posted_by = $1 AND status = 'approved'`,
    [recruiterId]
  );
  return result.rows[0].count;
};

// Pending jobs
const getPendingJobs = async (recruiterId) => {
  const result = await pool.query(
    `SELECT COUNT(*) FROM jobcreate WHERE posted_by = $1 AND status = 'pending'`,
    [recruiterId]
  );
  return result.rows[0].count;
};

// Total applications on recruiter jobs
const getTotalApplications = async (recruiterId) => {
  const result = await pool.query(
    `SELECT COUNT(*) 
     FROM allapplicants a
     JOIN jobcreate j ON j.id = a.job_id
     WHERE j.posted_by = $1`,
    [recruiterId]
  );
  return result.rows[0].count;
};

// Unique users applied
const getUniqueApplicants = async (recruiterId) => {
  const result = await pool.query(
    `SELECT COUNT(DISTINCT a.user_id)
     FROM allapplicants a
     JOIN jobcreate j ON j.id = a.job_id
     WHERE j.posted_by = $1`,
    [recruiterId]
  );
  return result.rows[0].count;
};

// All users
const getAllUsers = async () => {
  const result = await pool.query(`SELECT id, name, email, role FROM users`);
  return result.rows;
};

// Applied users list
const getAppliedUsers = async (recruiterId) => {
  const result = await pool.query(
    `SELECT DISTINCT u.id, u.name, u.email
     FROM users u
     JOIN allapplicants a ON a.user_id = u.id
     JOIN jobcreate j ON j.id = a.job_id
     WHERE j.posted_by = $1`,
    [recruiterId]
  );
  return result.rows;
};


const getRecentJobs = async (recruiterId) => {
  const result = await pool.query(
    `SELECT *
     FROM jobcreate
     WHERE posted_by = $1
     ORDER BY created_at DESC
     LIMIT 5`,
    [recruiterId]
  );

  return result.rows;
};


const getRecentApplicants = async (recruiterId) => {
  const result = await pool.query(
    `SELECT 
        u.id,
        u.name,
        u.email,
        j.job_name,
        a.created_at
     FROM allapplicants a
     JOIN users u ON u.id = a.user_id
     JOIN jobcreate j ON j.id = a.job_id
     WHERE j.posted_by = $1
     ORDER BY a.created_at DESC
     LIMIT 5`,
    [recruiterId]
  );

  return result.rows;
};

module.exports = {
  getTotalJobsByRecruiter,
  getActiveJobs,
  getPendingJobs,
  getTotalApplications,
  getUniqueApplicants,
  getAllUsers,
  getAppliedUsers,
  getRecentJobs,
  getRecentApplicants
};