// LIBRARIES
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

// DOTENV
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// PUBLIC
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// EXPRESS
import express from "express";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));

// MIDDLEWARES
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ROUTES
import routes from "./routes/index.js";
app.use(routes);

export default app;
