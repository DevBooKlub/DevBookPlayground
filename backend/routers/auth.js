import express from "express";
import upload from "../config/multer.js";
import { Register, verification } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", upload.single("userPic"), Register);

/** verify account */
router.route('/verify/email/:userid/:verifytoken')
    .get(verification);



export default router;