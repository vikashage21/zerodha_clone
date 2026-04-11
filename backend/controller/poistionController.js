import { poistionModel } from "../model/poistionModle.js"

export const poistionController = async (req, res) => {
    try {
        const poistion = await poistionModel.find({});
        res.status(200).send(poistion)

    } catch (error) {
        console.log(error)
    }
}