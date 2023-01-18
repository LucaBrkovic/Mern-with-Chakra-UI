import dotenv from "dotenv"
import connectToDatabase from "./database.js"
import express from "express"
const app = express()

dotenv.config()
connectToDatabase()

app.use(express.json())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server runs on the port ${port}`)
})

