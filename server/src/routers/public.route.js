const exprees=require("express");
const { publicJob, fetAllCompanies } = require("../controllers/public.controller");
const router=exprees.Router();

router.get("/job",publicJob);
router.get("/companies",fetAllCompanies)

module.exports=router;