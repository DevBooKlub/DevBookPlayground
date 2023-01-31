import express from "express";
import upload from "../config/multer.js";
import { Register } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", upload.single("userPic"), Register);

export default router;