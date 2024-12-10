import { Request, Response } from "express";
import Submission from "../models/Submission";

export const createSubmission = async (req: Request, res: Response) => {
    try {
        const submission = await Submission.create(req.body);
        res.status(201).json(submission);
    } catch (error) {
        const err = error as Error; // Explicitly cast error as Error
        res.status(500).json({ error: err.message });
    }
};

export const getSubmissions = async (req: Request, res: Response) => {
    try {
        const submissions = await Submission.findAll({
            where: { formId: req.params.formId },
        });
        res.status(200).json(submissions);
    } catch (error) {
        const err = error as Error; // Explicitly cast error as Error
        res.status(500).json({ error: err.message });
    }
};
