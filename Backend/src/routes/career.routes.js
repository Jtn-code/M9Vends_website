import express from "express";
import { applyCareer } from "../controllers/career.controller.js";
// import { uploadResume } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/apply",  applyCareer);

export default router;
