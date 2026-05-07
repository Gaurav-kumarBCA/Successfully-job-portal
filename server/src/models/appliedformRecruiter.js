const pool = require("../config/db")

const appliedform_recruiter=async(name,company_name,company_email,company_description,company_website,industry_type)=>{
    return pool.query(
        "INSERT INTO appliedform_recruiter (name,company_name,company_email,company_description,company_website,industry_type) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
        [name,company_name,company_email,company_description,company_website,industry_type]
    );
};

const duplicaseRecruiterCheck=async(company_name,company_email)=>{
    return await pool.query(
        "SELECT * FROM  appliedform_recruiter WHERE company_name=$1 AND company_email=$2",
        [company_name,company_email]
    );
};

module.exports={appliedform_recruiter, duplicaseRecruiterCheck};