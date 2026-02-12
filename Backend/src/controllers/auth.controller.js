import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ token: generateToken(user) });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  res.json({ token: generateToken(user) });
};
