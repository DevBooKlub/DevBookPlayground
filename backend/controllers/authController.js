import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { MailToken } from '../models/token.js'
import { comparePass } from '../security/auth.js'
import createError from 'http-errors'

import dotenv from 'dotenv'
import { send_verify_email } from '../security/mail-verification.js'

dotenv.config()

// Register Controller
export const Register = async (req, res, next) => {
  //destructure the request body
  const { username, email, password, confirm } = req.body
  console.log(req.body)
  // console.log(req.file);

  if (!username || !email || !password || !confirm) {
    return next(
      createError(400, `Please fillout the required (*) fields for sign-up!`)
    )
  }

  //create the user
  const newUser = await User.create({
    username,
    email,
    password,
    userPic: '/uploads/images/' + req.file.filename,
  })

  let token
  if (newUser) {
    token = jwt.sign({ userid: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })

    //remove password from result set (to avoid send it to frontend)
    newUser.password = undefined
  }

  send_verify_email(
    'denis.mcardle@dci.education',
    newUser.email,
    'Welcome to our App!',
    newUser._id,
    newUser.username
  )

  console.log('test')
  //send response
  res
    .cookie('access_token', token, {
      httpOnly: true,
      sameSite: false,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    })
    .send({ message: 'create new user', data: newUser })
  console.log('test2')
}

/* ---------------------------------------------------------------- */
/*                        EMAIL VERIFICATION                        */
/* ---------------------------------------------------------------- */
export const verification = async (req, res, next) => {
  try {
    const { userid, verifytoken } = req.params

    //check the userid
    const user = await User.findById(userid)
    console.log('user is found', user)
    if (!user)
      return next(createError(400, 'Invalid Link because of wrong userid.'))

    const tokenInDB = await MailToken.findOne({
      uid: userid,
      token: verifytoken,
    })
    console.log('token', tokenInDB)
    if (!tokenInDB)
      return next(
        createError(
          400,
          'Invalid Link because of wrong userid and verify token'
        )
      )

    await User.findByIdAndUpdate(userid, { isVerified: true })
    await MailToken.findByIdAndDelete(tokenInDB._id)

    res.send('You verified successfully!')
  } catch (error) {
    next(error)
  }
}

// Login Controller

/* -------------------------------------------- */
/*                    SIGN-IN                   */
/* -------------------------------------------- */
export const Login = async (req, res, next) => {
  try {
    //destructure the body
    const { email, password } = req.body

    //if email or password not exist
    if (!email || !password) {
      return next(
        createError(400, 'Please provide email and password for login')
      )
    }

    //1. find a user with given email
    const user = await User.findOne({ email }).select('+password')

    //2. compare given password with hashed value
    if (user && (await comparePass(password, user.password))) {
      // if (user && (await comparePass(password, user.password))) {
      //create the token
      const token = jwt.sign(
        { userid: user._id }, //payload
        process.env.JWT_SECRET, //secret key
        { expiresIn: '30d' } //expiration
      )

      user.password = undefined //remove password (shouldn't send password to frontend)

      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
          expires: new Date(Date.now() + 3600_000 * 24 * 30),
        })
        .send({
          status: 'success',
          user,
        })
    } else {
      res.status(401).json({
        status: 'fail',
        message: 'Email or password is not valid.',
      })
    }
  } catch (error) {
    next(error)
  }
}

export const logout = (req, res, next) => {
  res.status(204).clearCookie('access_token', { httpOnly: true }).json({
    status: 'success',
    data: null,
  })
}
