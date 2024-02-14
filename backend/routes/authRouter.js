// EXPRESS
import express from "express";
const route = express.Router();

// CONTROLLERS
import { register, login } from "../controllers/index.js";

route.post("/register", register);
route.post("/login", login);

export default route;
