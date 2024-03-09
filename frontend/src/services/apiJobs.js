// REACT & LIBRARIES
import axios from "axios";

// ROUTES
import {
  getStatsRouter,
  getAllJobsRouter,
  getSingleJobRouter,
  createJobRouter,
  updateJobRouter,
  deleteJobRouter,
  config,
} from "../utils";

export const getStats = async () => {
  const { data } = await axios.get(getStatsRouter, config);

  return data;
};

export const getAllJobs = async query => {
  const { data } = await axios.get(getAllJobsRouter, {
    params: query,
    withCredentials: true,
  });

  return data;
};

export const getSingleJob = async jobId => {
  const { data } = await axios.get(`${getSingleJobRouter}/${jobId}`, config);

  return data?.job;
};

export const createJob = async job => {
  await axios.post(createJobRouter, job, config);
};

export const editJob = async ({ newJob, jobId }) => {
  await axios.patch(`${updateJobRouter}/${jobId}`, newJob, config);
};

export const deleteJob = async jobId => {
  await axios.delete(`${deleteJobRouter}/${jobId}`, config);
};
