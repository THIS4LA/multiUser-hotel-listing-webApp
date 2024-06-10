import express from "express";
import {
    getAllCheckings,
    createChecking,
} from "../Controllers/reviewController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

router
    .route("/")
    .get(getAllCheckngs) 
    .post(authenticate, restrict(["guest"]), createCheckng);

export default router;