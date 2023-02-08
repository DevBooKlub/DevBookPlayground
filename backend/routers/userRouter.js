import express from "express";
import upload from "../config/multer.js";
import { editProfile, getUser } from "../controllers/userController.js";
import  passport  from "passport";

const router = express.Router();

router.get("/:id", getUser);


/** complete / edit user profile */    
router.patch("/:id", passport.authenticate("jwt",{session:false}), upload.single("userBanner"), editProfile)

export default router;