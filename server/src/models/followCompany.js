const pool = require("../config/db")

const followCompaniesModel=async(user_id,company_id)=>{
    return await pool.query(
        "INSERT INTO follow_companies (user_id , company_id) VALUES ($1,$2) RETURNING *",[
            user_id,company_id
        ]
    );
};

const Checkcompany=async(user_id,company_id)=>{
    return await pool.query(
        "SELECT * FROM follow_companies WHERE user_id=$1 AND company_id=$2",
        [user_id,company_id]
    )
};

const getFollowersByCompany = (company_id) => {
    return pool.query(
        "SELECT user_id FROM follow_companies WHERE company_id=$1",
        [company_id]
    );
};
module.exports={followCompaniesModel,Checkcompany,getFollowersByCompany}