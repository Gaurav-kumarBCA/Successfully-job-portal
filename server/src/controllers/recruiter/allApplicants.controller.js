const {
  getAllApplicantsDB,
} = require("../../services/recruiter/allApplicants.service");

const AllApplicants = async (req, res) => {
  try {
    const recruiterId = req.loginUser.id;

    const data = await getAllApplicantsDB(recruiterId);

    res.status(200).json({
      success: true,
      message: "Applicants fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  AllApplicants,
};