const { appliedform_recruiter, duplicaseRecruiterCheck, getAllAppliedRecruiterByid } = require("../../models/appliedformRecruiter");

const appliedform_recruiterDB=async(name,company_name,phone,company_email,company_description,company_website,industry_type)=>{
    if(!name|| !company_name || !phone || !company_email || !company_description || !company_website ||!industry_type){
        throw new Error("All Field are required");
    }

    const exists=await duplicaseRecruiterCheck(company_name,company_email);
    if(exists.rows.length > 0){
        throw new Error("This Recruiter Already Applied");
    }
    const data= await appliedform_recruiter(name,company_name,phone,company_email,company_description,company_website,industry_type);
    return data.rows[0];
}

const getAllAppliedRecruiterBycompanyemailDB=async(company_email)=>{
    const data = await getAllAppliedRecruiterByid(company_email);
    if(data.rows.length === 0 ){
        throw new Error("No Applied Recruiter Data");
    }
    return data.rows[0];
}

module.exports={appliedform_recruiterDB,getAllAppliedRecruiterBycompanyemailDB};