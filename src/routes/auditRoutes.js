const express = require("express");

const router = express.Router();

const auditController = require("../controllers/auditController");

const validateUrl = require("../middleware/validateUrl");

router.post(
    "/audit",
    validateUrl,
    auditController.auditUrl
);

module.exports = router;