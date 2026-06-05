const express = require("express");
const router = express.Router();

const companies = require("./companies.route");
const jobPost = require("./job.route");
const Applicants = require("./AllApplicants.route");
const Dashboard = require("./dashboarRecruiters.route");
const { getCompanyProfile } = require("../../controllers/recruiter/companyProfile.controller");
const { profiileRecruiter } = require("../../controllers/recruiter/profileRecruiter.controller");

router.use("/companies", companies);
router.use("/jobs", jobPost);
router.use("/applicants", Applicants);
router.get("/company-profile",getCompanyProfile)
router.use("/dashboard",Dashboard)
router.get("/profile",profiileRecruiter)
module.exports = router;