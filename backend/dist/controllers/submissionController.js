"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubmissions = exports.createSubmission = void 0;
const Submission_1 = require("../models/Submission");
const createSubmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const submission = yield Submission_1.default.create(req.body);
        res.status(201).json(submission);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createSubmission = createSubmission;
const getSubmissions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const submissions = yield Submission_1.default.findAll({
            where: { formId: req.params.formId },
        });
        res.status(200).json(submissions);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getSubmissions = getSubmissions;
