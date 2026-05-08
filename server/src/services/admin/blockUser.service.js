const { blockUserModel, UnblockUserModel, getAlluserModel } = require("../../models/user");

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

const getAlluserDB=async()=>{
    const data= await  getAlluserModel();
    if(data.rows.length === 0){
        throw new Error("User not found");
    }
    return data.rows;
};


module.exports={blockUserDB,UnblockUserDB,getAlluserDB};