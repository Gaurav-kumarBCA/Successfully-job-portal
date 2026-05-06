const { blockUserDB, UnblockUserDB } = require("../../services/admin/blockUser.service");

const blockuser=async(req,res)=>{
    try {
        const id = req.params.id;
        await blockUserDB(id);
        res.json({
            success:false,
            message:"Block User Successfully"
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    };
}

const UnblockUser= async(req,res)=>{
    try {
        const id= req.params.id;
        await UnblockUserDB(id);
        res.json({
            success:false,
            message:"User UnBlock Successfully"
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    };
}

module.exports={blockuser,UnblockUser}