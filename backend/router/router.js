import express from 'express'
import { holdingController } from '../controller/holdingController.js'
import { poistionController } from '../controller/poistionController.js'
import { registrationController } from '../controller/registationController.js'
import { loginController } from '../controller/loginController.js'
import { auth } from '../middlewares/auth.js'

export const Router = express.Router()


Router.route('/allholding').get(auth, holdingController)
Router.route('/allposition').get(auth ,poistionController)
Router.route('/register').post(registrationController)
Router.route('/login').post(loginController)