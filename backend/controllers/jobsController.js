// MODELS
import { jobs } from "../models/index.js";

const getAllJobs = async (req, res) => {
  return res.status(200).send({ jobs });
};

const getSingleJob = async (req, res) => {
  return res.status(200).send({ jobs });
};

const createJob = async (req, res) => {
  return res.status(200).send({ jobs });
};

const updateJob = async (req, res) => {
  return res.status(200).send({ jobs });
};

const deleteJob = async (req, res) => {
  return res.status(200).send({ jobs });
};

export { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
