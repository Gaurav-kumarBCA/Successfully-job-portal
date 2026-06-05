const {getAllRecruiterbyApplicants} = require ("../../models/applicants")
const getAllApplicantsDB = async (recruiterId) => {
  const data = await getAllRecruiterbyApplicants(recruiterId);

  if (data.rows.length === 0) {
    return [];
  }

  return data.rows;
};

module.exports = {
  getAllApplicantsDB,
};