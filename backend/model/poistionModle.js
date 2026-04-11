import { model, Model } from "mongoose";
import { poistionSchema } from "../schema/positionSchema.js";

export const poistionModel = new model('position' , poistionSchema)