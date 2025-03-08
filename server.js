import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/user.route'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api',userRouter)
const PORT = process.env.PORT || 5002
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})