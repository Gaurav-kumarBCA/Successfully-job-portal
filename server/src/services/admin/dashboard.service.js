const { dashboardStats } = require("../../models/dashboard");

const dashboardStatsDB = async () => {

    const data = await dashboardStats();

    return data;
};

module.exports = { dashboardStatsDB };