// EXPRESS
import express from "express";
const route = express.Router();

// CONTROLLERS
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/index.js";

// MIDDLEWARES
import {
  validateUpdateUserInput,
  authorizePermissions,
  upload,
} from "../middlewares/index.js";

route.get("/current-user", getCurrentUser);
route.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStats
);
route.patch(
  "/update-user",
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default route;
