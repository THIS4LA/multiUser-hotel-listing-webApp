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
