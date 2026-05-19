const { profileModel } = require("../../models/user")

const profiileDB=async(id)=>{
const data = await profileModel(id);
return data.rows[0];
}
module.exports={profiileDB}