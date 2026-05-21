const express = require("express");
const { globalSearch } = require("../../controllers/admin/searching.controller");
const router = express.Router();

router.get("/search/admin",globalSearch);

module.exports=router;