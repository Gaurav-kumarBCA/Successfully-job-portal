const express = require("express");
const { AddCompanies, getCompanies, getSingleCompany, updateCompany, deleteCompanycontroller } = require("../../controllers/recruiter/companies.controller");
const router= express.Router();
router.post("/companies_data",AddCompanies);
router.get("/companies_data",getCompanies);
router.get("/companies_data/:id",getSingleCompany);
router.patch("/companies_data/:id",updateCompany);
router.delete("/companies_data/:id",deleteCompanycontroller)

module.exports= router
