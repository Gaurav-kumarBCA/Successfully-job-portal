const { getAllJob } = require("../models/job");

const publicJobDB=async()=>{
    const data = await getAllJob();
    return data.rows;
}
module.exports={publicJobDB};