const { searchJobs } = require("../models/job");
const { publicJobDB, fetAllCompaniesDB, SearchJobsDB } = require("../services/public.service")

const publicJob=async(req,res)=>{
try {
    const data = await publicJobDB();
    res.json({
        success:true,
        message:"All Job Fetch successfully",
        data:data
    })
} catch (error) {
    res.json({
        success:false,
        message:error.message
    })    
}
}

const fetAllCompanies=async(req,res)=>{
try {
    const data = await fetAllCompaniesDB();
    res.json({
        success:true,
        message:"All Companies fetch successfully",
        data:data
    })
} catch (error) {
   res.json({
    success:false,
    message:error.message
   }) 
}
}


const SearchJobs = async (req, res) => {
  try {

    const {
      search,
      category,
      job_type
    } = req.query;

    const jobs = await SearchJobsDB(
      search,
      category,
      job_type
    );

    res.status(200).json({
      success: true,
      message: "Jobs Found",
      data: jobs.rows,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports={publicJob,fetAllCompanies,SearchJobs}