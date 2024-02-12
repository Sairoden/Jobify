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
import { validateJobInput, validateIdParams } from "../middlewares/index.js";

// ROUTES
router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParams, getSingleJob)
  .patch(validateIdParams, validateJobInput, updateJob)
  .delete(validateIdParams, deleteJob);

export default router;
