const express=require("express");
const router=express.Router();
const companies=require("./companies.route")
const jobPost=require("./job.route")
const Applicants=require("./AllApplicants.route");
router.use("/api/companies", companies);
router.use("/api/job",jobPost);
router.use("/api",Applicants);

module.exports=router