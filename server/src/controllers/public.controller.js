const { publicJobDB } = require("../services/public.service")

const publicJob=async(req,res)=>{
try {
    const data = await publicJobDB();
    res.json({
        success:true,
        message:"All Job Fetch successfully",
        data:data
    })
} catch (error) {
    res.json({
        success:false,
        message:error.message
    })    
}
}
module.exports={publicJob}