import express from 'express'
import {addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish} from '../controllers/blogController.js'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'

const blogRouter = express.Router()

blogRouter.post('/add',auth,upload.single('image'),addBlog)
blogRouter.get('/All',getAllBlogs)
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,deleteBlogById)
blogRouter.post('/toggle-publish',auth,togglePublish)
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComments)

export default blogRouter