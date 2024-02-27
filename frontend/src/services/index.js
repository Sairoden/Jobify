// AUTH
import { register, login, logout } from "./apiAuth";

// USERS
import { getCurrentUser } from "./apiUsers";

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

  // JOBS
  getAllJobs,
  getSingleJob,
  createJob,
  editJob,
  deleteJob,
};
