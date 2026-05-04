module.exports=(req,res,next)=>{
    console.log(req.loginUser,"hi admin")
    if(req.loginUser.role !=="admin"){
        return res.status(401).json({
            success:false,
            message:"Access denied"
        })
    }
    next();
}