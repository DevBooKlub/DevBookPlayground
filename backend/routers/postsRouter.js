import express from "express";
import upload from "../config/multer.js";
import passport from 'passport';
import { createPost } from "../controllers/postsController.js";
import {
  getFeedPosts,
  getUserPosts,
  getPostsByUser,
} from "../controllers/postsController.js";



const router = express.Router();

//route with file


router.use(passport.authenticate("jwt", {session: false})),

router.post("/create",upload.single("picturePath"), createPost);

// Read

router.get("/", getFeedPosts);
router.get ("/userId", getPostsByUser)
router.get("/:id", getUserPosts);


// //update
// router.patch("/:id/likes", likePost);

export default router;
