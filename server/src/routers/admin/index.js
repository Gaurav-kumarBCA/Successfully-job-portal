const express=require("express");
const router=express.Router();
const recruiter=require("./recruiter.manage.route")

router.use("/recruiter",recruiter);
router.use("/block",require("./blockUser.route"));
router.use("/approved",require("./approvedJob.route"));
router.use("/companies",require("./companies.route"));
router.use("/deshboard",require("./dashboard.route"))
module.exports=router