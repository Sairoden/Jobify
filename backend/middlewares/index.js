// ERRORS
import { errorHandlerMiddleware } from "./errorHandlerMiddleware.js";

// VALIDATION
import {
  validateIdParams,
  validateJobInput,
  validateRegisterInput,
  validationLoginInput,
} from "./validationMiddleware.js";

import { authenticateUser } from "./authMiddleware.js";

// AUTH

export {
  // ERRORS
  errorHandlerMiddleware,

  // VALIDATIONS
  validateIdParams,
  validateJobInput,
  validateRegisterInput,
  validationLoginInput,

  // AUTH
  authenticateUser,
};
