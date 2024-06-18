import express from 'express'
import { CheckUser, Login, Logout, register, savedata, showresult, CheckData } from '../controllers/Auth.js'
import {IsUser} from '../middleware/verifyToken.js'
const AuthRoutes=express.Router()

AuthRoutes.post('/register',register)
AuthRoutes.post('/login',Login)
AuthRoutes.post('/logout',Logout)
AuthRoutes.get('/CheckUser',IsUser,CheckUser)
AuthRoutes.post('/savedata',savedata)
AuthRoutes.post('/showresult',showresult)
AuthRoutes.get('/CheckData',CheckData)

export default AuthRoutes