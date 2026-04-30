const { getAllApplicantsDB } = require("../../services/recruiter/allApplicants.service");

const AllApplicants = async (req, res) => {
    try {
        const data = await getAllApplicantsDB();

        res.status(200).json({
            success: true,
            message: "All applicants fetched successfully",
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { AllApplicants };