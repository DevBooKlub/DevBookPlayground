import mongoose, { SchemaType } from 'mongoose'
import { hashedPassword } from '../security/auth.js'
import {Schema} from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      // required: [true, 'please provide a valid username'],
      unique: [true, 'please provide a unique username'],
    },
    email: {
      type: String,
      // required: [true, 'please provide a valid email address'],
      unique: [true, 'please provide a unique email address'],
      minlength: [5, 'The password should contain 5 characters at least'],
    },
    password: {
      type: String,
      // required: [true, 'please provide a valid password'],
      unique: [true, 'please provide a unique password'],
    },
    confirm: {
      type: String,
      validate: {
        validator: function (confirm) {
          return confirm === this.password
        },
        message: 'Passwords dont match!',
      },
    },
    userPic: String,

    userBanner: {
      type: String,
      default: '',
    },
    nickname: {
      type: String,
      default: '',
    },

    quote: {
      type: String,
      default: '',
    },

    friends:[ 
      {type: Schema.Types.ObjectId, ref:"User"}
      // type: Array,
      // default: [],
  ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

//Hash and Salt the password

// if we want to hash the password in the schema , the if condition will allow later change / modify password feature
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await hashedPassword(this.password)
  next()
})

UserSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'userId',
})

const User = mongoose.model('User', UserSchema)

export default User
