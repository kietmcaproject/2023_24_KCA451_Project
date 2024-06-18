import express from 'express'
import { Getuser, deletUser, savedata, Getdata } from '../controllers/Admin.js'
import { isAdmin } from '../middleware/verifyToken.js'



const AdminRoutes=express.Router()
 AdminRoutes.get('/getuser',isAdmin,Getuser)
 AdminRoutes.delete('/delet/:id',isAdmin,deletUser)
 AdminRoutes.post('/savedata',isAdmin,savedata)
 AdminRoutes.get('/getdata',isAdmin,Getdata)


export default AdminRoutes