const { categoryJobs } = require("../../models/job");
const categoryJobDB = async (category) => {
  const data = await categoryJobs(category);
  return data.rows;
};
module.exports = { categoryJobDB };
