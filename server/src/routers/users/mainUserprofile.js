const express = require("express");
const { mainUserProfile, getProfile, editProfile } = require("../../controllers/users/mainprofile.controller");
const router = express.Router();

router.post("/create",mainUserProfile);
router.get("/", getProfile);
router.patch("/update", editProfile);

module.exports = router;