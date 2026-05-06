const { Checkcompany, followCompaniesModel } = require("../../models/followCompany");

const followCompaniesDB=async(user_id,company_id)=>{
    if(!company_id){
        throw new Error("Company id required");
    }

    const exists=await Checkcompany(user_id,company_id);
    if(exists.rows.length > 0){
        throw new Error("Already follow");
    }

    const data= await followCompaniesModel(user_id,company_id);
        return data.rows[0];
}

module.exports={followCompaniesDB};