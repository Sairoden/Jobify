// MODELS
import { jobModel } from "../models/index.js";

const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find({ createdBy: req.user.userId });
  return res.status(200).send({ jobs, count: jobs.length });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findById(id);

  return res.status(200).send({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await jobModel.create(req.body);

  return res.status(200).send({ job });
};

const updateJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findByIdAndUpdate(id, req.body, { new: true });

  return res.status(200).send({ job });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findByIdAndDelete(id);

  return res.status(200).send({ job });
};

export { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
