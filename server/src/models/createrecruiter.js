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



module.exports={CreateRecruitermodel,findRecruiterByEmail}