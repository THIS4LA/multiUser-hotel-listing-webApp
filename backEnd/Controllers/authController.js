import User from "../models/UserSchema.js";
import Owner from "../models/OwnerSchema.js";
import Admin from "../models/AdminSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, photo } = req.body;

  try {
    let user = null;

    switch (role) {
      case "guest":
        user = await User.findOne({ email });
        break;
      case "owner":
        user = await Owner.findOne({ email });
        break;
      case "admin":
        user = await Admin.findOne({ email });
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    // Check if user exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create new user
    switch (role) {
      case "guest":
        user = new User({ name, email, password: hashPassword, photo, role });
        break;
      case "owner":
        user = new Owner({ name, email, password: hashPassword, photo, role });
        break;
      case "admin":
        user = new Admin({ name, email, password: hashPassword, role });
        break;
    }

    await user.save();
    res.status(200).json({ success: true, message: "User successfully created" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error: " + err.message });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;

  try {
    let user = null;

    const guest = await User.findOne({ email });
    const owner = await Owner.findOne({ email });
    const admin = await Admin.findOne({ email });

    if (guest) {
      user = guest;
    } else if (owner) {
      user = owner;
    } else if (admin) {
      user = admin;
    }

    // Check if user exists or not
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: "Invalid credentials" });
    }


    // Get token
    const token = generateToken(user);

    const { password: _, role, ...userData } = user._doc;


    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      token,
      data: userData,
      role,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
