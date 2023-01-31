import User from '../models/user.js';
import jwt from "jsonwebtoken";
import { MailToken }  from '../models/token.js';
import {comparePass} from '../security/auth.js';
import crypto from 'crypto';
import dotenv from 'dotenv';
import sgMail from "@sendgrid/mail";

dotenv.config();


// Register Controller
export const Register = async (req, res, next) => {
 

//destructure the request body
 const { username, email, password, confirm} = req.body;
console.log(req.body);
console.log(req.file);

if ( !username || !email || !password || !confirm) {
  return next(
    createError(
      400,
      `Please fillout the required (*) fields for sign-up!`)
    )
    }

   //create the user
   const newUser = await User.create({
    username,
    email,
    password,
    // userPic: "/uploads/images/" + req.file.filename,
  });

  let token;
  if (newUser) {
    token = jwt.sign({ userid: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //remove password from result set (to avoid send it to frontend)
    newUser.password = undefined;
  }

//create random token for email verification
    //insert random token to db
    const verification_token = await MailToken.create({
        uid: newUser._id,
        token: crypto.randomBytes(32).toString("hex"),
      });

       //verify link that will send to new user's email address. e.g.    http://localhost:5000/api/verify/userid/verificationtoken
    const verifyLink = `${process.env.BASE_URL}/api/verify/${newUser._id}/${verification_token.token}`;

    console.log(verifyLink);

    send_verify_email(
      "devbook@gmx.net",
      newUser.email,
      "Welcome to our App!",
      newUser._id,
      newUser.username
    );

    console.log("test")
    //send response
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: false,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      })
      .send({ message: "create new user", data: newUser });
  } 
  


