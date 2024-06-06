import Owner from '../models/OwnerSchema.js'; 
import User from '../models/UserSchema.js';
import Admin from '../models/AdminSchema.js';

// Controller functions for Owners
export const getSingleOwner = async (req, res) => {
    const { id } = req.params;
    try {
        const owner = await Owner.findById(id);
        if (!owner) {
            return res.status(404).json({ message: "Owner not found" });
        }
        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllOwners = async (req, res) => {
    try {
        const owners = await Owner.find();
        res.status(200).json(owners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOwner = async (req, res) => {
    const { id } = req.params;
    try {
        const owner = await Owner.findByIdAndDelete(id);
        if (!owner) {
            return res.status(404).json({ message: "Owner not found" });
        }
        res.status(200).json({ message: "Owner deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOwner = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const owner = await Owner.findByIdAndUpdate(id, updateData, { new: true });
        if (!owner) {
            return res.status(404).json({ message: "Owner not found" });
        }
        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller functions for Users
export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAdminProfile = async (req, res) => {
    const adminId = req.userId;  // Correctly get the admin ID from req.userId
  
    try {
      const admin = await Admin.findById(adminId);  // Fetch the admin profile from the database
  
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' });
      }
  
      const { password, ...rest } = admin._doc;  // Destructure to exclude the password
  
      res.status(200).json({ success: true, message: 'Profile info retrieved successfully', data: { ...rest } });
    } catch (err) {
      res.status(500).json({ success: false, message: "Something went wrong, cannot retrieve profile info" });
    }
  };
  
