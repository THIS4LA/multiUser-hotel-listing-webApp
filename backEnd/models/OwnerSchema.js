import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
  },

  // Fields for owner only
  address : { type: String },
  category : { type: String },
  rankings : {
    type: Array,
  },
  about: { type: String },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  checkings: [{ type: mongoose.Types.ObjectId, ref: "Checking" }],
});

export default mongoose.model("Owner", OwnerSchema);
