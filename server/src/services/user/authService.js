const { findUserByEmail, createUser } = require("../../models/user");

const signupServices=async({name,email,password})=>{
    if(!name || !email || !password){
        throw new Error("All fields are required");
    }
    const existing = await findUserByEmail(email);
    if(existing.rows.length > 0){
        throw new Error("User already exists");
    }
    const user = await createUser(name ,email ,password);

    return user.rows[0];
};

const loginServices = async(email ,password)=>{
    const user = await findUserByEmail(email);

    if(user.rows.length === 0){
        throw new Error("User not found");
    }
    return user.rows[0]
}

module.exports ={signupServices,loginServices}