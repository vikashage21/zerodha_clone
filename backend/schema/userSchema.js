import { Schema } from "mongoose";

export const userSchema = Schema({
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: [true, 'Email exist']
    },
    password: {
        type: String,
        required: [true, 'please enter your email'],

    }
})

