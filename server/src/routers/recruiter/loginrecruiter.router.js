const exprees= require("express");
const { loginRecruiter } = require("../../controllers/recruiter/loginrecruiter.controller");
const { getAllAppliedRecruiterBycompanyemail, appliedform_recruiter } = require("../../controllers/recruiter/appliedFormRecruiter.controller");
const router = exprees.Router();

router.post("/recruiter",loginRecruiter);
router.post("/check_status",getAllAppliedRecruiterBycompanyemail)
router.post("/recruiter/create",appliedform_recruiter)

module.exports=router;