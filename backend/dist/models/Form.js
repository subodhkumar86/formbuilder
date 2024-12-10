"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Form extends sequelize_1.Model {
}
Form.init({
    id: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING },
    fields: { type: sequelize_1.DataTypes.JSON, allowNull: false },
}, { sequelize: db_1.default, modelName: "Form" });
exports.default = Form;
