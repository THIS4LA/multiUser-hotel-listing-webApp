import Checking from "../models/CheckingSchema.js";
import Owner from "../models/OwnerSchema.js";
import User from "../models/UserSchema.js";

// Get all checkings
export const getAllCheckings = async (req, res) => {
  try {
    const checkings = await Checking.find({});

    res
      .status(200)
      .json({ success: true, message: "Successful", data: checkings });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

// Create a new checking
export const createChecking = async (req, res) => {
  if (!req.body.owner) req.body.owner = req.params.ownerId;
  if (!req.body.user) req.body.user = req.userId;

  const newChecking = new Checking(req.body);

  try {
    const savedChecking = await newChecking.save();

    await Owner.findByIdAndUpdate(req.body.owner, {
      $push: { checkings: savedChecking._id },
    });

    res.status(201).json({
      success: true,
      message: "Checking created",
      data: savedChecking,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get a single checking by ID
export const getCheckingById = async (req, res) => {
  try {
    const checking = await Checking.findById(req.params.id);

    if (!checking) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Successful", data: checking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all checkings for a specific owner
export const getCheckingsByOwner = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.ownerId);

    if (!owner) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    const checkings = await Checking.find({ owner: req.params.ownerId });

    res
      .status(200)
      .json({ success: true, message: "Successful", data: checkings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all checkings submitted by a user
export const getCheckingsByUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    const checkings = await Checking.find({ user: req.userId });

    res
      .status(200)
      .json({ success: true, message: "Successful", data: checkings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update a checking by ID
export const updateChecking = async (req, res) => {
  try {
    const checking = await Checking.findById(req.params.id);

    if (!checking) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    if (
      req.userId !== checking.user.toString() &&
      req.params.ownerId !== checking.owner.toString()
    ) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    await Checking.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({ success: true, message: "Checking updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a checking by ID
export const deleteChecking = async (req, res) => {
  try {
    const checking = await Checking.findById(req.params.id);

    if (!checking) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    if (
      req.userId !== checking.user.toString() &&
      req.params.ownerId !== checking.owner.toString()
    ) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    await Checking.findByIdAndRemove(req.params.id);

    res.status(200).json({ success: true, message: "Checking deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
