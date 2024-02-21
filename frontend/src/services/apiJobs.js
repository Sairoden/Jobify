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

export const getAllJobs = async () => {
  const { data } = await axios.get(getAllJobsRouter, config);

  return data?.jobs;
};

export const createJob = async job => {
  await axios.post(createJobRouter, job, config);
};
