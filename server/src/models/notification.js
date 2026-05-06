const pool = require("../config/db")

const notificationModel=async(user_id,message)=>{
    return await pool.query(
        "INSERT INTO notification (user_id, message) VALUES ($1,$2)",
        [user_id,message]
    );
};

const getAllnotification=async()=>{
    return await pool.query(
        "SELECT * FROM notification WHERE user_id=$1  ORDER BY id DESC",
        [user_id]
    );
};

module.exports={notificationModel, getAllnotification};