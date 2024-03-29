// LIBRARIES
import mongoose from "mongoose";
import dayjs from "dayjs";

// MODELS
import { jobModel } from "../models/index.js";

export const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // SETUP PAGINATION
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const skip = (page - 1) * limit;

  const jobs = await jobModel
    .find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalJobs = await jobModel.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  return res
    .status(200)
    .send({ totalJobs, numOfPages, currentPage: page, jobs });
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
  let stats = await jobModel.aggregate([
    {
      $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) },
    },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await jobModel.aggregate([
    {
      $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) },
    },
    {
      $addFields: {
        createdAtDate: { $toDate: "$createdAt" },
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAtDate" },
          month: { $month: "$createdAtDate" },
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": -1, "_id.month": -1 },
    },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications.map(item => {
    const {
      _id: { year, month },
      count,
    } = item;

    const date = dayjs()
      .month(month - 1)
      .year(year)
      .format("MMM YY");

    return { date, count };
  });

  return res.status(200).send({ defaultStats, monthlyApplications });
};
