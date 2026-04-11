import { holdingModel } from "../model/holdingModle.js"


export const holdingController = async (req, res) => {

    try {

        const holding = await holdingModel.find({})
        res.status(200).json(holding)
    } catch (error) {

        console.log(error)
    }

}