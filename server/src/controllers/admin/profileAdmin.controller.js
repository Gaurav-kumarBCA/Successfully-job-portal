const { profiileAdminDB } = require("../../services/admin/profileAdmin.service");

const profiileAdmin = async (req, res) => {
  try {
    const { id } = req.loginUser;

    const data = await profiileAdminDB(id);

    return res.json({
      success: true,
      data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { profiileAdmin };