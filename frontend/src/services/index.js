// AUTH
import { register, login, logout } from "./apiAuth";

// USERS
import { getCurrentUser, updateUser } from "./apiUsers";

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
  updateUser,

  // ADMIN
  getAppStats,

  // JOBS
  getAllJobs,
  getSingleJob,
  createJob,
  editJob,
  deleteJob,
};
