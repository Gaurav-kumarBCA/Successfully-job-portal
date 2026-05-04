const exprees= require("express");
const { loginRecruiter } = require("../../controllers/recruiter/loginrecruiter.controller");
const router = exprees.Router();

router.post("/recruiter",loginRecruiter);

module.exports=router;