const { applyJobDB } = require("../../services/user/jobApplied.service");

const applyJob = async (req, res) => {
    try {
        const { job_id, user_id, cover_letter } = req.body;

        if (!job_id || !user_id) {
            return res.status(400).json({
                success: false,
                message: "job_id and user_id required"
            });
        }

        // 📄 Resume from file upload
        const resume = req.file ? req.file.path : null;

        const data = await applyJobDB(job_id, user_id, resume, cover_letter);

        res.status(201).json({
            success: true,
            message: "Applied successfully",
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { applyJob };