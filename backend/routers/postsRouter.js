import express from "express";
import upload from "../config/multer.js";
import { createPost } from "../controllers/postsController.js";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/postsController.js";

const router = express.Router();

//route with file

app.post("/posts", upload.single("picture"), createPost);

// Read

router.get("/", getFeedPosts);
router.get("/:userId/posts", getUserPosts);

//update
router.patch("/:id/like", likePost);

export default router;
