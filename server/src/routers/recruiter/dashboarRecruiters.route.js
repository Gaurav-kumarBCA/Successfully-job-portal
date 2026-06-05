const express = require("express");
const { getRecruiterDashboard } = require("../../controllers/recruiter/dashboard.controller");
const router = express.Router();

router.get("/",getRecruiterDashboard);

module.exports = router