const express = require("express");
const { blockuser, UnblockUser } = require("../../controllers/admin/userBlock.controller");
const router = express.Router();

router.post("/user/:id",blockuser);
router.patch("/unblocked-user/:id",UnblockUser);

module.exports= router