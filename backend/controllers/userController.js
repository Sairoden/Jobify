// LIBRARIES
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

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
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.newPublicId = response.public_id;
  }

  const updatedUser = await userModel.findByIdAndUpdate(
    req.user.userId,
    newUser
  );

  if (req.file && updatedUser.avatarPublicId)
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);

  return res.status(200).send({ msg: "Update user" });
};
