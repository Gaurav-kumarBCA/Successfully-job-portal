const exprees=require("express");
const { publicJob, fetAllCompanies, SearchJobs,  } = require("../controllers/public.controller");
const router=exprees.Router();

router.get("/job",publicJob);
router.get("/companies",fetAllCompanies);
router.get("/job/search", SearchJobs);


module.exports=router;