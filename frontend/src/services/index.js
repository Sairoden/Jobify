// AUTH
import { register, login, logout } from "./apiAuth";

// USERS
import { getCurrentUser } from "./apiUsers";

// ADMIN
import { getAppStats } from "./apiAdmin";

// JOBS
import {
  getAllJobs,
  getSingleJob,
  createJob,
  editJob,
  deleteJob,
} from "./apiJobs";

export {
  // AUTH
  register,
  login,
  logout,

  // USERS
  getCurrentUser,

  // ADMIN
  getAppStats,

  // JOBS
  getAllJobs,
  getSingleJob,
  createJob,
  editJob,
  deleteJob,
};
