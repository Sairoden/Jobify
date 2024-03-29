// LINKS
import links from "./links";

// ROUTES
import {
  registerRouter,
  loginRouter,
  getCurrentUserRouter,
  config,
  logoutRouter,
  getAllJobsRouter,
  getSingleJobRouter,
  createJobRouter,
  updateJobRouter,
  deleteJobRouter,
  getAppStatsRouter,
  updateUserRouter,
  getStatsRouter,
} from "./routes";

// CONSTANTS
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from "./constants";

export {
  // LINKS
  links,

  // ROUTES
  config,

  // AUTH
  registerRouter,
  loginRouter,
  logoutRouter,

  // USERS
  getCurrentUserRouter,
  updateUserRouter,

  // ADMIN
  getAppStatsRouter,

  // JOBS
  getStatsRouter,
  getAllJobsRouter,
  getSingleJobRouter,
  createJobRouter,
  updateJobRouter,
  deleteJobRouter,

  // CONSTANTS
  JOB_STATUS,
  JOB_TYPE,
  JOB_SORT_BY,
};
