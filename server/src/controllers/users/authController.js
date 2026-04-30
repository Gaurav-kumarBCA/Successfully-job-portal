const { signupServices, loginServices } = require("../../services/user/authService");

const signup=async(req,res)=>{
    try {
        const {name ,email ,password} = req.body;
        const signupUser = await signupServices(name ,email , password);
        res.status(201).json({
            success:true,
            message:"User Signup Successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    };
};

const login=async(req,res)=>{
    try {
        const {email , password} = req.body;
        const loginUser = await loginServices(email , password);
        res.status(201).json({
            success:true,
            message:"Login successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }

}

module.exports ={signup,login}