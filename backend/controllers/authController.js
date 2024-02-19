// MODELS
import { userModel } from "../models/index.js";

// UTILS
import { hashPassword, comparePassword, createJWT } from "../utils/index.js";

// ERRORS
import { UnauthenticatedError } from "../errors/customErrors.js";

export const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  await userModel.create(req.body);

  return res.status(201).send({ msg: "user created" });
};

export const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");

  const token = createJWT({ userId: user.id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  return res.status(200).send({ msg: "User logged in" });
};

export const logout = async (req, res) => {
  console.log(res.cookie);

  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  return res.status(200).send({ msg: "User logged out" });
};
