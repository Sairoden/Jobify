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

// ROUTES
import routes from "./routes/index.js";
app.use(routes);

export default app;
