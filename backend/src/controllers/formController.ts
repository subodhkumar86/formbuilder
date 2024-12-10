import { Request, Response } from "express";
import Form from "../models/Form";

export const createForm = async (req: Request, res: Response) => {
    try {
        const form = await Form.create(req.body);
        res.status(201).json(form);
    } catch (error) {
        const err = error as Error; // Explicitly cast error as Error
        res.status(500).json({ error: err.message });
    }
};

export const getForms = async (req: Request, res: Response) => {
    try {
        const forms = await Form.findAll();
        res.status(200).json(forms);
    } catch (error) {
        const err = error as Error; // Explicitly cast error as Error
        res.status(500).json({ error: err.message });
    }
};
