import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
    enum: ["guest", "admin"],
    default: "guest",
  },
  gender: { type: String, enum: ["male", "female"] },
  checkings: [{ type: mongoose.Types.ObjectId, ref: "Checking" }],
});

export default mongoose.model("User", UserSchema);
