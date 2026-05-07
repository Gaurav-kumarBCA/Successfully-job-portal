const { appliedform_recruiterDB } = require("../../services/recruiter/appliedFormRecruiter.service")

const appliedform_recruiter=async(req,res)=>{
try {
    const {name,company_name,company_email,company_description,company_website,industry_type}=req.body;
    const data=await appliedform_recruiterDB(name,company_name,company_email,company_description,company_website,industry_type);
    res.status(201).json({
        success:true,
        message:"Applied Success by Recruiter"
    })
} catch (error) {
    console.log(error);
    res.json({
        success:false,
        message:error.message
    });
};
};

module.exports={appliedform_recruiter};