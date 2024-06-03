import express from "express";

import {
    updateOwner,
    deleteOwner,
    getAllOwners,
    getSingleOwner,
} from "../Controllers/ownerController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", getSingleOwner);
router.get("/", getAllOwners);
router.put("/:id", authenticate, restrict(["owner"]), updateOwner);
router.delete("/:id", authenticate, restrict(["owner", "admin"]), deleteOwner);

export default router;