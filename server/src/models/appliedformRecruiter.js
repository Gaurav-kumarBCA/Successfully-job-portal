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

const searchRecruiters = async(text)=>{

return await pool.query(
`
SELECT
id,
name,
company_name,
company_email as email,
'approved recruiter' as type

FROM appliedform_recruiter

WHERE
status='approved'
AND
(
name ILIKE $1
OR company_name ILIKE $1
)

UNION

SELECT
id,
name,
company_name,
email,
'created recruiter' as type

FROM create_recruiter

WHERE
(
name ILIKE $1
OR company_name ILIKE $1
)

ORDER BY id DESC
`,
[`%${text}%`]

)

}

module.exports={appliedform_recruiter, duplicaseRecruiterCheck, getAllAppliedRecruiter,getAllAppliedRecruiterByid,approveRecruiterModel,searchRecruiters};