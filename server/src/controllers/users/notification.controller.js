const { getAllnotificationDB } = require("../../services/user/notification.service");

const getnotification=async(req,res)=>{
try {
    const user_id = req.loginUser.id;
    const data= await getAllnotificationDB(user_id);
    res.json({
        success:true,
        data:data
    });
} catch (error) {
    res.json({
        success:false,
        message:error.message,
    });
}
};

module.exports={getnotification};