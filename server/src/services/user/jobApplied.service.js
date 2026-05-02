
const { createApplication, checkApplication } = require("../../models/jobApplied");

const applyJobDB = async (job_id, user_id, resume, cover_letter) => {

    const exists = await checkApplication(job_id, user_id);

    if (exists.rows.length > 0) {
        throw new Error("Already applied for this job");
    }

    const data = await createApplication(job_id, user_id, resume, cover_letter);
    return data.rows[0];
};

module.exports = { applyJobDB };