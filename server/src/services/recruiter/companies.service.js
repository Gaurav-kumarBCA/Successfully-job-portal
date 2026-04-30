const { createCompanies, findCompanyByName, getAllCompanies, getCompanyByid, updateCompanies, deleteCompany } = require("../../models/companies")

const AddCompaniesDB = async (company_name , description , website_url , location) =>{
if(!company_name || !description || !website_url || !location){
    throw new Error("All field required")
}

const existsCompany = await findCompanyByName(company_name);
if(existsCompany.rows.length > 0){
    throw new Error("This company already Exists")
}
    const companiesdata = await createCompanies(company_name , description , website_url , location)
    return companiesdata.rows[0]
}

const getcompaniesDB=async()=>{
    const data = await getAllCompanies();
    return data.rows;
}

const getSingleCompanyDB=async(id)=>{
    const data = await getCompanyByid(id);
    if(data.rows.length === 0 ){
        throw new Error ("Company not found");
    }
    return data.rows[0];
}

const updateCompanieDB=async(id,company_name,description,website_url,location)=>{
    const data = await updateCompanies(id,company_name,description,website_url,location);
    if(data.rows.length === 0){
        throw new Error("Company not found");
    };
    return data.rows[0];
}

const deleteCompanyDB=async(id)=>{
    const data = await deleteCompany(id);
    if(data.rows.length === 0){
        throw new Error("Company not found");        
    }
    return data.rows[0]
}
module.exports = {AddCompaniesDB,getSingleCompanyDB,getcompaniesDB,updateCompanieDB,deleteCompanyDB}