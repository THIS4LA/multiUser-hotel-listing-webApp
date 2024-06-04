import User from "../models/UserSchema.js";
import Checking from "../models/CheckingSchema.js";
import Owner from "../models/OwnerSchema.js"

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

  export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try {

        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false,message:'User not found'})
        }

        const {password, ...reset} =user._doc

        res.status(200).json({success:true, message:'Profile info is getting', data:{...reset}})

    } catch (err) {
        res.status(500).json({ success:false, message: "Something went wrong, cannot get"});
    }
};

export const getMyCheckings = async(req,res)=>{

    try {
        //step 1 retrieve checkings from checking for specific user
    const checkings = await Checking.find({ user: req.userId });

    //step 2 extract owner ids from checkings
    const ownerIds = checkings.map(el => el.owner.id);

    //step 3 retrieve owners using owner ids
    const owners = await Owner.find({_id: {$in:ownerIds}}).select('-password')

    res.status(200).json({success:true, message:'Checkings are getting', data:owners})

    } catch (error) {
        res.status(500).json({ success:false, message: "Something went wrong, cannot get"});
    }
}
