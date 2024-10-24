import express from "express";
import {
    getSingleOwner,
    getAllOwners,
    deleteOwner,
    updateOwner,
    getSingleUser,
    getAllUsers,
    deleteUser,
    getAdminProfile
} from "../Controllers/adminController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// Routes for Owners
router.get("/owners/:id", authenticate, restrict(["admin"]), getSingleOwner);
router.get("/owners", authenticate, restrict(["admin"]), getAllOwners);
router.delete("/owners/:id", authenticate, restrict(["admin"]), deleteOwner);
router.put("/owners/:id", authenticate, restrict(["admin"]), updateOwner);

// Routes for Users
router.get("/users/:id", authenticate, restrict(["admin"]), getSingleUser);
router.get("/users", authenticate, restrict(["admin"]), getAllUsers);
router.delete("/users/:id", authenticate, restrict(["admin"]), deleteUser);

// Route for Admin Profile
router.get("/profile/me", authenticate, restrict(["admin"]), getAdminProfile);

export default router;
