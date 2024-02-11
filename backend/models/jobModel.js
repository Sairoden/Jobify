// LIBRARIES
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    jobStatus: {
      type: String,
      enum: ["interview", "pending", "declined"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    jobLocation: { type: String, default: "my city" },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;
