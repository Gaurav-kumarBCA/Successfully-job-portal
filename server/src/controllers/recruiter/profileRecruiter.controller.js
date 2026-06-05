const { profiileRecruiterDB } = require("../../services/recruiter/profileRecruiters.service");

const profiileRecruiter=async(req,res)=>{
    try {
        const {id} = req.loginUser;
        const data = await profiileRecruiterDB(id);
        return res.json({
            success:true,
            data
        });
    } catch (error) {
       return res.status(500).json({
      success: false,
      message: error.message
    });
    }
};

module.exports = {profiileRecruiter}