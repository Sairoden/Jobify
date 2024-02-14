// MODELS
import { userModel } from "../models/index.js";

const register = async (req, res) => {
  const user = await userModel.create(req.body);

  return res.status(201).send({ user });
};

const login = async (req, res) => {
  return res.status(200).send("login");
};

export { register, login };
