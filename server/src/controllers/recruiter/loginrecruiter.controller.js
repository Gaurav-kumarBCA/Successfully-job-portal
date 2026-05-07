const { loginRecruiterDB } = require("../../services/recruiter/login.recruiter.service");
const { verifyPassword, generatetoken } = require("../../utility");

const loginRecruiter=async(req,res)=>{
try {
    const {email,password}=req.body;
    const loginUser = await loginRecruiterDB(email , password);
    const isValid = await verifyPassword(password,loginUser.password);
    if(!isValid){
       return res.json({
            success:false,
            message:"Invalid password"
        });
    }
    const {token,refreshToken}=generatetoken({
        id:loginUser.id,
        name:loginUser.name,
        email:loginUser.email,
        role:loginUser.role
    });
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });

    res.status(201).json({
        success:true,
        message:"recruiter login successfully",
        data:{loginUser,token,refreshToken},
    })
} catch (error) {
    res.status(400).json({
    success:false,
    message:error.message
    });
}
}
module.exports={loginRecruiter}