const express=require("express");
const { appliedform_recruiter } = require("../../controllers/recruiter/appliedFormRecruiter.controller");
const router= express.Router();

router.post("/applied",appliedform_recruiter);

module.exports=router