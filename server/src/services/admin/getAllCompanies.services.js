const { getAllCompanies } = require("../../models/companies")

const getAllCompaniesDB=async()=>{
    const data = await getAllCompanies();
    if(data.rows.length === 0 ){
        throw new Error("Companies not found");
    }
    return data.rows;
}
module.exports={getAllCompaniesDB};