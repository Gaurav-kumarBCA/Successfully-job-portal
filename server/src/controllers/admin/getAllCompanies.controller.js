const { getAllCompaniesDB } = require("../../services/admin/getAllCompanies.services")

const getAllCompanies=async(req,res)=>{
    try {
        const data = await getAllCompaniesDB();
        res.json({
            success:true,
            message:"Fetch All Companies Data",
            data:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports={getAllCompanies}