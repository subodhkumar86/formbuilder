import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Form extends Model {}

Form.init(
    {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        fields: { type: DataTypes.JSON, allowNull: false },
    },
    { sequelize, modelName: "Form" }
);

export default Form;
