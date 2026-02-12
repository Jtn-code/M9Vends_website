import Application from "../models/application.model.js";

export const applyCareer = async (req, res) => {
  try {
    const { name, email, phone, resume_drive_url, role } = req.body;

    // Validate input
    if (!name || !email || !phone || !role || !resume_drive_url) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const application = await Application.create({
      name,
      email,
      phone,
      role,
      resume_drive_url,
      // resume: req.file?.path || null,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error(" Career Apply Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
