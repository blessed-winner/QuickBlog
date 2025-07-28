import imageKit from "../Configs/imageKit.js"
import fs from 'fs'
import Blog from "../models/Blog.js"
import Comment from "../models/Comment.js"
import axios from 'axios'


export const addBlog = async(req,res)=>{
    try{
           const{title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog)
    
           const imageFile = req.file

           if(!title || !description || !category || !imageFile){
            return res.json({success:false,message:"Missing required fields"})
           }

           const fileBuffer = fs.readFileSync(imageFile.path)
           
           const response = await imageKit.upload({
                    file:fileBuffer,
                    fileName:imageFile.originalname,
                    folder:"/blogs"
           })

           const optimizedImageUrl = imageKit.url({
              path:response.filePath,
              transformation:[
                {quality:'auto'},
                {format:'webp'},
                {width:'1280'}
              ]
           })

           const image = optimizedImageUrl;
            await Blog.create({title,subTitle,description,category,image,isPublished})
            
            return res.json({success:true,message:"Blog created successfully !!"})
    }
    catch(err){
          return res.json({success:false,message:err.message})
    }

} 

export const getAllBlogs = async(req,res) => {
    try{
         const blogs = await Blog.find({isPublished:true})
         return res.json({success:true,blogs})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }
}


export const getBlogById = async(req,res) => {
   try{
    const {blogId} = req.params
    const blog = await Blog.findById(blogId)
    if(!blog){
        return res.json({success:false,message:"Blog Not Found"})
    }
    return res.json({success:true,blog})
   }
   catch(err){
     return res.json({success:false,message:err.message})
   }
}

export const deleteBlogById = async(req,res) => {
 try{
    const {id} = req.body
    const blog = await Blog.findByIdAndDelete(id)
    if(!blog){
        return res.json({success:false,message:"Blog Not Found"})
    }

    await Comment.deleteMany({blog:id})
    
    return res.json({success:true,message:"Blog deleted successfully"})
   }
   catch(err){
     return res.json({success:false,message:err.message})
   }
}

export const togglePublish = async(req,res) => {
 try{
    const {id} = req.body
    const blog = await Blog.findById(id)
    if(!blog){
        return res.json({success:false,message:"Blog Not Found"})
    }
    blog.isPublished = !blog.isPublished
    await blog.save()
    return res.json({success:true,message:"Blog status updated"})
   }
   catch(err){
     return res.json({success:false,message:err.message})
   }
}

export const addComment = async(req,res) => {
    try{
       const{blog,name,content} = req.body
       await Comment.create({blog,name,content})
       return res.json({success:true,message:"Comment added for review"})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }
 
}

export const getBlogComments = async(req,res) => {
    try{
        const { blogId } = req.body
        const comments = await Comment.find({blog:blogId,isApproved:true}).sort({createdAt: -1})
        return res.json({success:true,comments})
    }
    catch(err){
        return res.json({success:false,message:err.message})
    }
}

export const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, message: "Prompt is required" });
    }

    const cohereResponse = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command", // You can also use "command-light" if you're on a free/cheaper plan
        prompt: `${prompt} Generate a blog content for this topic in simple text format.`,
        max_tokens: 300,
        temperature: 0.7,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = cohereResponse.data.generations[0]?.text?.trim() || "";

    return res.json({ success: true, content });
  } catch (err) {
    console.error("Cohere error:", err.response?.data || err.message);
    return res.status(500).json({ success: false, message: "Failed to generate content." });
  }
};

