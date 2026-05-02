const express=require("express");
const router=express.Router();
// const jobApply=require("./jobApplied.route")

// router.use("/jobapply",jobApply)

router.use("/job",require("./jobApplied.route"))

// router.use("/uploads",express.static("uploads"))

module.exports=router