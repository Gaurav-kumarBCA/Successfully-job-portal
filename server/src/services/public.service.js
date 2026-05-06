const { getAllCompanies } = require("../models/companies");
const {  getAllApprovedJobs } = require("../models/job");

const publicJobDB=async()=>{
    const data = await getAllApprovedJobs();
    return data.rows;
}

const fetAllCompaniesDB=async()=>{
const data = await getAllCompanies();
return data.rows;
}
module.exports={publicJobDB,fetAllCompaniesDB};