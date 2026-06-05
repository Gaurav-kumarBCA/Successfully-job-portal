const pool= require("../config/db");
const CreateRecruitermodel = async(name,company_name,  email,password,role,phone,company_description,company_website,industry_type)=>{
    return await pool.query(
        "INSERT INTO create_recruiter (name,company_name,  email,password,role,phone,company_description,company_website,industry_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
        [name,company_name,  email,password,role,phone,company_description,company_website,industry_type]
    );
};

const findRecruiterByEmail = async (email) => {
  return await pool.query(
    "SELECT * FROM create_recruiter WHERE email=$1",
    [email]
  );
};


const getAllRecruiters=async()=>{
  return await pool.query(
    "SELECT * FROM create_recruiter ORDER BY id DESC"
  );
};

const recruiterProfile = async(id)=>{
  return await pool.query(
    `SELECT id,name,email,company_name,company_website FROM create_recruiter WHERE id=$1`,[id]
  )
}

module.exports={CreateRecruitermodel,findRecruiterByEmail,getAllRecruiters,recruiterProfile}