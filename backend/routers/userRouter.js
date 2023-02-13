import express from "express";
import upload from "../config/multer.js";
import {
  addRemoveFriend,
  editProfile,
  getUser,
  getAllUsers,
  getUserFriends,
} from "../controllers/userController.js";
import passport from "passport";

const router = express.Router();

//read

router.use(passport.authenticate("jwt",{session:false}));
router.get("/", getAllUsers);

router.get("/:id", getUser);

router.get("/:id/friends", getUserFriends);

//Update

router.patch("/:id/:friendId", addRemoveFriend);

/** complete / edit user profile */
router.patch(
  "/:id",
  upload.single("userBanner"),
  editProfile
);
// router.patch("/:id", passport.authenticate("jwt",{session:false}), upload.single("userPic"), editProfilePic)

export default router;

/*
/users/    - GET - Get All Users
/users/    - POST - Create a User
/users/:id - GET - Get One User
/users/:id - PATCH - Update one User
/users/:id - DELETE - Deactivate User
*/