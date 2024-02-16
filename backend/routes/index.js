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

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);
app.use("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);

export default app;
