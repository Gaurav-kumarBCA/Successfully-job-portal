const { getFollowersByCompany } = require("../../models/followCompany");
const { AddjobDB, getAlJobDB, getAllJobByIdDB, updateJobByIdDB, deleteJobByIdDB } = require("../../services/recruiter/job.service");
const { notificationDB } = require("../../services/user/notification.service");

const jobcreate=async(req,res)=>{
try {
    const id = req.loginUser.id;
    const {job_name,description, salary,location,job_type,company_id ,category} = req.body;
    const data= await AddjobDB(job_name,description, salary,location,job_type,company_id ,category ,id);

    const followers = await getFollowersByCompany(company_id);

    for(let user of followers.rows){
        await notificationDB(
            user.user_id,
            `new job posted in company (job : ${job_name} )`
        );
    }

    res.status(201).json({
        success:true,
        message:"JOb Created Successfully",
        data:data
    })
} catch (error) {
    console.log(error)
     res.status(400).json({
            success:false,
            message:error.message
        });
};
};

const AllJob=async(req,res)=>{
    try {
        const data=await getAlJobDB();
        res.status(200).json({
            success:true,
            message:"Fetch All jobs",
            data:data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const AllJobById=async(req,res)=>{
    try {
        const data=await getAllJobByIdDB(req.params.id);
          res.status(200).json({
            success:true,
            message:"Your Selected job",
            data:data
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const updateJob=async(req,res)=>{
    try {
        const id =req.params.id;
        if(isNaN(id)){
            res.json({
                success:false,
                message:"Invalid ID"
            })
        }
        const {job_name,description, salary,location,job_type,company_id ,posted_by}=req.body;
        const data=await updateJobByIdDB(id,job_name,description, salary,location,job_type,company_id ,posted_by);
        res.json({
            success:true,
            message:"Job Data Updated Successfully",
            data:data
        })
    } catch (error) {
          res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const deleteJob=async(req,res)=>{
try {
    const data=await deleteJobByIdDB(req.params.id);
    res.json({
        success:true,
        message:"Deleted job successfully",
    })
} catch (error) {
    res.json({
        success:false,
        message:error.message
    });
}
}

module.exports = {jobcreate , AllJob , AllJobById , updateJob , deleteJob}