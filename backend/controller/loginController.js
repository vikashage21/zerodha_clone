import { user } from "../model/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv"
configDotenv({
    path: '../.env'
})

export const loginController = async (req, res) => {

    const { email, password } = req.body;

    if (!email && !password) {
        res.status(400).json({
            message: "please fill all required field"
        })
    }
    // check the email is already there or not 

    const userEmail = await user.findOne({
        email
    })

    // if email is not there we will send the response
    if (!userEmail) {
        res.status(404).json({
            message: "Email not found"
        })
    }

    if (userEmail && password) {
        const response = await bcrypt.compare(password, userEmail.password)
        if (!response) {
            res.status(400).json({
                message: "password is incorrect"
            })
        }


        if (response) {
            // create jwt token here

            const token = jwt.sign({
                userId: user._id,
                userEmailId: user.email
            }, process.env.SECRET_TOKEN, {
                expiresIn: '24h'
            })
            // after successfully login send the token to client
            res.status(200).json({
                message: "login successful",
                token
            })

        }


    }
}