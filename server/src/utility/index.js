const jwt= require("jsonwebtoken");
const bcrypt= require("bcrypt");
const generatetoken=(data)=>{
    const token=jwt.sign(data,process.env.JWT_WEB_TOKEN,{expiresIn:"6d"});
    const refreshToken=jwt.sign(data,process.env.JWT_WEB_TOKEN,{expiresIn:"6d"});
    return {token,refreshToken};
};

const hasspassword=async(password,salt)=>{
    return await bcrypt.hash(password,salt)
}

const verifyToken=(token)=>{
    return jwt.verify(token,process.env.JWT_WEB_TOKEN);
}

const verifyPassword= async(password,hasspassword)=>{
    return await bcrypt.compare(password,hasspassword)
}

module.exports={generatetoken,hasspassword,verifyPassword,verifyToken}