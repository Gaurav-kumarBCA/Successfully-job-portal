const exprees= require("express");
const { createRecruiter } = require("../../controllers/admin/recruiter.manage.controller");
const { getAllAppliedRecruiter, approveRecruiter } = require("../../controllers/admin/getAllAppliedRecruiter.controller");
const router = exprees.Router();

router.post("/registration/recruiter",createRecruiter);
router.get("/all_applied",getAllAppliedRecruiter);
router.patch("/status_update/:id",approveRecruiter)
module.exports= router;