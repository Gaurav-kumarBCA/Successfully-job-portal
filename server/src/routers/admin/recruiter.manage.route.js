const exprees= require("express");
const { createRecruiter } = require("../../controllers/admin/recruiter.manage.controller");
const router = exprees.Router();

router.post("/registration/recruiter",createRecruiter);

module.exports= router;