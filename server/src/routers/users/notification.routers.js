const express = require("express");
const { getnotification } = require("../../controllers/users/notification.controller");
const router = express.Router();

router.get("/user",getnotification)

module.exports=router