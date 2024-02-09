// LIBRARIES
import express from "express";
import morgan from "morgan";

// DOTENV
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World from the server side!");
});

export default app;
