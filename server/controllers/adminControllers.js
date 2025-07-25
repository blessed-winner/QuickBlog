import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js'
import Comment from '../models/Comment.js'

export const adminLogin = async(req,res) => {

    try{
         const{ email,password } = req.body
     if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.json({ success:false,message:'Invalid admin credentials' })
     }

     const token = await jwt.sign({email},process.env.JWT_SECRET)
     return res.json({success:true,token})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }

}

export const getAllBlogsAdmin = async(req,res) => {
    try{
      const blogs = await Blog.find({}).sort({createdAt: -1})
      return res.json({success:true,blogs})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }
    
}

export const getComments = async(req,res) => {
    try{
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
        return res.json({success:true,comments})
    }
      catch(err){
        return res.json({success:false,message:err.message})
    }
}

export const getDashboard = async(req,res) => {
    try{
        const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5)
        const blogs = await Blog.countDocuments()
        const comments = await Comment.countDocuments()
        const drafts = await Blog.countDocuments({isPublished:false})

        const dashboardData = {
            blogs,comments,drafts,recentBlogs
        }

        return res.json({success:true,dashboardData})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }
}

export const deleteCommentById = async(req,res) => {
    try {
         const {id} = req.body
         await Comment.findByIdAndDelete(id)
         return res.json({success:true,message:"Comment deleted successfully"})
    } catch (error) {
          return res.json({success:false,message:error.message})
    }
   
}

export const updateCommentById = async(req,res) => {
    try{
        const {id} = req.body
        await Comment.findByIdAndUpdate(id)
        return res.json({success:true,message:"Comment updated successfully"})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }
}

