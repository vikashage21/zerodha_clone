import express from "express";
import { configDotenv } from 'dotenv'
import { dbConnect } from "../db/dbConnect.js";
import { Router } from "../router/router.js";
import cors from 'cors'
configDotenv()

const PORT = process.env.PORT || 3002;

const app = express()

app.use(cors())
// middlewares
app.use(express.json())
app.use(Router)


dbConnect(
    app.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`server is listing on port ${PORT}`)
    })

)