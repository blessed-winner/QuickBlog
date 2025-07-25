import express from 'express'
import { adminLogin, deleteCommentById, getAllBlogsAdmin, getComments, updateCommentById } from '../controllers/adminControllers.js'
import auth from '../middleware/auth.js'

const adminRouter = express.Router()

adminRouter.post('/login',adminLogin)
adminRouter.get('/blogs',auth,getAllBlogsAdmin)
adminRouter.get('/comments',auth,getComments)
adminRouter.post('/delete-comment',auth,deleteCommentById)
adminRouter.post('/update-comment',auth,updateCommentById)

export default adminRouter;