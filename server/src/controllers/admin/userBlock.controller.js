const { findUserById } = require("../../models/user");
const { blockUserDB, UnblockUserDB, getAlluserDB } = require("../../services/admin/blockUser.service");

const blockuser=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await findUserById(id);
        if (user.rows[0].is_blocked) {
        return res.json({
        success: false,
        message: "This user is already blocked"
      });
    }

        await blockUserDB(id);
        res.json({
            success:true,
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
        const user = await findUserById(id);
        if (!user.rows[0].is_blocked) {
        return res.json({
        success: false,
        message: "This user is already Unblocked"
      });
    }
        await UnblockUserDB(id);
        res.json({
            success:true,
            message:"User UnBlock Successfully"
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    };
}

const getAlluser=async(req,res)=>{//
    try {
        const data= await getAlluserDB();
        res.json({
            success:true,
            message:"Fetch Users data Successfully",
            data:data
        })
    } catch (error) {
      res.json({
        success:false,
        message:error.message
      })  ;
    };
}

module.exports={blockuser,UnblockUser,getAlluser}