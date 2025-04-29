import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
        origin: process.env.CORS_ORIGN,
        credentials: true
    }))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())


import healthcheckRouter from './routes/healthcheck.routes.js'
import userRouter from './routes/user.routes.js'

app.use('/v1/api/healthCheck', healthcheckRouter)
app.use('/v1/api/user', userRouter)

export default app
