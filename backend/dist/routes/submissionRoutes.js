"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const submissionController_1 = require("../controllers/submissionController");
const router = (0, express_1.Router)();
router.post("/", submissionController_1.createSubmission);
router.get("/:formId", submissionController_1.getSubmissions);
exports.default = router;
