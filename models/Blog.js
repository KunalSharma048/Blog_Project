const mongoose=require('mongoose')
//DEFINE SCHEMA
const BlogSchema= new mongoose.Schema({
   title:{ type:String ,Required: true,trim:true},
   description:{ type:String ,Required: true,trim:true},
   image:{type:String},
   
},{timestamps:true})
//CREATE MODEL
const BlogModel=mongoose.model('blog',BlogSchema);
//EXPORT
module.exports=BlogModel