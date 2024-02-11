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

  if (!id) return res.status(400).send({ msg: "Please provide a job id" });

  const job = await jobModel.findById(id);

  if (!job) return res.status(400).send({ msg: "Job not found" });

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
  const { position, company } = req.body;

  const job = jobs.find(job => job.id === id);

  if (!id || !job)
    return res.status(400).send({ msg: "Please provide a valid job id" });

  if (position) job.position = position;
  if (company) job.company = company;

  return res.status(200).send({ job });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({ msg: "Please provide a valid job id" });

  const newJobs = jobs.find(job => job.id === id);
  // jobs = newJobs;

  return res.status(200).send({ newJobs });
};

export { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
