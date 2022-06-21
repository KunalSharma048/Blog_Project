const mongoose=require('mongoose')
//DEFINE SCHEMA
const BlogimageSchema= new mongoose.Schema({
   title:{ type:String ,Required: true,trim:true},
   description:{ type:String ,Required: true,trim:true},
   image:{type:String},
   
},{timestamps:true})
//CREATE MODEL
const BlogimageModel=mongoose.model('blogimage',BlogimageSchema);
//EXPORT
module.exports=BlogimageModel