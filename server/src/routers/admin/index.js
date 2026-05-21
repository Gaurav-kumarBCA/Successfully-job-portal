const express=require("express");
const router=express.Router();
const recruiter=require("./recruiter.manage.route");
const { profiileAdmin } = require("../../controllers/admin/profileAdmin.controller");

router.use("/recruiter",recruiter);
router.use("/block",require("./blockUser.route"));
router.use("/approved",require("./approvedJob.route"));
router.use("/companies",require("./companies.route"));
router.use("/deshboard",require("./dashboard.route"));
router.use("/profile",profiileAdmin);
router.use("/search",require("./searching.route"))
module.exports=router