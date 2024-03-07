// LIBRARIES
import "express-async-errors";
import mongoose from "mongoose";
import cloudinary from "cloudinary";

// APP
import app from "./app.js";

const PORT = process.env.PORT || 3000;
let server;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.log("UHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("🤯 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
