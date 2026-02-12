import mongoose from "mongoose";

export default mongoose.model(
  "Application",
  new mongoose.Schema(
    {
      name: String,
      email: String,
      phone: String,
      role: String,
      resume_drive_url: String,
    },
    { timestamps: true }
  )
);
