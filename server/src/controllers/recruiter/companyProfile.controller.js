 const {getCompanyProfileDB} = require("../../services/recruiter/companyProfile.service")
 const getCompanyProfile = async (req, res) => {
  try {
    const recruiter_id = req.loginUser.id;

    const data = await getCompanyProfileDB(recruiter_id);

    res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports ={getCompanyProfile}