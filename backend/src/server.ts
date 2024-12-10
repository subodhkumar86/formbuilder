import app from "./app";
import { connectDB } from "./config/db";

const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
