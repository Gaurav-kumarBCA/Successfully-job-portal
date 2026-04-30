const { AddjobDB, getAlJobDB, getAllJobByIdDB, updateJobByIdDB, deleteJobByIdDB } = require("../../services/recruiter/job.service");

const jobcreate=async(req,res)=>{
try {
    const {job_name,description, salary,location,job_type,company_id ,posted_by} = req.body;
    const data= await AddjobDB(job_name,description, salary,location,job_type,company_id ,posted_by);
    res.status(201).json({
        success:true,
        message:"JOb Created Successfully",
        data:data
    })
} catch (error) {
     res.status(400).json({
            success:false,
            message:error.message
        });
}
}

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