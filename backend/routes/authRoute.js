import express from "express";
import { register, login, getProfile } from "../controller/auth.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuthenticated, getProfile);

export default router;
