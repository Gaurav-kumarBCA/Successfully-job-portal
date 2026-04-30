const express = require("express");
const { AllApplicants } = require("../../controllers/recruiter/allApplicants.controller");
const router = express.Router();

router.get("/applicants", AllApplicants);

module.exports = router;