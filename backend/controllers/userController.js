// LIBRARIES
import bcrypt from "bcryptjs";

// MODELS
import { userModel } from "../models/index.js";

const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  await userModel.create(req.body);

  return res.status(201).send({ msg: "user created" });
};

const login = async (req, res) => {
  return res.status(200).send("login");
};

export { register, login };
