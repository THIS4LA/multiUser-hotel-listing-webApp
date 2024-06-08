import Checking from "../models/CheckingSchema.js";
import Owner from "../models/OwnerSchema.js";

export const updateOwner = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedOwner = await Owner.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Owner updated successfully",
      data: updatedOwner,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Update" });
  }
};

export const deleteOwner = async (req, res) => {
  const id = req.params.id;

  try {
    await Owner.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Owner deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleOwner = async (req, res) => {
  const id = req.params.id;

  try {
    const owner = await Owner.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Owner found",
      data: owner,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "owner Not found" });
  }
};

export const getAllOwners = async (req, res) => {
  try {
    const { query } = req.query;
    let owners;

    if (query) {
      owners = await Owner.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
          { address: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      owners = await Owner.find({ isApproved: "approved" }).select("-password");
    }

    res.status(200).json({
      success: true,
      message: "users found",
      data: owners,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getPending = async (req, res) => {
  try {
    const { query } = req.query;
    let owners;

    if (query) {
      owners = await Owner.find({
        isApproved: "pending",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
          { address: { $regex: query, $options: "i" } },
        ],
      }).select("-password");


    } else {
      owners = await Owner.find({ isApproved: "pending" }).select("-password");

    }

    res.status(200).json({
      success: true,
      message: "users found",
      data: owners,
    });
  } catch (err) {
    console.error("Error fetching owners:", err);

    res.status(404).json({ success: false, message: "Not found" });
  }
};



export const getOwnerProfile = async (req, res) => {
  const ownerId = req.userId;

  try {
    const owner = await Owner.findById(ownerId);

    if (!owner) {
      return res
        .status(404)
        .json({ success: false, message: "Owner not found" });
    }

    const { password, ...reset } = owner._doc;
    const checkings = await Checking.find({ owner: ownerId });

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...reset, checkings },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get" });
  }
};
