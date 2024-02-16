// MODELS
import { userModel, jobModel } from "../models/index.js";

export const getCurrentUser = async (req, res) => {
  return res.status(200).send({ msg: "Get current user" });
};

export const getApplicationStats = async (req, res) => {
  return res.status(200).send({ msg: "Application stats" });
};

export const updateUser = async (req, res) => {
  return res.status(200).send({ msg: "Update user" });
};
