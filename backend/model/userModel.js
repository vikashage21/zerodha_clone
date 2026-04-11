import { model, Model } from "mongoose";
import { userSchema } from "../schema/userSchema.js";

export const user = new model('users', userSchema)