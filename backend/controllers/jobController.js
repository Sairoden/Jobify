// LIBRARIES
import { nanoid } from "nanoid";

// MODELS
import { jobModel } from "../models/index.js";

const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find();

  return res.status(200).send({ jobs, count: jobs.length });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findById(id);

  if (!job) return res.status(404).send({ msg: `No job with id ${id}` });

  return res.status(200).send({ job });
};

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company)
    return res.status(400).send({ msg: "Please provide company and position" });

  const job = await jobModel.create(req.body);

  return res.status(200).send({ job });
};

const updateJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findByIdAndUpdate(id, req.body, { new: true });

  if (!job) return res.status(404).send({ msg: `No job with id ${id}` });

  return res.status(200).send({ job });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findByIdAndDelete(id);

  if (!job) return res.status(404).send({ msg: `No job with id ${id}` });

  return res.status(200).send({ job });
};

export { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
