import express from "express";
import { configDotenv } from 'dotenv'
import { dbConnect } from "../db/dbConnect.js";
configDotenv()

const PORT = process.env.PORT || 3002;

const app = express()


dbConnect(
    app.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`server is listing on port ${PORT}`)
    })

)