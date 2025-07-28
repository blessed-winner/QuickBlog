import express from 'express'
import { adminLogin, approveComment, deleteCommentById, getAllBlogsAdmin, getComments, getDashboard, updateCommentById } from '../controllers/adminControllers.js'
import auth from '../middleware/auth.js'

const adminRouter = express.Router()

adminRouter.post('/login',adminLogin)
adminRouter.get('/blogs',auth,getAllBlogsAdmin)
adminRouter.get('/comments',auth,getComments)
adminRouter.post('/delete-comment',auth,deleteCommentById)
adminRouter.post('/update-comment',auth,updateCommentById)
adminRouter.get('/dashboard',auth,getDashboard)
adminRouter.post('/approve-comment',auth,approveComment)

export default adminRouter;