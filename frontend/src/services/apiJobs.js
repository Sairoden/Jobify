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

export const getSingleJob = async jobId => {
  const { data } = await axios.get(`${getSingleJobRouter}/${jobId}`, config);

  return data?.job;
};

export const createJob = async job => {
  await axios.post(createJobRouter, job, config);
};

export const editJob = async ({ newJob, jobId }) => {
  console.log(newJob);
  // const { data } = await axios.post(`${updateJobRouter}/${jobId}`, config);

  // console.log(data?.job);
};
