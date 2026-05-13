const { dashboardStatsDB } = require("../../services/admin/dashboard.service");

const dashboardStats = async (req, res) => {

    try {

        const data = await dashboardStatsDB();

        res.status(200).json({
            success: true,
            message: "Dashboard stats",
            data
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { dashboardStats };