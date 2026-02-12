// src/config/env.js
import dotenv from "dotenv";
import path from "path";

// Load env file based on NODE_ENV
const envPath = process.env.NODE_ENV === "production" ? ".env" : ".env";
dotenv.config({ path: path.resolve(process.cwd(), envPath) });

// Validate required variables
const requiredEnv = ["MONGO_URI", "JWT_SECRET"];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(` Missing ENV variable: ${key}`);
    process.exit(1);
  }
});

export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || "development",

  MAIL_USER: process.env.MAIL_USER || "",
  MAIL_PASS: process.env.MAIL_PASS || "",
};

console.log("Environment Loaded:", {
  NODE_ENV: ENV.NODE_ENV,
  PORT: ENV.PORT,
});
