const pool = require("../config/db")

const createCompanies = async (company_name , description , website_url , location) =>{
   return await pool.query(
    "INSERT INTO companiesdata (company_name , description , website_url , location) VALUES ($1,$2,$3,$4) RETURNING *",
    [company_name , description , website_url , location]
   );
};

const findCompanyByName=async(company_name)=>{
    return await pool.query(
        "SELECT * FROM  companiesdata WHERE company_name=$1",
        [company_name]
    );
};

const getAllCompanies = async()=>{
    return await pool.query(
        "SELECT  * FROM companiesdata ORDER BY id DESC"
    );
};

const getCompanyByid = async(id)=>{
    return await pool.query(
        "SELECT * FROM companiesdata WHERE id = $1",[id]
    );
};

const updateCompanies = async(id,company_name,description,website_url,location)=>{
    return await pool.query(
        "UPDATE companiesdata SET company_name=$1,description=$2,website_url=$3,location=$4 WHERE id=$5 RETURNING *",
        [company_name,description,website_url,location,id]
    );
};

const deleteCompany = async(id)=>{
    return await pool.query(
        "DELETE FROM companiesdata WHERE id=$1 RETURNING *",
        [id]
    )
}


const searchCompany=async(text)=>{

return await pool.query(
`
SELECT *
FROM companiesdata
WHERE
company_name ILIKE $1
`,
[`%${text}%`]

)

}

module.exports={createCompanies,findCompanyByName,getAllCompanies,getCompanyByid,updateCompanies,deleteCompany,searchCompany}