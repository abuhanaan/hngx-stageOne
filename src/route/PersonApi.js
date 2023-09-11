const express = require("express");

const {
  createPersonController,
  getPersonController,
  updatePersonController,
  deletePersonController,
} = require("../controller/PersonController");

const validateFields = require("../middleware/FieldValidation");
const personCreationSchema = require("../utils/validations/ValidatePersonCreationRequest");

const router = new express.Router();

router.post(
  "/api",
  validateFields(personCreationSchema),
  createPersonController
);
router.get("/api", getPersonController);
router.put("/api", updatePersonController);
router.delete("/api", deletePersonController);

module.exports = router;
