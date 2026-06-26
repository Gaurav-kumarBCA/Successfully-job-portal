const express=require("express");
const { profiile } = require("../../controllers/users/profile.controllers");
const router=express.Router();

router.use("/job",require("./jobApplied.route"));
router.use("/saveJob",require("./saveJob.route"));
router.use("/follow",require("./followCompany.routers"));
router.use("/notification",require("./notification.routers"));
router.use("/category",require("./category.route"))
router.get("/me",profiile);
router.use("/mainProfile",require("./mainUserprofile"))


module.exports=router;