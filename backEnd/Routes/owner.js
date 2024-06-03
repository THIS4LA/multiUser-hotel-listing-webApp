import express from "express";

import {
    updateOwner,
    deleteOwner,
    getAllOwners,
    getSingleOwner,
} from "../Controllers/ownerController.js";

const router = express.Router();

router.get("/:id", getSingleOwner);
router.get("/", getAllOwners);
router.put("/:id", updateOwner);
router.delete("/:id", deleteOwner);

export default router;