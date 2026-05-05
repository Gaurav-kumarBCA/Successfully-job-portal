const exprees = require("express");
const { saveJob, getsavejob, deleteJobById } = require("../../controllers/users/save.job.controller");
const router = exprees.Router();

router.post("/job",saveJob);
router.get("/job",getsavejob);
router.delete("/job/:id",deleteJobById)

module.exports= router;