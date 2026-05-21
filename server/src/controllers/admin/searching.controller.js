const {searchUsers}=require("../../models/user");

const { searchRecruiters } = require("../../models/appliedformRecruiter");

const {searchJobs}=require("../../models/job");

const {searchCompany}=require("../../models/companies");


const globalSearch=async(req,res)=>{

try{

const {search}=req.query;

if(!search){

return res.status(400).json({
success:false,
message:"Search text required"
})

}


const users=await searchUsers(search)

const jobs=await searchJobs(search);

const companies=
await searchCompany(search);

const recruiters=
await searchRecruiters(search);


return res.status(200).json({

success:true,

data:{

users:users.rows,

jobs:jobs.rows,

companies:companies.rows,

recruiters:
recruiters.rows

}

})

}catch(error){

console.log(error)

return res.status(500).json({

success:false,
message:error.message

})

}

}

module.exports={
globalSearch
}