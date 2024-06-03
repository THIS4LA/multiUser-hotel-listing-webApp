import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
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
    ticketPrice: { type: String, required: true },
    appointmentDate: {
      type: Date,
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
      type: TimeRanges,
      required: true,
    },
    checkOutTime: {
      type: TimeRanges,
      required: true,
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
      enum: ["pending", "available", "n/a"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
