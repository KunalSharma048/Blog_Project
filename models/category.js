const mongoose=require('mongoose')
//DEFINE SCHEMA
const categorySchema= new mongoose.Schema({
   title:{ type:String ,Required: true,trim:true},

   image:{type:String},
   
},{timestamps:true})
//CREATE MODEL
const categoryModel=mongoose.model('category',categorySchema);
//EXPORT
module.exports=categoryModel