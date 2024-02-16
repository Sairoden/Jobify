// EXPRESS
import express from "express";
const route = express.Router();

// CONTROLLERS
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/index.js";

route.get("/current-user", getCurrentUser);
route.get("/admin/app-stats", getApplicationStats);
route.patch("/update-user", updateUser);

export default route;
