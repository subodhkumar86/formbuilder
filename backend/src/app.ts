import express from "express";
import cors from "cors";
import formRoutes from "./routes/formRoutes";
import submissionRoutes from "./routes/submissionRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);
app.use("/api/submissions", submissionRoutes);

export default app;
