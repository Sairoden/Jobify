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

// USERS
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "./userController.js";

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

  // USERS
  getCurrentUser,
  getApplicationStats,
  updateUser,
};
