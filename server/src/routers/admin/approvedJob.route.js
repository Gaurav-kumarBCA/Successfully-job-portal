const express= require("express");
const { approvedJob } = require("../../controllers/admin/approvedJob.controller");
const router= express.Router();

router.patch("/job-approved/:id",approvedJob)

module.exports=router