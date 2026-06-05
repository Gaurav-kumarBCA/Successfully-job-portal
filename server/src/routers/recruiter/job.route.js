const express = require("express");
const { jobcreate, AllJob, AllJobById, updateJob, deleteJob } = require("../../controllers/recruiter/job.controller");
const router = express.Router();

router.post("/job_data",jobcreate);
router.get("/job_data",AllJob);
router.get("/job_data/:id",AllJobById);
router.patch("/job_data/:id",updateJob);
router.delete("/job_data/:id",deleteJob);

module.exports = router;