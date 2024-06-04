import User from "../models/UserSchema.js";
import Owner from "../models/OwnerSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

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
  const { email } = req.body;

  try {
    let user = null;

    const guest = await User.findOne({ email });
    const owner = await Owner.findOne({ email });

    if (guest) {
      user = guest;
    }

    if (owner) {
      user = owner;
    }

    //check if user exist or not
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    //compare password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    //get token
    const token = generateToken(user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
