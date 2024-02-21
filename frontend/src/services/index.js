// AUTH
import { register, login, logout } from "./apiAuth";

// USERS
import { getCurrentUser } from "./apiUsers";

// JOBS
import { createJob, getAllJobs } from "./apiJobs";

export {
  // AUTH
  register,
  login,
  logout,

  // USERS
  getCurrentUser,

  // JOBS
  createJob,
  getAllJobs,
};
