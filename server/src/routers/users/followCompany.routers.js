const express = require("express");
const { followCompanies } = require("../../controllers/users/followCompanies.controller");
const router = express.Router();

router.post("/company",followCompanies);

module.exports=router;