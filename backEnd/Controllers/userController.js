import User from "../models/UserSchema.js";

// Update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// get single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No User Found" });
  }
};

//get all users
export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}).select("-password");
  
      if (users.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No users found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Users found",
        data: users,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
