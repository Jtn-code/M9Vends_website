// src/utils/token.js
import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";

// Generate Token
export const generateToken = (payload) => {
  try {
    return jwt.sign(payload, ENV.JWT_SECRET, {
      expiresIn: "7d",
      issuer: "M9Vends",
    });
  } catch (err) {
    console.error(" Token Generation Error:", err.message);
    return null;
  }
};

// Verify Token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, ENV.JWT_SECRET);
  } catch (err) {
    console.error(" Token Verification Failed:", err.message);
    return null;
  }
};
