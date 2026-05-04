const express=require("express");
const router=express.Router();

router.use("/job",require("./jobApplied.route"));
router.use("/saveJob",require("./saveJob.route"));


module.exports=router;