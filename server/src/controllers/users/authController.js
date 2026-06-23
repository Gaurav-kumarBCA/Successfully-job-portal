const { signupServices, loginServices } = require("../../services/user/authService");
const { generatetoken, hasspassword, verifyPassword } = require("../../utility");
const saltRound=10;
const signup=async(req,res)=>{
    try {
        const {name ,email ,password} = req.body;
        const hashpassword=await hasspassword(password,saltRound);
        const signupUser = await signupServices({name ,email , password:hashpassword});

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

        if(loginUser.is_blocked){
            return res.status(403).json({
                success:false,
                message:"Account block by Admin"
            })
        }

        const isValid=await verifyPassword(password, loginUser.password);
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
        })
        res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000
    }); 
    console.log("COKKIE SENT")

        res.status(201).json({
            success:true,
            message:"Login successfully",
            data:{loginUser,token,refreshToken},
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }

}


const logout = async(req,res)=>{
    try {

        res.clearCookie("token",{
            httpOnly:true,
            secure:true,
            sameSite:"none"
        });

        res.status(200).json({
            success:true,
            message:"Logout Successfully"
        });

    } catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};


module.exports ={signup,login,logout}