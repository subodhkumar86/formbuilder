import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Submission extends Model {}

Submission.init(
    {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        formId: { type: DataTypes.UUID, allowNull: false },
        data: { type: DataTypes.JSON, allowNull: false },
    },
    { sequelize, modelName: "Submission" }
);

export default Submission;
