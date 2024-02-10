// LIBRARIES
import { nanoid } from "nanoid";

// MODELS
import { jobs } from "../models/index.js";

const getAllJobs = async (req, res) => {
  return res.status(200).send({ jobs });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).send({ msg: "Please provide a job id" });

  const job = jobs.find(job => job.id === id);

  return res.status(200).send({ job });
};

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company)
    return res.status(400).send({ msg: "Please provide company and position" });

  const id = nanoid(10);

  const job = { id, position, company };

  jobs.push(job);

  return res.status(200).send({ jobs });
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
