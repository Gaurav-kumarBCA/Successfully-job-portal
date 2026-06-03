const { findCompanyByRecruiter }= require("../../models/companies");

const getCompanyProfileDB = async (recruiter_id) => {
  const company = await findCompanyByRecruiter(recruiter_id);

  if (company.rows.length === 0) {
    throw new Error("Company profile not found");
  }

  return company.rows[0];
};

module.exports={getCompanyProfileDB}