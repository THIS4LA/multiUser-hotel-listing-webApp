import express from 'express';

import { authenticate, restrict } from "../auth/verifyToken.js";
import { getAllContacts, createContact } from '../Controllers/contactController.js';

const router = express.Router();


router.get('/', authenticate, restrict(["admin"]), getAllContacts);
router.post('/', authenticate, restrict(["guest", "owner"]), createContact);

export default router;
