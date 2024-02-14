// JOBS
import {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} from "./jobController.js";

// USERS
import { register, login } from "./userController.js";

export {
  // JOBS
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,

  // USERS
  register,
  login,
};
