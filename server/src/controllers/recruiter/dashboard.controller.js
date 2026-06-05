const service = require("../../services/recruiter/dashboard.service");

const getRecruiterDashboard = async (req, res) => {
  try {
    const recruiterId = req.loginUser.id; // JWT se milega

    const data = await service.getDashboardData(recruiterId);

    res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getRecruiterDashboard,
};