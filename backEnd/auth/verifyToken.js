import jwt from "jsonwebtoken";
import Owner from "../models/OwnerSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  //get token from headers
  const authToken = req.headers.authorization;
  //Bearer actual toke
  //check if exist
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token,Not Authorized" });
  }
  try {
    const token = authToken.split(" ")[1];

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next(); //calling next function(must be)
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token Expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const guest = await User.findById(userId);
  const owner = await Owner.findById(userId);

  if (guest) {
    user = guest;
  }

  if (owner) {
    user = owner;
  }

  if (!roles.includes(user.role)) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  next();
};
