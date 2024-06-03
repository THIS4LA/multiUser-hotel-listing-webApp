import User from "../models/UserSchema.js";
import Owner from "../models/OwnerSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo } = req.body;

  try {
    let user = null;

    if (role === "guest") {
      user = await User.findOne({ email });
    } else if (role === "owner") {
      user = await Owner.findOne({ email });
    }

    //check if user exist
    if (user) {
      return res.status(400).json({ msg: "User already exist" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create new user
    if (role === "guest") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        role,
      });
    }

    if (role === "owner") {
      user = new Owner({
        name,
        email,
        password: hashPassword,
        photo,
        role,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    res
    .status(500)
    .json({ success: false, message: "internal server error" + err.message });
  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {}
};
