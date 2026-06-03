const { AddCompaniesDB, getcompaniesDB, getSingleCompanyDB, updateCompanieDB, deleteCompanyDB } = require("../../services/recruiter/companies.service");

const AddCompanies=async(req,res)=>{
    const recruiter_id = req.loginUser.id;
    console.log(req.loginUser)
try {
    const {company_name , description , website_url , location } = req.body;
    const companiesdata=await AddCompaniesDB(company_name , description , website_url , location , recruiter_id);
    res.status(201).json({
        success:true,
        message:"Successfully Companie Profile Created ",
        data:companiesdata
    })
} catch (error) {
     res.status(400).json({
            success:false,
            message:error.message
        });
}
}

const getCompanies = async (req,res)=>{
try {
    const data = await getcompaniesDB();
    res.status(200).json({
        success:true,
        message:"All Companies",
        data:data
    });
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    });
}
}

const getSingleCompany=async(req,res)=>{
    try {
        const data = await getSingleCompanyDB(req.params.id);
        res.status(200).json({
            success:true,
            message:"Your Selected Companies",
            data:data
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

    const updateCompany=async(req,res)=>{
        try {
        const id=parseInt(req.params.id);
        if(isNaN(id)){
            throw new Error("invalid id");        
        }
        const {company_name , description , website_url , location} = req.body;
        const data= await updateCompanieDB(id,company_name , description , website_url , location);
            res.json({
            success:true,
            message:"Company Profile Updated Successfully",
            data:data
        })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            });
        }
    }

const deleteCompanycontroller=async(req,res)=>{
   try {
    const data = await deleteCompanyDB(req.params.id);
    res.status(200).json({
            success:true,
            message:"Your Companies deleted " ,
            data:data
        });
    
   } catch (error) {
     res.status(400).json({
            success:false,
            message:error.message
        });
   }
    
}
module.exports = {AddCompanies,getCompanies,getSingleCompany,updateCompany,deleteCompanycontroller}