const express=require("express");
const router=express.Router();
const recruiter=require("./recruiter.manage.route")
router.use("/recruiter",recruiter);
router.use("/block",require("./blockUser.route"));
router.use("/unblocked",require("./blockUser.route"));
router.use("/approved",require("./approvedJob.route"));
module.exports=router