// ERRORS
import { UnauthenticatedError } from "../errors/index.js";

// MIDDLEWARES
import { verifyJWT } from "../utils/index.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError("Authentication invalid");

    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };

    next();
  } catch (err) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};
