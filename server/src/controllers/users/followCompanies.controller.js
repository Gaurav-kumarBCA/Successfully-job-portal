const { followCompaniesDB } = require("../../services/user/followCompany.services");

const followCompanies=async(req,res)=>{
    try {
        const user_id = req.loginUser.id;
        const {company_id} = req.body;
        const data = await followCompaniesDB(user_id,company_id);
        res.json({
            success:true,
            message:"Company followed",
            data:data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}

module.exports={followCompanies};