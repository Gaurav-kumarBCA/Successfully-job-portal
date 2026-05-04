const exprees = require("express");
const { saveJob } = require("../../controllers/users/save.job.controller");
const router = exprees.Router();

router.use("/job",saveJob)

module.exports= router;