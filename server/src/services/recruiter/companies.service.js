const { createCompanies, findCompanyByName, getAllCompanies, getCompanyByid, updateCompanies, deleteCompany, findCompanyByRecruiter } = require("../../models/companies")

const AddCompaniesDB = async (company_name , description , website_url , location,recruiter_id) =>{
if(!company_name || !description || !website_url || !location){
    throw new Error("All field required")
}

const existsCompany = await findCompanyByName(company_name);
if(existsCompany.rows.length > 0){
    throw new Error("This company already Exists")
}

const company = await findCompanyByRecruiter(recruiter_id);

if(company.rows.length > 0){
   throw new Error("You already created a company");
}

    const companiesdata = await createCompanies(company_name , description , website_url , location,recruiter_id)
    return companiesdata.rows[0]
}


const getcompaniesDB=async()=>{
    const data = await getAllCompanies();
    if(data.rows.length === 0){
        throw new Error("companies not found");
    }
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