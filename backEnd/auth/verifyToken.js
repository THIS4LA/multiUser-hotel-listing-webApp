import jwt from "jsonwebtoken";
import Admin from "../models/AdminSchema.js";
import User from "../models/UserSchema.js";
import Owner from "../models/OwnerSchema.js";

// Middleware to authenticate user based on JWT token
export const authenticate = async (req, res, next) => {
  // Extract the token from the Authorization header
  const authToken = req.headers.authorization;

  // Check if the token is provided and starts with "Bearer"
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token, Not Authorized" });
  }

  try {
    // Split the token and extract the actual token value
    const token = authToken.split(" ")[1];

    // Verify the token using the JWT_SECRET_KEY
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach user ID and role from the decoded token to the request object
    req.userId = decoded.id;
    req.role = decoded.role;

    // Proceed to the next middleware
    next();
  } catch (err) {
    // Handle different types of JWT errors
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

// Middleware to restrict access based on user roles
export const restrict = (roles) => async (req, res, next) => {
  // Extract the user ID from the request object
  const userId = req.userId;

  try {
    // Look for an admin user based on the user ID
    const admin = await Admin.findById(userId);

    // If an admin user is found and has the required role, proceed to the next middleware
    if (admin && roles.includes(admin.role)) {
      return next();
    }

    // Look for a regular user based on the user ID
    const user = await User.findById(userId);

    // If a regular user is found and has the required role, proceed to the next middleware
    if (user && roles.includes(user.role)) {
      return next();
    }

    // Look for an owner user based on the user ID
    const owner = await Owner.findById(userId);

    // If an owner user is found and has the required role, proceed to the next middleware
    if (owner && roles.includes(owner.role)) {
      return next();
    }

    // If no user is found or the user does not have the required role, return a 401 Unauthorized error
    return res.status(401).json({ message: "Not Authorized" });
  } catch (error) {
    // Handle any errors that occur during user lookup
    console.error("Error in restrict middleware:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
