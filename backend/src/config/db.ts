import { Sequelize } from "sequelize";

const sequelize = new Sequelize("form_builder", "root", "password", {
    host: "localhost",
    dialect: "mysql",
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export default sequelize;
