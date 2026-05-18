const { getAllAppliedRecruiterDB, approveRecruiterDB } = require("../../services/admin/getAllAppliedRecruiter.service")

const getAllAppliedRecruiter=async(req,res)=>{
    try {
        const data = await getAllAppliedRecruiterDB();
        res.json({
            success:true,
            message:"All Applied Recruiter by Data",
            data:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        });
    };
};


const approveRecruiter=async(req,res)=>{
    try {
        const id= req.params.id;
        const data= await approveRecruiterDB(id);
        if(!data){
            return res.json({
                success:false,
                message:"User not found"
            })
        }
        res.json({
            success:true,
            message:"Recruiter status Update",
            data:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })    
    }
}
module.exports={getAllAppliedRecruiter,approveRecruiter};