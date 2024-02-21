// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import {
  getAllJobsRouter,
  getSingleJobRouter,
  createJobRouter,
  updateJobRouter,
  deleteJobRouter,
  config,
} from "../utils";

export const createJob = async job => {
  await axios.post(createJobRouter, job, config);
};
