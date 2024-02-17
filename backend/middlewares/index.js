// ERRORS
import { errorHandlerMiddleware } from "./errorHandlerMiddleware.js";

// VALIDATION
import {
  validateIdParams,
  validateJobInput,
  validateRegisterInput,
  validateLoginInput,
  validateUpdateUserInput,
} from "./validationMiddleware.js";

import { authenticateUser, authorizePermissions } from "./authMiddleware.js";

// AUTH

export {
  // ERRORS
  errorHandlerMiddleware,

  // VALIDATIONS
  validateIdParams,
  validateJobInput,
  validateRegisterInput,
  validateLoginInput,
  validateUpdateUserInput,

  // AUTH
  authenticateUser,
  authorizePermissions,
};
