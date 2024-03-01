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

// AUTH
import { authenticateUser, authorizePermissions } from "./authMiddleware.js";

// MULTER
import upload from "./multerMiddleware.js";

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

  // MULTER
  upload,
};
