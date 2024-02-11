// EXPRESS
import express from "express";
const app = express();

// ROUTERS
import jobsRouter from "./jobRouter.js";

// MIDDLEWARES
import { errorHandlerMiddleware } from "../middlewares/index.js";

app.use("/api/v1/jobs", jobsRouter);
app.use("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);

export default app;
