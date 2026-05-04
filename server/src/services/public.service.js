const { getAllCompanies } = require("../models/companies");
const { getAllJob } = require("../models/job");

const publicJobDB=async()=>{
    const data = await getAllJob();
    return data.rows;
}

const fetAllCompaniesDB=async()=>{
const data = await getAllCompanies();
return data.rows;
}
module.exports={publicJobDB,fetAllCompaniesDB};