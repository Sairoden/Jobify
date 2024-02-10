// EXPRESS
import express from "express";
const app = express();

// ROUTERS
import jobsRouter from "./jobRouter.js";

app.use("/api/v1/jobs", jobsRouter);
app.use("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send({ msg: "Something went wrong" });
});

export default app;
