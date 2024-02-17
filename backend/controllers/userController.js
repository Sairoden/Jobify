// MODELS
import { userModel, jobModel } from "../models/index.js";

export const getCurrentUser = async (req, res) => {
  const user = await userModel.findById(req.user.userId);

  return res.status(200).send({ user });
};

export const getApplicationStats = async (req, res) => {
  const users = await userModel.countDocuments();
  const jobs = await jobModel.countDocuments();

  return res.status(200).send({ users, jobs });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;

  await userModel.findByIdAndUpdate(req.user.userId, obj, {
    new: true,
  });

  return res.status(200).send({ msg: "Update user" });
};
