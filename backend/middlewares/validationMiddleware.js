// LIBRARIES
import { body, validationResult } from "express-validator";

// ERRORS
import { BadRequestError } from "../errors/index.js";

const withValidationErrors = validateValues => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessage = errors.errors.map(err => err.msg);
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("name must be between 3 and 50 characters long")
    .trim(),
]);

export default validateTest;
