import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    blog:{type:mongoose.Schema.Types.ObjectId, ref:'blogs',required:true},
    name:{type:String,required:true},
    content:{type:String,required:true},
    isApproved:{type:Boolean,default:false}
},{timestamps:true})

const Comment = mongoose.model('comment',commentSchema)

export default Comment