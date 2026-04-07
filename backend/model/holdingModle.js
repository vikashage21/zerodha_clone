import { model, Model } from "mongoose";
import { holdingsSchema } from "../schema/holdingsSchema.js";

export const holdingModel = new model('holding', holdingsSchema)