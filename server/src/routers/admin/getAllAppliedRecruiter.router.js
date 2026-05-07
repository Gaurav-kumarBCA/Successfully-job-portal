const express= require("express");
const { getAllAppliedRecruiter, approveRecruiter } = require("../../controllers/admin/getAllAppliedRecruiter.controller");
const router= express.Router();

router.get("/all_applied",getAllAppliedRecruiter);
router.patch("/status_update/:id",approveRecruiter)

module.exports=router;