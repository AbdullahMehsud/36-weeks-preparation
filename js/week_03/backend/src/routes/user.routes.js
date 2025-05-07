import { Router } from 'express'
import { loginUser, logoutUser, registerUser } from '../controller/user.controller.js'

const router = Router()

router.route('/registerUser').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

export default router
