import express from "express";
import upload from "../config/multer.js";
import {
  addRemoveFriend,
  editProfile,
  getUser,
  getUserFriends,
} from "../controllers/userController.js";
import passport from "passport";

const router = express.Router();

//read
router.get("/:id", getUser);

router.get("/:id/friends", getUserFriends);

//Update

router.patch("/:id/:friendId", addRemoveFriend);

/** complete / edit user profile */
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("userBanner"),
  editProfile
);
// router.patch("/:id", passport.authenticate("jwt",{session:false}), upload.single("userPic"), editProfilePic)

export default router;
