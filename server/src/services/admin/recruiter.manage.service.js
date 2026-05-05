const { CreateRecruitermodel, findRecruiterByEmail } = require("../../models/createrecruiter");

const createRecruiterDB=async({name,company_name,  email,password,role,phone,company_description,company_website,industry_type})=>{
    if(!name|| !company_name ||  !email ||!password|| !role || !phone || !company_description || !company_website || !industry_type){
        throw new Error("All Field are rquired");
    }
      const existing = await findRecruiterByEmail(email);
    if(existing.rows.length > 0){
        throw new Error("Recruiter already exists");
    }
    const recruiter= await CreateRecruitermodel(name,company_name,  email,password,role,phone,company_description,company_website,industry_type);
    return recruiter.rows[0]

}
module.exports={createRecruiterDB}