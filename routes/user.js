import express  from "express";
import { User } from "../models/user.js";
import { login, logout, register, userProfile } from "../controllers/user.js";
import { authenticate } from "../midlewares/auth.js";
const router = express.Router();

router.post('/new', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile',authenticate, userProfile);

export default router;