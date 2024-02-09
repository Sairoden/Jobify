// EXPRESS
import express from "express";
const app = express();

// ROUTERS
import jobsRouter from "./jobsRouter.js";

app.use("/api/v1/jobs", jobsRouter);

export default app;
