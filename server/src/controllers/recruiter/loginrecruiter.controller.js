const { loginRecruiterDB } = require("../../services/recruiter/login.recruiter.service");
const { verifyPassword, generatetoken } = require("../../utility");

const loginRecruiter=async(req,res)=>{
try {
    const {email,password}=req.body;
    const loginRecruiter = await loginRecruiterDB(email , password);
    const isValid = await verifyPassword(password,loginRecruiter.password);
    if(!isValid){
        res.json({
            success:false,
            message:"Invalid password"
        });
    }
    const {token,refreshToken}=generatetoken({
        id:loginRecruiter.id,
        name:loginRecruiter.name,
        email:loginRecruiter.email,
        role:loginRecruiter.role
    });
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });

    res.status(201).json({
        success:true,
        message:"recruiter login successfully",
        data:{loginRecruiter,token,refreshToken},
    })
} catch (error) {
    res.status(400).json({
    success:false,
    message:error.message
    });
}
}
module.exports={loginRecruiter}