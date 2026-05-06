const { approvedJobDB } = require("../../services/admin/approvedJob.services");

const approvedJob=async(req,res)=>{
    try {
        const id= req.params.id;
        const data = await approvedJobDB(id);
        res.json({
            success:true,
            message:"Job Approved Successfully",
            data:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}

module.exports={approvedJob}