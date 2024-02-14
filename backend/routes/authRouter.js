// EXPRESS
import express from "express";
const route = express.Router();

// CONTROLLERS
import { register, login } from "../controllers/index.js";

// MIDDLEWARES
import { validateRegisterInput } from "../middlewares/index.js";

route.post("/register", validateRegisterInput, register);
route.post("/login", login);

export default route;
