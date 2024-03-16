// EXPRESS
import express from "express";
const app = express();

// ROUTERS
import jobRouter from "./jobRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

// MIDDLEWARES
import {
  errorHandlerMiddleware,
  authenticateUser,
} from "../middlewares/index.js";

// PUBLIC
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});
app.use(errorHandlerMiddleware);

export default app;
