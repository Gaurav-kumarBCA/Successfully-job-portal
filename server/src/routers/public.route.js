const exprees=require("express");
const { publicJob } = require("../controllers/public.controller");
const router=exprees.Router();

router.get("/job",publicJob);

module.exports=router;