
import bcrypt from 'bcrypt';
import { user } from '../model/userModel.js';

export const registrationController = async (req, res) => {

    try {

        // we will get email and password form user
        const { email, password } = req.body;
        // validate the email and password should be entered

        if (!email && !password) {
            res.status(404).json({
                message: "please fill the required field"
            })
        }

        // check the email is already there or not 

        const userEmail = await user.findOne({ email })

        if (userEmail) {
            res.json({
                message: "email is already register"
            })
        } else {


            // we have hash the password;

            const hashedPassword = await bcrypt.hash(password, 10)

            // we have create a new user form user model 


            const users = await user({
                email,
                password: hashedPassword
            })
            // we will save the data

            users.save()

            // we send the response the client

            res.status(201).json({
                message: "new user created"
            })
        }



    } catch (error) {

        res.status(500).json({
            message: "server error", error
        })

    }
}