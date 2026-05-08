const express = require("express");
const { blockuser, UnblockUser, getAlluser } = require("../../controllers/admin/userBlock.controller");
const router = express.Router();

router.post("/user/:id",blockuser);
router.patch("/unblocked-user/:id",UnblockUser);
router.get("/all_users",getAlluser);


module.exports= router