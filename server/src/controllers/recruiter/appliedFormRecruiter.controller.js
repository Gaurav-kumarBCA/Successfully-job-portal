const { appliedform_recruiterDB, getAllAppliedRecruiterBycompanyemailDB } = require("../../services/recruiter/appliedFormRecruiter.service")

const appliedform_recruiter=async(req,res)=>{
try {
    const {name,company_name,phone,company_email,company_description,company_website,industry_type}=req.body;
    const data=await appliedform_recruiterDB(name,company_name,phone,company_email,company_description,company_website,industry_type);
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

const getAllAppliedRecruiterBycompanyemail=async(req,res)=>{
    try {
        const {company_email} = req.body;
        if(!company_email){
           return res.json({
                success:false,
                message:"Please Enter the company_email"
            });
        }
       const data= await getAllAppliedRecruiterBycompanyemailDB( company_email);
       res.json({
        success:true,
        message:"Applied data",
        data:data
       }) 
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports={appliedform_recruiter,getAllAppliedRecruiterBycompanyemail};