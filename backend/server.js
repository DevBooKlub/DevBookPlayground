import express from 'express'
import { connectToDB } from './config/db_config.js'
import configureJwtStrategy from './security/passport-jwt.js'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routers/authRouter.js'
import userRouter from './routers/userRouter.js'
import postRoutes from './routers/postsRouter.js'
import morgan from 'morgan'

const app = express()
dotenv.config()
const config = {
  origin: 'http://localhost:8080',
  credentials: true,
}
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(cors(config))
app.use(morgan('dev'))

//! use passport and initialize
app.use(passport.initialize())

configureJwtStrategy(passport)

/** DB CONNECTION */
connectToDB()

//Routers
//serve the frontend pix from uploads
app.use('/uploads', express.static('uploads'))

app.use('/api', authRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postRoutes)

/** SET PORT NUMBER */
const port = process.env.PORT || 5555
app.listen(port, console.log(`Server is up on port ${port} 👻`))
