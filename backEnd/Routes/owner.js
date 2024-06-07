import express from "express";

import {
    updateOwner,
    deleteOwner,
    getAllOwners,
    getPendingOwners,
    getSingleOwner,
    getOwnerProfile,
} from "../Controllers/ownerController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:ownerId/reviews", reviewRouter);
router.get("/:id", getSingleOwner);
router.get("/", getAllOwners);
router.get("/pending", getPendingOwners);
router.put("/:id", authenticate, restrict(["owner","admin"]), updateOwner);
router.delete("/:id", authenticate, restrict(["owner", "admin"]), deleteOwner);
router.get("/profile/me", authenticate, restrict(["owner"]), getOwnerProfile);

export default router;