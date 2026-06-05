const { recruiterProfile } = require("../../models/createrecruiter")

const profiileRecruiterDB=async(id)=>{
const data = await recruiterProfile(id);
return data.rows[0];
}
module.exports={profiileRecruiterDB}