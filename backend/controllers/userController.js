// MODELS
import { userModel } from "../models/index.js";

// UTILS
import { hashPassword, comparePassword, createJWT } from "../utils/index.js";

// ERRORS
import { UnauthenticatedError } from "../errors/customErrors.js";

const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  await userModel.create(req.body);

  return res.status(201).send({ msg: "user created" });
};

const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );

  const isValidUser = user && isPasswordCorrect;
  if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");

  const token = createJWT({ userId: user.id, role: user.role });

  return res.status(200).send({ token });
};

export { register, login };
