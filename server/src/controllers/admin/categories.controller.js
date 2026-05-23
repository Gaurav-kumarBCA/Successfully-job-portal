const { categoryJobDB } = require("../../services/admin/category.service");
const getCategoryJob=async(req,res)=>{
try{
const {category}=req.params;
const data=await categoryJobDB(category);
res.json({
success:true,
data:data
})
}catch(error){
res.json({
success:false,
message:error.message
})
}
}

module.exports={getCategoryJob}