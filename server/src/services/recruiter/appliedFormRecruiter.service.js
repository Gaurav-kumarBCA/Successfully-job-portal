const { appliedform_recruiter, duplicaseRecruiterCheck } = require("../../models/appliedformRecruiter");

const appliedform_recruiterDB=async(name,company_name,company_email,company_description,company_website,industry_type)=>{
    if(!name|| !company_name || !company_email || !company_description || !company_website ||!industry_type){
        throw new Error("All Field are required");
    }

    const exists=await duplicaseRecruiterCheck(company_name,company_email);
    if(exists.rows.length > 0){
        throw new Error("This Recruiter Already Applied");
    }
    const data= await appliedform_recruiter(name,company_name,company_email,company_description,company_website,industry_type);
    return data.rows[0];
}

module.exports={appliedform_recruiterDB};