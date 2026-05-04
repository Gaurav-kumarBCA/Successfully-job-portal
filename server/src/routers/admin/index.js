const express=require("express");
const router=express.Router();
const recruiter=require("./recruiter.manage.route")
router.use("/recruiter",recruiter)

module.exports=router