const express= require("express");
const { approvedJob, getAllJob } = require("../../controllers/admin/approvedJob.controller");
const router= express.Router();

router.patch("/job-approved/:id",approvedJob);
router.get("/alljob",getAllJob);

module.exports=router