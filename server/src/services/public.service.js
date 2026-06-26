const { getAllCompanies } = require("../models/companies");
const {  getAllApprovedJobs } = require("../models/job");
const { SearchJobsQuery } = require("../models/searchJob");

const publicJobDB=async()=>{
    const data = await getAllApprovedJobs();
    return data.rows;
}

const fetAllCompaniesDB=async()=>{
const data = await getAllCompanies();
return data.rows;

}


const SearchJobsDB = async (
    search = "",
    category = "",
    job_type = ""
) => {

    return await SearchJobsQuery(
        search,
        category,
        job_type
    );

};

module.exports={publicJobDB,fetAllCompaniesDB,SearchJobsDB};