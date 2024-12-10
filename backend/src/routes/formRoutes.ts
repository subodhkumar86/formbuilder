import { Router } from "express";
import { createForm, getForms } from "../controllers/formController";

const router = Router();

router.post("/", createForm);
router.get("/", getForms);

export default router;
