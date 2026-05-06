const { notificationModel, getAllnotification } = require("../../models/notification")

const notificationDB=async(user_id , message)=>{
    await notificationModel(user_id,message);
};

const getAllnotificationDB=async(user_id)=>{
    const data= await getAllnotification(user_id);
    return data.rows;
}

module.exports={notificationDB,getAllnotificationDB};