// LIBRARIES
import mongoose from "mongoose";
import { body, validationResult, param } from "express-validator";

// MODELS
import { jobModel } from "../models/index.js";

// ERRORS
import { BadRequestError, NotFoundError } from "../errors/index.js";

// UTILS
import { JOB_STATUS, JOB_TYPE } from "../utils/index.js";

const withValidationErrors = validateValues => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessage = errors.errors.map(err => err.msg);

        if (errorMessage[0].startsWith("No job"))
          throw new NotFoundError(errorMessage);

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
  param("id").custom(async value => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);

    if (!isValidMongoId) throw new BadRequestError("Invalid mongoDB id");

    const job = await jobModel.findById(value);

    if (!job) throw new NotFoundError(`No job with id ${value}`);
  }),
]);
