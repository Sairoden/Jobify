// CONTROLLERS
import {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/index.js";

// EXPRESS
import express from "express";
const router = express.Router();

// MIDDLEWARES
import { validateTest } from "../middlewares/index.js";

// ROUTES
router.route("/").get(getAllJobs).post(validateTest, createJob);
router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

export default router;
