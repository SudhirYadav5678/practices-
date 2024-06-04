import express from "express"
import cors from "cors"
import cookiepareser from "cookie-parser"
const app = express()


app.use(cors({CORS_ORIGIN:process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.urlencoded({limit:"100mb",extended:true}))
app.use(express.json({limit:"100mb"}))
app.use(express.static("public"))
app.use(cookiepareser())

//router import
import userRouter from './router/userRouter.js'

//routes
app.use("/api/v1/users", userRouter)

export {app}