// LIBRARIES
import { readFile } from "fs/promises";
import mongoose from "mongoose";

// DOTENV
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// MODELS
import { jobModel, userModel } from "./models/index.js";

try {
  await mongoose.connect(process.env.MONGO_URL);

  const user = await userModel.findOne({ email: "odingandarosa@gmail.com" });
  const jsonJobs = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );

  const jobs = jsonJobs.map(job => ({ ...job, createdBy: user._id }));
  await jobModel.deleteMany({ createdBy: user._id });
  await jobModel.create(jobs);
  console.log("Success!!!");
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}
