// ERRORS
import { UnauthenticatedError, UnauthorizedError } from "../errors/index.js";

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

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }

    next();
  };
};
