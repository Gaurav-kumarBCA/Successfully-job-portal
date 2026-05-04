const { verifyToken } = require("../utility");

module.exports=(req,res,next)=>{
try {
    const token= req.cookies.token;
    if(!token){
        return res.status(401).json({
            success:false,
            message:"No token Unauthorized"
        });
    }
    const payload= verifyToken(token);
    if(!payload){
        return res.status(400).json({
            success:false,
            message:"Invalid token"
        });
    }
     req.loginUser= payload;        
        next();
} catch (error) {
    console.log(error);
    return res.status(401).json({
        success:false,
        message:"Invalid Token"
    });
}
};