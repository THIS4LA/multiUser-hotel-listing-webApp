import express from "express";
import {
    updateUser,
    deleteUser,
    getAllUsers,
    getSingleUser,
} from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", restrict(["guest"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers);
router.put("/:id", authenticate, restrict(["guest"]), updateUser);
router.delete("/:id", authenticate, restrict(["guest", "admin"]), deleteUser);

export default router;