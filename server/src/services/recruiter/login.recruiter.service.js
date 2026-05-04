const { findRecruiterByEmail } = require("../../models/createrecruiter")

const loginRecruiterDB=async(email,password)=>{
    const data= await findRecruiterByEmail(email);

    if(data.rows.length === 0){
        throw new Error("Recruiter not found");
    }
    return data.rows[0] ;
}
module.exports={loginRecruiterDB}