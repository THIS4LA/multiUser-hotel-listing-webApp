import express from "express";
import {
    updateUser,
    deleteUser,
    getAllUsers,
    getSingleUser,
    getUserProfile,
    getMyCheckings,
} from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["guest"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers);
router.put("/:id", authenticate, restrict(["guest"]), updateUser);
router.delete("/:id", authenticate, restrict(["guest", "admin"]), deleteUser);
router.get("/profile/me", authenticate, restrict(["guest"]), getUserProfile);
router.get("/checkings/my-checkings", authenticate, restrict(["guest", "owner"]), getMyCheckings);

export default router;