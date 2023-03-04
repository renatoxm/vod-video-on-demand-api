import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import userRoute from './routes/user.route'
import authRoute from './routes/auth.route'
import videoRoute from './routes/video.route'
import deserializeUser from './middleware/deserializeUser'
import config from './config'

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(
  cors({
    origin: config.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(helmet())
app.use(deserializeUser)

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/videos', videoRoute)

export default app
