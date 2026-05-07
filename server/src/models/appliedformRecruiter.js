const pool = require("../config/db")

const appliedform_recruiter=async(name,company_name,phone,company_email,company_description,company_website,industry_type)=>{
    return pool.query(
        "INSERT INTO appliedform_recruiter (name,company_name,phone,company_email,company_description,company_website,industry_type) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [name,company_name,phone,company_email,company_description,company_website,industry_type]
    );
};

const getAllAppliedRecruiterByid=async(company_email)=>{
    return await pool.query(
        "SELECT id,name, company_name ,company_email,status FROM appliedform_recruiter WHERE company_email=$1",
        [company_email]
    );
}

const duplicaseRecruiterCheck=async(company_name,company_email)=>{
    return await pool.query(
        "SELECT * FROM  appliedform_recruiter WHERE company_name=$1 AND company_email=$2",
        [company_name,company_email]
    );
};

const getAllAppliedRecruiter=async()=>{
    return await pool.query(
        "SELECT * FROM appliedform_recruiter ORDER BY id DESC "
    );
};


const approveRecruiterModel=async(id) =>{
    return await pool.query(
        "UPDATE appliedform_recruiter SET status='approved' WHERE id=$1 RETURNING * ",[id]
    )
}


module.exports={appliedform_recruiter, duplicaseRecruiterCheck, getAllAppliedRecruiter,getAllAppliedRecruiterByid,approveRecruiterModel};