const { CreateRecruitermodel } = require("../../models/createrecruiter");

const createRecruiterDB=async(name,company_name,  email,password,role,phone,company_description,company_website,industry_type)=>{
    if(!name|| !company_name ||  !email ||!password|| !role || !phone ||!company_description|| !company_website || !industry_type){
        throw new Error("All Field are rquired");
    }
    const recruiter= await CreateRecruitermodel(name,company_name,  email,password,role,phone,company_description,company_website,industry_type);
    return recruiter.rows[0]

}
module.exports={createRecruiterDB}