const { createRecruiterDB } = require("../../services/admin/recruiter.manage.service");
const { hasspassword } = require("../../utility");
const saltRound=10;

const createRecruiter=async(req,res)=>{
try {
    const {name,company_name,  email,password,role,phone,company_description,company_website,industry_type}= req.body;
    const hashpassword=await hasspassword(password,saltRound);
    const data=await createRecruiterDB({name,company_name,  email,password:hashpassword,role,phone,company_description,company_website,industry_type});
    res.status(201).json({
            success:true,
            message:"Recruiter Registration Successfully"
        })

} catch (error) {
     res.status(400).json({
            success:false,
            message:error.message
        });
}
}
module.exports={createRecruiter}