// MODELS
import { userModel } from "../models/index.js";

// UTILS
import { hashPassword } from "../utils/index.js";

const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  await userModel.create(req.body);

  return res.status(201).send({ msg: "user created" });
};

const login = async (req, res) => {
  return res.status(200).send("login");
};

export { register, login };
