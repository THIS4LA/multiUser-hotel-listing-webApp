import jwt from "jsonwebtoken";
import Owner from "../models/OwnerSchema.js";
import User from "../models/UserSchema.js";
import Admin from "../models/AdminSchema.js"; // Assuming you have an Admin model

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token, Not Authorized" });
  }

  try {
    const token = authToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token Expired" });
    } else if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      console.error("Token verification error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user = null;

  const admin = await Admin.findById(userId); // Look for an admin user first

  if (admin) {
    user = admin;
  } else {
    const guest = await User.findById(userId);
    const owner = await Owner.findById(userId);

    if (guest) {
      user = guest;
    }

    if (owner) {
      user = owner;
    }
  }

  if (!user || !roles.includes(user.role)) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  next();
};
