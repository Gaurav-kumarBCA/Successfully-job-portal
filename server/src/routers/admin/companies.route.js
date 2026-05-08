const exprees = require("express");
const { getAllCompanies } = require("../../controllers/admin/getAllCompanies.controller");
const router = exprees.Router();

router.get("/get_companies",getAllCompanies);

module.exports=router;