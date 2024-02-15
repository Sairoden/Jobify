// LIBRARIES
import mongoose from "mongoose";

// UTILS
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: { type: String, default: "my city" },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;
