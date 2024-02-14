// EXPRESS
import express from "express";
const app = express();

// ROUTERS
import jobRouter from "./jobRouter.js";
import authRouter from "./authRouter.js";

// MIDDLEWARES
import { errorHandlerMiddleware } from "../middlewares/index.js";

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);

export default app;
