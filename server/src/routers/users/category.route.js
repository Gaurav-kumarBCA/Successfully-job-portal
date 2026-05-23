const exprees = require("express");
const { getCategoryJob } = require("../../controllers/admin/categories.controller");
const router = exprees.Router();


router.get("/category/job/:category",getCategoryJob);

module.exports = router