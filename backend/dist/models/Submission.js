"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Submission extends sequelize_1.Model {
}
Submission.init({
    id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
    formId: { type: sequelize_1.DataTypes.UUID, allowNull: false },
    data: { type: sequelize_1.DataTypes.JSON, allowNull: false },
}, { sequelize: db_1.default, modelName: "Submission" });
exports.default = Submission;
