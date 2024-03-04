// LIBRARIES
import mongoose from "mongoose";
import dayjs from "dayjs";

// MODELS
import { jobModel } from "../models/index.js";

export const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find({ createdBy: req.user.userId });
  return res.status(200).send({ jobs, count: jobs.length });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findById(id);

  return res.status(200).send({ job });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await jobModel.create(req.body);

  return res.status(200).send({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await jobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res.status(200).send({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findByIdAndDelete(id);

  return res.status(200).send({ job });
};

export const showStats = async (req, res) => {
  const defaultStats = {
    pending: 22,
    interview: 50,
    declined: 10,
  };

  const monthlyApplications = [
    {
      date: "May 23",
      count: 10,
    },
    {
      date: "June 5",
      count: 5,
    },
    {
      date: "August 17",
      count: 50,
    },
  ];

  return res.status(200).send({ defaultStats, monthlyApplications });
};
