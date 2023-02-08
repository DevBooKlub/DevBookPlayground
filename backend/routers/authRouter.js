import express from "express";
import upload from "../config/multer.js";
import { Register, Login, verification} from "../controllers/authController.js";
const router = express.Router();

/** register */
router.post("/register", upload.single("userPic"), Register);

  /** login */
  router.post("/login", Login );

/** verify account */
router.route('/verify/email/:userid/:verifytoken')
    .get(verification);



export default router;