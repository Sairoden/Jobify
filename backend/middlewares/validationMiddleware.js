// LIBRARIES
import mongoose from "mongoose";
import { body, validationResult, param } from "express-validator";

// ERRORS
import { BadRequestError } from "../errors/index.js";

// UTILS
import { JOB_STATUS, JOB_TYPE } from "../utils/index.js";

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

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobLocation").notEmpty().withMessage("Job Location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid type value"),
]);

export const validateIdParams = withValidationErrors([
  param("id").custom(value => mongoose.Types.ObjectId.isValid(value)),
]);
