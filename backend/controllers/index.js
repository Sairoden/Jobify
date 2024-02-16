// JOBS
import {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} from "./jobController.js";

// AUTH
import { register, login, logout } from "./authController.js";

export {
  // JOBS
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,

  // AUTH
  register,
  login,
  logout,
};
