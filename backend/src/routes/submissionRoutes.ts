import { Router } from "express";
import { createSubmission, getSubmissions } from "../controllers/submissionController";

const router = Router();

router.post("/", createSubmission);
router.get("/:formId", getSubmissions);

export default router;
