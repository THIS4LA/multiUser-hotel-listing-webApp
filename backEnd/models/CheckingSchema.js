import mongoose from "mongoose";

const checkingSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Owner",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checkingDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    checkingTime: {
      type: String,
      required: true,
      match: /^([01][0-9]|2[0-3]):[0-5][0-9]$/, // validate time format (HH:mm)
    },
    checkOutTime: {
      type: String,
      required: true,
      match: /^([01][0-9]|2[0-3]):[0-5][0-9]$/, // validate time format (HH:mm)
    },

    phone: {
      type: Number,
      required: true,
    },

    requirement: {
      type: String,
      required: true,
    },

    nog: {
      type: Number,
      required: true,
    },

    minBudget: {
      type: Number,
      required: true,
    },

    maxBudget: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "available", "N/A"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Checking", checkingSchema);
