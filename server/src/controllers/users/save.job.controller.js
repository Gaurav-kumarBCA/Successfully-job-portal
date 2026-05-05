const { savejobDB, getsavejobDB, deleteJobByIdDB } = require("../../services/user/saveJob.service");

const saveJob=async(req,res)=>{
    try {
        const user_id = req.loginUser.id;
        const {job_id} = req.body;
        console.log(typeof job_id,"hi id")
        if(!job_id){
            return res.status(400).json({
                success:false,
                message:"Job_id required"
            });
        }
        const data = await savejobDB(user_id,job_id);
        res.status(201).json({
            success:true,
            message:"job Save Successfully",
            data:data
        }) 
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const getsavejob=async(req,res)=>{
    try {
       const data= await getsavejobDB();
       if(!data){
        res.json({
            success:false,
            message:"No Job Found"
        })
       } 
       res.json({
        success:true,
        message:"save job",
        data:data
       })
    } catch (error) {
      res.json({
        success:false,
        message:error.message
      })  
    }
}

const deleteJobById=async(req,res)=>{
    try {
        const data = await deleteJobByIdDB(req.params.id);
        res.json({
            success:true,
            message:"Deleted job"
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        });
    }
}

module.exports={saveJob,getsavejob,deleteJobById}