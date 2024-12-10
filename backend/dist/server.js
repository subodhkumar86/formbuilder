"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const PORT = 5000;
(0, db_1.connectDB)().then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
