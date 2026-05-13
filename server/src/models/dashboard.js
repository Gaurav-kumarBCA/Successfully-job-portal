const pool = require("../config/db");

const dashboardStats = async () => {

    const totalUsers = await pool.query(
        "SELECT COUNT(*) FROM users"
    );

    const blockedUsers = await pool.query(
        "SELECT COUNT(*) FROM users WHERE is_blocked = true"
    );

    const totalJobs = await pool.query(
        "SELECT COUNT(*) FROM jobcreate"
    );

    const pendingJobs = await pool.query(
        "SELECT COUNT(*) FROM jobcreate WHERE status = 'pending'"
    );

    const totalCompanies = await pool.query(
        "SELECT COUNT(*) FROM companiesdata"
    );

    const totalRecruiters = await pool.query(
        "SELECT COUNT(*) FROM create_recruiter"
    )

    return {
        totalUsers: totalUsers.rows[0].count,
        blockedUsers: blockedUsers.rows[0].count,
        totalJobs: totalJobs.rows[0].count,
        pendingJobs: pendingJobs.rows[0].count,
        totalCompanies: totalCompanies.rows[0].count,
        totalRecruiters: totalRecruiters.rows[0].count
    };
};

module.exports = { dashboardStats };