const { profileModel } = require("../../models/user")

const profiileAdminDB=async(id)=>{
const data = await profileModel(id);
return data.rows[0];
}
module.exports={profiileAdminDB}