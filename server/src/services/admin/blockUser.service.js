const { blockUserModel, UnblockUserModel } = require("../../models/user");

const blockUserDB = async(id)=>{
    if(!id)throw new Error("User id is required");
    const data = await blockUserModel(id);
    return data.rows[0];
}

const UnblockUserDB = async (id) =>{
    if(!id)throw new Error("user id is required");
    const data= await UnblockUserModel(id);
    return data.rows[0];
}

module.exports={blockUserDB,UnblockUserDB};