const express = require("express");
const { applyJob } = require("../../controllers/users/jobApplied.Controller");
const upload = require("../../middleware/uploade");
const router = express.Router();



router.post("/apply", upload.single("resume"),applyJob);

module.exports = router;