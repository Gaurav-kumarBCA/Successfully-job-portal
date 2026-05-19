const { profiileDB } = require("../../services/user/profile.service");

const profiile = async (req, res) => {
  try {
    const { id } = req.loginUser;

    const data = await profiileDB(id);

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

module.exports = { profiile };