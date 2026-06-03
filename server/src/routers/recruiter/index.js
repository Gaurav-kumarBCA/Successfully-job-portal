const express = require("express");
const router = express.Router();

const companies = require("./companies.route");
const jobPost = require("./job.route");
const Applicants = require("./AllApplicants.route");
const { getCompanyProfile } = require("../../controllers/recruiter/companyProfile.controller");

router.use("/companies", companies);
router.use("/jobs", jobPost);
router.use("/applicants", Applicants);
router.get("/company-profile",getCompanyProfile)

module.exports = router;