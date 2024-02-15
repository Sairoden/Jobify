// ERRORS
import { UnauthenticatedError } from "../errors/index.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError("Authentication invalid");

  console.log("AUTH MIDDLEWARE");
  next();
};
